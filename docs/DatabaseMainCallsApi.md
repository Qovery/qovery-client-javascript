# QoveryApi.DatabaseMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDatabase**](DatabaseMainCallsApi.md#deleteDatabase) | **DELETE** /database/{databaseId} | Delete a database 
[**editDatabase**](DatabaseMainCallsApi.md#editDatabase) | **PUT** /database/{databaseId} | Edit a database 
[**editDatabaseCredentials**](DatabaseMainCallsApi.md#editDatabaseCredentials) | **PUT** /database/{databaseId}/masterCredentials | Edit database  master credentials
[**getDatabase**](DatabaseMainCallsApi.md#getDatabase) | **GET** /database/{databaseId} | Get database by ID
[**getDatabaseMasterCredentials**](DatabaseMainCallsApi.md#getDatabaseMasterCredentials) | **GET** /database/{databaseId}/masterCredentials | Get master credentials of the database
[**getDatabaseStatus**](DatabaseMainCallsApi.md#getDatabaseStatus) | **GET** /database/{databaseId}/status | Get database status
[**listDatabaseVersion**](DatabaseMainCallsApi.md#listDatabaseVersion) | **GET** /database/{databaseId}/version | List eligible versions for the database



## deleteDatabase

> deleteDatabase(databaseId)

Delete a database 

To delete a database you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.deleteDatabase(databaseId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editDatabase

> DatabaseResponse editDatabase(databaseId, opts)

Edit a database 

To edit a database  you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'databaseEditRequest': new QoveryApi.DatabaseEditRequest() // DatabaseEditRequest | 
};
apiInstance.editDatabase(databaseId, opts, (error, data, response) => {
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
 **databaseEditRequest** | [**DatabaseEditRequest**](DatabaseEditRequest.md)|  | [optional] 

### Return type

[**DatabaseResponse**](DatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editDatabaseCredentials

> CredentialsResponse editDatabaseCredentials(databaseId, opts)

Edit database  master credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'credentialsRequest': new QoveryApi.CredentialsRequest() // CredentialsRequest | 
};
apiInstance.editDatabaseCredentials(databaseId, opts, (error, data, response) => {
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
 **credentialsRequest** | [**CredentialsRequest**](CredentialsRequest.md)|  | [optional] 

### Return type

[**CredentialsResponse**](CredentialsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatabase

> DatabaseResponse getDatabase(databaseId)

Get database by ID

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.getDatabase(databaseId, (error, data, response) => {
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

[**DatabaseResponse**](DatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseMasterCredentials

> CredentialsResponse getDatabaseMasterCredentials(databaseId)

Get master credentials of the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.getDatabaseMasterCredentials(databaseId, (error, data, response) => {
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

[**CredentialsResponse**](CredentialsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatabaseStatus

> Status getDatabaseStatus(databaseId)

Get database status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.getDatabaseStatus(databaseId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDatabaseVersion

> VersionResponseList listDatabaseVersion(databaseId)

List eligible versions for the database

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseMainCallsApi();
let databaseId = "databaseId_example"; // String | Database ID
apiInstance.listDatabaseVersion(databaseId, (error, data, response) => {
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

[**VersionResponseList**](VersionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

