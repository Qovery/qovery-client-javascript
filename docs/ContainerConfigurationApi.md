# QoveryApi.ContainerConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editContainerAdvancedSettings**](ContainerConfigurationApi.md#editContainerAdvancedSettings) | **PUT** /container/{containerId}/advancedSettings | Edit advanced settings
[**editContainerNetwork**](ContainerConfigurationApi.md#editContainerNetwork) | **PUT** /container/{containerId}/network | Edit Container Network
[**getContainerAdvancedSettings**](ContainerConfigurationApi.md#getContainerAdvancedSettings) | **GET** /container/{containerId}/advancedSettings | Get advanced settings
[**getContainerNetwork**](ContainerConfigurationApi.md#getContainerNetwork) | **GET** /container/{containerId}/network | Get Container Network information



## editContainerAdvancedSettings

> ContainerAdvancedSettings editContainerAdvancedSettings(containerId, opts)

Edit advanced settings

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
  'containerAdvancedSettings': new QoveryApi.ContainerAdvancedSettings() // ContainerAdvancedSettings | 
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
 **containerAdvancedSettings** | [**ContainerAdvancedSettings**](ContainerAdvancedSettings.md)|  | [optional] 

### Return type

[**ContainerAdvancedSettings**](ContainerAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editContainerNetwork

> ContainerNetwork editContainerNetwork(containerId, opts)

Edit Container Network

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

> ContainerAdvancedSettings getContainerAdvancedSettings(containerId)

Get advanced settings

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

[**ContainerAdvancedSettings**](ContainerAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerNetwork

> ContainerNetwork getContainerNetwork(containerId)

Get Container Network information

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

