# QoveryApi.ApplicationSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationSecret**](ApplicationSecretApi.md#createApplicationSecret) | **POST** /application/{applicationId}/secret | Add a secret to the application
[**createApplicationSecretAlias**](ApplicationSecretApi.md#createApplicationSecretAlias) | **POST** /application/{applicationId}/secret/{secretId}/alias | Create a secret alias at the application level
[**createApplicationSecretOverride**](ApplicationSecretApi.md#createApplicationSecretOverride) | **POST** /application/{applicationId}/secret/{secretId}/override | Create a secret override at the application level
[**deleteApplicationSecret**](ApplicationSecretApi.md#deleteApplicationSecret) | **DELETE** /application/{applicationId}/secret/{secretId} | Delete a secret from an application
[**editApplicationSecret**](ApplicationSecretApi.md#editApplicationSecret) | **PUT** /application/{applicationId}/secret/{secretId} | Edit a secret belonging to the application
[**listApplicationSecrets**](ApplicationSecretApi.md#listApplicationSecrets) | **GET** /application/{applicationId}/secret | List application secrets



## createApplicationSecret

> Secret createApplicationSecret(applicationId, opts)

Add a secret to the application

- Add a secret to the application. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'secretRequest': new QoveryApi.SecretRequest() // SecretRequest | 
};
apiInstance.createApplicationSecret(applicationId, opts, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **secretRequest** | [**SecretRequest**](SecretRequest.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApplicationSecretAlias

> Secret createApplicationSecretAlias(applicationId, secretId, opts)

Create a secret alias at the application level

- Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \&quot;aliased_secret\&quot; field of the newly created secret - You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createApplicationSecretAlias(applicationId, secretId, opts, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **secretId** | **String**| Secret ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApplicationSecretOverride

> Secret createApplicationSecretOverride(applicationId, secretId, opts)

Create a secret override at the application level

- Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \&quot;overridden_secret\&quot; field of the newly created secret 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createApplicationSecretOverride(applicationId, secretId, opts, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **secretId** | **String**| Secret ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationSecret

> deleteApplicationSecret(applicationId, secretId)

Delete a secret from an application

- To delete a secret you must have the project user permission - You can&#39;t delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
let secretId = "secretId_example"; // String | Secret ID
apiInstance.deleteApplicationSecret(applicationId, secretId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **secretId** | **String**| Secret ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editApplicationSecret

> Secret editApplicationSecret(applicationId, secretId, secretEditRequest)

Edit a secret belonging to the application

- You can&#39;t edit a BUILT_IN secret - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
let secretId = "secretId_example"; // String | Secret ID
let secretEditRequest = new QoveryApi.SecretEditRequest(); // SecretEditRequest | 
apiInstance.editApplicationSecret(applicationId, secretId, secretEditRequest, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **secretId** | **String**| Secret ID | 
 **secretEditRequest** | [**SecretEditRequest**](SecretEditRequest.md)|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listApplicationSecrets

> SecretResponseList listApplicationSecrets(applicationId)

List application secrets

Secrets are like environment variables, but they are secured and can&#39;t be revealed.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationSecretApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.listApplicationSecrets(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

[**SecretResponseList**](SecretResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

