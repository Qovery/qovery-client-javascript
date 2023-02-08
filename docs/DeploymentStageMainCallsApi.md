# QoveryApi.DeploymentStageMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachServiceToDeploymentStage**](DeploymentStageMainCallsApi.md#attachServiceToDeploymentStage) | **PUT** /deploymentStage/{deploymentStageId}/service/{serviceId} | Attach service to deployment stage
[**createEnvironmentDeploymentStage**](DeploymentStageMainCallsApi.md#createEnvironmentDeploymentStage) | **POST** /environment/{environmentId}/deploymentStage | Create environment deployment stage
[**deleteDeploymentStage**](DeploymentStageMainCallsApi.md#deleteDeploymentStage) | **DELETE** /deploymentStage/{deploymentStageId} | Delete deployment stage
[**editDeploymentStage**](DeploymentStageMainCallsApi.md#editDeploymentStage) | **PUT** /deploymentStage/{deploymentStageId} | Edit deployment stage
[**listEnvironmentDeploymentStage**](DeploymentStageMainCallsApi.md#listEnvironmentDeploymentStage) | **GET** /environment/{environmentId}/deploymentStage | List environment deployment stage
[**moveDeploymentStage**](DeploymentStageMainCallsApi.md#moveDeploymentStage) | **PUT** /deploymentStage/{deploymentStageId}/moveBefore/{stageId} | Move deployment stage before requested stage



## attachServiceToDeploymentStage

> attachServiceToDeploymentStage(serviceId)

Attach service to deployment stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
let serviceId = "serviceId_example"; // String | Service ID of an application/job/container/database
apiInstance.attachServiceToDeploymentStage(serviceId, (error, data, response) => {
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
 **serviceId** | **String**| Service ID of an application/job/container/database | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createEnvironmentDeploymentStage

> DeploymentStageResponse createEnvironmentDeploymentStage(environmentId, opts)

Create environment deployment stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'deploymentStageRequest': new QoveryApi.DeploymentStageRequest() // DeploymentStageRequest | 
};
apiInstance.createEnvironmentDeploymentStage(environmentId, opts, (error, data, response) => {
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
 **deploymentStageRequest** | [**DeploymentStageRequest**](DeploymentStageRequest.md)|  | [optional] 

### Return type

[**DeploymentStageResponse**](DeploymentStageResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDeploymentStage

> deleteDeploymentStage()

Delete deployment stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
apiInstance.deleteDeploymentStage((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editDeploymentStage

> DeploymentStageResponse editDeploymentStage(deploymentStageId, opts)

Edit deployment stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
let deploymentStageId = "deploymentStageId_example"; // String | Deployment Stage ID
let opts = {
  'deploymentStageRequest': new QoveryApi.DeploymentStageRequest() // DeploymentStageRequest | 
};
apiInstance.editDeploymentStage(deploymentStageId, opts, (error, data, response) => {
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
 **deploymentStageId** | **String**| Deployment Stage ID | 
 **deploymentStageRequest** | [**DeploymentStageRequest**](DeploymentStageRequest.md)|  | [optional] 

### Return type

[**DeploymentStageResponse**](DeploymentStageResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listEnvironmentDeploymentStage

> DeploymentStageResponseList listEnvironmentDeploymentStage(environmentId)

List environment deployment stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentDeploymentStage(environmentId, (error, data, response) => {
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

[**DeploymentStageResponseList**](DeploymentStageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveDeploymentStage

> DeploymentStageResponseList moveDeploymentStage(stageId)

Move deployment stage before requested stage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DeploymentStageMainCallsApi();
let stageId = "stageId_example"; // String | Deployment Stage ID
apiInstance.moveDeploymentStage(stageId, (error, data, response) => {
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
 **stageId** | **String**| Deployment Stage ID | 

### Return type

[**DeploymentStageResponseList**](DeploymentStageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
