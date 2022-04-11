# QoveryApi.DatabasesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDatabase**](DatabasesApi.md#createDatabase) | **POST** /environment/{environmentId}/database | Create a database
[**getEnvironmentDatabaseStatus**](DatabasesApi.md#getEnvironmentDatabaseStatus) | **GET** /environment/{environmentId}/database/status | List all environment databases statuses
[**listDatabase**](DatabasesApi.md#listDatabase) | **GET** /environment/{environmentId}/database | List environment databases
[**listEnvironmentDatabaseConfig**](DatabasesApi.md#listEnvironmentDatabaseConfig) | **GET** /environment/{environmentId}/databaseConfiguration | List eligible database types, versions and modes for the environment
[**listEnvironmentDatabaseCurrentMetric**](DatabasesApi.md#listEnvironmentDatabaseCurrentMetric) | **GET** /environment/{environmentId}/database/currentMetric | List current metric consumption for each database



## createDatabase

> Database createDatabase(environmentId, opts)

Create a database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabasesApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'databaseRequest': new QoveryApi.DatabaseRequest() // DatabaseRequest | 
};
apiInstance.createDatabase(environmentId, opts, (error, data, response) => {
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
 **databaseRequest** | [**DatabaseRequest**](DatabaseRequest.md)|  | [optional] 

### Return type

[**Database**](Database.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEnvironmentDatabaseStatus

> ReferenceObjectStatusResponseList getEnvironmentDatabaseStatus(environmentId)

List all environment databases statuses

Returns a list of databases with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabasesApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentDatabaseStatus(environmentId, (error, data, response) => {
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

[**ReferenceObjectStatusResponseList**](ReferenceObjectStatusResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDatabase

> DatabaseResponseList listDatabase(environmentId)

List environment databases

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabasesApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listDatabase(environmentId, (error, data, response) => {
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

[**DatabaseResponseList**](DatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironmentDatabaseConfig

> DatabaseConfigurationResponseList listEnvironmentDatabaseConfig(environmentId)

List eligible database types, versions and modes for the environment

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabasesApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentDatabaseConfig(environmentId, (error, data, response) => {
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

[**DatabaseConfigurationResponseList**](DatabaseConfigurationResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironmentDatabaseCurrentMetric

> EnvironmentDatabasesCurrentMetricResponseList listEnvironmentDatabaseCurrentMetric(environmentId)

List current metric consumption for each database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabasesApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listEnvironmentDatabaseCurrentMetric(environmentId, (error, data, response) => {
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

[**EnvironmentDatabasesCurrentMetricResponseList**](EnvironmentDatabasesCurrentMetricResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

