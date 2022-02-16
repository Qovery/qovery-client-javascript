# BetaQoveryApi.EnvironmentLogsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEnvironmentLog**](EnvironmentLogsApi.md#listEnvironmentLog) | **GET** /environment/{environmentId}/log | List environment deployment logs



## listEnvironmentLog

> EnvironmentLogResponseList listEnvironmentLog(environmentId)

List environment deployment logs

This returns the last 1000 environment deployment logs.

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentLogsApi();
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

