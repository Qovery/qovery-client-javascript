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

- Create a variable at the level defined in the request body. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVariableAlias

> VariableResponse createVariableAlias(variableId, opts)

Create a variable alias

- Allows you to add an alias at the level defined in the request body on an existing variable having a higher scope, in order to customize its key. - You have to specify a key in the request body and the scope and the parent id of the alias - The system will create a new variable at the requested level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \&quot;aliased_variable\&quot; or in the \&quot;aliased_secret\&quot; field of the newly created variable - Only 1 alias level is allowed. You can&#39;t create an alias on an alias 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVariableOverride

> VariableResponse createVariableOverride(variableId, opts)

Create a variable override

- Allows you to override a variable that has a higher scope. - You have to specify a value in the request body and the scope and the parent id of the variable to alias - The system will create a new environment variable at project level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \&quot;overridden_variable\&quot; or in the \&quot;overridden_secret\&quot; field of the newly created variable 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
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

[bearerAuth](../README.md#bearerAuth)

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

[bearerAuth](../README.md#bearerAuth)

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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listVariables

> VariableResponseList listVariables(opts)

List variables

Returns a list of variables

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.VariableMainCallsApi();
let opts = {
  'parentId': "parentId_example", // String | the id where the variable will be added
  'scope': new QoveryApi.APIVariableScopeEnum(), // APIVariableScopeEnum | the scope of the parent where the variable will be added
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
 **parentId** | **String**| the id where the variable will be added | [optional] 
 **scope** | [**APIVariableScopeEnum**](.md)| the scope of the parent where the variable will be added | [optional] 
 **isSecret** | **Boolean**|  | [optional] 

### Return type

[**VariableResponseList**](VariableResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

