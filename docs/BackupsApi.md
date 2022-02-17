# QoveryApi.BackupsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBackupDatabase**](BackupsApi.md#addBackupDatabase) | **POST** /database/{databaseId}/backup | Add a backup to the Database 
[**listDatabaseBackup**](BackupsApi.md#listDatabaseBackup) | **GET** /database/{databaseId}/backup | List database  backups
[**removeDatabaseBackup**](BackupsApi.md#removeDatabaseBackup) | **DELETE** /database/{databaseId}/backup/{backupId} | Remove database  backup



## addBackupDatabase

> BackupResponse addBackupDatabase(databaseId, opts)

Add a backup to the Database 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.BackupsApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'backupRequest': new QoveryApi.BackupRequest() // BackupRequest | 
};
apiInstance.addBackupDatabase(databaseId, opts, (error, data, response) => {
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
 **backupRequest** | [**BackupRequest**](BackupRequest.md)|  | [optional] 

### Return type

[**BackupResponse**](BackupResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listDatabaseBackup

> BackupPaginatedResponseList listDatabaseBackup(databaseId, opts)

List database  backups

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.BackupsApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listDatabaseBackup(databaseId, opts, (error, data, response) => {
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
 **startId** | **String**| Starting point after which to return results | [optional] 

### Return type

[**BackupPaginatedResponseList**](BackupPaginatedResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeDatabaseBackup

> removeDatabaseBackup(databaseId, backupId)

Remove database  backup

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.BackupsApi();
let databaseId = "databaseId_example"; // String | Database ID
let backupId = "backupId_example"; // String | Database Backup ID
apiInstance.removeDatabaseBackup(databaseId, backupId, (error, data, response) => {
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
 **backupId** | **String**| Database Backup ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

