# QoveryApi.ContainerEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listContainerEvent**](ContainerEventApi.md#listContainerEvent) | **GET** /container/{containerId}/event | List container events



## listContainerEvent

> EventPaginatedResponseList listContainerEvent(containerId, opts)

List container events

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerEventApi();
let containerId = "containerId_example"; // String | Container ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listContainerEvent(containerId, opts, (error, data, response) => {
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
 **startId** | **String**| Starting point after which to return results | [optional] 

### Return type

[**EventPaginatedResponseList**](EventPaginatedResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

