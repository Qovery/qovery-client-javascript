# QoveryApi.CloudProviderApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAWSEKSInstanceType**](CloudProviderApi.md#listAWSEKSInstanceType) | **GET** /aws/eks/instanceType/{region} | List AWS EKS available instance types
[**listAWSEc2InstanceType**](CloudProviderApi.md#listAWSEc2InstanceType) | **GET** /aws/ec2/instanceType/{region} | List AWS EC2 available instance types
[**listAWSFeatures**](CloudProviderApi.md#listAWSFeatures) | **GET** /aws/clusterFeature | List AWS features available
[**listAWSInstanceType**](CloudProviderApi.md#listAWSInstanceType) | **GET** /aws/instanceType | List AWS available instance types
[**listAWSRegions**](CloudProviderApi.md#listAWSRegions) | **GET** /aws/region | List AWS regions
[**listCloudProvider**](CloudProviderApi.md#listCloudProvider) | **GET** /cloudProvider | List Cloud providers available
[**listDOFeatures**](CloudProviderApi.md#listDOFeatures) | **GET** /digitalOcean/clusterFeature | List DO features available
[**listDOInstanceType**](CloudProviderApi.md#listDOInstanceType) | **GET** /digitalOcean/instanceType | List DO available instance types
[**listDORegions**](CloudProviderApi.md#listDORegions) | **GET** /digitalOcean/region | List DO regions
[**listScalewayFeatures**](CloudProviderApi.md#listScalewayFeatures) | **GET** /scaleway/clusterFeature | List Scaleway features available
[**listScalewayInstanceType**](CloudProviderApi.md#listScalewayInstanceType) | **GET** /scaleway/instanceType | List Scaleway available instance types
[**listScalewayKapsuleInstanceType**](CloudProviderApi.md#listScalewayKapsuleInstanceType) | **GET** /scaleway/instanceType/{zone} | List Scaleway Kapsule available instance types
[**listScalewayRegions**](CloudProviderApi.md#listScalewayRegions) | **GET** /scaleway/region | List Scaleway regions



## listAWSEKSInstanceType

> ClusterInstanceTypeResponseList listAWSEKSInstanceType(region)

List AWS EKS available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
let region = us-east-2; // String | region name
apiInstance.listAWSEKSInstanceType(region, (error, data, response) => {
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
 **region** | **String**| region name | 

### Return type

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAWSEc2InstanceType

> ClusterInstanceTypeResponseList listAWSEc2InstanceType(region)

List AWS EC2 available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
let region = us-east-2; // String | region name
apiInstance.listAWSEc2InstanceType(region, (error, data, response) => {
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
 **region** | **String**| region name | 

### Return type

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAWSFeatures

> ClusterFeatureResponseList listAWSFeatures()

List AWS features available

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listAWSFeatures((error, data, response) => {
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

[**ClusterFeatureResponseList**](ClusterFeatureResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAWSInstanceType

> ClusterInstanceTypeResponseList listAWSInstanceType()

List AWS available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listAWSInstanceType((error, data, response) => {
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

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAWSRegions

> ClusterRegionResponseList listAWSRegions()

List AWS regions

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listAWSRegions((error, data, response) => {
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

[**ClusterRegionResponseList**](ClusterRegionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCloudProvider

> CloudProviderResponseList listCloudProvider()

List Cloud providers available

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listCloudProvider((error, data, response) => {
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

[**CloudProviderResponseList**](CloudProviderResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDOFeatures

> ClusterFeatureResponseList listDOFeatures()

List DO features available

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listDOFeatures((error, data, response) => {
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

[**ClusterFeatureResponseList**](ClusterFeatureResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDOInstanceType

> ClusterInstanceTypeResponseList listDOInstanceType()

List DO available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listDOInstanceType((error, data, response) => {
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

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDORegions

> ClusterRegionResponseList listDORegions()

List DO regions

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listDORegions((error, data, response) => {
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

[**ClusterRegionResponseList**](ClusterRegionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScalewayFeatures

> ClusterFeatureResponseList listScalewayFeatures()

List Scaleway features available

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listScalewayFeatures((error, data, response) => {
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

[**ClusterFeatureResponseList**](ClusterFeatureResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScalewayInstanceType

> ClusterInstanceTypeResponseList listScalewayInstanceType()

List Scaleway available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listScalewayInstanceType((error, data, response) => {
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

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScalewayKapsuleInstanceType

> ClusterInstanceTypeResponseList listScalewayKapsuleInstanceType(zone)

List Scaleway Kapsule available instance types

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
let zone = fr-par-1; // String | zone name
apiInstance.listScalewayKapsuleInstanceType(zone, (error, data, response) => {
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
 **zone** | **String**| zone name | 

### Return type

[**ClusterInstanceTypeResponseList**](ClusterInstanceTypeResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScalewayRegions

> ClusterRegionResponseList listScalewayRegions()

List Scaleway regions

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.CloudProviderApi();
apiInstance.listScalewayRegions((error, data, response) => {
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

[**ClusterRegionResponseList**](ClusterRegionResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

