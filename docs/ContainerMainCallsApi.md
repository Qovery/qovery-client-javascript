# QoveryApi.ContainerMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerTag**](ContainerMainCallsApi.md#createContainerTag) | **POST** /container/{containerId}/tag | NOT YET IMPLEMENTED - Add container tag
[**deleteContainer**](ContainerMainCallsApi.md#deleteContainer) | **DELETE** /container/{containerId} | NOT YET IMPLEMENTED - Delete container
[**deleteContainerTag**](ContainerMainCallsApi.md#deleteContainerTag) | **DELETE** /container/{containerId}/tag/{tagId} | NOT YET IMPLEMENTED - Delete container tag
[**editContainer**](ContainerMainCallsApi.md#editContainer) | **PUT** /container/{containerId} | NOT YET IMPLEMENTED - Edit container
[**getContainer**](ContainerMainCallsApi.md#getContainer) | **GET** /container/{containerId} | NOT YET IMPLEMENTED - Get container by ID
[**getContainerStatus**](ContainerMainCallsApi.md#getContainerStatus) | **GET** /container/{containerId}/status | NOT YET IMPLEMENTED - Get container status
[**getContainerTags**](ContainerMainCallsApi.md#getContainerTags) | **GET** /container/{containerId}/tagHistory | NOT YET IMPLEMENTED - List image tags
[**listContainerContributor**](ContainerMainCallsApi.md#listContainerContributor) | **GET** /container/{containerId}/contributor | NOT YET IMPLEMENTED -List contributors
[**listContainerLinks**](ContainerMainCallsApi.md#listContainerLinks) | **GET** /container/{containerId}/link | NOT YET IMPLEMENTED - List all URLs of the container
[**listContainerTag**](ContainerMainCallsApi.md#listContainerTag) | **GET** /container/{containerId}/tag | NOT YET IMPLEMENTED - List tags



## createContainerTag

> TagResponseList createContainerTag(containerId, opts)

NOT YET IMPLEMENTED - Add container tag

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'tagRequest': new QoveryApi.TagRequest() // TagRequest | 
};
apiInstance.createContainerTag(containerId, opts, (error, data, response) => {
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
 **tagRequest** | [**TagRequest**](TagRequest.md)|  | [optional] 

### Return type

[**TagResponseList**](TagResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContainer

> deleteContainer(containerId)

NOT YET IMPLEMENTED - Delete container

To delete the container you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.deleteContainer(containerId, (error, data, response) => {
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


## deleteContainerTag

> deleteContainerTag(containerId, tagId)

NOT YET IMPLEMENTED - Delete container tag

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
let tagId = "tagId_example"; // String | Tag ID
apiInstance.deleteContainerTag(containerId, tagId, (error, data, response) => {
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
 **tagId** | **String**| Tag ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editContainer

> ContainerResponse editContainer(containerId, opts)

NOT YET IMPLEMENTED - Edit container

- To edit the container you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don&#39;t we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don&#39;t we will create a new one. If you remove a storage from the payload, we will delete it. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'containerEditRequest': new QoveryApi.ContainerEditRequest() // ContainerEditRequest | 
};
apiInstance.editContainer(containerId, opts, (error, data, response) => {
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
 **containerEditRequest** | [**ContainerEditRequest**](ContainerEditRequest.md)|  | [optional] 

### Return type

[**ContainerResponse**](ContainerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContainer

> ContainerResponse getContainer(containerId)

NOT YET IMPLEMENTED - Get container by ID

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainer(containerId, (error, data, response) => {
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


## getContainerStatus

> Status getContainerStatus(containerId)

NOT YET IMPLEMENTED - Get container status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerStatus(containerId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContainerTags

> GetContainerTags200Response getContainerTags(containerId)

NOT YET IMPLEMENTED - List image tags

List all image container tags already deployed in the Qovery environment.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.getContainerTags(containerId, (error, data, response) => {
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

[**GetContainerTags200Response**](GetContainerTags200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerContributor

> UserResponseList listContainerContributor(containerId)

NOT YET IMPLEMENTED -List contributors

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerContributor(containerId, (error, data, response) => {
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

[**UserResponseList**](UserResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerLinks

> LinkResponseList listContainerLinks(containerId)

NOT YET IMPLEMENTED - List all URLs of the container

This will return all the custom domains and Qovery autogenerated domain for the given application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerLinks(containerId, (error, data, response) => {
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

[**LinkResponseList**](LinkResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContainerTag

> TagResponseList listContainerTag(containerId)

NOT YET IMPLEMENTED - List tags

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerMainCallsApi();
let containerId = "containerId_example"; // String | Container ID
apiInstance.listContainerTag(containerId, (error, data, response) => {
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

[**TagResponseList**](TagResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

