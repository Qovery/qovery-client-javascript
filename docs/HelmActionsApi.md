# QoveryApi.HelmActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployHelm**](HelmActionsApi.md#deployHelm) | **POST** /helm/{helmId}/deploy | Deploy helm
[**redeployHelm**](HelmActionsApi.md#redeployHelm) | **POST** /helm/{helmId}/redeploy | Redeploy helm
[**restartHelm**](HelmActionsApi.md#restartHelm) | **POST** /helm/{helmId}/restart | Deprecated - Restart helm
[**stopHelm**](HelmActionsApi.md#stopHelm) | **POST** /helm/{helmId}/stop | Stop helm



## deployHelm

> Status deployHelm(helmId, opts)

Deploy helm

You must provide a git commit id or an image tag depending on the source location of your code (git vs image repository).

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

let apiInstance = new QoveryApi.HelmActionsApi();
let helmId = "helmId_example"; // String | Helm ID
let opts = {
  'forceEvent': new QoveryApi.HelmForceEvent(), // HelmForceEvent | When filled, it indicates the target event to be deployed.   If the concerned helm hasn't the target event provided, the helm won't be deployed. 
  'helmDeployRequest': new QoveryApi.HelmDeployRequest() // HelmDeployRequest | 
};
apiInstance.deployHelm(helmId, opts, (error, data, response) => {
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
 **forceEvent** | [**HelmForceEvent**](.md)| When filled, it indicates the target event to be deployed.   If the concerned helm hasn&#39;t the target event provided, the helm won&#39;t be deployed.  | [optional] 
 **helmDeployRequest** | [**HelmDeployRequest**](HelmDeployRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## redeployHelm

> Status redeployHelm(helmId, opts)

Redeploy helm

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

let apiInstance = new QoveryApi.HelmActionsApi();
let helmId = "helmId_example"; // String | Helm ID
let opts = {
  'forceEvent': new QoveryApi.HelmForceEvent() // HelmForceEvent | When filled, it indicates the target event to be deployed.   If the concerned helm hasn't the target event provided, the helm won't be deployed. 
};
apiInstance.redeployHelm(helmId, opts, (error, data, response) => {
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
 **forceEvent** | [**HelmForceEvent**](.md)| When filled, it indicates the target event to be deployed.   If the concerned helm hasn&#39;t the target event provided, the helm won&#39;t be deployed.  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartHelm

> Status restartHelm(helmId, opts)

Deprecated - Restart helm

**Deprecated** - Please use the \&quot;Redeploy helm\&quot; endpoint now

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

let apiInstance = new QoveryApi.HelmActionsApi();
let helmId = "helmId_example"; // String | Helm ID
let opts = {
  'forceEvent': new QoveryApi.HelmForceEvent() // HelmForceEvent | When filled, it indicates the target event to be deployed.   If the concerned helm hasn't the target event provided, the helm won't be deployed. 
};
apiInstance.restartHelm(helmId, opts, (error, data, response) => {
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
 **forceEvent** | [**HelmForceEvent**](.md)| When filled, it indicates the target event to be deployed.   If the concerned helm hasn&#39;t the target event provided, the helm won&#39;t be deployed.  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopHelm

> Status stopHelm(helmId)

Stop helm

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

let apiInstance = new QoveryApi.HelmActionsApi();
let helmId = "helmId_example"; // String | Helm ID
apiInstance.stopHelm(helmId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

