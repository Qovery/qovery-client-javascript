# QoveryApi.EnvironmentsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironment**](EnvironmentsApi.md#createEnvironment) | **POST** /project/{projectId}/environment | Create an environment
[**getProjectEnvironmentServiceNumber**](EnvironmentsApi.md#getProjectEnvironmentServiceNumber) | **GET** /project/{projectId}/environment/stats | List total number of services for each environment of the project
[**getProjectEnvironmentsStatus**](EnvironmentsApi.md#getProjectEnvironmentsStatus) | **GET** /project/{projectId}/environment/status | List environments statuses
[**listEnvironment**](EnvironmentsApi.md#listEnvironment) | **GET** /project/{projectId}/environment | List environments



## createEnvironment

> Environment createEnvironment(projectId, opts)

Create an environment

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentsApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'createEnvironmentRequest': new QoveryApi.CreateEnvironmentRequest() // CreateEnvironmentRequest | 
};
apiInstance.createEnvironment(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **createEnvironmentRequest** | [**CreateEnvironmentRequest**](CreateEnvironmentRequest.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProjectEnvironmentServiceNumber

> EnvironmentStatsResponseList getProjectEnvironmentServiceNumber(projectId)

List total number of services for each environment of the project

Returns a list of environment ids, and for each its total numberof services

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentsApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.getProjectEnvironmentServiceNumber(projectId, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 

### Return type

[**EnvironmentStatsResponseList**](EnvironmentStatsResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectEnvironmentsStatus

> EnvironmentStatusList getProjectEnvironmentsStatus(projectId)

List environments statuses

Returns a list of environments with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentsApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.getProjectEnvironmentsStatus(projectId, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 

### Return type

[**EnvironmentStatusList**](EnvironmentStatusList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironment

> EnvironmentResponseList listEnvironment(projectId)

List environments

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentsApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.listEnvironment(projectId, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 

### Return type

[**EnvironmentResponseList**](EnvironmentResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

