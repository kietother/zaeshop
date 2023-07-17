using Common.Enums;
using Common.Interfaces;
using RestSharp;

namespace Common.Implements;
public class ApiService : IApiService
{
    private readonly IDictionary<EServiceHost, string> _baseUrls;
    private readonly IDictionary<EServiceHost, RestClient> _restClients;

    public ApiService()
    {
        _baseUrls = new Dictionary<EServiceHost, string>
        {
            { EServiceHost.Identity, "http://host.docker.internal:5287" },
            { EServiceHost.Portal, "http://host.docker.internal:5288" }
        };

        _restClients = new Dictionary<EServiceHost, RestClient>();
    }

    public async Task<TResponse?> GetAsync<TResponse>(EServiceHost serviceHost, string endpoint, IDictionary<string, string>? queryParameters = null, IDictionary<string, string>? headers = null)
    {
        var client = GetRestClient(serviceHost);
        var request = new RestRequest(endpoint, Method.Get);
        AddHeaders(request, headers);
        AddQueryParameters(request, queryParameters);

        var response = await client.ExecuteAsync<TResponse>(request);
        if (!response.IsSuccessful)
        {
            return default;
        }
        return response.Data;
    }

    public async Task<TResponse?> PostAsync<TRequest, TResponse>(EServiceHost serviceHost, string endpoint, TRequest requestBody, IDictionary<string, string>? headers = null)
        where TRequest : class
    {
        var client = GetRestClient(serviceHost);
        var request = new RestRequest(endpoint, Method.Post);
        AddHeaders(request, headers);
        request.AddJsonBody(requestBody);

        var response = await client.ExecuteAsync<TResponse>(request);
        if (!response.IsSuccessful)
        {
            return default;
        }
        return response.Data;
    }

    public async Task<TResponse?> PutAsync<TRequest, TResponse>(EServiceHost serviceHost, string endpoint, TRequest requestBody, IDictionary<string, string>? headers = null)
        where TRequest : class
    {
        var client = GetRestClient(serviceHost);
        var request = new RestRequest(endpoint, Method.Put);
        AddHeaders(request, headers);
        request.AddJsonBody(requestBody);

        var response = await client.ExecuteAsync<TResponse>(request);
        if (!response.IsSuccessful)
        {
            return default;
        }
        return response.Data;
    }

    public async Task<TResponse?> DeleteAsync<TResponse>(EServiceHost serviceHost, string endpoint, IDictionary<string, string>? headers = null)
    {
        var client = GetRestClient(serviceHost);
        var request = new RestRequest(endpoint, Method.Delete);
        AddHeaders(request, headers);

        var response = await client.ExecuteAsync<TResponse>(request);
        if (!response.IsSuccessful)
        {
            return default;
        }
        return response.Data;
    }

    private RestClient GetRestClient(EServiceHost serviceHost)
    {
        if (!_restClients.ContainsKey(serviceHost))
        {
            var baseUrl = _baseUrls[serviceHost];
            _restClients[serviceHost] = new RestClient(baseUrl);
        }

        return _restClients[serviceHost];
    }

    private static void AddHeaders(RestRequest request, IDictionary<string, string>? headers)
    {
        if (headers != null)
        {
            foreach (var header in headers)
            {
                request.AddHeader(header.Key, header.Value);
            }
        }
    }

    private static void AddQueryParameters(RestRequest request, IDictionary<string, string>? queryParameters)
    {
        if (queryParameters != null)
        {
            foreach (var queryParam in queryParameters)
            {
                request.AddQueryParameter(queryParam.Key, queryParam.Value);
            }
        }
    }
}