# QoveryApi.ContainerRegistriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerRegistry**](ContainerRegistriesApi.md#createContainerRegistry) | **POST** /organization/{organizationId}/containerRegistry | Create a container registry
[**deleteContainerRegistry**](ContainerRegistriesApi.md#deleteContainerRegistry) | **DELETE** /organization/{organizationId}/containerRegistry/{containerRegistryId} | Delete a container registry
[**editContainerRegistry**](ContainerRegistriesApi.md#editContainerRegistry) | **PUT** /organization/{organizationId}/containerRegistry/{containerRegistryId} | Edit a container registry
[**getContainerRegistry**](ContainerRegistriesApi.md#getContainerRegistry) | **GET** /organization/{organizationId}/containerRegistry/{containerRegistryId} | Get a container registry
[**listAvailableContainerRegistry**](ContainerRegistriesApi.md#listAvailableContainerRegistry) | **GET** /availableContainerRegistry | List supported container registries
[**listContainerRegistry**](ContainerRegistriesApi.md#listContainerRegistry) | **GET** /organization/{organizationId}/containerRegistry | List organization container registries



## createContainerRegistry

> ContainerRegistryResponse createContainerRegistry(organizationId, opts)

Create a container registry

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'containerRegistryRequest': new QoveryApi.ContainerRegistryRequest() // ContainerRegistryRequest | 
};
apiInstance.createContainerRegistry(organizationId, opts, (error, data, response) => {
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
 **containerRegistryRequest** | [**ContainerRegistryRequest**](ContainerRegistryRequest.md)|  | [optional] 

### Return type

[**ContainerRegistryResponse**](ContainerRegistryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainerRegistry

> deleteContainerRegistry(organizationId, containerRegistryId)

Delete a container registry

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let containerRegistryId = "containerRegistryId_example"; // String | Container Registry ID
apiInstance.deleteContainerRegistry(organizationId, containerRegistryId, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **containerRegistryId** | **String**| Container Registry ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editContainerRegistry

> ContainerRegistryResponse editContainerRegistry(organizationId, containerRegistryId, opts)

Edit a container registry

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let containerRegistryId = "containerRegistryId_example"; // String | Container Registry ID
let opts = {
  'containerRegistryRequest': new QoveryApi.ContainerRegistryRequest() // ContainerRegistryRequest | 
};
apiInstance.editContainerRegistry(organizationId, containerRegistryId, opts, (error, data, response) => {
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
 **containerRegistryRequest** | [**ContainerRegistryRequest**](ContainerRegistryRequest.md)|  | [optional] 

### Return type

[**ContainerRegistryResponse**](ContainerRegistryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContainerRegistry

> ContainerRegistryResponse getContainerRegistry(organizationId, containerRegistryId)

Get a container registry

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let containerRegistryId = "containerRegistryId_example"; // String | Container Registry ID
apiInstance.getContainerRegistry(organizationId, containerRegistryId, (error, data, response) => {
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

[**ContainerRegistryResponse**](ContainerRegistryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAvailableContainerRegistry

> AvailableContainerRegistryResponseList listAvailableContainerRegistry()

List supported container registries

List supported container registries by Qovery and get the mandatory authentification configuration.

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
apiInstance.listAvailableContainerRegistry((error, data, response) => {
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

[**AvailableContainerRegistryResponseList**](AvailableContainerRegistryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerRegistry

> ContainerRegistryResponseList listContainerRegistry(organizationId)

List organization container registries

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

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listContainerRegistry(organizationId, (error, data, response) => {
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

### Return type

[**ContainerRegistryResponseList**](ContainerRegistryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

