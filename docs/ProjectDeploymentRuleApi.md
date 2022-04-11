# QoveryApi.ProjectDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentRule**](ProjectDeploymentRuleApi.md#createDeploymentRule) | **POST** /project/{projectId}/deploymentRule | Create a deployment rule
[**deleteProjectDeploymentRule**](ProjectDeploymentRuleApi.md#deleteProjectDeploymentRule) | **DELETE** /project/{projectId}/deploymentRule/{deploymentRuleId} | Delete a project deployment rule
[**editProjectDeployemtnRule**](ProjectDeploymentRuleApi.md#editProjectDeployemtnRule) | **PUT** /project/{projectId}/deploymentRule/{deploymentRuleId} | Edit a project deployment rule
[**getProjectDeploymentRule**](ProjectDeploymentRuleApi.md#getProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule/{deploymentRuleId} | Get a project deployment rule
[**listProjectDeploymentRules**](ProjectDeploymentRuleApi.md#listProjectDeploymentRules) | **GET** /project/{projectId}/deploymentRule | List project deployment rules
[**updateDeploymentRulesPriorityOrder**](ProjectDeploymentRuleApi.md#updateDeploymentRulesPriorityOrder) | **PUT** /project/{projectId}/deploymentRule/order | Update deployment rules priority order



## createDeploymentRule

> ProjectDeploymentRule createDeploymentRule(projectId, opts)

Create a deployment rule

Create a deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'projectDeploymentRuleRequest': new QoveryApi.ProjectDeploymentRuleRequest() // ProjectDeploymentRuleRequest | 
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

[**ProjectDeploymentRule**](ProjectDeploymentRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectDeploymentRule

> deleteProjectDeploymentRule(projectId, deploymentRuleId)

Delete a project deployment rule

Delete a project deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
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

> ProjectDeploymentRule editProjectDeployemtnRule(projectId, deploymentRuleId, opts)

Edit a project deployment rule

Edit a project deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
let opts = {
  'projectDeploymentRuleRequest': new QoveryApi.ProjectDeploymentRuleRequest() // ProjectDeploymentRuleRequest | 
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

[**ProjectDeploymentRule**](ProjectDeploymentRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProjectDeploymentRule

> ProjectDeploymentRule getProjectDeploymentRule(projectId, deploymentRuleId)

Get a project deployment rule

Get a project deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
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

[**ProjectDeploymentRule**](ProjectDeploymentRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProjectDeploymentRules

> ProjectDeploymentRuleResponseList listProjectDeploymentRules(projectId)

List project deployment rules

List project deployment rules

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.listProjectDeploymentRules(projectId, (error, data, response) => {
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


## updateDeploymentRulesPriorityOrder

> updateDeploymentRulesPriorityOrder(projectId, opts)

Update deployment rules priority order

Update deployment rules priority order

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ProjectDeploymentRuleApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'projectDeploymentRulesPriorityOrderRequest': new QoveryApi.ProjectDeploymentRulesPriorityOrderRequest() // ProjectDeploymentRulesPriorityOrderRequest | 
};
apiInstance.updateDeploymentRulesPriorityOrder(projectId, opts, (error, data, response) => {
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
 **projectDeploymentRulesPriorityOrderRequest** | [**ProjectDeploymentRulesPriorityOrderRequest**](ProjectDeploymentRulesPriorityOrderRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

