using HangFireServer.Messaging.Comsumers;
using MassTransit;

namespace HangFireServer.Messaging.Definitions
{
    public class SendEmailComsumerDefinition : ConsumerDefinition<HelloWorldComsumer>
    {
        public SendEmailComsumerDefinition()
        {
            // override the default endpoint name
            EndpointName = "send-mail-comsumer-local";

            // limit the number of messages consumed concurrently
            // this applies to the consumer only, not the endpoint
            ConcurrentMessageLimit = 8;
        }

        protected override void ConfigureConsumer(IReceiveEndpointConfigurator endpointConfigurator, IConsumerConfigurator<HelloWorldComsumer> consumerConfigurator, IRegistrationContext context)
        {
            base.ConfigureConsumer(endpointConfigurator, consumerConfigurator, context);

            // configure message retry with millisecond intervals
            endpointConfigurator.UseMessageRetry(r => r.Intervals(100, 200, 500, 800, 1000));

            // use the outbox to prevent duplicate events from being published
            endpointConfigurator.UseInMemoryOutbox(context);
        }
    }
}
