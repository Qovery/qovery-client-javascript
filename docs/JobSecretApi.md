# QoveryApi.JobSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJobSecret**](JobSecretApi.md#createJobSecret) | **POST** /job/{jobId}/secret | Add a secret to the job
[**createJobSecretAlias**](JobSecretApi.md#createJobSecretAlias) | **POST** /job/{jobId}/secret/{secretId}/alias | Create a secret alias at the job level
[**createJobSecretOverride**](JobSecretApi.md#createJobSecretOverride) | **POST** /job/{jobId}/secret/{secretId}/override | Create a secret override at the job level
[**deleteJobSecret**](JobSecretApi.md#deleteJobSecret) | **DELETE** /job/{jobId}/secret/{secretId} | Delete a secret from an job
[**editJobSecret**](JobSecretApi.md#editJobSecret) | **PUT** /job/{jobId}/secret/{secretId} | Edit a secret belonging to the job
[**listJobSecrets**](JobSecretApi.md#listJobSecrets) | **GET** /job/{jobId}/secret | List job secrets



## createJobSecret

> Secret createJobSecret(jobId, opts)

Add a secret to the job

- Add a secret to the job. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'secretRequest': new QoveryApi.SecretRequest() // SecretRequest | 
};
apiInstance.createJobSecret(jobId, opts, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **secretRequest** | [**SecretRequest**](SecretRequest.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createJobSecretAlias

> Secret createJobSecretAlias(jobId, secretId, opts)

Create a secret alias at the job level

- Allows you to add an alias at job level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at job level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \&quot;aliased_secret\&quot; field of the newly created secret - You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createJobSecretAlias(jobId, secretId, opts, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **secretId** | **String**| Secret ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createJobSecretOverride

> Secret createJobSecretOverride(jobId, secretId, opts)

Create a secret override at the job level

- Allows you to override at job level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at job level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \&quot;overridden_secret\&quot; field of the newly created secret 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
let secretId = "secretId_example"; // String | Secret ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createJobSecretOverride(jobId, secretId, opts, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **secretId** | **String**| Secret ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteJobSecret

> deleteJobSecret(jobId, secretId)

Delete a secret from an job

- To delete a secret you must have the project user permission - You can&#39;t delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
let secretId = "secretId_example"; // String | Secret ID
apiInstance.deleteJobSecret(jobId, secretId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **secretId** | **String**| Secret ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editJobSecret

> Secret editJobSecret(jobId, secretId, secretEditRequest)

Edit a secret belonging to the job

- You can&#39;t edit a BUILT_IN secret - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; CONTAINER) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
let secretId = "secretId_example"; // String | Secret ID
let secretEditRequest = new QoveryApi.SecretEditRequest(); // SecretEditRequest | 
apiInstance.editJobSecret(jobId, secretId, secretEditRequest, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **secretId** | **String**| Secret ID | 
 **secretEditRequest** | [**SecretEditRequest**](SecretEditRequest.md)|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listJobSecrets

> SecretResponseList listJobSecrets(jobId)

List job secrets

Secrets are like environment variables, but they are secured and can&#39;t be revealed.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobSecretApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.listJobSecrets(jobId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 

### Return type

[**SecretResponseList**](SecretResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

