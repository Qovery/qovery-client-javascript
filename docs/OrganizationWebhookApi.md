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

> CreateOrganizationWebhook201Response createOrganizationWebhook(organizationId, opts)

Create an organization webhook

Create an organization webhook.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'createOrganizationWebhookRequest': new QoveryApi.CreateOrganizationWebhookRequest() // CreateOrganizationWebhookRequest | 
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
 **createOrganizationWebhookRequest** | [**CreateOrganizationWebhookRequest**](CreateOrganizationWebhookRequest.md)|  | [optional] 

### Return type

[**CreateOrganizationWebhook201Response**](CreateOrganizationWebhook201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationWebhook

> deleteOrganizationWebhook(organizationId)

Delete organization webhook

Delete organization webhook

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteOrganizationWebhook(organizationId, (error, data, response) => {
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


## editOrganizationWebhook

> Object editOrganizationWebhook(organizationId, opts)

Edit an organization webhook

Edit an organization webhook

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.OrganizationWebhookApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'body': null // Object | 
};
apiInstance.editOrganizationWebhook(organizationId, opts, (error, data, response) => {
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
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrganizationWebhook

> CreateOrganizationWebhook201Response getOrganizationWebhook(organizationId, webhookId)

Get an Organization webhook

Get an Organization webhook

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[**CreateOrganizationWebhook201Response**](CreateOrganizationWebhook201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationWebHooks

> ListOrganizationWebHooks200Response listOrganizationWebHooks(organizationId)

List organization webhooks

List organization webhooks

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[**ListOrganizationWebHooks200Response**](ListOrganizationWebHooks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

