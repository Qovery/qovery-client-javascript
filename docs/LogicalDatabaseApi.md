# QoveryApi.LogicalDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogicalDatabaseOnDatabase**](LogicalDatabaseApi.md#createLogicalDatabaseOnDatabase) | **POST** /database/{databaseId}/logicalDatabase | Create a logical database on the database
[**deleteLogicalDatabase**](LogicalDatabaseApi.md#deleteLogicalDatabase) | **DELETE** /logicalDatabase/{logicalDatabaseId} | Delete a Logical database
[**editLogicalDatabase**](LogicalDatabaseApi.md#editLogicalDatabase) | **PUT** /logicalDatabase/{logicalDatabaseId} | Edit a logical database
[**editLogicalDatabaseCredentials**](LogicalDatabaseApi.md#editLogicalDatabaseCredentials) | **PUT** /logicalDatabase/{logicalDatabaseId}/credentials | Edit logical database credentials
[**getLogicalDatabase**](LogicalDatabaseApi.md#getLogicalDatabase) | **GET** /logicalDatabase/{logicalDatabaseId} | Get logical database by ID
[**getLogicalDatabaseCredentials**](LogicalDatabaseApi.md#getLogicalDatabaseCredentials) | **GET** /logicalDatabase/{logicalDatabaseId}/credentials | Get  credentials of the logical database
[**listLogicalDatabaseApplication**](LogicalDatabaseApi.md#listLogicalDatabaseApplication) | **GET** /logicalDatabase/{logicalDatabaseId}/application | List linked applications
[**listLogicalDatabaseContainer**](LogicalDatabaseApi.md#listLogicalDatabaseContainer) | **GET** /logicalDatabase/{logicalDatabaseId}/container | List linked containers
[**listLogicalDatabaseDatabase**](LogicalDatabaseApi.md#listLogicalDatabaseDatabase) | **GET** /database/{databaseId}/logicalDatabase | List logical databases of a database



## createLogicalDatabaseOnDatabase

> LogicalDatabase createLogicalDatabaseOnDatabase(databaseId, opts)

Create a logical database on the database

If you don&#39;t specify credentials, Qovery will autogenerate them.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'logicalDatabaseRequest': new QoveryApi.LogicalDatabaseRequest() // LogicalDatabaseRequest | 
};
apiInstance.createLogicalDatabaseOnDatabase(databaseId, opts, (error, data, response) => {
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
 **logicalDatabaseRequest** | [**LogicalDatabaseRequest**](LogicalDatabaseRequest.md)|  | [optional] 

### Return type

[**LogicalDatabase**](LogicalDatabase.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLogicalDatabase

> deleteLogicalDatabase(logicalDatabaseId)

Delete a Logical database

To delete a logical database you must have the project user permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
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

> LogicalDatabase editLogicalDatabase(logicalDatabaseId, opts)

Edit a logical database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
let opts = {
  'logicalDatabaseRequest': new QoveryApi.LogicalDatabaseRequest() // LogicalDatabaseRequest | 
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

[**LogicalDatabase**](LogicalDatabase.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editLogicalDatabaseCredentials

> Credentials editLogicalDatabaseCredentials(logicalDatabaseId, opts)

Edit logical database credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
let opts = {
  'credentialsRequest': new QoveryApi.CredentialsRequest() // CredentialsRequest | 
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

[**Credentials**](Credentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLogicalDatabase

> LogicalDatabase getLogicalDatabase(logicalDatabaseId)

Get logical database by ID

A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
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

[**LogicalDatabase**](LogicalDatabase.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogicalDatabaseCredentials

> Credentials getLogicalDatabaseCredentials(logicalDatabaseId)

Get  credentials of the logical database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
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

[**Credentials**](Credentials.md)

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
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
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


## listLogicalDatabaseContainer

> ContainerResponseList listLogicalDatabaseContainer(logicalDatabaseId)

List linked containers

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
let logicalDatabaseId = "logicalDatabaseId_example"; // String | Logical Database ID
apiInstance.listLogicalDatabaseContainer(logicalDatabaseId, (error, data, response) => {
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

[**ContainerResponseList**](ContainerResponseList.md)

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
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.LogicalDatabaseApi();
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

