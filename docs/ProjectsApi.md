# BetaQoveryApi.ProjectsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectsApi.md#createProject) | **POST** /organization/{organizationId}/project | Create a project
[**getOrganizationProjectStats**](ProjectsApi.md#getOrganizationProjectStats) | **GET** /organization/{organizationId}/project/stats | List total number of services and environments for each project of the organization
[**listProject**](ProjectsApi.md#listProject) | **GET** /organization/{organizationId}/project | List projects



## createProject

> ProjectResponse createProject(organizationId, opts)

Create a project

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'projectRequest': new BetaQoveryApi.ProjectRequest() // ProjectRequest | 
};
apiInstance.createProject(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **projectRequest** | [**ProjectRequest**](ProjectRequest.md)|  | [optional] 

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrganizationProjectStats

> ProjectStatsResponseList getOrganizationProjectStats(organizationId)

List total number of services and environments for each project of the organization

Returns a list of project ids, and for each its total numberof services and environments

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationProjectStats(organizationId, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 

### Return type

[**ProjectStatsResponseList**](ProjectStatsResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProject

> ProjectResponseList listProject(organizationId)

List projects

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ProjectsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listProject(organizationId, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 

### Return type

[**ProjectResponseList**](ProjectResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

