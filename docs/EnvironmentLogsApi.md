# QoveryApi.EnvironmentLogsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEnvironmentLog**](EnvironmentLogsApi.md#listEnvironmentLog) | **GET** /environment/{environmentId}/log | List environment deployment logs
[**listEnvironmentLogs**](EnvironmentLogsApi.md#listEnvironmentLogs) | **GET** /environment/{environmentId}/logs | List environment deployment logs v2



## listEnvironmentLog

> EnvironmentLogResponseList listEnvironmentLog(environmentId)

List environment deployment logs

This returns the last 1000 environment deployment logs.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentLogsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentLog(environmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | **String**| Environment ID | 

### Return type

[**EnvironmentLogResponseList**](EnvironmentLogResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironmentLogs

> [EnvironmentLogs] listEnvironmentLogs(environmentId, opts)

List environment deployment logs v2

This returns the last 1000 environment deployment logs v2

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentLogsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'version': "version_example" // String | 
};
apiInstance.listEnvironmentLogs(environmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | **String**| Environment ID | 
 **version** | **String**|  | [optional] 

### Return type

[**[EnvironmentLogs]**](EnvironmentLogs.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

