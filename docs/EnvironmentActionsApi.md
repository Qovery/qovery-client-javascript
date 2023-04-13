# QoveryApi.EnvironmentActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelEnvironmentDeployment**](EnvironmentActionsApi.md#cancelEnvironmentDeployment) | **POST** /environment/{environmentId}/cancelDeployment | Cancel environment deployment
[**cloneEnvironment**](EnvironmentActionsApi.md#cloneEnvironment) | **POST** /environment/{environmentId}/clone | Clone environment
[**deployAllServices**](EnvironmentActionsApi.md#deployAllServices) | **POST** /environment/{environmentId}/service/deploy | Deploy services
[**deployEnvironment**](EnvironmentActionsApi.md#deployEnvironment) | **POST** /environment/{environmentId}/deploy | Deploy environment
[**rebootServices**](EnvironmentActionsApi.md#rebootServices) | **POST** /environment/{environmentId}/service/restart-service | Reboot services
[**redeployEnvironment**](EnvironmentActionsApi.md#redeployEnvironment) | **POST** /environment/{environmentId}/redeploy | Redeploy environment
[**restartEnvironment**](EnvironmentActionsApi.md#restartEnvironment) | **POST** /environment/{environmentId}/restart | Deprecated - Restart environment
[**stopEnvironment**](EnvironmentActionsApi.md#stopEnvironment) | **POST** /environment/{environmentId}/stop | Stop environment



## cancelEnvironmentDeployment

> EnvironmentStatus cancelEnvironmentDeployment(environmentId)

Cancel environment deployment

Cancel the current deployment of your environment.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.cancelEnvironmentDeployment(environmentId, (error, data, response) => {
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

[**EnvironmentStatus**](EnvironmentStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloneEnvironment

> Environment cloneEnvironment(environmentId, opts)

Clone environment

You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'cloneRequest': new QoveryApi.CloneRequest() // CloneRequest | 
};
apiInstance.cloneEnvironment(environmentId, opts, (error, data, response) => {
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
 **cloneRequest** | [**CloneRequest**](CloneRequest.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deployAllServices

> Status deployAllServices(environmentId, opts)

Deploy services

Update and deploy the selected services

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'deployAllRequest': new QoveryApi.DeployAllRequest() // DeployAllRequest | 
};
apiInstance.deployAllServices(environmentId, opts, (error, data, response) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deployEnvironment

> Status deployEnvironment(environmentId)

Deploy environment

This will deploy all the services of this environment to their latest version.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.deployEnvironment(environmentId, (error, data, response) => {
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

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rebootServices

> Status rebootServices(environmentId, opts)

Reboot services

Update and reboot the selected services

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
let opts = {
  'rebootServicesRequest': new QoveryApi.RebootServicesRequest() // RebootServicesRequest | 
};
apiInstance.rebootServices(environmentId, opts, (error, data, response) => {
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
 **rebootServicesRequest** | [**RebootServicesRequest**](RebootServicesRequest.md)|  | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## redeployEnvironment

> EnvironmentStatus redeployEnvironment(environmentId)

Redeploy environment

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.redeployEnvironment(environmentId, (error, data, response) => {
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

[**EnvironmentStatus**](EnvironmentStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartEnvironment

> EnvironmentStatus restartEnvironment(environmentId)

Deprecated - Restart environment

**Deprecated** - Please use the \&quot;Redeploy environment\&quot; endpoint now

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.restartEnvironment(environmentId, (error, data, response) => {
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

[**EnvironmentStatus**](EnvironmentStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopEnvironment

> EnvironmentStatus stopEnvironment(environmentId)

Stop environment

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.EnvironmentActionsApi();
let environmentId = "environmentId_example"; // String | Environment ID
apiInstance.stopEnvironment(environmentId, (error, data, response) => {
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

[**EnvironmentStatus**](EnvironmentStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

