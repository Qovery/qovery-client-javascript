# QoveryApi.ContainersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoDeployContainerEnvironments**](ContainersApi.md#autoDeployContainerEnvironments) | **POST** /organization/{organizationId}/container/deploy | Auto deploy containers
[**cloneContainer**](ContainersApi.md#cloneContainer) | **POST** /container/{containerId}/clone | Clone container
[**createContainer**](ContainersApi.md#createContainer) | **POST** /environment/{environmentId}/container | Create a container
[**getContainerRegistryContainerStatus**](ContainersApi.md#getContainerRegistryContainerStatus) | **GET** /organization/{organizationId}/containerRegistry/{containerRegistryId}/container/status | List all container registry container statuses
[**getDefaultContainerAdvancedSettings**](ContainersApi.md#getDefaultContainerAdvancedSettings) | **GET** /defaultContainerAdvancedSettings | List default container advanced settings
[**getEnvironmentContainerCurrentScale**](ContainersApi.md#getEnvironmentContainerCurrentScale) | **GET** /environment/{environmentId}/container/currentScale | List current scaling information for each container
[**getEnvironmentContainerCurrentStorage**](ContainersApi.md#getEnvironmentContainerCurrentStorage) | **GET** /environment/{environmentId}/container/currentStorage | List current storage disk usage for each containers
[**getEnvironmentContainerStatus**](ContainersApi.md#getEnvironmentContainerStatus) | **GET** /environment/{environmentId}/container/status | List all environment container statuses
[**listContainer**](ContainersApi.md#listContainer) | **GET** /environment/{environmentId}/container | List containers
[**previewContainerEnvironments**](ContainersApi.md#previewContainerEnvironments) | **POST** /organization/{organizationId}/container/preview | Preview container environments



## autoDeployContainerEnvironments

> Status autoDeployContainerEnvironments(organizationId, opts)

Auto deploy containers

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
  'organizationContainerAutoDeployRequest': new QoveryApi.OrganizationContainerAutoDeployRequest() // OrganizationContainerAutoDeployRequest | 
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
 **organizationContainerAutoDeployRequest** | [**OrganizationContainerAutoDeployRequest**](OrganizationContainerAutoDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloneContainer

> ContainerResponse cloneContainer(containerId, opts)

Clone container

This will create a new container with the same configuration on the targeted environment Id.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'cloneContainerRequest': new QoveryApi.CloneContainerRequest() // CloneContainerRequest | 
};
apiInstance.cloneContainer(containerId, opts, (error, data, response) => {
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
 **cloneContainerRequest** | [**CloneContainerRequest**](CloneContainerRequest.md)|  | [optional] 

### Return type

[**ContainerResponse**](ContainerResponse.md)

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


## getContainerRegistryContainerStatus

> ReferenceObjectStatusResponseList getContainerRegistryContainerStatus(organizationId, containerRegistryId)

List all container registry container statuses

Returns a list of containers with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let containerRegistryId = "containerRegistryId_example"; // String | Container Registry ID
apiInstance.getContainerRegistryContainerStatus(organizationId, containerRegistryId, (error, data, response) => {
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
 **containerRegistryId** | **String**| Container Registry ID | 

### Return type

[**ReferenceObjectStatusResponseList**](ReferenceObjectStatusResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDefaultContainerAdvancedSettings

> ContainerAdvancedSettings getDefaultContainerAdvancedSettings()

List default container advanced settings

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainersApi();
apiInstance.getDefaultContainerAdvancedSettings((error, data, response) => {
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

[**ContainerAdvancedSettings**](ContainerAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
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

> ContainerResponseList listContainer(environmentId)

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
apiInstance.listContainer(environmentId, (error, data, response) => {
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

[**ContainerResponseList**](ContainerResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## previewContainerEnvironments

> Status previewContainerEnvironments(organizationId, opts)

Preview container environments

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
  'organizationContainerPreviewRequest': new QoveryApi.OrganizationContainerPreviewRequest() // OrganizationContainerPreviewRequest | 
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
 **organizationContainerPreviewRequest** | [**OrganizationContainerPreviewRequest**](OrganizationContainerPreviewRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

