# QoveryApi.DependencyApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationDependency**](DependencyApi.md#createApplicationDependency) | **POST** /application/{applicationId}/dependency/{targetApplicationId} | Add application dependency to this application.
[**listApplicationDependency**](DependencyApi.md#listApplicationDependency) | **GET** /application/{applicationId}/dependency | List application dependencies
[**removeApplicationDependency**](DependencyApi.md#removeApplicationDependency) | **DELETE** /application/{applicationId}/dependency/{targetApplicationId} | Remove application dependency to this application.



## createApplicationDependency

> ApplicationResponse createApplicationDependency(applicationId, targetApplicationId)

Add application dependency to this application.

Add application dependency to this application to prevent this application starting before the linked dependencies

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DependencyApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetApplicationId = "targetApplicationId_example"; // String | Target application ID
apiInstance.createApplicationDependency(applicationId, targetApplicationId, (error, data, response) => {
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
 **targetApplicationId** | **String**| Target application ID | 

### Return type

[**ApplicationResponse**](ApplicationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplicationDependency

> ApplicationResponseList listApplicationDependency(applicationId)

List application dependencies

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DependencyApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.listApplicationDependency(applicationId, (error, data, response) => {
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

[**ApplicationResponseList**](ApplicationResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeApplicationDependency

> removeApplicationDependency(applicationId, targetApplicationId)

Remove application dependency to this application.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DependencyApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetApplicationId = "targetApplicationId_example"; // String | Target application ID
apiInstance.removeApplicationDependency(applicationId, targetApplicationId, (error, data, response) => {
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
 **applicationId** | **String**| Application ID | 
 **targetApplicationId** | **String**| Target application ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

