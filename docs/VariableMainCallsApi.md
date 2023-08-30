# QoveryApi.VariableMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVariable**](VariableMainCallsApi.md#createVariable) | **POST** /variable | Create a variable
[**createVariableAlias**](VariableMainCallsApi.md#createVariableAlias) | **POST** /variable/{variableId}/alias | Create a variable alias
[**createVariableOverride**](VariableMainCallsApi.md#createVariableOverride) | **POST** /variable/{variableId}/override | Create a variable override
[**deleteVariable**](VariableMainCallsApi.md#deleteVariable) | **DELETE** /variable/{variableId} | Delete a variable
[**editVariable**](VariableMainCallsApi.md#editVariable) | **PUT** /variable/{variableId} | Edit a variable
[**listVariables**](VariableMainCallsApi.md#listVariables) | **GET** /variable | List variables



## createVariable

> VariableResponse createVariable(opts)

Create a variable

- Create a variable with the scope defined in the request body. 

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let opts = {
  'variableRequest': new QoveryApi.VariableRequest() // VariableRequest | 
};
apiInstance.createVariable(opts, (error, data, response) => {
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
 **variableRequest** | [**VariableRequest**](VariableRequest.md)|  | [optional] 

### Return type

[**VariableResponse**](VariableResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVariableAlias

> VariableResponse createVariableAlias(variableId, opts)

Create a variable alias

- Allows you to create an alias of one of the existing variables. - You have to specify an alias (key) in the request body, the scope and the parent id of the alias (project id, environment id or service id) - The system will create a new variable at the requested level with the same value as the one corresponding to the variable id passed as path parameter. - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; or in the \&quot;aliased_secret\&quot; field of the newly created variable - You can&#39;t create an alias on an alias 

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let variableId = "variableId_example"; // String | Variable ID
let opts = {
  'variableAliasRequest': new QoveryApi.VariableAliasRequest() // VariableAliasRequest | 
};
apiInstance.createVariableAlias(variableId, opts, (error, data, response) => {
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
 **variableId** | **String**| Variable ID | 
 **variableAliasRequest** | [**VariableAliasRequest**](VariableAliasRequest.md)|  | [optional] 

### Return type

[**VariableResponse**](VariableResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVariableOverride

> VariableResponse createVariableOverride(variableId, opts)

Create a variable override

- Allows you to override a variable that has a higher scope. - You have to specify a value (override) in the request body and the scope and the parent id of the variable to override (project id, environment id or service id) - The system will create a new environment variable at the requested level with the same key as the one corresponding to the variable id passed as path parameter. - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; or in the \&quot;overridden_secret\&quot; field of the newly created variable 

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let variableId = "variableId_example"; // String | Variable ID
let opts = {
  'variableOverrideRequest': new QoveryApi.VariableOverrideRequest() // VariableOverrideRequest | 
};
apiInstance.createVariableOverride(variableId, opts, (error, data, response) => {
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
 **variableId** | **String**| Variable ID | 
 **variableOverrideRequest** | [**VariableOverrideRequest**](VariableOverrideRequest.md)|  | [optional] 

### Return type

[**VariableResponse**](VariableResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVariable

> deleteVariable(variableId)

Delete a variable

- To delete a variable - You can&#39;t delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let variableId = "variableId_example"; // String | Variable ID
apiInstance.deleteVariable(variableId, (error, data, response) => {
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
 **variableId** | **String**| Variable ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editVariable

> VariableResponse editVariable(variableId, variableEditRequest)

Edit a variable

- You can&#39;t edit a BUILT_IN variable - For an override, you can&#39;t edit the key - For an alias, you can&#39;t edit the value 

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let variableId = "variableId_example"; // String | Variable ID
let variableEditRequest = new QoveryApi.VariableEditRequest(); // VariableEditRequest | 
apiInstance.editVariable(variableId, variableEditRequest, (error, data, response) => {
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
 **variableId** | **String**| Variable ID | 
 **variableEditRequest** | [**VariableEditRequest**](VariableEditRequest.md)|  | 

### Return type

[**VariableResponse**](VariableResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listVariables

> VariableResponseList listVariables(opts)

List variables

Returns a list of variables. The result can be filtered by using the query parameters.

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

let apiInstance = new QoveryApi.VariableMainCallsApi();
let opts = {
  'parentId': "parentId_example", // String | it filters the list by returning only the variables accessible by the selected parent_id. This field shall contain the id of a project, environment or service depending on the selected scope. Example, if scope = APPLICATION and parent_id=<application_id>, the result will contain any variable accessible by the application. The result will contain also any variable declared at an higher scope.
  'scope': new QoveryApi.APIVariableScopeEnum(), // APIVariableScopeEnum | the type of the parent_id (application, project, environment etc..).
  'isSecret': true // Boolean | 
};
apiInstance.listVariables(opts, (error, data, response) => {
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
 **parentId** | **String**| it filters the list by returning only the variables accessible by the selected parent_id. This field shall contain the id of a project, environment or service depending on the selected scope. Example, if scope &#x3D; APPLICATION and parent_id&#x3D;&lt;application_id&gt;, the result will contain any variable accessible by the application. The result will contain also any variable declared at an higher scope. | [optional] 
 **scope** | [**APIVariableScopeEnum**](.md)| the type of the parent_id (application, project, environment etc..). | [optional] 
 **isSecret** | **Boolean**|  | [optional] 

### Return type

[**VariableResponseList**](VariableResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

