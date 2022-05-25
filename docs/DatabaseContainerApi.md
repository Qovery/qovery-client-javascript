# QoveryApi.DatabaseContainerApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatabaseContainer**](DatabaseContainerApi.md#listDatabaseContainer) | **GET** /database/{databaseId}/container | List container using the database
[**removeContainerFromDatabase**](DatabaseContainerApi.md#removeContainerFromDatabase) | **DELETE** /database/{databaseId}/container/{targetContainerId} | Remove an container from this database 



## listDatabaseContainer

> ContainerResponseList listDatabaseContainer(databaseId)

List container using the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseContainerApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.listDatabaseContainer(databaseId, (error, data, response) => {
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

[**ContainerResponseList**](ContainerResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeContainerFromDatabase

> removeContainerFromDatabase(databaseId, targetContainerId)

Remove an container from this database 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseContainerApi();
let databaseId = "databaseId_example"; // String | Database ID
let targetContainerId = "targetContainerId_example"; // String | Target container ID
apiInstance.removeContainerFromDatabase(databaseId, targetContainerId, (error, data, response) => {
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
 **databaseId** | **String**| Database ID | 
 **targetContainerId** | **String**| Target container ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

