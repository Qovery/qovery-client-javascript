# QoveryApi.EnvironmentMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentMainCallsApi.md#deleteEnvironment) | **DELETE** /environment/{environmentId} | Delete an environment
[**editEnvironment**](EnvironmentMainCallsApi.md#editEnvironment) | **PUT** /environment/{environmentId} | Edit an environment
[**getEnvironment**](EnvironmentMainCallsApi.md#getEnvironment) | **GET** /environment/{environmentId} | Get environment by ID
[**getEnvironmentStatus**](EnvironmentMainCallsApi.md#getEnvironmentStatus) | **GET** /environment/{environmentId}/status | Get environment status
[**getEnvironmentStatuses**](EnvironmentMainCallsApi.md#getEnvironmentStatuses) | **GET** /environment/{environmentId}/statuses | Get environment statuses with services status
[**getEnvironmentStatusesWithStages**](EnvironmentMainCallsApi.md#getEnvironmentStatusesWithStages) | **GET** /environment/{environmentId}/statusesWithStages | Get environment statuses with stages



## deleteEnvironment

> deleteEnvironment(environmentId)

Delete an environment

To delete an environment you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.deleteEnvironment(environmentId, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editEnvironment

> Environment editEnvironment(environmentId, opts)

Edit an environment

To edit an environment you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'environmentEditRequest': new QoveryApi.EnvironmentEditRequest() // EnvironmentEditRequest | 
};
apiInstance.editEnvironment(environmentId, opts, (error, data, response) => {
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
 **environmentEditRequest** | [**EnvironmentEditRequest**](EnvironmentEditRequest.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEnvironment

> Environment getEnvironment(environmentId)

Get environment by ID

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironment(environmentId, (error, data, response) => {
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

[**Environment**](Environment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentStatus

> Status getEnvironmentStatus(environmentId)

Get environment status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentStatus(environmentId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentStatuses

> GetEnvironmentStatuses200Response getEnvironmentStatuses(environmentId)

Get environment statuses with services status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentStatuses(environmentId, (error, data, response) => {
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

[**GetEnvironmentStatuses200Response**](GetEnvironmentStatuses200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentStatusesWithStages

> GetEnvironmentStatusesWithStages200Response getEnvironmentStatusesWithStages(environmentId)

Get environment statuses with stages

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentStatusesWithStages(environmentId, (error, data, response) => {
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

[**GetEnvironmentStatusesWithStages200Response**](GetEnvironmentStatusesWithStages200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

