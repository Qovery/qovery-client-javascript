# BetaQoveryApi.DatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogicalDatabaseOnDatabase**](DatabaseApi.md#createLogicalDatabaseOnDatabase) | **POST** /database/{databaseId}/logicalDatabase | Create a logical database on the database



## createLogicalDatabaseOnDatabase

> LogicalDatabaseResponse createLogicalDatabaseOnDatabase(databaseId, opts)

Create a logical database on the database

If you don&#39;t specify credentials, Qovery will autogenerate them.

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.DatabaseApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'logicalDatabaseRequest': new BetaQoveryApi.LogicalDatabaseRequest() // LogicalDatabaseRequest | 
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

[**LogicalDatabaseResponse**](LogicalDatabaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

