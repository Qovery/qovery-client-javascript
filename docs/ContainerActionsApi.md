# QoveryApi.ContainerActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployContainer**](ContainerActionsApi.md#deployContainer) | **POST** /container/{containerId}/deploy | NOT YET IMPLEMENTED - Deploy container
[**previewEnvironmentContainer**](ContainerActionsApi.md#previewEnvironmentContainer) | **POST** /container/{containerId}/previewEnvironment | NOT YET IMPLEMENTED - Deploy a preview environment with your container application
[**restartContainer**](ContainerActionsApi.md#restartContainer) | **POST** /container/{containerId}/restart | NOT YET IMPLEMENTED - Restart container
[**stopContainer**](ContainerActionsApi.md#stopContainer) | **POST** /container/{containerId}/stop | NOT YET IMPLEMENTED - Stop container



## deployContainer

> Status deployContainer(containerId, opts)

NOT YET IMPLEMENTED - Deploy container

You must provide a git commit id

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerActionsApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerDeployRequest': new QoveryApi.ContainerDeployRequest() // ContainerDeployRequest | 
};
apiInstance.deployContainer(containerId, opts, (error, data, response) => {
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
 **containerDeployRequest** | [**ContainerDeployRequest**](ContainerDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## previewEnvironmentContainer

> Status previewEnvironmentContainer(containerId, opts)

NOT YET IMPLEMENTED - Deploy a preview environment with your container application

You must provide the image tag.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerActionsApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerDeployRequest': new QoveryApi.ContainerDeployRequest() // ContainerDeployRequest | 
};
apiInstance.previewEnvironmentContainer(containerId, opts, (error, data, response) => {
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
 **containerDeployRequest** | [**ContainerDeployRequest**](ContainerDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restartContainer

> Status restartContainer(containerId)

NOT YET IMPLEMENTED - Restart container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerActionsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.restartContainer(containerId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopContainer

> Status stopContainer(containerId)

NOT YET IMPLEMENTED - Stop container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerActionsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.stopContainer(containerId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

