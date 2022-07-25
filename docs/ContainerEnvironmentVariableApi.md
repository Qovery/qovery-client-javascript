# QoveryApi.ContainerEnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerEnvironmentVariable**](ContainerEnvironmentVariableApi.md#createContainerEnvironmentVariable) | **POST** /container/{containerId}/environmentVariable | Add an environment variable to the container
[**createContainerEnvironmentVariableAlias**](ContainerEnvironmentVariableApi.md#createContainerEnvironmentVariableAlias) | **POST** /container/{containerId}/environmentVariable/{environmentVariableId}/alias | NOT YET IMPLEMENTED - Create an environment variable alias at the container level
[**createContainerEnvironmentVariableOverride**](ContainerEnvironmentVariableApi.md#createContainerEnvironmentVariableOverride) | **POST** /container/{containerId}/environmentVariable/{environmentVariableId}/override | NOT YET IMPLEMENTED - Create an environment variable override at the container level
[**deleteContainerEnvironmentVariable**](ContainerEnvironmentVariableApi.md#deleteContainerEnvironmentVariable) | **DELETE** /container/{containerId}/environmentVariable/{environmentVariableId} | NOT YET IMPLEMENTED - Delete an environment variable from a container
[**editContainerEnvironmentVariable**](ContainerEnvironmentVariableApi.md#editContainerEnvironmentVariable) | **PUT** /container/{containerId}/environmentVariable/{environmentVariableId} | NOT YET IMPLEMENTED - Edit an environment variable belonging to the container
[**importContainerEnvironmentVariable**](ContainerEnvironmentVariableApi.md#importContainerEnvironmentVariable) | **POST** /container/{containerId}/environmentVariable/import | NOT YET IMPLEMENTED - Import variables
[**listContainerEnvironmentVariable**](ContainerEnvironmentVariableApi.md#listContainerEnvironmentVariable) | **GET** /container/{containerId}/environmentVariable | NOT YET IMPLEMENTED - List environment variables



## createContainerEnvironmentVariable

> EnvironmentVariable createContainerEnvironmentVariable(containerId, opts)

Add an environment variable to the container

- Add an environment variable to the container. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'environmentVariableRequest': new QoveryApi.EnvironmentVariableRequest() // EnvironmentVariableRequest | 
};
apiInstance.createContainerEnvironmentVariable(containerId, opts, (error, data, response) => {
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
 **environmentVariableRequest** | [**EnvironmentVariableRequest**](EnvironmentVariableRequest.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainerEnvironmentVariableAlias

> EnvironmentVariable createContainerEnvironmentVariableAlias(containerId, environmentVariableId, opts)

NOT YET IMPLEMENTED - Create an environment variable alias at the container level

- Allows you to add an alias at container level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at container level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; field of the newly created variable - Only 1 alias level is allowed. You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'key': new QoveryApi.Key() // Key | 
};
apiInstance.createContainerEnvironmentVariableAlias(containerId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainerEnvironmentVariableOverride

> EnvironmentVariable createContainerEnvironmentVariableOverride(containerId, environmentVariableId, opts)

NOT YET IMPLEMENTED - Create an environment variable override at the container level

- Allows you to override at container level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at container level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; field of the newly created variable 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'value': new QoveryApi.Value() // Value | 
};
apiInstance.createContainerEnvironmentVariableOverride(containerId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainerEnvironmentVariable

> deleteContainerEnvironmentVariable(containerId, environmentVariableId)

NOT YET IMPLEMENTED - Delete an environment variable from a container

- To delete an environment variable from an container you must have the project user permission - You can&#39;t delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
apiInstance.deleteContainerEnvironmentVariable(containerId, environmentVariableId, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editContainerEnvironmentVariable

> EnvironmentVariable editContainerEnvironmentVariable(containerId, environmentVariableId, environmentVariableEditRequest)

NOT YET IMPLEMENTED - Edit an environment variable belonging to the container

- You can&#39;t edit a BUILT_IN variable - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; CONTAINER) 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let environmentVariableEditRequest = new QoveryApi.EnvironmentVariableEditRequest(); // EnvironmentVariableEditRequest | 
apiInstance.editContainerEnvironmentVariable(containerId, environmentVariableId, environmentVariableEditRequest, (error, data, response) => {
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
 **environmentVariableId** | **String**| Environment Variable ID | 
 **environmentVariableEditRequest** | [**EnvironmentVariableEditRequest**](EnvironmentVariableEditRequest.md)|  | 

### Return type

[**EnvironmentVariable**](EnvironmentVariable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importContainerEnvironmentVariable

> VariableImport importContainerEnvironmentVariable(containerId, opts)

NOT YET IMPLEMENTED - Import variables

Import environment variables in a defined scope, with a defined visibility.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'variableImportRequest': new QoveryApi.VariableImportRequest() // VariableImportRequest | 
};
apiInstance.importContainerEnvironmentVariable(containerId, opts, (error, data, response) => {
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
 **variableImportRequest** | [**VariableImportRequest**](VariableImportRequest.md)|  | [optional] 

### Return type

[**VariableImport**](VariableImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listContainerEnvironmentVariable

> EnvironmentVariableResponseList listContainerEnvironmentVariable(containerId)

NOT YET IMPLEMENTED - List environment variables

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEnvironmentVariableApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerEnvironmentVariable(containerId, (error, data, response) => {
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

[**EnvironmentVariableResponseList**](EnvironmentVariableResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

