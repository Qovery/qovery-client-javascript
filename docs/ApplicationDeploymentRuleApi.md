# QoveryApi.ApplicationDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editApplicationDeploymentRule**](ApplicationDeploymentRuleApi.md#editApplicationDeploymentRule) | **PUT** /application/{applicationId}/deploymentRule/{deploymentRuleId} | Edit an application deployment rule
[**getApplicationDeploymentRule**](ApplicationDeploymentRuleApi.md#getApplicationDeploymentRule) | **GET** /application/{applicationId}/deploymentRule | Get application deployment rule



## editApplicationDeploymentRule

> ApplicationDeploymentRuleResponse editApplicationDeploymentRule(applicationId, deploymentRuleId, opts)

Edit an application deployment rule

Edit an application deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRuleApi();
let applicationId = "applicationId_example"; // String | Application ID
let deploymentRuleId = "deploymentRuleId_example"; // String | Deployment Rule ID
let opts = {
  'applicationDeploymentRuleEditRequest': new QoveryApi.ApplicationDeploymentRuleEditRequest() // ApplicationDeploymentRuleEditRequest | 
};
apiInstance.editApplicationDeploymentRule(applicationId, deploymentRuleId, opts, (error, data, response) => {
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
 **deploymentRuleId** | **String**| Deployment Rule ID | 
 **applicationDeploymentRuleEditRequest** | [**ApplicationDeploymentRuleEditRequest**](ApplicationDeploymentRuleEditRequest.md)|  | [optional] 

### Return type

[**ApplicationDeploymentRuleResponse**](ApplicationDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApplicationDeploymentRule

> ApplicationDeploymentRuleResponse getApplicationDeploymentRule(applicationId)

Get application deployment rule

Get application deployment rule

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationDeploymentRuleApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationDeploymentRule(applicationId, (error, data, response) => {
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

[**ApplicationDeploymentRuleResponse**](ApplicationDeploymentRuleResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

