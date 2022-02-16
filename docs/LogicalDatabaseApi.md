# BetaQoveryApi.LogicalDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLogicalDatabase**](LogicalDatabaseApi.md#deleteLogicalDatabase) | **DELETE** /logicalDatabase/{logicalDatabaseId} | Delete a Logical database
[**editLogicalDatabase**](LogicalDatabaseApi.md#editLogicalDatabase) | **PUT** /logicalDatabase/{logicalDatabaseId} | Edit a logical database
[**editLogicalDatabaseCredentials**](LogicalDatabaseApi.md#editLogicalDatabaseCredentials) | **PUT** /logicalDatabase/{logicalDatabaseId}/credentials | Edit logical database credentials
[**getLogicalDatabase**](LogicalDatabaseApi.md#getLogicalDatabase) | **GET** /logicalDatabase/{logicalDatabaseId} | Get logical database by ID
[**getLogicalDatabaseCredentials**](LogicalDatabaseApi.md#getLogicalDatabaseCredentials) | **GET** /logicalDatabase/{logicalDatabaseId}/credentials | Get  credentials of the logical database
[**listLogicalDatabaseApplication**](LogicalDatabaseApi.md#listLogicalDatabaseApplication) | **GET** /logicalDatabase/{logicalDatabaseId}/application | List linked applications
[**listLogicalDatabaseDatabase**](LogicalDatabaseApi.md#listLogicalDatabaseDatabase) | **GET** /database/{databaseId}/logicalDatabase | List logical databases of a database



## deleteLogicalDatabase

> deleteLogicalDatabase(logicalDatabaseId)

Delete a Logical database

To delete a logical database you must have the project user permission

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
apiInstance.deleteLogicalDatabase(logicalDatabaseId, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editLogicalDatabase

> LogicalDatabaseResponse editLogicalDatabase(logicalDatabaseId, opts)

Edit a logical database

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
let opts = {
  'logicalDatabaseRequest': new BetaQoveryApi.LogicalDatabaseRequest() // LogicalDatabaseRequest | 
};
apiInstance.editLogicalDatabase(logicalDatabaseId, opts, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 
 **logicalDatabaseRequest** | [**LogicalDatabaseRequest**](LogicalDatabaseRequest.md)|  | [optional] 

### Return type

[**LogicalDatabaseResponse**](LogicalDatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editLogicalDatabaseCredentials

> CredentialsResponse editLogicalDatabaseCredentials(logicalDatabaseId, opts)

Edit logical database credentials

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
let opts = {
  'credentialsRequest': new BetaQoveryApi.CredentialsRequest() // CredentialsRequest | 
};
apiInstance.editLogicalDatabaseCredentials(logicalDatabaseId, opts, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 
 **credentialsRequest** | [**CredentialsRequest**](CredentialsRequest.md)|  | [optional] 

### Return type

[**CredentialsResponse**](CredentialsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLogicalDatabase

> LogicalDatabaseResponse getLogicalDatabase(logicalDatabaseId)

Get logical database by ID

A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
apiInstance.getLogicalDatabase(logicalDatabaseId, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 

### Return type

[**LogicalDatabaseResponse**](LogicalDatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogicalDatabaseCredentials

> CredentialsResponse getLogicalDatabaseCredentials(logicalDatabaseId)

Get  credentials of the logical database

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
apiInstance.getLogicalDatabaseCredentials(logicalDatabaseId, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 

### Return type

[**CredentialsResponse**](CredentialsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogicalDatabaseApplication

> ApplicationResponseList listLogicalDatabaseApplication(logicalDatabaseId)

List linked applications

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
apiInstance.listLogicalDatabaseApplication(logicalDatabaseId, (error, data, response) => {
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
 **logicalDatabaseId** | **String**| Logical Database ID | 

### Return type

[**ApplicationResponseList**](ApplicationResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogicalDatabaseDatabase

> LogicalDatabaseResponseList listLogicalDatabaseDatabase(databaseId)

List logical databases of a database

A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.LogicalDatabaseApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.listLogicalDatabaseDatabase(databaseId, (error, data, response) => {
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

[**LogicalDatabaseResponseList**](LogicalDatabaseResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

