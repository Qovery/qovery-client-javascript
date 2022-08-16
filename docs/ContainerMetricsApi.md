# QoveryApi.ContainerMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContainerCurrentInstance**](ContainerMetricsApi.md#getContainerCurrentInstance) | **GET** /container/{containerId}/instance | NOT YET IMPLEMENTED - List currently running instances of the container with their CPU and RAM metrics
[**getContainerCurrentScale**](ContainerMetricsApi.md#getContainerCurrentScale) | **GET** /container/{containerId}/currentScale | NOT YET IMPLEMENTED - Get current scaling of the container
[**getContainerCurrentStorageDisk**](ContainerMetricsApi.md#getContainerCurrentStorageDisk) | **GET** /container/{containerId}/currentStorage | NOT YET IMPLEMENTED - List current storage disk usage



## getContainerCurrentInstance

> InstanceResponseList getContainerCurrentInstance(containerId)

NOT YET IMPLEMENTED - List currently running instances of the container with their CPU and RAM metrics

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerCurrentInstance(containerId, (error, data, response) => {
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

[**InstanceResponseList**](InstanceResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerCurrentScale

> ContainerCurrentScale getContainerCurrentScale(containerId)

NOT YET IMPLEMENTED - Get current scaling of the container

Returns min, max, and running number of instances of the application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerCurrentScale(containerId, (error, data, response) => {
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

[**ContainerCurrentScale**](ContainerCurrentScale.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerCurrentStorageDisk

> StorageDiskResponseList getContainerCurrentStorageDisk(containerId)

NOT YET IMPLEMENTED - List current storage disk usage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerCurrentStorageDisk(containerId, (error, data, response) => {
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

[**StorageDiskResponseList**](StorageDiskResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

