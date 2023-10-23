# QoveryApi.HelmDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listHelmDeploymentHistory**](HelmDeploymentHistoryApi.md#listHelmDeploymentHistory) | **GET** /helm/{helmId}/deploymentHistory | List helm deployments



## listHelmDeploymentHistory

> ListHelmDeploymentHistory200Response listHelmDeploymentHistory(helmId)

List helm deployments

Returns the 20 last helm deployments

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

let apiInstance = new QoveryApi.HelmDeploymentHistoryApi();
let helmId = "helmId_example"; // String | Helm ID
apiInstance.listHelmDeploymentHistory(helmId, (error, data, response) => {
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
 **helmId** | **String**| Helm ID | 

### Return type

[**ListHelmDeploymentHistory200Response**](ListHelmDeploymentHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

