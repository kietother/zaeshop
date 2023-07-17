using Common.Enums;

namespace Common.Interfaces;
public interface IApiService
{
    Task<TResponse?> GetAsync<TResponse>(EServiceHost serviceHost, string endpoint, IDictionary<string, string>? queryParameters = null, IDictionary<string, string>? headers = null);
    Task<TResponse?> PostAsync<TRequest, TResponse>(EServiceHost serviceHost, string endpoint, TRequest requestBody, IDictionary<string, string>? headers = null) where TRequest : class;
    Task<TResponse?> PutAsync<TRequest, TResponse>(EServiceHost serviceHost, string endpoint, TRequest requestBody, IDictionary<string, string>? headers = null) where TRequest : class;
    Task<TResponse?> DeleteAsync<TResponse>(EServiceHost serviceHost, string endpoint, IDictionary<string, string>? headers = null);
}