# QoveryApi.ContainerDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachDatabaseToContainer**](ContainerDatabaseApi.md#attachDatabaseToContainer) | **POST** /container/{containerId}/database/{targetDatabaseId} | NOT YET IMPLEMENTED - Link a database to the container
[**attachLogicalDatabaseToContainer**](ContainerDatabaseApi.md#attachLogicalDatabaseToContainer) | **POST** /container/{containerId}/logicalDatabase/{targetLogicalDatabaseId} | NOT YET IMPLEMENTED - Link a logical database to the container
[**listContainerDatabase**](ContainerDatabaseApi.md#listContainerDatabase) | **GET** /container/{containerId}/database | NOT YET IMPLEMENTED - List linked databases
[**listContainerLogicalDatabase**](ContainerDatabaseApi.md#listContainerLogicalDatabase) | **GET** /container/{containerId}/logicalDatabase | NOT YET IMPLEMENTED - List linked logical databases
[**removeDatabaseFromContainer**](ContainerDatabaseApi.md#removeDatabaseFromContainer) | **DELETE** /container/{containerId}/database/{targetDatabaseId} | NOT YET IMPLEMENTED - Remove database link to this container.
[**removeLogicalDatabaseFromContainer**](ContainerDatabaseApi.md#removeLogicalDatabaseFromContainer) | **DELETE** /container/{containerId}/logicalDatabase/{targetLogicalDatabaseId} | NOT YET IMPLEMENTED - Remove logical database link to this container.



## attachDatabaseToContainer

> Database attachDatabaseToContainer(containerId, targetDatabaseId)

NOT YET IMPLEMENTED - Link a database to the container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
let targetDatabaseId = "targetDatabaseId_example"; // String | Target database ID
apiInstance.attachDatabaseToContainer(containerId, targetDatabaseId, (error, data, response) => {
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
 **targetDatabaseId** | **String**| Target database ID | 

### Return type

[**Database**](Database.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachLogicalDatabaseToContainer

> LogicalDatabase attachLogicalDatabaseToContainer(containerId, targetLogicalDatabaseId)

NOT YET IMPLEMENTED - Link a logical database to the container

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
let targetLogicalDatabaseId = "targetLogicalDatabaseId_example"; // String | Target database ID
apiInstance.attachLogicalDatabaseToContainer(containerId, targetLogicalDatabaseId, (error, data, response) => {
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
 **targetLogicalDatabaseId** | **String**| Target database ID | 

### Return type

[**LogicalDatabase**](LogicalDatabase.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerDatabase

> DatabaseResponseList listContainerDatabase(containerId)

NOT YET IMPLEMENTED - List linked databases

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerDatabase(containerId, (error, data, response) => {
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

[**DatabaseResponseList**](DatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerLogicalDatabase

> LogicalDatabaseResponseList listContainerLogicalDatabase(containerId)

NOT YET IMPLEMENTED - List linked logical databases

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerLogicalDatabase(containerId, (error, data, response) => {
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

[**LogicalDatabaseResponseList**](LogicalDatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeDatabaseFromContainer

> removeDatabaseFromContainer(containerId, targetDatabaseId)

NOT YET IMPLEMENTED - Remove database link to this container.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
let targetDatabaseId = "targetDatabaseId_example"; // String | Target database ID
apiInstance.removeDatabaseFromContainer(containerId, targetDatabaseId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **targetDatabaseId** | **String**| Target database ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeLogicalDatabaseFromContainer

> removeLogicalDatabaseFromContainer(containerId, targetLogicalDatabaseId)

NOT YET IMPLEMENTED - Remove logical database link to this container.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDatabaseApi();
let containerId = "containerId_example"; // String | Container ID
let targetLogicalDatabaseId = "targetLogicalDatabaseId_example"; // String | Target database ID
apiInstance.removeLogicalDatabaseFromContainer(containerId, targetLogicalDatabaseId, (error, data, response) => {
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
 **containerId** | **String**| Container ID | 
 **targetLogicalDatabaseId** | **String**| Target database ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

