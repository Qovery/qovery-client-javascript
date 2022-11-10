# QoveryApi.JobActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployJob**](JobActionsApi.md#deployJob) | **POST** /job/{jobId}/deploy | Deploy job
[**restartJob**](JobActionsApi.md#restartJob) | **POST** /job/{jobId}/restart | Restart job
[**stopJob**](JobActionsApi.md#stopJob) | **POST** /job/{jobId}/stop | Stop job



## deployJob

> Status deployJob(opts)

Deploy job

You must provide a git commit id

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
let opts = {
  'force': false, // Boolean | Enable or Disable the force trigger of the job
  'jobDeployRequest': new QoveryApi.JobDeployRequest() // JobDeployRequest | 
};
apiInstance.deployJob(opts, (error, data, response) => {
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
 **force** | **Boolean**| Enable or Disable the force trigger of the job | [optional] [default to false]
 **jobDeployRequest** | [**JobDeployRequest**](JobDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restartJob

> Status restartJob(opts)

Restart job

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
let opts = {
  'force': false // Boolean | Enable or Disable the force trigger of the job
};
apiInstance.restartJob(opts, (error, data, response) => {
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
 **force** | **Boolean**| Enable or Disable the force trigger of the job | [optional] [default to false]

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopJob

> Status stopJob()

Stop job

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobActionsApi();
apiInstance.stopJob((error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

