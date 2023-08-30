# QoveryApi.ApplicationEnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariable) | **POST** /application/{applicationId}/environmentVariable | Add an environment variable to the application
[**createApplicationEnvironmentVariableAlias**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariableAlias) | **POST** /application/{applicationId}/environmentVariable/{environmentVariableId}/alias | Create an environment variable alias at the application level
[**createApplicationEnvironmentVariableOverride**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariableOverride) | **POST** /application/{applicationId}/environmentVariable/{environmentVariableId}/override | Create an environment variable override at the application level
[**deleteApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#deleteApplicationEnvironmentVariable) | **DELETE** /application/{applicationId}/environmentVariable/{environmentVariableId} | Delete an environment variable from an application
[**editApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#editApplicationEnvironmentVariable) | **PUT** /application/{applicationId}/environmentVariable/{environmentVariableId} | Edit an environment variable belonging to the application
[**importEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#importEnvironmentVariable) | **POST** /application/{applicationId}/environmentVariable/import | Import variables
[**listApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#listApplicationEnvironmentVariable) | **GET** /application/{applicationId}/environmentVariable | List environment variables



## createApplicationEnvironmentVariable

> EnvironmentVariable createApplicationEnvironmentVariable(applicationId, opts)

Add an environment variable to the application

- Add an environment variable to the application. 

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'environmentVariableRequest': new QoveryApi.EnvironmentVariableRequest() // EnvironmentVariableRequest | 
};
apiInstance.createApplicationEnvironmentVariable(applicationId, opts, (error, data, response) => {
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
 **environmentVariableRequest** | [**EnvironmentVariableRequest**](EnvironmentVariableRequest.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApplicationEnvironmentVariableAlias

> EnvironmentVariable createApplicationEnvironmentVariableAlias(applicationId, environmentVariableId, opts)

Create an environment variable alias at the application level

- Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; field of the newly created variable - You can&#39;t create an alias on an alias 

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createApplicationEnvironmentVariableAlias(applicationId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApplicationEnvironmentVariableOverride

> EnvironmentVariable createApplicationEnvironmentVariableOverride(applicationId, environmentVariableId, opts)

Create an environment variable override at the application level

- Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; field of the newly created variable 

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createApplicationEnvironmentVariableOverride(applicationId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationEnvironmentVariable

> deleteApplicationEnvironmentVariable(applicationId, environmentVariableId)

Delete an environment variable from an application

- To delete an environment variable from an application you must have the project user permission - You can&#39;t delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
apiInstance.deleteApplicationEnvironmentVariable(applicationId, environmentVariableId, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editApplicationEnvironmentVariable

> EnvironmentVariable editApplicationEnvironmentVariable(applicationId, environmentVariableId, environmentVariableEditRequest)

Edit an environment variable belonging to the application

- You can&#39;t edit a BUILT_IN variable - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION) 

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let environmentVariableEditRequest = new QoveryApi.EnvironmentVariableEditRequest(); // EnvironmentVariableEditRequest | 
apiInstance.editApplicationEnvironmentVariable(applicationId, environmentVariableId, environmentVariableEditRequest, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **environmentVariableEditRequest** | [**EnvironmentVariableEditRequest**](EnvironmentVariableEditRequest.md)|  | 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importEnvironmentVariable

> VariableImport importEnvironmentVariable(applicationId, opts)

Import variables

Import environment variables in a defined scope, with a defined visibility.

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'variableImportRequest': new QoveryApi.VariableImportRequest() // VariableImportRequest | 
};
apiInstance.importEnvironmentVariable(applicationId, opts, (error, data, response) => {
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
 **variableImportRequest** | [**VariableImportRequest**](VariableImportRequest.md)|  | [optional] 

### Return type

[**VariableImport**](VariableImport.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listApplicationEnvironmentVariable

> EnvironmentVariableResponseList listApplicationEnvironmentVariable(applicationId)

List environment variables

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

let apiInstance = new QoveryApi.ApplicationEnvironmentVariableApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.listApplicationEnvironmentVariable(applicationId, (error, data, response) => {
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

[**EnvironmentVariableResponseList**](EnvironmentVariableResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

