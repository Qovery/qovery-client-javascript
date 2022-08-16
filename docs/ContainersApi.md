# QoveryApi.ContainersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoDeployContainerEnvironments**](ContainersApi.md#autoDeployContainerEnvironments) | **POST** /organization/{organizationId}/container/deploy | NOT YET IMPLEMENTED - Auto deploy containers
[**createContainer**](ContainersApi.md#createContainer) | **POST** /environment/{environmentId}/container | Create a container
[**deployAllContainers**](ContainersApi.md#deployAllContainers) | **POST** /environment/{environmentId}/container/deploy | Deploy containers
[**getEnvironmentContainerCurrentScale**](ContainersApi.md#getEnvironmentContainerCurrentScale) | **GET** /environment/{environmentId}/container/currentScale | List current scaling information for each container
[**getEnvironmentContainerCurrentStorage**](ContainersApi.md#getEnvironmentContainerCurrentStorage) | **GET** /environment/{environmentId}/container/currentStorage | List current storage disk usage for each containers
[**getEnvironmentContainerStatus**](ContainersApi.md#getEnvironmentContainerStatus) | **GET** /environment/{environmentId}/container/status | List all environment container statuses
[**listContainer**](ContainersApi.md#listContainer) | **GET** /environment/{environmentId}/container | List containers
[**previewContainerEnvironments**](ContainersApi.md#previewContainerEnvironments) | **POST** /organization/{organizationId}/container/preview | NOT YET IMPLEMENTED - Preview container environments



## autoDeployContainerEnvironments

> Status autoDeployContainerEnvironments(organizationId, opts)

NOT YET IMPLEMENTED - Auto deploy containers

Triggers a new container deploy in each environment matching the following conditions - environment should have the auto-deploy enabled - the container should have the same image name and a different tag 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'autoDeployContainerEnvironmentsRequest': new QoveryApi.AutoDeployContainerEnvironmentsRequest() // AutoDeployContainerEnvironmentsRequest | 
};
apiInstance.autoDeployContainerEnvironments(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **autoDeployContainerEnvironmentsRequest** | [**AutoDeployContainerEnvironmentsRequest**](AutoDeployContainerEnvironmentsRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainer

> ContainerResponse createContainer(environmentId, opts)

Create a container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'containerRequest': new QoveryApi.ContainerRequest() // ContainerRequest | 
};
apiInstance.createContainer(environmentId, opts, (error, data, response) => {
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
 **containerRequest** | [**ContainerRequest**](ContainerRequest.md)|  | [optional] 

### Return type

[**ContainerResponse**](ContainerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deployAllContainers

> Status deployAllContainers(environmentId, opts)

Deploy containers

Deploy to the last commit the containers you specified.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'deployAllRequest': new QoveryApi.DeployAllRequest() // DeployAllRequest | 
};
apiInstance.deployAllContainers(environmentId, opts, (error, data, response) => {
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
 **deployAllRequest** | [**DeployAllRequest**](DeployAllRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEnvironmentContainerCurrentScale

> EnvironmentContainersCurrentScaleResponseList getEnvironmentContainerCurrentScale(environmentId)

List current scaling information for each container

Returns min, max, and running number of instances for each container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentContainerCurrentScale(environmentId, (error, data, response) => {
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

[**EnvironmentContainersCurrentScaleResponseList**](EnvironmentContainersCurrentScaleResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentContainerCurrentStorage

> EnvironmentContainersStorageResponseList getEnvironmentContainerCurrentStorage(environmentId)

List current storage disk usage for each containers

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentContainerCurrentStorage(environmentId, (error, data, response) => {
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

[**EnvironmentContainersStorageResponseList**](EnvironmentContainersStorageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentContainerStatus

> ReferenceObjectStatusResponseList getEnvironmentContainerStatus(environmentId)

List all environment container statuses

Returns a list of containers with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentContainerStatus(environmentId, (error, data, response) => {
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

[**ReferenceObjectStatusResponseList**](ReferenceObjectStatusResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainer

> ContainerResponseList listContainer(environmentId, opts)

List containers

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'toUpdate': false // Boolean | return (or not) results that must be updated
};
apiInstance.listContainer(environmentId, opts, (error, data, response) => {
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
 **toUpdate** | **Boolean**| return (or not) results that must be updated | [optional] [default to false]

### Return type

[**ContainerResponseList**](ContainerResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## previewContainerEnvironments

> Status previewContainerEnvironments(organizationId, opts)

NOT YET IMPLEMENTED - Preview container environments

Triggers a new container preview for each environment matching the following conditions - preview environment feature should be enabled for the container - the container should have the same image name and a different tag 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'previewContainerEnvironmentsRequest': new QoveryApi.PreviewContainerEnvironmentsRequest() // PreviewContainerEnvironmentsRequest | 
};
apiInstance.previewContainerEnvironments(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **previewContainerEnvironmentsRequest** | [**PreviewContainerEnvironmentsRequest**](PreviewContainerEnvironmentsRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

