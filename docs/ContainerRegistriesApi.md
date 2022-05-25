# QoveryApi.ContainerRegistriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerRegistry**](ContainerRegistriesApi.md#createContainerRegistry) | **POST** /organization/{organizationId}/containerRegistry | Create a container registry
[**deleteContainerRegistry**](ContainerRegistriesApi.md#deleteContainerRegistry) | **DELETE** /organization/{organizationId}/containerRegistry/{containerRegistryId} | Delete a container registry
[**listAvailableContainerRegistry**](ContainerRegistriesApi.md#listAvailableContainerRegistry) | **GET** /organization/{organizationId}/availableContainerRegistry | List supported container registries
[**listContainerRegistry**](ContainerRegistriesApi.md#listContainerRegistry) | **GET** /organization/{organizationId}/containerRegistry | List organization container registries



## createContainerRegistry

> ContainerRegistryResponse createContainerRegistry(organizationId, opts)

Create a container registry

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainerRegistry

> deleteContainerRegistry(organizationId)

Delete a container registry

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteContainerRegistry(organizationId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listAvailableContainerRegistry

> AvailableContainerRegistryResponse listAvailableContainerRegistry(organizationId)

List supported container registries

List supported container registries by Qovery and get the mandatory authentification configuration.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerRegistriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listAvailableContainerRegistry(organizationId, (error, data, response) => {
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

[**AvailableContainerRegistryResponse**](AvailableContainerRegistryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerRegistry

> InlineResponse200 listContainerRegistry(organizationId)

List organization container registries

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

