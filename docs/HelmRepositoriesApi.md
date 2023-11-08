# QoveryApi.HelmRepositoriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHelmRepository**](HelmRepositoriesApi.md#createHelmRepository) | **POST** /organization/{organizationId}/helmRepository | Create a helm repository
[**deleteHelmRepository**](HelmRepositoriesApi.md#deleteHelmRepository) | **DELETE** /organization/{organizationId}/helmRepository/{helmRepositoryId} | Delete a helm repository
[**editHelmRepository**](HelmRepositoriesApi.md#editHelmRepository) | **PUT** /organization/{organizationId}/helmRepository/{helmRepositoryId} | Edit a helm repository
[**getHelmRepository**](HelmRepositoriesApi.md#getHelmRepository) | **GET** /organization/{organizationId}/helmRepository/{helmRepositoryId} | Get a helm repository
[**listAvailableHelmRepository**](HelmRepositoriesApi.md#listAvailableHelmRepository) | **GET** /availableHelmRepository | List supported helm repository
[**listHelmRepository**](HelmRepositoriesApi.md#listHelmRepository) | **GET** /organization/{organizationId}/helmRepository | List organization helm repositories



## createHelmRepository

> HelmRepositoryResponse createHelmRepository(organizationId, opts)

Create a helm repository

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'helmRepositoryRequest': new QoveryApi.HelmRepositoryRequest() // HelmRepositoryRequest | 
};
apiInstance.createHelmRepository(organizationId, opts, (error, data, response) => {
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
 **helmRepositoryRequest** | [**HelmRepositoryRequest**](HelmRepositoryRequest.md)|  | [optional] 

### Return type

[**HelmRepositoryResponse**](HelmRepositoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteHelmRepository

> deleteHelmRepository(organizationId)

Delete a helm repository

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteHelmRepository(organizationId, (error, data, response) => {
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editHelmRepository

> HelmRepositoryResponse editHelmRepository(organizationId, opts)

Edit a helm repository

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'helmRepositoryRequest': new QoveryApi.HelmRepositoryRequest() // HelmRepositoryRequest | 
};
apiInstance.editHelmRepository(organizationId, opts, (error, data, response) => {
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
 **helmRepositoryRequest** | [**HelmRepositoryRequest**](HelmRepositoryRequest.md)|  | [optional] 

### Return type

[**HelmRepositoryResponse**](HelmRepositoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHelmRepository

> HelmRepositoryResponse getHelmRepository(organizationId, helmRepositoryId)

Get a helm repository

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let helmRepositoryId = "helmRepositoryId_example"; // String | Helm chart repository ID
apiInstance.getHelmRepository(organizationId, helmRepositoryId, (error, data, response) => {
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
 **helmRepositoryId** | **String**| Helm chart repository ID | 

### Return type

[**HelmRepositoryResponse**](HelmRepositoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAvailableHelmRepository

> AvailableHelmRepositoryResponseList listAvailableHelmRepository()

List supported helm repository

List supported helm repository by Qovery and get the mandatory authentification configuration.

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
apiInstance.listAvailableHelmRepository((error, data, response) => {
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

[**AvailableHelmRepositoryResponseList**](AvailableHelmRepositoryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHelmRepository

> HelmRepositoryResponseList listHelmRepository(organizationId)

List organization helm repositories

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

let apiInstance = new QoveryApi.HelmRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listHelmRepository(organizationId, (error, data, response) => {
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

[**HelmRepositoryResponseList**](HelmRepositoryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

