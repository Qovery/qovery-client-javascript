# QoveryApi.ContainerSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerSecret**](ContainerSecretApi.md#createContainerSecret) | **POST** /container/{containerId}/secret | Add a secret to the container
[**createContainerSecretAlias**](ContainerSecretApi.md#createContainerSecretAlias) | **POST** /container/{containerId}/secret/{secretId}/alias | Create a secret alias at the container level
[**createContainerSecretOverride**](ContainerSecretApi.md#createContainerSecretOverride) | **POST** /container/{containerId}/secret/{secretId}/override | Create a secret override at the container level
[**deleteContainerSecret**](ContainerSecretApi.md#deleteContainerSecret) | **DELETE** /container/{containerId}/secret/{secretId} | Delete a secret from an container
[**editContainerSecret**](ContainerSecretApi.md#editContainerSecret) | **PUT** /container/{containerId}/secret/{secretId} | Edit a secret belonging to the container
[**listContainerSecrets**](ContainerSecretApi.md#listContainerSecrets) | **GET** /container/{containerId}/secret | List container secrets



## createContainerSecret

> Secret createContainerSecret(containerId, opts)

Add a secret to the container

- Add a secret to the container. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'secretRequest': new QoveryApi.SecretRequest() // SecretRequest | 
};
apiInstance.createContainerSecret(containerId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **secretRequest** | [**SecretRequest**](SecretRequest.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainerSecretAlias

> Secret createContainerSecretAlias(containerId, secretId, opts)

Create a secret alias at the container level

- Allows you to add an alias at container level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at container level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \&quot;aliased_secret\&quot; field of the newly created secret - You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createContainerSecretAlias(containerId, secretId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **secretId** | **String**| Secret ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainerSecretOverride

> Secret createContainerSecretOverride(containerId, secretId, opts)

Create a secret override at the container level

- Allows you to override at container level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at container level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \&quot;overridden_secret\&quot; field of the newly created secret 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createContainerSecretOverride(containerId, secretId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **secretId** | **String**| Secret ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainerSecret

> deleteContainerSecret(containerId, secretId)

Delete a secret from an container

- To delete a secret you must have the project user permission - You can&#39;t delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
let secretId = "secretId_example"; // String | Secret ID
apiInstance.deleteContainerSecret(containerId, secretId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **secretId** | **String**| Secret ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editContainerSecret

> Secret editContainerSecret(containerId, secretId, secretEditRequest)

Edit a secret belonging to the container

- You can&#39;t edit a BUILT_IN secret - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; CONTAINER) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
let secretId = "secretId_example"; // String | Secret ID
let secretEditRequest = new QoveryApi.SecretEditRequest(); // SecretEditRequest | 
apiInstance.editContainerSecret(containerId, secretId, secretEditRequest, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **secretId** | **String**| Secret ID | 
 **secretEditRequest** | [**SecretEditRequest**](SecretEditRequest.md)|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listContainerSecrets

> SecretResponseList listContainerSecrets(containerId)

List container secrets

Secrets are like environment variables, but they are secured and can&#39;t be revealed.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerSecretApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerSecrets(containerId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 

### Return type

[**SecretResponseList**](SecretResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

