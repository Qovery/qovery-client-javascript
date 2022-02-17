# QoveryApi.ProjectSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectSecret**](ProjectSecretApi.md#createProjectSecret) | **POST** /project/{projectId}/secret | Add a secret to the project
[**createProjectSecretAlias**](ProjectSecretApi.md#createProjectSecretAlias) | **POST** /project/{projectId}/secret/{secretId}/alias | Create a secret alias at the project level
[**createProjectSecretOverride**](ProjectSecretApi.md#createProjectSecretOverride) | **POST** /project/{projectId}/secret/{secretId}/override | Create a secret override at the project level
[**deleteProjectSecret**](ProjectSecretApi.md#deleteProjectSecret) | **DELETE** /project/{projectId}/secret/{secretId} | Delete a secret from a project
[**editProjectSecret**](ProjectSecretApi.md#editProjectSecret) | **PUT** /project/{projectId}/secret/{secretId} | Edit a secret belonging to the project
[**listProjectSecrets**](ProjectSecretApi.md#listProjectSecrets) | **GET** /project/{projectId}/secret | List project secrets



## createProjectSecret

> SecretResponse createProjectSecret(projectId, opts)

Add a secret to the project

- Add a secret to the project.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'secretRequest': new QoveryApi.SecretRequest() // SecretRequest | 
};
apiInstance.createProjectSecret(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **secretRequest** | [**SecretRequest**](SecretRequest.md)|  | [optional] 

### Return type

[**SecretResponse**](SecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectSecretAlias

> SecretResponse createProjectSecretAlias(projectId, secretId, opts)

Create a secret alias at the project level

- Allows you to add an alias at project level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at project level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \&quot;aliased_secret\&quot; field of the newly created secret - Only 1 alias level is allowed. You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createProjectSecretAlias(projectId, secretId, opts, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **secretId** | **String**| Secret ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**SecretResponse**](SecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectSecretOverride

> SecretResponse createProjectSecretOverride(projectId, secretId, opts)

Create a secret override at the project level

- Allows you to override at project level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at project level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \&quot;overridden_secret\&quot; field of the newly created secret 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createProjectSecretOverride(projectId, secretId, opts, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **secretId** | **String**| Secret ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**SecretResponse**](SecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectSecret

> deleteProjectSecret(projectId, secretId)

Delete a secret from a project

- To delete a secret you must have the project user permission - You can&#39;t delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteProjectSecret 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
let secretId = "secretId_example"; // String | Secret ID
apiInstance.deleteProjectSecret(projectId, secretId, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **secretId** | **String**| Secret ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editProjectSecret

> SecretResponse editProjectSecret(projectId, secretId, secretEditRequest)

Edit a secret belonging to the project

- You can&#39;t edit a BUILT_IN secret - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
let secretId = "secretId_example"; // String | Secret ID
let secretEditRequest = new QoveryApi.SecretEditRequest(); // SecretEditRequest | 
apiInstance.editProjectSecret(projectId, secretId, secretEditRequest, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 
 **secretId** | **String**| Secret ID | 
 **secretEditRequest** | [**SecretEditRequest**](SecretEditRequest.md)|  | 

### Return type

[**SecretResponse**](SecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listProjectSecrets

> SecretResponseList listProjectSecrets(projectId)

List project secrets

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectSecretApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.listProjectSecrets(projectId, (error, data, response) => {
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
 **projectId** | **String**| Project ID | 

### Return type

[**SecretResponseList**](SecretResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

