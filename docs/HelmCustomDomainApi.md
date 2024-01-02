# QoveryApi.HelmCustomDomainApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHelmCustomDomain**](HelmCustomDomainApi.md#deleteHelmCustomDomain) | **DELETE** /helm/{helmId}/customDomain/{customDomainId} | Delete a Custom Domain
[**editHelmCustomDomain**](HelmCustomDomainApi.md#editHelmCustomDomain) | **PUT** /helm/{helmId}/customDomain/{customDomainId} | Edit a Custom Domain
[**getHelmCustomDomain**](HelmCustomDomainApi.md#getHelmCustomDomain) | **GET** /helm/{helmId}/customDomain/{customDomainId} | Get a Custom Domain



## deleteHelmCustomDomain

> deleteHelmCustomDomain(helmId, customDomainId)

Delete a Custom Domain

To delete an CustomDomain you must have the project user permission

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

let apiInstance = new QoveryApi.HelmCustomDomainApi();
let helmId = "helmId_example"; // String | Helm ID
let customDomainId = "customDomainId_example"; // String | Custom Domain ID
apiInstance.deleteHelmCustomDomain(helmId, customDomainId, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **customDomainId** | **String**| Custom Domain ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editHelmCustomDomain

> CustomDomain editHelmCustomDomain(helmId, customDomainId, opts)

Edit a Custom Domain

To edit a Custom Domain you must have the project user permission

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

let apiInstance = new QoveryApi.HelmCustomDomainApi();
let helmId = "helmId_example"; // String | Helm ID
let customDomainId = "customDomainId_example"; // String | Custom Domain ID
let opts = {
  'customDomainRequest': new QoveryApi.CustomDomainRequest() // CustomDomainRequest | 
};
apiInstance.editHelmCustomDomain(helmId, customDomainId, opts, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **customDomainId** | **String**| Custom Domain ID | 
 **customDomainRequest** | [**CustomDomainRequest**](CustomDomainRequest.md)|  | [optional] 

### Return type

[**CustomDomain**](CustomDomain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHelmCustomDomain

> CustomDomain getHelmCustomDomain(helmId, customDomainId)

Get a Custom Domain

Get a custom domain

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

let apiInstance = new QoveryApi.HelmCustomDomainApi();
let helmId = "helmId_example"; // String | Helm ID
let customDomainId = "customDomainId_example"; // String | Custom Domain ID
apiInstance.getHelmCustomDomain(helmId, customDomainId, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **customDomainId** | **String**| Custom Domain ID | 

### Return type

[**CustomDomain**](CustomDomain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

