# QoveryApi.EnvironmentApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAllApplications**](EnvironmentApi.md#deployAllApplications) | **POST** /environment/{environmentId}/application/deploy | Deploy applications



## deployAllApplications

> Status deployAllApplications(environmentId, opts)

Deploy applications

Start a deployment of the environment. Any of the services within the chosen environment based on the following rule: a service is deployed only if a new version is specified in the payload for that application/container or if there was a change in its configuration that needs to be applied (vCPU,RAM etc..)

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

let apiInstance = new QoveryApi.EnvironmentApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'deployAllRequest': new QoveryApi.DeployAllRequest() // DeployAllRequest | 
};
apiInstance.deployAllApplications(environmentId, opts, (error, data, response) => {
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
 **deployAllRequest** | [**DeployAllRequest**](DeployAllRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

