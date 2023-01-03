# QoveryApi.JobActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployJob**](JobActionsApi.md#deployJob) | **POST** /job/{jobId}/deploy | Deploy job
[**restartJob**](JobActionsApi.md#restartJob) | **POST** /job/{jobId}/restart | Restart job
[**stopJob**](JobActionsApi.md#stopJob) | **POST** /job/{jobId}/stop | Stop job



## deployJob

> Status deployJob(jobId, opts)

Deploy job

You must provide a git commit id or an image tag depending on the source location of your code (git vs image repository).

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'force': new QoveryApi.JobForceEvent(), // JobForceEvent | When filled, it indicates the target event to be deployed.   If the concerned job hasn't the target event provided, the job won't be deployed. 
  'jobDeployRequest': new QoveryApi.JobDeployRequest() // JobDeployRequest | 
};
apiInstance.deployJob(jobId, opts, (error, data, response) => {
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
 **force** | [**JobForceEvent**](.md)| When filled, it indicates the target event to be deployed.   If the concerned job hasn&#39;t the target event provided, the job won&#39;t be deployed.  | [optional] 
 **jobDeployRequest** | [**JobDeployRequest**](JobDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restartJob

> Status restartJob(jobId, opts)

Restart job

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'force': false // Boolean | Enable or Disable the force trigger of the job
};
apiInstance.restartJob(jobId, opts, (error, data, response) => {
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
 **force** | **Boolean**| Enable or Disable the force trigger of the job | [optional] [default to false]

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopJob

> Status stopJob(jobId)

Stop job

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.stopJob(jobId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

