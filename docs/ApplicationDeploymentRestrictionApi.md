# QoveryApi.ApplicationDeploymentRestrictionApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationDeploymentRestriction**](ApplicationDeploymentRestrictionApi.md#createApplicationDeploymentRestriction) | **POST** /application/{applicationId}/deploymentRestriction | Create an application deployment restriction
[**deleteApplicationDeploymentRestriction**](ApplicationDeploymentRestrictionApi.md#deleteApplicationDeploymentRestriction) | **DELETE** /application/{applicationId}/deploymentRestriction/{deploymentRestrictionId} | Delete an application deployment restriction
[**editApplicationDeploymentRestriction**](ApplicationDeploymentRestrictionApi.md#editApplicationDeploymentRestriction) | **PUT** /application/{applicationId}/deploymentRestriction/{deploymentRestrictionId} | Edit an application deployment restriction
[**getApplicationDeploymentRestrictions**](ApplicationDeploymentRestrictionApi.md#getApplicationDeploymentRestrictions) | **GET** /application/{applicationId}/deploymentRestriction | Get application deployment restrictions



## createApplicationDeploymentRestriction

> ApplicationDeploymentRestriction createApplicationDeploymentRestriction(applicationId, opts)

Create an application deployment restriction

Create an application deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRestrictionApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'applicationDeploymentRestrictionRequest': new QoveryApi.ApplicationDeploymentRestrictionRequest() // ApplicationDeploymentRestrictionRequest | 
};
apiInstance.createApplicationDeploymentRestriction(applicationId, opts, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **applicationDeploymentRestrictionRequest** | [**ApplicationDeploymentRestrictionRequest**](ApplicationDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**ApplicationDeploymentRestriction**](ApplicationDeploymentRestriction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationDeploymentRestriction

> deleteApplicationDeploymentRestriction(applicationId)

Delete an application deployment restriction

Delete an application deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRestrictionApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.deleteApplicationDeploymentRestriction(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editApplicationDeploymentRestriction

> ApplicationDeploymentRestriction editApplicationDeploymentRestriction(applicationId, deploymentRestrictionId, opts)

Edit an application deployment restriction

Edit an application deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRestrictionApi();
let applicationId = "applicationId_example"; // String | Application ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
let opts = {
  'applicationDeploymentRestrictionRequest': new QoveryApi.ApplicationDeploymentRestrictionRequest() // ApplicationDeploymentRestrictionRequest | 
};
apiInstance.editApplicationDeploymentRestriction(applicationId, deploymentRestrictionId, opts, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 
 **applicationDeploymentRestrictionRequest** | [**ApplicationDeploymentRestrictionRequest**](ApplicationDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**ApplicationDeploymentRestriction**](ApplicationDeploymentRestriction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApplicationDeploymentRestrictions

> ApplicationDeploymentRestrictionResponseList getApplicationDeploymentRestrictions(applicationId)

Get application deployment restrictions

Get application deployment restrictions

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRestrictionApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationDeploymentRestrictions(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

[**ApplicationDeploymentRestrictionResponseList**](ApplicationDeploymentRestrictionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

