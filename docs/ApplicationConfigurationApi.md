# QoveryApi.ApplicationConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editApplicationNetwork**](ApplicationConfigurationApi.md#editApplicationNetwork) | **PUT** /application/{applicationId}/network | Edit Application Network
[**getApplicationNetwork**](ApplicationConfigurationApi.md#getApplicationNetwork) | **GET** /application/{applicationId}/network | Get Application Network information



## editApplicationNetwork

> ApplicationNetworkResponse editApplicationNetwork(applicationId, opts)

Edit Application Network

Edit the Network settings of the application.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationConfigurationApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'applicationNetworkRequest': new QoveryApi.ApplicationNetworkRequest() // ApplicationNetworkRequest | 
};
apiInstance.editApplicationNetwork(applicationId, opts, (error, data, response) => {
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
 **applicationNetworkRequest** | [**ApplicationNetworkRequest**](ApplicationNetworkRequest.md)|  | [optional] 

### Return type

[**ApplicationNetworkResponse**](ApplicationNetworkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApplicationNetwork

> ApplicationNetworkResponse getApplicationNetwork(applicationId)

Get Application Network information

Get status of the application network settings.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationConfigurationApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.getApplicationNetwork(applicationId, (error, data, response) => {
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

[**ApplicationNetworkResponse**](ApplicationNetworkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

