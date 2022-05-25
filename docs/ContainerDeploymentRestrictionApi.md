# QoveryApi.ContainerDeploymentRestrictionApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerDeploymentRestriction**](ContainerDeploymentRestrictionApi.md#createContainerDeploymentRestriction) | **POST** /container/{containerId}/deploymentRestriction | Create an container deployment restriction
[**deleteContainerDeploymentRestriction**](ContainerDeploymentRestrictionApi.md#deleteContainerDeploymentRestriction) | **DELETE** /container/{containerId}/deploymentRestriction/{deploymentRestrictionId} | Delete a container deployment restriction
[**editContainerDeploymentRestriction**](ContainerDeploymentRestrictionApi.md#editContainerDeploymentRestriction) | **PUT** /container/{containerId}/deploymentRestriction/{deploymentRestrictionId} | Edit a container deployment restriction
[**getContainerDeploymentRestrictions**](ContainerDeploymentRestrictionApi.md#getContainerDeploymentRestrictions) | **GET** /container/{containerId}/deploymentRestriction | Get container deployment restrictions



## createContainerDeploymentRestriction

> ContainerDeploymentRestriction createContainerDeploymentRestriction(containerId, opts)

Create an container deployment restriction

Create an container deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDeploymentRestrictionApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerDeploymentRestrictionRequest': new QoveryApi.ContainerDeploymentRestrictionRequest() // ContainerDeploymentRestrictionRequest | 
};
apiInstance.createContainerDeploymentRestriction(containerId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **containerDeploymentRestrictionRequest** | [**ContainerDeploymentRestrictionRequest**](ContainerDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**ContainerDeploymentRestriction**](ContainerDeploymentRestriction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainerDeploymentRestriction

> deleteContainerDeploymentRestriction(containerId)

Delete a container deployment restriction

Delete a container deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDeploymentRestrictionApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.deleteContainerDeploymentRestriction(containerId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editContainerDeploymentRestriction

> ContainerDeploymentRestriction editContainerDeploymentRestriction(containerId, deploymentRestrictionId, opts)

Edit a container deployment restriction

Edit a container deployment restriction

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDeploymentRestrictionApi();
let containerId = "containerId_example"; // String | Container ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
let opts = {
  'containerDeploymentRestrictionRequest': new QoveryApi.ContainerDeploymentRestrictionRequest() // ContainerDeploymentRestrictionRequest | 
};
apiInstance.editContainerDeploymentRestriction(containerId, deploymentRestrictionId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 
 **containerDeploymentRestrictionRequest** | [**ContainerDeploymentRestrictionRequest**](ContainerDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**ContainerDeploymentRestriction**](ContainerDeploymentRestriction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContainerDeploymentRestrictions

> ContainerDeploymentRestrictionResponseList getContainerDeploymentRestrictions(containerId)

Get container deployment restrictions

Get container deployment restrictions

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDeploymentRestrictionApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerDeploymentRestrictions(containerId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 

### Return type

[**ContainerDeploymentRestrictionResponseList**](ContainerDeploymentRestrictionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

