# BetaQoveryApi.OrganizationMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganization**](OrganizationMainCallsApi.md#createOrganization) | **POST** /organization | Create an organization
[**deleteOrganization**](OrganizationMainCallsApi.md#deleteOrganization) | **DELETE** /organization/{organizationId} | Delete an organization
[**editOrganization**](OrganizationMainCallsApi.md#editOrganization) | **PUT** /organization/{organizationId} | Edit an organization
[**getOrganization**](OrganizationMainCallsApi.md#getOrganization) | **GET** /organization/{organizationId} | Get organization by ID
[**listOrganization**](OrganizationMainCallsApi.md#listOrganization) | **GET** /organization | List user organizations



## createOrganization

> OrganizationResponse createOrganization(opts)

Create an organization

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.OrganizationMainCallsApi();
let opts = {
  'organizationRequest': new BetaQoveryApi.OrganizationRequest() // OrganizationRequest | 
};
apiInstance.createOrganization(opts, (error, data, response) => {
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
 **organizationRequest** | [**OrganizationRequest**](OrganizationRequest.md)|  | [optional] 

### Return type

[**OrganizationResponse**](OrganizationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganization

> deleteOrganization(organizationId)

Delete an organization

To delete an organization you must have the admin permission

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.OrganizationMainCallsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteOrganization(organizationId, (error, data, response) => {
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


## editOrganization

> OrganizationResponse editOrganization(organizationId, opts)

Edit an organization

To edit an organization you must have the admin permission

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.OrganizationMainCallsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationEditRequest': new BetaQoveryApi.OrganizationEditRequest() // OrganizationEditRequest | 
};
apiInstance.editOrganization(organizationId, opts, (error, data, response) => {
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
 **organizationEditRequest** | [**OrganizationEditRequest**](OrganizationEditRequest.md)|  | [optional] 

### Return type

[**OrganizationResponse**](OrganizationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrganization

> OrganizationResponse getOrganization(organizationId)

Get organization by ID

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.OrganizationMainCallsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganization(organizationId, (error, data, response) => {
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

[**OrganizationResponse**](OrganizationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganization

> OrganizationResponseList listOrganization()

List user organizations

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.OrganizationMainCallsApi();
apiInstance.listOrganization((error, data, response) => {
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

[**OrganizationResponseList**](OrganizationResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

