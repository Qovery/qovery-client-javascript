# QoveryApi.DatabaseMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseCurrentMetric**](DatabaseMetricsApi.md#getDatabaseCurrentMetric) | **GET** /database/{databaseId}/currentMetric | Get current metric consumption of the database 
[**getDatabaseMetricCpu**](DatabaseMetricsApi.md#getDatabaseMetricCpu) | **GET** /database/{databaseId}/metric/cpu | Get CPU consumption metric over time for the database
[**getDatabaseMetricHealthCheck**](DatabaseMetricsApi.md#getDatabaseMetricHealthCheck) | **GET** /database/{databaseId}/metric/healthCheck | Get Health Check latency  metric over time for the database
[**getDatabaseMetricMemory**](DatabaseMetricsApi.md#getDatabaseMetricMemory) | **GET** /database/{databaseId}/metric/memory | Get Memory consumption metric over time for the database
[**getDatabaseMetricRestart**](DatabaseMetricsApi.md#getDatabaseMetricRestart) | **GET** /database/{databaseId}/metric/restart | List database restarts
[**getDatabaseMetricStorage**](DatabaseMetricsApi.md#getDatabaseMetricStorage) | **GET** /database/{databaseId}/metric/storage | Get Storage consumption metric over time for the database



## getDatabaseCurrentMetric

> DatabaseCurrentMetric getDatabaseCurrentMetric(databaseId)

Get current metric consumption of the database 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.getDatabaseCurrentMetric(databaseId, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 

### Return type

[**DatabaseCurrentMetric**](DatabaseCurrentMetric.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMetricCpu

> MetricCPUDatapointResponseList getDatabaseMetricCpu(databaseId, lastSeconds)

Get CPU consumption metric over time for the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getDatabaseMetricCpu(databaseId, lastSeconds, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricCPUDatapointResponseList**](MetricCPUDatapointResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMetricHealthCheck

> MetricGenericResponseList getDatabaseMetricHealthCheck(databaseId, lastSeconds)

Get Health Check latency  metric over time for the database

The value returned corresponds to the 95th centile

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getDatabaseMetricHealthCheck(databaseId, lastSeconds, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricGenericResponseList**](MetricGenericResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMetricMemory

> MetricMemoryDatapointResponseList getDatabaseMetricMemory(databaseId, lastSeconds)

Get Memory consumption metric over time for the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getDatabaseMetricMemory(databaseId, lastSeconds, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricMemoryDatapointResponseList**](MetricMemoryDatapointResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMetricRestart

> MetricRestart getDatabaseMetricRestart(databaseId, lastSeconds)

List database restarts

Get database restart message and timestamp.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getDatabaseMetricRestart(databaseId, lastSeconds, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricRestart**](MetricRestart.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMetricStorage

> MetricStorageDatapointResponseList getDatabaseMetricStorage(databaseId, lastSeconds)

Get Storage consumption metric over time for the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMetricsApi();
let databaseId = "databaseId_example"; // String | Database ID
let lastSeconds = 3.4; // Number | Up to how many seconds in the past to ask analytics results
apiInstance.getDatabaseMetricStorage(databaseId, lastSeconds, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **lastSeconds** | **Number**| Up to how many seconds in the past to ask analytics results | 

### Return type

[**MetricStorageDatapointResponseList**](MetricStorageDatapointResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

