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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironmentLogs

> [ListEnvironmentLogs200ResponseInner] listEnvironmentLogs(environmentId)

List environment deployment logs v2

This returns the last 1000 environment deployment logs v2

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentLogsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentLogs(environmentId, (error, data, response) => {
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

[**[ListEnvironmentLogs200ResponseInner]**](ListEnvironmentLogs200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

