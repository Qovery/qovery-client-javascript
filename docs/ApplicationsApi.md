# QoveryApi.ApplicationsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationsApi.md#createApplication) | **POST** /environment/{environmentId}/application | Create an application
[**getDefaultApplicationAdvancedSettings**](ApplicationsApi.md#getDefaultApplicationAdvancedSettings) | **GET** /defaultApplicationAdvancedSettings | List default application advanced settings
[**getDefaultClusterAdvancedSettings**](ApplicationsApi.md#getDefaultClusterAdvancedSettings) | **GET** /defaultClusterAdvancedSettings | List default cluster advanced settings
[**getEnvironmentApplicationCurrentScale**](ApplicationsApi.md#getEnvironmentApplicationCurrentScale) | **GET** /environment/{environmentId}/application/currentScale | List current scaling information for each application
[**getEnvironmentApplicationCurrentStorage**](ApplicationsApi.md#getEnvironmentApplicationCurrentStorage) | **GET** /environment/{environmentId}/application/currentStorage | List current storage disk usage for each application
[**getEnvironmentApplicationStatus**](ApplicationsApi.md#getEnvironmentApplicationStatus) | **GET** /environment/{environmentId}/application/status | List all environment applications statuses
[**getEnvironmentApplicationSupportedLanguages**](ApplicationsApi.md#getEnvironmentApplicationSupportedLanguages) | **GET** /environment/{environmentId}/application/supportedLanguage | List supported languages
[**listApplication**](ApplicationsApi.md#listApplication) | **GET** /environment/{environmentId}/application | List applications



## createApplication

> Application createApplication(environmentId, opts)

Create an application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'applicationRequest': new QoveryApi.ApplicationRequest() // ApplicationRequest | 
};
apiInstance.createApplication(environmentId, opts, (error, data, response) => {
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
 **applicationRequest** | [**ApplicationRequest**](ApplicationRequest.md)|  | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDefaultApplicationAdvancedSettings

> ApplicationAdvancedSettings getDefaultApplicationAdvancedSettings()

List default application advanced settings

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
apiInstance.getDefaultApplicationAdvancedSettings((error, data, response) => {
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

[**ApplicationAdvancedSettings**](ApplicationAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDefaultClusterAdvancedSettings

> ClusterAdvancedSettings getDefaultClusterAdvancedSettings()

List default cluster advanced settings

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
apiInstance.getDefaultClusterAdvancedSettings((error, data, response) => {
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

[**ClusterAdvancedSettings**](ClusterAdvancedSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentApplicationCurrentScale

> EnvironmentApplicationsCurrentScaleResponseList getEnvironmentApplicationCurrentScale(environmentId)

List current scaling information for each application

Returns min, max, and running number of instances for each application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentApplicationCurrentScale(environmentId, (error, data, response) => {
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

### Return type

[**EnvironmentApplicationsCurrentScaleResponseList**](EnvironmentApplicationsCurrentScaleResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentApplicationCurrentStorage

> EnvironmentApplicationsStorageResponseList getEnvironmentApplicationCurrentStorage(environmentId)

List current storage disk usage for each application

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentApplicationCurrentStorage(environmentId, (error, data, response) => {
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

### Return type

[**EnvironmentApplicationsStorageResponseList**](EnvironmentApplicationsStorageResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentApplicationStatus

> ReferenceObjectStatusResponseList getEnvironmentApplicationStatus(environmentId)

List all environment applications statuses

Returns a list of applications with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentApplicationStatus(environmentId, (error, data, response) => {
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

### Return type

[**ReferenceObjectStatusResponseList**](ReferenceObjectStatusResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentApplicationSupportedLanguages

> EnvironmentApplicationsSupportedLanguageList getEnvironmentApplicationSupportedLanguages(environmentId)

List supported languages

Returns list of languages supported by Buildpacks.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.getEnvironmentApplicationSupportedLanguages(environmentId, (error, data, response) => {
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

### Return type

[**EnvironmentApplicationsSupportedLanguageList**](EnvironmentApplicationsSupportedLanguageList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplication

> ApplicationResponseList listApplication(environmentId)

List applications

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ApplicationsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.listApplication(environmentId, (error, data, response) => {
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

### Return type

[**ApplicationResponseList**](ApplicationResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

