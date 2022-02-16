# BetaQoveryApi.EnvironmentDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEnvironmentDeploymentHistory**](EnvironmentDeploymentHistoryApi.md#listEnvironmentDeploymentHistory) | **GET** /environment/{environmentId}/deploymentHistory | List environment deployments



## listEnvironmentDeploymentHistory

> DeploymentHistoryEnvironmentPaginatedResponseList listEnvironmentDeploymentHistory(environmentId, opts)

List environment deployments

List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.EnvironmentDeploymentHistoryApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'startId': "startId_example" // String | Starting point after which to return results
};
apiInstance.listEnvironmentDeploymentHistory(environmentId, opts, (error, data, response) => {
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
 **environmentId** | **String**| Environment ID | 
 **startId** | **String**| Starting point after which to return results | [optional] 

### Return type

[**DeploymentHistoryEnvironmentPaginatedResponseList**](DeploymentHistoryEnvironmentPaginatedResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

