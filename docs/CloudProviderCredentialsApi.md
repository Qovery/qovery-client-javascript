# QoveryApi.CloudProviderCredentialsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAWSCredentials**](CloudProviderCredentialsApi.md#createAWSCredentials) | **POST** /organization/{organizationId}/aws/credentials | Create AWS credentials set
[**createDOCredentials**](CloudProviderCredentialsApi.md#createDOCredentials) | **POST** /organization/{organizationId}/digitalOcean/credentials | Create Digital Ocean credentials set
[**createScalewayCredentials**](CloudProviderCredentialsApi.md#createScalewayCredentials) | **POST** /organization/{organizationId}/scaleway/credentials | Create Scaleway credentials set
[**deleteAWSCredentials**](CloudProviderCredentialsApi.md#deleteAWSCredentials) | **DELETE** /organization/{organizationId}/aws/credentials/{credentialsId} | Delete a set of AWS credentials
[**deleteDOCredentials**](CloudProviderCredentialsApi.md#deleteDOCredentials) | **DELETE** /organization/{organizationId}/digitalOcean/credentials/{credentialsId} | Delete a set of Digital Ocean credentials
[**deleteScalewayCredentials**](CloudProviderCredentialsApi.md#deleteScalewayCredentials) | **DELETE** /organization/{organizationId}/scaleway/credentials/{credentialsId} | Delete a set of Scaleway credentials
[**editAWSCredentials**](CloudProviderCredentialsApi.md#editAWSCredentials) | **PUT** /organization/{organizationId}/aws/credentials/{credentialsId} | Edit a set of AWS credentials
[**editDOCredentials**](CloudProviderCredentialsApi.md#editDOCredentials) | **PUT** /organization/{organizationId}/digitalOcean/credentials/{credentialsId} | Edit a set of Digital Ocean credentials
[**editScalewayCredentials**](CloudProviderCredentialsApi.md#editScalewayCredentials) | **PUT** /organization/{organizationId}/scaleway/credentials/{credentialsId} | Edit a set of Scaleway credentials
[**getAWSCredentials**](CloudProviderCredentialsApi.md#getAWSCredentials) | **GET** /organization/{organizationId}/aws/credentials/{credentialsId} | Get a set of AWS credentials
[**getDOCredentials**](CloudProviderCredentialsApi.md#getDOCredentials) | **GET** /organization/{organizationId}/digitalOcean/credentials/{credentialsId} | Get a set of Digital Ocean credentials
[**getScalewayCredentials**](CloudProviderCredentialsApi.md#getScalewayCredentials) | **GET** /organization/{organizationId}/scaleway/credentials/{credentialsId} | Get a set of Scaleway credentials
[**listAWSCredentials**](CloudProviderCredentialsApi.md#listAWSCredentials) | **GET** /organization/{organizationId}/aws/credentials | List AWS credentials
[**listDOCredentials**](CloudProviderCredentialsApi.md#listDOCredentials) | **GET** /organization/{organizationId}/digitalOcean/credentials | List DO credentials
[**listScalewayCredentials**](CloudProviderCredentialsApi.md#listScalewayCredentials) | **GET** /organization/{organizationId}/scaleway/credentials | List Scaleway credentials



## createAWSCredentials

> ClusterCredentials createAWSCredentials(organizationId, opts)

Create AWS credentials set

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'awsCredentialsRequest': new QoveryApi.AwsCredentialsRequest() // AwsCredentialsRequest | 
};
apiInstance.createAWSCredentials(organizationId, opts, (error, data, response) => {
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
 **awsCredentialsRequest** | [**AwsCredentialsRequest**](AwsCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDOCredentials

> ClusterCredentials createDOCredentials(organizationId, opts)

Create Digital Ocean credentials set

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'doCredentialsRequest': new QoveryApi.DoCredentialsRequest() // DoCredentialsRequest | 
};
apiInstance.createDOCredentials(organizationId, opts, (error, data, response) => {
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
 **doCredentialsRequest** | [**DoCredentialsRequest**](DoCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createScalewayCredentials

> ClusterCredentials createScalewayCredentials(organizationId, opts)

Create Scaleway credentials set

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'scalewayCredentialsRequest': new QoveryApi.ScalewayCredentialsRequest() // ScalewayCredentialsRequest | 
};
apiInstance.createScalewayCredentials(organizationId, opts, (error, data, response) => {
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
 **scalewayCredentialsRequest** | [**ScalewayCredentialsRequest**](ScalewayCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAWSCredentials

> deleteAWSCredentials(credentialsId, organizationId)

Delete a set of AWS credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let credentialsId = "credentialsId_example"; // String | Credentials ID
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteAWSCredentials(credentialsId, organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | **String**| Credentials ID | 
 **organizationId** | **String**| Organization ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDOCredentials

> deleteDOCredentials(credentialsId, organizationId)

Delete a set of Digital Ocean credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let credentialsId = "credentialsId_example"; // String | Credentials ID
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteDOCredentials(credentialsId, organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | **String**| Credentials ID | 
 **organizationId** | **String**| Organization ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteScalewayCredentials

> deleteScalewayCredentials(credentialsId, organizationId)

Delete a set of Scaleway credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let credentialsId = "credentialsId_example"; // String | Credentials ID
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteScalewayCredentials(credentialsId, organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | **String**| Credentials ID | 
 **organizationId** | **String**| Organization ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editAWSCredentials

> ClusterCredentials editAWSCredentials(organizationId, credentialsId, opts)

Edit a set of AWS credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
let opts = {
  'awsCredentialsRequest': new QoveryApi.AwsCredentialsRequest() // AwsCredentialsRequest | 
};
apiInstance.editAWSCredentials(organizationId, credentialsId, opts, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 
 **awsCredentialsRequest** | [**AwsCredentialsRequest**](AwsCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editDOCredentials

> ClusterCredentials editDOCredentials(organizationId, credentialsId, opts)

Edit a set of Digital Ocean credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
let opts = {
  'doCredentialsRequest': new QoveryApi.DoCredentialsRequest() // DoCredentialsRequest | 
};
apiInstance.editDOCredentials(organizationId, credentialsId, opts, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 
 **doCredentialsRequest** | [**DoCredentialsRequest**](DoCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editScalewayCredentials

> ClusterCredentials editScalewayCredentials(organizationId, credentialsId, opts)

Edit a set of Scaleway credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
let opts = {
  'scalewayCredentialsRequest': new QoveryApi.ScalewayCredentialsRequest() // ScalewayCredentialsRequest | 
};
apiInstance.editScalewayCredentials(organizationId, credentialsId, opts, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 
 **scalewayCredentialsRequest** | [**ScalewayCredentialsRequest**](ScalewayCredentialsRequest.md)|  | [optional] 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAWSCredentials

> ClusterCredentials getAWSCredentials(organizationId, credentialsId)

Get a set of AWS credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
apiInstance.getAWSCredentials(organizationId, credentialsId, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDOCredentials

> ClusterCredentials getDOCredentials(organizationId, credentialsId)

Get a set of Digital Ocean credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
apiInstance.getDOCredentials(organizationId, credentialsId, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScalewayCredentials

> ClusterCredentials getScalewayCredentials(organizationId, credentialsId)

Get a set of Scaleway credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
let credentialsId = "credentialsId_example"; // String | Credentials ID
apiInstance.getScalewayCredentials(organizationId, credentialsId, (error, data, response) => {
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
 **credentialsId** | **String**| Credentials ID | 

### Return type

[**ClusterCredentials**](ClusterCredentials.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAWSCredentials

> ClusterCredentialsResponseList listAWSCredentials(organizationId)

List AWS credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listAWSCredentials(organizationId, (error, data, response) => {
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

### Return type

[**ClusterCredentialsResponseList**](ClusterCredentialsResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDOCredentials

> ClusterCredentialsResponseList listDOCredentials(organizationId)

List DO credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listDOCredentials(organizationId, (error, data, response) => {
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

### Return type

[**ClusterCredentialsResponseList**](ClusterCredentialsResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScalewayCredentials

> ClusterCredentialsResponseList listScalewayCredentials(organizationId)

List Scaleway credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderCredentialsApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listScalewayCredentials(organizationId, (error, data, response) => {
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

### Return type

[**ClusterCredentialsResponseList**](ClusterCredentialsResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

