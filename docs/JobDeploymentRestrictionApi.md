# QoveryApi.JobDeploymentRestrictionApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJobDeploymentRestriction**](JobDeploymentRestrictionApi.md#createJobDeploymentRestriction) | **POST** /job/{jobId}/deploymentRestriction | Create a job deployment restriction
[**deleteJobDeploymentRestriction**](JobDeploymentRestrictionApi.md#deleteJobDeploymentRestriction) | **DELETE** /job/{jobId}/deploymentRestriction/{deploymentRestrictionId} | Delete a job deployment restriction
[**editJobDeploymentRestriction**](JobDeploymentRestrictionApi.md#editJobDeploymentRestriction) | **PUT** /job/{jobId}/deploymentRestriction/{deploymentRestrictionId} | Edit a job deployment restriction
[**getJobDeploymentRestrictions**](JobDeploymentRestrictionApi.md#getJobDeploymentRestrictions) | **GET** /job/{jobId}/deploymentRestriction | Get job deployment restrictions



## createJobDeploymentRestriction

> JobDeploymentRestrictionResponse createJobDeploymentRestriction(jobId, opts)

Create a job deployment restriction

Create a job deployment restriction

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

let apiInstance = new QoveryApi.JobDeploymentRestrictionApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'jobDeploymentRestrictionRequest': new QoveryApi.JobDeploymentRestrictionRequest() // JobDeploymentRestrictionRequest | 
};
apiInstance.createJobDeploymentRestriction(jobId, opts, (error, data, response) => {
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
 **jobDeploymentRestrictionRequest** | [**JobDeploymentRestrictionRequest**](JobDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**JobDeploymentRestrictionResponse**](JobDeploymentRestrictionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteJobDeploymentRestriction

> deleteJobDeploymentRestriction(jobId, deploymentRestrictionId)

Delete a job deployment restriction

Delete a job deployment restriction

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

let apiInstance = new QoveryApi.JobDeploymentRestrictionApi();
let jobId = "jobId_example"; // String | Job ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
apiInstance.deleteJobDeploymentRestriction(jobId, deploymentRestrictionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| Job ID | 
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editJobDeploymentRestriction

> JobDeploymentRestrictionResponse editJobDeploymentRestriction(jobId, deploymentRestrictionId, opts)

Edit a job deployment restriction

Edit a job deployment restriction

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

let apiInstance = new QoveryApi.JobDeploymentRestrictionApi();
let jobId = "jobId_example"; // String | Job ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
let opts = {
  'jobDeploymentRestrictionRequest': new QoveryApi.JobDeploymentRestrictionRequest() // JobDeploymentRestrictionRequest | 
};
apiInstance.editJobDeploymentRestriction(jobId, deploymentRestrictionId, opts, (error, data, response) => {
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
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 
 **jobDeploymentRestrictionRequest** | [**JobDeploymentRestrictionRequest**](JobDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**JobDeploymentRestrictionResponse**](JobDeploymentRestrictionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getJobDeploymentRestrictions

> JobDeploymentRestrictionResponseList getJobDeploymentRestrictions(jobId)

Get job deployment restrictions

Get job deployment restrictions

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

let apiInstance = new QoveryApi.JobDeploymentRestrictionApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.getJobDeploymentRestrictions(jobId, (error, data, response) => {
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

[**JobDeploymentRestrictionResponseList**](JobDeploymentRestrictionResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

