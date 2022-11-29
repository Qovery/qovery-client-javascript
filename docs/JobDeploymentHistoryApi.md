# QoveryApi.JobDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listJobDeploymentHistory**](JobDeploymentHistoryApi.md#listJobDeploymentHistory) | **GET** /job/{jobId}/deploymentHistory | List job deployments



## listJobDeploymentHistory

> ListJobDeploymentHistory200Response listJobDeploymentHistory(jobId)

List job deployments

Returns the 20 last job deployments

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobDeploymentHistoryApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.listJobDeploymentHistory(jobId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 

### Return type

[**ListJobDeploymentHistory200Response**](ListJobDeploymentHistory200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

