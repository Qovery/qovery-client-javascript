# QoveryApi.HelmConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editHelmAdvancedSettings**](HelmConfigurationApi.md#editHelmAdvancedSettings) | **PUT** /helm/{helmId}/advancedSettings | Edit advanced settings
[**getHelmAdvancedSettings**](HelmConfigurationApi.md#getHelmAdvancedSettings) | **GET** /helm/{helmId}/advancedSettings | Get advanced settings



## editHelmAdvancedSettings

> HelmAdvancedSettings editHelmAdvancedSettings(helmId, opts)

Edit advanced settings

Edit advanced settings by returning table of advanced settings.

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

let apiInstance = new QoveryApi.HelmConfigurationApi();
let helmId = "helmId_example"; // String | Helm ID
let opts = {
  'helmAdvancedSettings': new QoveryApi.HelmAdvancedSettings() // HelmAdvancedSettings | 
};
apiInstance.editHelmAdvancedSettings(helmId, opts, (error, data, response) => {
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
 **helmAdvancedSettings** | [**HelmAdvancedSettings**](HelmAdvancedSettings.md)|  | [optional] 

### Return type

[**HelmAdvancedSettings**](HelmAdvancedSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHelmAdvancedSettings

> HelmAdvancedSettings getHelmAdvancedSettings(helmId)

Get advanced settings

Get list and values of the advanced settings of the helm.

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

let apiInstance = new QoveryApi.HelmConfigurationApi();
let helmId = "helmId_example"; // String | Helm ID
apiInstance.getHelmAdvancedSettings(helmId, (error, data, response) => {
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

[**HelmAdvancedSettings**](HelmAdvancedSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

