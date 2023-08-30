# QoveryApi.OrganizationApiTokenApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationApiToken**](OrganizationApiTokenApi.md#createOrganizationApiToken) | **POST** /organization/{organizationId}/apiToken | Create an organization api token
[**deleteOrganizationApiToken**](OrganizationApiTokenApi.md#deleteOrganizationApiToken) | **DELETE** /organization/{organizationId}/apiToken/{apiTokenId} | Delete organization api token
[**listOrganizationApiTokens**](OrganizationApiTokenApi.md#listOrganizationApiTokens) | **GET** /organization/{organizationId}/apiToken | List organization api tokens



## createOrganizationApiToken

> OrganizationApiTokenCreate createOrganizationApiToken(organizationId, opts)

Create an organization api token

Create an organization api token. You can use the generated token to interact in a programmatic way with our API.

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

let apiInstance = new QoveryApi.OrganizationApiTokenApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationApiTokenCreateRequest': new QoveryApi.OrganizationApiTokenCreateRequest() // OrganizationApiTokenCreateRequest | 
};
apiInstance.createOrganizationApiToken(organizationId, opts, (error, data, response) => {
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
 **organizationApiTokenCreateRequest** | [**OrganizationApiTokenCreateRequest**](OrganizationApiTokenCreateRequest.md)|  | [optional] 

### Return type

[**OrganizationApiTokenCreate**](OrganizationApiTokenCreate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationApiToken

> deleteOrganizationApiToken(organizationId, apiTokenId)

Delete organization api token

Delete organization api token

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

let apiInstance = new QoveryApi.OrganizationApiTokenApi();
let organizationId = "organizationId_example"; // String | Organization ID
let apiTokenId = "apiTokenId_example"; // String | Organization Api Token ID
apiInstance.deleteOrganizationApiToken(organizationId, apiTokenId, (error, data, response) => {
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
 **apiTokenId** | **String**| Organization Api Token ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listOrganizationApiTokens

> OrganizationApiTokenResponseList listOrganizationApiTokens(organizationId)

List organization api tokens

List organization api tokens

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

let apiInstance = new QoveryApi.OrganizationApiTokenApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationApiTokens(organizationId, (error, data, response) => {
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

[**OrganizationApiTokenResponseList**](OrganizationApiTokenResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

