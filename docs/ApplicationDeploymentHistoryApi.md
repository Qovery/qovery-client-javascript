# BetaQoveryApi.ApplicationDeploymentHistoryApi

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
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.ApplicationDeploymentHistoryApi();
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

