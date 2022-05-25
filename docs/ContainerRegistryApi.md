# QoveryApi.ContainerRegistryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editContainerRegistry**](ContainerRegistryApi.md#editContainerRegistry) | **PUT** /organization/{organizationId}/containerRegistry/{containerRegistryId} | Edit a container registry



## editContainerRegistry

> ContainerRegistryResponse editContainerRegistry(organizationId, containerRegistryId, opts)

Edit a container registry

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ContainerRegistryApi();
let organizationId = "organizationId_example"; // String | Organization ID
let containerRegistryId = "containerRegistryId_example"; // String | Container Registry ID
let opts = {
  'containerRegistryRequest': new QoveryApi.ContainerRegistryRequest() // ContainerRegistryRequest | 
};
apiInstance.editContainerRegistry(organizationId, containerRegistryId, opts, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **containerRegistryId** | **String**| Container Registry ID | 
 **containerRegistryRequest** | [**ContainerRegistryRequest**](ContainerRegistryRequest.md)|  | [optional] 

### Return type

[**ContainerRegistryResponse**](ContainerRegistryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

