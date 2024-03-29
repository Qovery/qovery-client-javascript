# QoveryApi.ApplicationDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listApplicationDeploymentHistory**](ApplicationDeploymentHistoryApi.md#listApplicationDeploymentHistory) | **GET** /application/{applicationId}/deploymentHistory | List application deploys



## listApplicationDeploymentHistory

> DeploymentHistoryPaginatedResponseList listApplicationDeploymentHistory(applicationId, opts)

List application deploys

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter. You can also filter by status (FAILED or SUCCESS), and git_commit_id

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

let apiInstance = new QoveryApi.ApplicationDeploymentHistoryApi();
let applicationId = "applicationId_example"; // String | Application ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listApplicationDeploymentHistory(applicationId, opts, (error, data, response) => {
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
 **startId** | **String**| Starting point after which to return results | [optional] 

### Return type

[**DeploymentHistoryPaginatedResponseList**](DeploymentHistoryPaginatedResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

