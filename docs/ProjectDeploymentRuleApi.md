# BetaQoveryApi.ProjectDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentRule**](ProjectDeploymentRuleApi.md#createDeploymentRule) | **POST** /project/{projectId}/deploymentRule | Create a deployment rule
[**deleteProjectDeploymentRule**](ProjectDeploymentRuleApi.md#deleteProjectDeploymentRule) | **DELETE** /project/{projectId}/deploymentRule/{deploymentRuleId} | Delete a project deployment rule
[**editProjectDeployemtnRule**](ProjectDeploymentRuleApi.md#editProjectDeployemtnRule) | **PUT** /project/{projectId}/deploymentRule/{deploymentRuleId} | Edit a project deployment rule
[**getProjectDeploymentRule**](ProjectDeploymentRuleApi.md#getProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule/{deploymentRuleId} | Get project deployment rule
[**listProjectDeploymentRule**](ProjectDeploymentRuleApi.md#listProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule | List project deployment rules



## createDeploymentRule

> ProjectDeploymentRuleResponse createDeploymentRule(projectId, opts)

Create a deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'projectDeploymentRuleRequest': new BetaQoveryApi.ProjectDeploymentRuleRequest() // ProjectDeploymentRuleRequest | 
};
apiInstance.createDeploymentRule(projectId, opts, (error, data, response) => {
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
 **projectDeploymentRuleRequest** | [**ProjectDeploymentRuleRequest**](ProjectDeploymentRuleRequest.md)|  | [optional] 

### Return type

[**ProjectDeploymentRuleResponse**](ProjectDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectDeploymentRule

> deleteProjectDeploymentRule(projectId, deploymentRuleId)

Delete a project deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
apiInstance.deleteProjectDeploymentRule(projectId, deploymentRuleId, (error, data, response) => {
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
 **deploymentRuleId** | **String**| Deployment Rule ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editProjectDeployemtnRule

> ProjectDeploymentRuleResponse editProjectDeployemtnRule(projectId, deploymentRuleId, opts)

Edit a project deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
let opts = {
  'projectDeploymentRuleRequest': new BetaQoveryApi.ProjectDeploymentRuleRequest() // ProjectDeploymentRuleRequest | 
};
apiInstance.editProjectDeployemtnRule(projectId, deploymentRuleId, opts, (error, data, response) => {
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
 **deploymentRuleId** | **String**| Deployment Rule ID | 
 **projectDeploymentRuleRequest** | [**ProjectDeploymentRuleRequest**](ProjectDeploymentRuleRequest.md)|  | [optional] 

### Return type

[**ProjectDeploymentRuleResponse**](ProjectDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProjectDeploymentRule

> ProjectDeploymentRuleResponse getProjectDeploymentRule(projectId, deploymentRuleId)

Get project deployment rule

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
apiInstance.getProjectDeploymentRule(projectId, deploymentRuleId, (error, data, response) => {
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
 **deploymentRuleId** | **String**| Deployment Rule ID | 

### Return type

[**ProjectDeploymentRuleResponse**](ProjectDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProjectDeploymentRule

> ProjectDeploymentRuleResponseList listProjectDeploymentRule(projectId)

List project deployment rules

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.listProjectDeploymentRule(projectId, (error, data, response) => {
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

[**ProjectDeploymentRuleResponseList**](ProjectDeploymentRuleResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

