# QoveryApi.HelmDeploymentRestrictionApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHelmDeploymentRestriction**](HelmDeploymentRestrictionApi.md#createHelmDeploymentRestriction) | **POST** /helm/{helmId}/deploymentRestriction | Create a helm deployment restriction
[**deleteHelmDeploymentRestriction**](HelmDeploymentRestrictionApi.md#deleteHelmDeploymentRestriction) | **DELETE** /helm/{helmId}/deploymentRestriction/{deploymentRestrictionId} | Delete a helm deployment restriction
[**editHelmDeploymentRestriction**](HelmDeploymentRestrictionApi.md#editHelmDeploymentRestriction) | **PUT** /helm/{helmId}/deploymentRestriction/{deploymentRestrictionId} | Edit a helm deployment restriction
[**getHelmDeploymentRestrictions**](HelmDeploymentRestrictionApi.md#getHelmDeploymentRestrictions) | **GET** /helm/{helmId}/deploymentRestriction | Get helm deployment restrictions



## createHelmDeploymentRestriction

> HelmDeploymentRestrictionResponse createHelmDeploymentRestriction(helmId, opts)

Create a helm deployment restriction

Create a helm deployment restriction

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

let apiInstance = new QoveryApi.HelmDeploymentRestrictionApi();
let helmId = "helmId_example"; // String | Helm ID
let opts = {
  'helmDeploymentRestrictionRequest': new QoveryApi.HelmDeploymentRestrictionRequest() // HelmDeploymentRestrictionRequest | 
};
apiInstance.createHelmDeploymentRestriction(helmId, opts, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **helmDeploymentRestrictionRequest** | [**HelmDeploymentRestrictionRequest**](HelmDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**HelmDeploymentRestrictionResponse**](HelmDeploymentRestrictionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteHelmDeploymentRestriction

> deleteHelmDeploymentRestriction(helmId, deploymentRestrictionId)

Delete a helm deployment restriction

Delete a helm deployment restriction

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

let apiInstance = new QoveryApi.HelmDeploymentRestrictionApi();
let helmId = "helmId_example"; // String | Helm ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
apiInstance.deleteHelmDeploymentRestriction(helmId, deploymentRestrictionId, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editHelmDeploymentRestriction

> HelmDeploymentRestrictionResponse editHelmDeploymentRestriction(helmId, deploymentRestrictionId, opts)

Edit a helm deployment restriction

Edit a helm deployment restriction

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

let apiInstance = new QoveryApi.HelmDeploymentRestrictionApi();
let helmId = "helmId_example"; // String | Helm ID
let deploymentRestrictionId = "deploymentRestrictionId_example"; // String | Deployment Restriction ID
let opts = {
  'helmDeploymentRestrictionRequest': new QoveryApi.HelmDeploymentRestrictionRequest() // HelmDeploymentRestrictionRequest | 
};
apiInstance.editHelmDeploymentRestriction(helmId, deploymentRestrictionId, opts, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 
 **deploymentRestrictionId** | **String**| Deployment Restriction ID | 
 **helmDeploymentRestrictionRequest** | [**HelmDeploymentRestrictionRequest**](HelmDeploymentRestrictionRequest.md)|  | [optional] 

### Return type

[**HelmDeploymentRestrictionResponse**](HelmDeploymentRestrictionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHelmDeploymentRestrictions

> HelmDeploymentRestrictionResponseList getHelmDeploymentRestrictions(helmId)

Get helm deployment restrictions

Get helm deployment restrictions

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

let apiInstance = new QoveryApi.HelmDeploymentRestrictionApi();
let helmId = "helmId_example"; // String | Helm ID
apiInstance.getHelmDeploymentRestrictions(helmId, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 

### Return type

[**HelmDeploymentRestrictionResponseList**](HelmDeploymentRestrictionResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

