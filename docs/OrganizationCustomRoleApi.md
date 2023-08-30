# QoveryApi.OrganizationCustomRoleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationCustomRole**](OrganizationCustomRoleApi.md#createOrganizationCustomRole) | **POST** /organization/{organizationId}/customRole | Create an organization custom role
[**deleteOrganizationCustomRole**](OrganizationCustomRoleApi.md#deleteOrganizationCustomRole) | **DELETE** /organization/{organizationId}/customRole/{customRoleId} | Delete organization custom role
[**editOrganizationCustomRole**](OrganizationCustomRoleApi.md#editOrganizationCustomRole) | **PUT** /organization/{organizationId}/customRole/{customRoleId} | Edit an organization custom role
[**getOrganizationCustomRole**](OrganizationCustomRoleApi.md#getOrganizationCustomRole) | **GET** /organization/{organizationId}/customRole/{customRoleId} | Get an organization custom role 
[**listOrganizationCustomRoles**](OrganizationCustomRoleApi.md#listOrganizationCustomRoles) | **GET** /organization/{organizationId}/customRole | List organization custom roles



## createOrganizationCustomRole

> OrganizationCustomRole createOrganizationCustomRole(organizationId, opts)

Create an organization custom role

Create an organization custom role

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

let apiInstance = new QoveryApi.OrganizationCustomRoleApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationCustomRoleCreateRequest': new QoveryApi.OrganizationCustomRoleCreateRequest() // OrganizationCustomRoleCreateRequest | 
};
apiInstance.createOrganizationCustomRole(organizationId, opts, (error, data, response) => {
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
 **organizationCustomRoleCreateRequest** | [**OrganizationCustomRoleCreateRequest**](OrganizationCustomRoleCreateRequest.md)|  | [optional] 

### Return type

[**OrganizationCustomRole**](OrganizationCustomRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationCustomRole

> deleteOrganizationCustomRole(organizationId, customRoleId)

Delete organization custom role

Delete organization custom role

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

let apiInstance = new QoveryApi.OrganizationCustomRoleApi();
let organizationId = "organizationId_example"; // String | Organization ID
let customRoleId = "customRoleId_example"; // String | Custom Role ID
apiInstance.deleteOrganizationCustomRole(organizationId, customRoleId, (error, data, response) => {
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
 **customRoleId** | **String**| Custom Role ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editOrganizationCustomRole

> OrganizationCustomRole editOrganizationCustomRole(organizationId, customRoleId, opts)

Edit an organization custom role

Edit an organization custom role

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

let apiInstance = new QoveryApi.OrganizationCustomRoleApi();
let organizationId = "organizationId_example"; // String | Organization ID
let customRoleId = "customRoleId_example"; // String | Custom Role ID
let opts = {
  'organizationCustomRoleUpdateRequest': new QoveryApi.OrganizationCustomRoleUpdateRequest() // OrganizationCustomRoleUpdateRequest | 
};
apiInstance.editOrganizationCustomRole(organizationId, customRoleId, opts, (error, data, response) => {
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
 **customRoleId** | **String**| Custom Role ID | 
 **organizationCustomRoleUpdateRequest** | [**OrganizationCustomRoleUpdateRequest**](OrganizationCustomRoleUpdateRequest.md)|  | [optional] 

### Return type

[**OrganizationCustomRole**](OrganizationCustomRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrganizationCustomRole

> OrganizationCustomRole getOrganizationCustomRole(organizationId, customRoleId)

Get an organization custom role 

Get an organization custom role 

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

let apiInstance = new QoveryApi.OrganizationCustomRoleApi();
let organizationId = "organizationId_example"; // String | Organization ID
let customRoleId = "customRoleId_example"; // String | Custom Role ID
apiInstance.getOrganizationCustomRole(organizationId, customRoleId, (error, data, response) => {
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
 **customRoleId** | **String**| Custom Role ID | 

### Return type

[**OrganizationCustomRole**](OrganizationCustomRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationCustomRoles

> OrganizationCustomRoleList listOrganizationCustomRoles(organizationId)

List organization custom roles

List organization custom roles

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

let apiInstance = new QoveryApi.OrganizationCustomRoleApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationCustomRoles(organizationId, (error, data, response) => {
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

[**OrganizationCustomRoleList**](OrganizationCustomRoleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

