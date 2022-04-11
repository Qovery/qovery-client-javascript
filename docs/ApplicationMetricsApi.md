# QoveryApi.ApplicationMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationCurrentInstance**](ApplicationMetricsApi.md#getApplicationCurrentInstance) | **GET** /application/{applicationId}/instance | List currently running instances of the application with their CPU and RAM metrics
[**getApplicationCurrentScale**](ApplicationMetricsApi.md#getApplicationCurrentScale) | **GET** /application/{applicationId}/currentScale | Get current scaling of the application
[**getApplicationCurrentStorageDisk**](ApplicationMetricsApi.md#getApplicationCurrentStorageDisk) | **GET** /application/{applicationId}/currentStorage | List current storage disk usage
[**getApplicationMetricCpu**](ApplicationMetricsApi.md#getApplicationMetricCpu) | **GET** /application/{applicationId}/metric/cpu | Get CPU consumption metric over time for the application
[**getApplicationMetricHealthCheck**](ApplicationMetricsApi.md#getApplicationMetricHealthCheck) | **GET** /application/{applicationId}/metric/healthCheck | Get Health Check latency  metric over time for the application
[**getApplicationMetricMemory**](ApplicationMetricsApi.md#getApplicationMetricMemory) | **GET** /application/{applicationId}/metric/memory | Get Memory consumption metric over time for the application
[**getApplicationMetricRestart**](ApplicationMetricsApi.md#getApplicationMetricRestart) | **GET** /application/{applicationId}/metric/restart | List application restarts
[**getApplicationMetricStorage**](ApplicationMetricsApi.md#getApplicationMetricStorage) | **GET** /application/{applicationId}/metric/storage | Get Storage consumption metric over time for the application



## getApplicationCurrentInstance

> InstanceResponseList getApplicationCurrentInstance(applicationId)

List currently running instances of the application with their CPU and RAM metrics

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationCurrentInstance(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

[**InstanceResponseList**](InstanceResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCurrentScale

> ApplicationCurrentScale getApplicationCurrentScale(applicationId)

Get current scaling of the application

Returns min, max, and running number of instances of the application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationCurrentScale(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

[**ApplicationCurrentScale**](ApplicationCurrentScale.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCurrentStorageDisk

> StorageDiskResponseList getApplicationCurrentStorageDisk(applicationId)

List current storage disk usage

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationCurrentStorageDisk(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 

### Return type

[**StorageDiskResponseList**](StorageDiskResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationMetricCpu

> MetricCPUResponseList getApplicationMetricCpu(applicationId, lastSeconds)

Get CPU consumption metric over time for the application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getApplicationMetricCpu(applicationId, lastSeconds, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricCPUResponseList**](MetricCPUResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationMetricHealthCheck

> MetricGenericResponseList getApplicationMetricHealthCheck(applicationId, lastSeconds)

Get Health Check latency  metric over time for the application

The value returned corresponds to the 95th centile

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getApplicationMetricHealthCheck(applicationId, lastSeconds, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricGenericResponseList**](MetricGenericResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationMetricMemory

> MetricMemoryResponseList getApplicationMetricMemory(applicationId, lastSeconds)

Get Memory consumption metric over time for the application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getApplicationMetricMemory(applicationId, lastSeconds, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricMemoryResponseList**](MetricMemoryResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationMetricRestart

> MetricRestart getApplicationMetricRestart(applicationId, lastSeconds)

List application restarts

Get application restart message and timestamp.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getApplicationMetricRestart(applicationId, lastSeconds, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricRestart**](MetricRestart.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationMetricStorage

> MetricStorageResponseList getApplicationMetricStorage(applicationId, lastSeconds)

Get Storage consumption metric over time for the application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationMetricsApi();
let applicationId = "applicationId_example"; // String | Application ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getApplicationMetricStorage(applicationId, lastSeconds, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricStorageResponseList**](MetricStorageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

