# QoveryApi.JobConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editJobAdvancedSettings**](JobConfigurationApi.md#editJobAdvancedSettings) | **PUT** /job/{jobId}/advancedSettings | Edit advanced settings
[**getJobAdvancedSettings**](JobConfigurationApi.md#getJobAdvancedSettings) | **GET** /job/{jobId}/advancedSettings | Get advanced settings



## editJobAdvancedSettings

> JobAdvancedSettings editJobAdvancedSettings(opts)

Edit advanced settings

Edit advanced settings by returning table of advanced settings.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobConfigurationApi();
let opts = {
  'jobAdvancedSettings': new QoveryApi.JobAdvancedSettings() // JobAdvancedSettings | 
};
apiInstance.editJobAdvancedSettings(opts, (error, data, response) => {
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
 **jobAdvancedSettings** | [**JobAdvancedSettings**](JobAdvancedSettings.md)|  | [optional] 

### Return type

[**JobAdvancedSettings**](JobAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getJobAdvancedSettings

> JobAdvancedSettings getJobAdvancedSettings()

Get advanced settings

Get list and values of the advanced settings of the job.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobConfigurationApi();
apiInstance.getJobAdvancedSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JobAdvancedSettings**](JobAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

