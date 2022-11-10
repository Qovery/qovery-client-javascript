# QoveryApi.JobEnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJobEnvironmentVariable**](JobEnvironmentVariableApi.md#createJobEnvironmentVariable) | **POST** /job/{jobId}/environmentVariable | Add an environment variable to the job
[**createJobEnvironmentVariableAlias**](JobEnvironmentVariableApi.md#createJobEnvironmentVariableAlias) | **POST** /job/{jobId}/environmentVariable/{environmentVariableId}/alias | Create an environment variable alias at the job level
[**createJobEnvironmentVariableOverride**](JobEnvironmentVariableApi.md#createJobEnvironmentVariableOverride) | **POST** /job/{jobId}/environmentVariable/{environmentVariableId}/override | Create an environment variable override at the job level
[**deleteJobEnvironmentVariable**](JobEnvironmentVariableApi.md#deleteJobEnvironmentVariable) | **DELETE** /job/{jobId}/environmentVariable/{environmentVariableId} | Delete an environment variable from a job
[**editJobEnvironmentVariable**](JobEnvironmentVariableApi.md#editJobEnvironmentVariable) | **PUT** /job/{jobId}/environmentVariable/{environmentVariableId} | Edit an environment variable belonging to the job
[**importJobEnvironmentVariable**](JobEnvironmentVariableApi.md#importJobEnvironmentVariable) | **POST** /job/{jobId}/environmentVariable/import | Import variables
[**listJobEnvironmentVariable**](JobEnvironmentVariableApi.md#listJobEnvironmentVariable) | **GET** /job/{jobId}/environmentVariable | List environment variables



## createJobEnvironmentVariable

> EnvironmentVariable createJobEnvironmentVariable(opts)

Add an environment variable to the job

- Add an environment variable to the job. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let opts = {
  'environmentVariableRequest': new QoveryApi.EnvironmentVariableRequest() // EnvironmentVariableRequest | 
};
apiInstance.createJobEnvironmentVariable(opts, (error, data, response) => {
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
 **environmentVariableRequest** | [**EnvironmentVariableRequest**](EnvironmentVariableRequest.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createJobEnvironmentVariableAlias

> EnvironmentVariable createJobEnvironmentVariableAlias(environmentVariableId, opts)

Create an environment variable alias at the job level

- Allows you to add an alias at job level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at job level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; field of the newly created variable - Only 1 alias level is allowed. You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createJobEnvironmentVariableAlias(environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createJobEnvironmentVariableOverride

> EnvironmentVariable createJobEnvironmentVariableOverride(environmentVariableId, opts)

Create an environment variable override at the job level

- Allows you to override at job level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at job level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; field of the newly created variable 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createJobEnvironmentVariableOverride(environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteJobEnvironmentVariable

> deleteJobEnvironmentVariable(environmentVariableId)

Delete an environment variable from a job

- To delete an environment variable from an job you must have the project user permission - You can&#39;t delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
apiInstance.deleteJobEnvironmentVariable(environmentVariableId, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editJobEnvironmentVariable

> EnvironmentVariable editJobEnvironmentVariable(environmentVariableId, environmentVariableEditRequest)

Edit an environment variable belonging to the job

- You can&#39;t edit a BUILT_IN variable - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; CONTAINER) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let environmentVariableEditRequest = new QoveryApi.EnvironmentVariableEditRequest(); // EnvironmentVariableEditRequest | 
apiInstance.editJobEnvironmentVariable(environmentVariableId, environmentVariableEditRequest, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **environmentVariableEditRequest** | [**EnvironmentVariableEditRequest**](EnvironmentVariableEditRequest.md)|  | 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importJobEnvironmentVariable

> VariableImport importJobEnvironmentVariable(opts)

Import variables

Import environment variables in a defined scope, with a defined visibility.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
let opts = {
  'variableImportRequest': new QoveryApi.VariableImportRequest() // VariableImportRequest | 
};
apiInstance.importJobEnvironmentVariable(opts, (error, data, response) => {
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
 **variableImportRequest** | [**VariableImportRequest**](VariableImportRequest.md)|  | [optional] 

### Return type

[**VariableImport**](VariableImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listJobEnvironmentVariable

> EnvironmentVariableResponseList listJobEnvironmentVariable()

List environment variables

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobEnvironmentVariableApi();
apiInstance.listJobEnvironmentVariable((error, data, response) => {
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

[**EnvironmentVariableResponseList**](EnvironmentVariableResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

