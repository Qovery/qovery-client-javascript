# QoveryApi.DatabaseEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatabaseEvent**](DatabaseEventApi.md#listDatabaseEvent) | **GET** /database/{databaseId}/event | List database  events



## listDatabaseEvent

> EventPaginatedResponseList listDatabaseEvent(databaseId, opts)

List database  events

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseEventApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listDatabaseEvent(databaseId, opts, (error, data, response) => {
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

[**EventPaginatedResponseList**](EventPaginatedResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

