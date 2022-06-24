# QoveryApi.DatabaseDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatabaseDeploymentHistory**](DatabaseDeploymentHistoryApi.md#listDatabaseDeploymentHistory) | **GET** /database/{databaseId}/deploymentHistory | List database deploys



## listDatabaseDeploymentHistory

> ListDatabaseDeploymentHistory200Response listDatabaseDeploymentHistory(databaseId, opts)

List database deploys

By default it returns the 20 last results. The response is paginated.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.DatabaseDeploymentHistoryApi();
let databaseId = "databaseId_example"; // String | Database ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listDatabaseDeploymentHistory(databaseId, opts, (error, data, response) => {
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

[**ListDatabaseDeploymentHistory200Response**](ListDatabaseDeploymentHistory200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

