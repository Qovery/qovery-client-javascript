# QoveryApi.OrganizationWebhookApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationWebhook**](OrganizationWebhookApi.md#createOrganizationWebhook) | **POST** /organization/{organizationId}/webhook | Create an organization webhook
[**deleteOrganizationWebhook**](OrganizationWebhookApi.md#deleteOrganizationWebhook) | **DELETE** /organization/{organizationId}/webhook/{webhookId} | Delete organization webhook
[**editOrganizationWebhook**](OrganizationWebhookApi.md#editOrganizationWebhook) | **PUT** /organization/{organizationId}/webhook/{webhookId} | Edit an organization webhook
[**getOrganizationWebhook**](OrganizationWebhookApi.md#getOrganizationWebhook) | **GET** /organization/{organizationId}/webhook/{webhookId} | Get an Organization webhook
[**listOrganizationWebHooks**](OrganizationWebhookApi.md#listOrganizationWebHooks) | **GET** /organization/{organizationId}/webhook | List organization webhooks



## createOrganizationWebhook

> OrganizationWebhookCreateResponse createOrganizationWebhook(organizationId, opts)

Create an organization webhook

Create an organization webhook.

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

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationWebhookCreateRequest': new QoveryApi.OrganizationWebhookCreateRequest() // OrganizationWebhookCreateRequest | 
};
apiInstance.createOrganizationWebhook(organizationId, opts, (error, data, response) => {
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
 **organizationWebhookCreateRequest** | [**OrganizationWebhookCreateRequest**](OrganizationWebhookCreateRequest.md)|  | [optional] 

### Return type

[**OrganizationWebhookCreateResponse**](OrganizationWebhookCreateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationWebhook

> deleteOrganizationWebhook(organizationId, webhookId)

Delete organization webhook

Delete organization webhook

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

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let webhookId = "webhookId_example"; // String | Webhook ID
apiInstance.deleteOrganizationWebhook(organizationId, webhookId, (error, data, response) => {
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
 **webhookId** | **String**| Webhook ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editOrganizationWebhook

> OrganizationWebhookCreateResponse editOrganizationWebhook(organizationId, webhookId, opts)

Edit an organization webhook

Edit an organization webhook

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

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let webhookId = "webhookId_example"; // String | Webhook ID
let opts = {
  'organizationWebhookCreateRequest': new QoveryApi.OrganizationWebhookCreateRequest() // OrganizationWebhookCreateRequest | 
};
apiInstance.editOrganizationWebhook(organizationId, webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Webhook ID | 
 **organizationWebhookCreateRequest** | [**OrganizationWebhookCreateRequest**](OrganizationWebhookCreateRequest.md)|  | [optional] 

### Return type

[**OrganizationWebhookCreateResponse**](OrganizationWebhookCreateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrganizationWebhook

> OrganizationWebhookResponse getOrganizationWebhook(organizationId, webhookId)

Get an Organization webhook

Get an Organization webhook

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

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let webhookId = "webhookId_example"; // String | Webhook ID
apiInstance.getOrganizationWebhook(organizationId, webhookId, (error, data, response) => {
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
 **webhookId** | **String**| Webhook ID | 

### Return type

[**OrganizationWebhookResponse**](OrganizationWebhookResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationWebHooks

> OrganizationWebhookResponseList listOrganizationWebHooks(organizationId)

List organization webhooks

List organization webhooks

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

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationWebHooks(organizationId, (error, data, response) => {
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

[**OrganizationWebhookResponseList**](OrganizationWebhookResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

