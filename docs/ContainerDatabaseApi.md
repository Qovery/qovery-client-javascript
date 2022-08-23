# QoveryApi.ContainerDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachLogicalDatabaseToContainer**](ContainerDatabaseApi.md#attachLogicalDatabaseToContainer) | **POST** /container/{containerId}/logicalDatabase/{targetLogicalDatabaseId} | Link a logical database to the container
[**listContainerLogicalDatabase**](ContainerDatabaseApi.md#listContainerLogicalDatabase) | **GET** /container/{containerId}/logicalDatabase | List linked logical databases
[**removeLogicalDatabaseFromContainer**](ContainerDatabaseApi.md#removeLogicalDatabaseFromContainer) | **DELETE** /container/{containerId}/logicalDatabase/{targetLogicalDatabaseId} | Remove logical database link to this container.



## attachLogicalDatabaseToContainer

> LogicalDatabase attachLogicalDatabaseToContainer(containerId, targetLogicalDatabaseId)

Link a logical database to the container

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


## listContainerLogicalDatabase

> LogicalDatabaseResponseList listContainerLogicalDatabase(containerId)

List linked logical databases

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


## removeLogicalDatabaseFromContainer

> removeLogicalDatabaseFromContainer(containerId, targetLogicalDatabaseId)

Remove logical database link to this container.

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

