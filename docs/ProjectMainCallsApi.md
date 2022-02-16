# BetaQoveryApi.ProjectMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProject**](ProjectMainCallsApi.md#deleteProject) | **DELETE** /project/{projectId} | Delete a project
[**editProject**](ProjectMainCallsApi.md#editProject) | **PUT** /project/{projectId} | Edit a project
[**getProject**](ProjectMainCallsApi.md#getProject) | **GET** /project/{projectId} | Get project by ID



## deleteProject

> deleteProject(projectId)

Delete a project

To delete a project you must have the admin permission

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectMainCallsApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.deleteProject(projectId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editProject

> ProjectResponse editProject(projectId, opts)

Edit a project

To edit a project you must have the admin permission

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectMainCallsApi();
let projectId = "projectId_example"; // String | Project ID
let opts = {
  'projectRequest': new BetaQoveryApi.ProjectRequest() // ProjectRequest | 
};
apiInstance.editProject(projectId, opts, (error, data, response) => {
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
 **projectRequest** | [**ProjectRequest**](ProjectRequest.md)|  | [optional] 

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProject

> ProjectResponse getProject(projectId)

Get project by ID

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectMainCallsApi();
let projectId = "projectId_example"; // String | Project ID
apiInstance.getProject(projectId, (error, data, response) => {
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

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

