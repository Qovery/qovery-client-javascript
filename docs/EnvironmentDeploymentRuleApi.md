# QoveryApi.EnvironmentDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#editEnvironmentDeploymentRule) | **PUT** /environment/{environmentId}/deploymentRule/{deploymentRuleId} | Edit an environment deployment rule
[**getEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#getEnvironmentDeploymentRule) | **GET** /environment/{environmentId}/deploymentRule | Get environment deployment rule



## editEnvironmentDeploymentRule

> EnvironmentDeploymentRule editEnvironmentDeploymentRule(environmentId, deploymentRuleId, opts)

Edit an environment deployment rule

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

let apiInstance = new QoveryApi.EnvironmentDeploymentRuleApi();
let environmentId = "environmentId_example"; // String | Environment ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
let opts = {
  'environmentDeploymentRuleEditRequest': new QoveryApi.EnvironmentDeploymentRuleEditRequest() // EnvironmentDeploymentRuleEditRequest | 
};
apiInstance.editEnvironmentDeploymentRule(environmentId, deploymentRuleId, opts, (error, data, response) => {
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
 **deploymentRuleId** | **String**| Deployment Rule ID | 
 **environmentDeploymentRuleEditRequest** | [**EnvironmentDeploymentRuleEditRequest**](EnvironmentDeploymentRuleEditRequest.md)|  | [optional] 

### Return type

[**EnvironmentDeploymentRule**](EnvironmentDeploymentRule.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEnvironmentDeploymentRule

> EnvironmentDeploymentRule getEnvironmentDeploymentRule(environmentId)

Get environment deployment rule

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

let apiInstance = new QoveryApi.EnvironmentDeploymentRuleApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentDeploymentRule(environmentId, (error, data, response) => {
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

[**EnvironmentDeploymentRule**](EnvironmentDeploymentRule.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

