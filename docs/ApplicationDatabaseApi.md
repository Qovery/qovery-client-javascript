# BetaQoveryApi.ApplicationDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachDatabasetoApplication**](ApplicationDatabaseApi.md#attachDatabasetoApplication) | **POST** /application/{applicationId}/database/{targetDatabaseId} | Link a database to the application
[**attachLogicalDatabasetoApplication**](ApplicationDatabaseApi.md#attachLogicalDatabasetoApplication) | **POST** /application/{applicationId}/logicalDatabase/{targetLogicalDatabaseId} | Link a logical database to the application
[**listApplicationDatabase**](ApplicationDatabaseApi.md#listApplicationDatabase) | **GET** /application/{applicationId}/database | List linked databases
[**listApplicationLogicalDatabase**](ApplicationDatabaseApi.md#listApplicationLogicalDatabase) | **GET** /application/{applicationId}/logicalDatabase | List linked logical databases
[**removeDatabaseFromApplication**](ApplicationDatabaseApi.md#removeDatabaseFromApplication) | **DELETE** /application/{applicationId}/database/{targetDatabaseId} | Remove database link to this application.
[**removeLogicalDatabaseFromApplication**](ApplicationDatabaseApi.md#removeLogicalDatabaseFromApplication) | **DELETE** /application/{applicationId}/logicalDatabase/{targetLogicalDatabaseId} | Remove logical database link to this application.



## attachDatabasetoApplication

> DatabaseResponse attachDatabasetoApplication(applicationId, targetDatabaseId)

Link a database to the application

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetDatabaseId = "targetDatabaseId_example"; // String | Target database ID
apiInstance.attachDatabasetoApplication(applicationId, targetDatabaseId, (error, data, response) => {
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
 **targetDatabaseId** | **String**| Target database ID | 

### Return type

[**DatabaseResponse**](DatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachLogicalDatabasetoApplication

> LogicalDatabaseResponse attachLogicalDatabasetoApplication(applicationId, targetLogicalDatabaseId)

Link a logical database to the application

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetLogicalDatabaseId = "targetLogicalDatabaseId_example"; // String | Target database ID
apiInstance.attachLogicalDatabasetoApplication(applicationId, targetLogicalDatabaseId, (error, data, response) => {
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
 **targetLogicalDatabaseId** | **String**| Target database ID | 

### Return type

[**LogicalDatabaseResponse**](LogicalDatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplicationDatabase

> DatabaseResponseList listApplicationDatabase(applicationId)

List linked databases

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.listApplicationDatabase(applicationId, (error, data, response) => {
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

[**DatabaseResponseList**](DatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplicationLogicalDatabase

> LogicalDatabaseResponseList listApplicationLogicalDatabase(applicationId)

List linked logical databases

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
apiInstance.listApplicationLogicalDatabase(applicationId, (error, data, response) => {
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

[**LogicalDatabaseResponseList**](LogicalDatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeDatabaseFromApplication

> removeDatabaseFromApplication(applicationId, targetDatabaseId)

Remove database link to this application.

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetDatabaseId = "targetDatabaseId_example"; // String | Target database ID
apiInstance.removeDatabaseFromApplication(applicationId, targetDatabaseId, (error, data, response) => {
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
 **targetDatabaseId** | **String**| Target database ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeLogicalDatabaseFromApplication

> removeLogicalDatabaseFromApplication(applicationId, targetLogicalDatabaseId)

Remove logical database link to this application.

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDatabaseApi();
let applicationId = "applicationId_example"; // String | Application ID
let targetLogicalDatabaseId = "targetLogicalDatabaseId_example"; // String | Target database ID
apiInstance.removeLogicalDatabaseFromApplication(applicationId, targetLogicalDatabaseId, (error, data, response) => {
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
 **targetLogicalDatabaseId** | **String**| Target database ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

