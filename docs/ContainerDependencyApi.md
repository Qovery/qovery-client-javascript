# QoveryApi.ContainerDependencyApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerDependency**](ContainerDependencyApi.md#createContainerDependency) | **POST** /container/{containerId}/dependency/{targetContainerId} | NOT YET IMPLEMENTED - Add container dependency to this application.
[**listContainerDependency**](ContainerDependencyApi.md#listContainerDependency) | **GET** /container/{containerId}/dependency | NOT YET IMPLEMENTED - List container dependencies
[**removeContainerDependency**](ContainerDependencyApi.md#removeContainerDependency) | **DELETE** /container/{containerId}/dependency/{targetContainerId} | NOT YET IMPLEMENTED - Remove container dependency to this container.



## createContainerDependency

> ContainerResponse createContainerDependency(containerId)

NOT YET IMPLEMENTED - Add container dependency to this application.

Add container dependency to this container to prevent this container starting before the linked dependencies

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDependencyApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.createContainerDependency(containerId, (error, data, response) => {
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

[**ContainerResponse**](ContainerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerDependency

> ContainerResponseList listContainerDependency(containerId)

NOT YET IMPLEMENTED - List container dependencies

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDependencyApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerDependency(containerId, (error, data, response) => {
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

[**ContainerResponseList**](ContainerResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeContainerDependency

> removeContainerDependency(containerId)

NOT YET IMPLEMENTED - Remove container dependency to this container.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerDependencyApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.removeContainerDependency(containerId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

