# BetaQoveryApi.EnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariable) | **POST** /environment/{environmentId}/environmentVariable | Add an environment variable to the environment
[**createEnvironmentEnvironmentVariableAlias**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariableAlias) | **POST** /environment/{environmentId}/environmentVariable/{environmentVariableId}/alias | Create an environment variable alias at the environment level
[**createEnvironmentEnvironmentVariableOverride**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariableOverride) | **POST** /environment/{environmentId}/environmentVariable/{environmentVariableId}/override | Create an environment variable override at the environment level
[**deleteEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#deleteEnvironmentEnvironmentVariable) | **DELETE** /environment/{environmentId}/environmentVariable/{environmentVariableId} | Delete an environment variable from an environment
[**editEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#editEnvironmentEnvironmentVariable) | **PUT** /environment/{environmentId}/environmentVariable/{environmentVariableId} | Edit an environment variable belonging to the environment
[**listEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#listEnvironmentEnvironmentVariable) | **GET** /environment/{environmentId}/environmentVariable | List environment variables



## createEnvironmentEnvironmentVariable

> EnvironmentVariableResponse createEnvironmentEnvironmentVariable(environmentId, opts)

Add an environment variable to the environment

- Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'environmentVariableRequest': new BetaQoveryApi.EnvironmentVariableRequest() // EnvironmentVariableRequest | 
};
apiInstance.createEnvironmentEnvironmentVariable(environmentId, opts, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **environmentVariableRequest** | [**EnvironmentVariableRequest**](EnvironmentVariableRequest.md)|  | [optional] 

### Return type

[**EnvironmentVariableResponse**](EnvironmentVariableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEnvironmentEnvironmentVariableAlias

> EnvironmentVariableResponse createEnvironmentEnvironmentVariableAlias(environmentId, environmentVariableId, opts)

Create an environment variable alias at the environment level

- Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; field of the newly created variable - Only 1 alias level is allowed. You can&#39;t create an alias on an alias 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'key': new BetaQoveryApi.Key() // Key | 
};
apiInstance.createEnvironmentEnvironmentVariableAlias(environmentId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **environmentVariableId** | **String**| Environment Variable ID | 
 **key** | [**Key**](Key.md)|  | [optional] 

### Return type

[**EnvironmentVariableResponse**](EnvironmentVariableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEnvironmentEnvironmentVariableOverride

> EnvironmentVariableResponse createEnvironmentEnvironmentVariableOverride(environmentId, environmentVariableId, opts)

Create an environment variable override at the environment level

- Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; field of the newly created variable 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let opts = {
  'value': new BetaQoveryApi.Value() // Value | 
};
apiInstance.createEnvironmentEnvironmentVariableOverride(environmentId, environmentVariableId, opts, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **environmentVariableId** | **String**| Environment Variable ID | 
 **value** | [**Value**](Value.md)|  | [optional] 

### Return type

[**EnvironmentVariableResponse**](EnvironmentVariableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEnvironmentEnvironmentVariable

> deleteEnvironmentEnvironmentVariable(environmentId, environmentVariableId)

Delete an environment variable from an environment

- To delete an environment variable you must have the project user permission - You can&#39;t delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
apiInstance.deleteEnvironmentEnvironmentVariable(environmentId, environmentVariableId, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **environmentVariableId** | **String**| Environment Variable ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editEnvironmentEnvironmentVariable

> EnvironmentVariableResponse editEnvironmentEnvironmentVariable(environmentId, environmentVariableId, environmentVariableEditRequest)

Edit an environment variable belonging to the environment

- You can&#39;t edit a BUILT_IN variable - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION) 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
let environmentVariableId = "environmentVariableId_example"; // String | Environment Variable ID
let environmentVariableEditRequest = new BetaQoveryApi.EnvironmentVariableEditRequest(); // EnvironmentVariableEditRequest | 
apiInstance.editEnvironmentEnvironmentVariable(environmentId, environmentVariableId, environmentVariableEditRequest, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **environmentVariableId** | **String**| Environment Variable ID | 
 **environmentVariableEditRequest** | [**EnvironmentVariableEditRequest**](EnvironmentVariableEditRequest.md)|  | 

### Return type

[**EnvironmentVariableResponse**](EnvironmentVariableResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listEnvironmentEnvironmentVariable

> EnvironmentVariableResponseList listEnvironmentEnvironmentVariable(environmentId)

List environment variables

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentVariableApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentEnvironmentVariable(environmentId, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 

### Return type

[**EnvironmentVariableResponseList**](EnvironmentVariableResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

