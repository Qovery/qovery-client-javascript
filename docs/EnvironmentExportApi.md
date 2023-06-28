# QoveryApi.EnvironmentExportApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportEnvironmentConfigurationIntoTerraform**](EnvironmentExportApi.md#exportEnvironmentConfigurationIntoTerraform) | **GET** /environment/{environmentId}/terraformExport | Export full environment and its resources into Terraform manifests



## exportEnvironmentConfigurationIntoTerraform

> File exportEnvironmentConfigurationIntoTerraform(environmentId, opts)

Export full environment and its resources into Terraform manifests

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentExportApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'exportSecrets': false // Boolean | export Secrets from configuration and include them into Terraform export
};
apiInstance.exportEnvironmentConfigurationIntoTerraform(environmentId, opts, (error, data, response) => {
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
 **exportSecrets** | **Boolean**| export Secrets from configuration and include them into Terraform export | [optional] [default to false]

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip

