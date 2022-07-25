# QoveryApi.ContainerMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContainerCurrentInstance**](ContainerMetricsApi.md#getContainerCurrentInstance) | **GET** /container/{containerId}/instance | NOT YET IMPLEMENTED - List currently running instances of the container with their CPU and RAM metrics
[**getContainerCurrentScale**](ContainerMetricsApi.md#getContainerCurrentScale) | **GET** /container/{containerId}/currentScale | NOT YET IMPLEMENTED - Get current scaling of the container
[**getContainerCurrentStorageDisk**](ContainerMetricsApi.md#getContainerCurrentStorageDisk) | **GET** /container/{containerId}/currentStorage | NOT YET IMPLEMENTED - List current storage disk usage
[**getContainerMetricCpu**](ContainerMetricsApi.md#getContainerMetricCpu) | **GET** /container/{containerId}/metric/cpu | NOT YET IMPLEMENTED - Get CPU consumption metric over time for the container
[**getContainerMetricHealthCheck**](ContainerMetricsApi.md#getContainerMetricHealthCheck) | **GET** /container/{containerId}/metric/healthCheck | NOT YET IMPLEMENTED - Get Health Check latency  metric over time for the container
[**getContainerMetricMemory**](ContainerMetricsApi.md#getContainerMetricMemory) | **GET** /container/{containerId}/metric/memory | NOT YET IMPLEMENTED - Get Memory consumption metric over time for the container
[**getContainerMetricRestart**](ContainerMetricsApi.md#getContainerMetricRestart) | **GET** /container/{containerId}/metric/restart | NOT YET IMPLEMENTED - List container restarts
[**getContainerMetricStorage**](ContainerMetricsApi.md#getContainerMetricStorage) | **GET** /container/{containerId}/metric/storage | NOT YET IMPLEMENTED - Get Storage consumption metric over time for the container 



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


## getContainerMetricCpu

> MetricCPUResponseList getContainerMetricCpu(containerId, lastSeconds)

NOT YET IMPLEMENTED - Get CPU consumption metric over time for the container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getContainerMetricCpu(containerId, lastSeconds, (error, data, response) => {
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
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricCPUResponseList**](MetricCPUResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerMetricHealthCheck

> MetricGenericResponseList getContainerMetricHealthCheck(containerId, lastSeconds)

NOT YET IMPLEMENTED - Get Health Check latency  metric over time for the container

The value returned corresponds to the 95th centile

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getContainerMetricHealthCheck(containerId, lastSeconds, (error, data, response) => {
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
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricGenericResponseList**](MetricGenericResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerMetricMemory

> MetricMemoryResponseList getContainerMetricMemory(containerId, lastSeconds)

NOT YET IMPLEMENTED - Get Memory consumption metric over time for the container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getContainerMetricMemory(containerId, lastSeconds, (error, data, response) => {
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
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricMemoryResponseList**](MetricMemoryResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerMetricRestart

> MetricRestart getContainerMetricRestart(containerId, lastSeconds)

NOT YET IMPLEMENTED - List container restarts

Get container restart message and timestamp.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getContainerMetricRestart(containerId, lastSeconds, (error, data, response) => {
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
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricRestart**](MetricRestart.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerMetricStorage

> MetricStorageResponseList getContainerMetricStorage(containerId, lastSeconds)

NOT YET IMPLEMENTED - Get Storage consumption metric over time for the container 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMetricsApi();
let containerId = "containerId_example"; // String | Container ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getContainerMetricStorage(containerId, lastSeconds, (error, data, response) => {
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
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricStorageResponseList**](MetricStorageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

