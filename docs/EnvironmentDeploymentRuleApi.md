# BetaQoveryApi.EnvironmentDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#editEnvironmentDeploymentRule) | **PUT** /environment/{environmentId}/deploymentRule/{deploymentRuleId} | Edit an environment deployment rule
[**getEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#getEnvironmentDeploymentRule) | **GET** /environment/{environmentId}/deploymentRule | Get environment deployment rule



## editEnvironmentDeploymentRule

> EnvironmentDeploymentRuleResponse editEnvironmentDeploymentRule(environmentId, deploymentRuleId, opts)

Edit an environment deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentDeploymentRuleApi();
let environmentId = "environmentId_example"; // String | Environment ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
let opts = {
  'environmentDeploymentRuleEditRequest': new BetaQoveryApi.EnvironmentDeploymentRuleEditRequest() // EnvironmentDeploymentRuleEditRequest | 
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

[**EnvironmentDeploymentRuleResponse**](EnvironmentDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEnvironmentDeploymentRule

> EnvironmentDeploymentRuleResponse getEnvironmentDeploymentRule(environmentId)

Get environment deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentDeploymentRuleApi();
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

[**EnvironmentDeploymentRuleResponse**](EnvironmentDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

