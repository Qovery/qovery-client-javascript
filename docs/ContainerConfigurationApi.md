# QoveryApi.ContainerConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editContainerAdvancedSettings**](ContainerConfigurationApi.md#editContainerAdvancedSettings) | **PUT** /container/{containerId}/advancedSettings | NOT YET IMPLEMENTED - Edit advanced settings
[**editContainerNetwork**](ContainerConfigurationApi.md#editContainerNetwork) | **PUT** /container/{containerId}/network | NOT YET IMPLEMENTED - Edit Container Network
[**getContainerAdvancedSettings**](ContainerConfigurationApi.md#getContainerAdvancedSettings) | **GET** /container/{containerId}/advancedSettings | NOT YET IMPLEMENTED - Get advanced settings
[**getContainerNetwork**](ContainerConfigurationApi.md#getContainerNetwork) | **GET** /container/{containerId}/network | NOT YET IMPLEMENTED - Get Container Network information



## editContainerAdvancedSettings

> ContainerAdvancedSettingsResponse editContainerAdvancedSettings(containerId, opts)

NOT YET IMPLEMENTED - Edit advanced settings

Edit advanced settings by returning table of advanced settings.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerConfigurationApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerAdvancedSettings': [new QoveryApi.ContainerAdvancedSettings()] // [ContainerAdvancedSettings] | 
};
apiInstance.editContainerAdvancedSettings(containerId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **containerAdvancedSettings** | [**[ContainerAdvancedSettings]**](ContainerAdvancedSettings.md)|  | [optional] 

### Return type

[**ContainerAdvancedSettingsResponse**](ContainerAdvancedSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editContainerNetwork

> ContainerNetwork editContainerNetwork(containerId, opts)

NOT YET IMPLEMENTED - Edit Container Network

Edit the Network settings of the container.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerConfigurationApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerNetworkRequest': new QoveryApi.ContainerNetworkRequest() // ContainerNetworkRequest | 
};
apiInstance.editContainerNetwork(containerId, opts, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **containerNetworkRequest** | [**ContainerNetworkRequest**](ContainerNetworkRequest.md)|  | [optional] 

### Return type

[**ContainerNetwork**](ContainerNetwork.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContainerAdvancedSettings

> ContainerAdvancedSettingsResponse getContainerAdvancedSettings(containerId)

NOT YET IMPLEMENTED - Get advanced settings

Get list and values of the advanced settings of the container.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerConfigurationApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerAdvancedSettings(containerId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 

### Return type

[**ContainerAdvancedSettingsResponse**](ContainerAdvancedSettingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerNetwork

> ContainerNetwork getContainerNetwork(containerId)

NOT YET IMPLEMENTED - Get Container Network information

Get status of the container network settings.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerConfigurationApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerNetwork(containerId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 

### Return type

[**ContainerNetwork**](ContainerNetwork.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

