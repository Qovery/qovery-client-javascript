# QoveryApi.JobMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJobCurrentInstance**](JobMetricsApi.md#getJobCurrentInstance) | **GET** /job/{jobId}/instance | List currently running instances of the job with their CPU and RAM metrics



## getJobCurrentInstance

> InstanceResponseList getJobCurrentInstance()

List currently running instances of the job with their CPU and RAM metrics

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMetricsApi();
apiInstance.getJobCurrentInstance((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InstanceResponseList**](InstanceResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

