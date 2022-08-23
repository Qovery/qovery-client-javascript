# QoveryApi.ClustersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCluster**](ClustersApi.md#createCluster) | **POST** /organization/{organizationId}/cluster | Create a cluster
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /organization/{organizationId}/cluster/{clusterId} | Delete a cluster
[**deployCluster**](ClustersApi.md#deployCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/deploy | Deploy a cluster
[**editCluster**](ClustersApi.md#editCluster) | **PUT** /organization/{organizationId}/cluster/{clusterId} | Edit a cluster
[**editClusterAdvancedSettings**](ClustersApi.md#editClusterAdvancedSettings) | **PUT** /organization/{organizationId}/cluster/{clusterId}/advancedSettings | Edit advanced settings
[**editRoutingTable**](ClustersApi.md#editRoutingTable) | **PUT** /organization/{organizationId}/cluster/{clusterId}/routingTable | Edit routing table
[**getClusterAdvancedSettings**](ClustersApi.md#getClusterAdvancedSettings) | **GET** /organization/{organizationId}/cluster/{clusterId}/advancedSettings | Get advanced settings
[**getClusterReadinessStatus**](ClustersApi.md#getClusterReadinessStatus) | **GET** /organization/{organizationId}/cluster/{clusterId}/isReady | Know if a cluster is ready to be deployed or not
[**getClusterStatus**](ClustersApi.md#getClusterStatus) | **GET** /organization/{organizationId}/cluster/{clusterId}/status | Get cluster status
[**getOrganizationCloudProviderInfo**](ClustersApi.md#getOrganizationCloudProviderInfo) | **GET** /organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo | Get cluster cloud provider info and credentials
[**getOrganizationClusterStatus**](ClustersApi.md#getOrganizationClusterStatus) | **GET** /organization/{organizationId}/cluster/status | List all clusters statuses
[**getRoutingTable**](ClustersApi.md#getRoutingTable) | **GET** /organization/{organizationId}/cluster/{clusterId}/routingTable | Get routing table
[**listClusterLogs**](ClustersApi.md#listClusterLogs) | **GET** /organization/{organizationId}/cluster/{clusterId}/logs | List Cluster Logs
[**listOrganizationCluster**](ClustersApi.md#listOrganizationCluster) | **GET** /organization/{organizationId}/cluster | List organization clusters
[**specifyClusterCloudProviderInfo**](ClustersApi.md#specifyClusterCloudProviderInfo) | **POST** /organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo | Specify cluster cloud provider info and credentials
[**stopCluster**](ClustersApi.md#stopCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/stop | Stop cluster
[**updateCluster**](ClustersApi.md#updateCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/update | Update a cluster Version



## createCluster

> Cluster createCluster(organizationId, opts)

Create a cluster

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'clusterRequest': new QoveryApi.ClusterRequest() // ClusterRequest | 
};
apiInstance.createCluster(organizationId, opts, (error, data, response) => {
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
 **clusterRequest** | [**ClusterRequest**](ClusterRequest.md)|  | [optional] 

### Return type

[**Cluster**](Cluster.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCluster

> deleteCluster(organizationId, clusterId)

Delete a cluster

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.deleteCluster(organizationId, clusterId, (error, data, response) => {
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
 **organizationId** | **String**| Organization ID | 
 **clusterId** | **String**| Cluster ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deployCluster

> ClusterStatus deployCluster(organizationId, clusterId)

Deploy a cluster

allows to deploy a cluster

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.deployCluster(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterStatus**](ClusterStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editCluster

> Cluster editCluster(organizationId, clusterId, opts)

Edit a cluster

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
let opts = {
  'clusterRequest': new QoveryApi.ClusterRequest() // ClusterRequest | 
};
apiInstance.editCluster(organizationId, clusterId, opts, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 
 **clusterRequest** | [**ClusterRequest**](ClusterRequest.md)|  | [optional] 

### Return type

[**Cluster**](Cluster.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editClusterAdvancedSettings

> Object editClusterAdvancedSettings(organizationId, clusterId, opts)

Edit advanced settings

Edit advanced settings by returning table of advanced settings.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
let opts = {
  'editClusterAdvancedSettingsRequest': new QoveryApi.EditClusterAdvancedSettingsRequest() // EditClusterAdvancedSettingsRequest | 
};
apiInstance.editClusterAdvancedSettings(organizationId, clusterId, opts, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 
 **editClusterAdvancedSettingsRequest** | [**EditClusterAdvancedSettingsRequest**](EditClusterAdvancedSettingsRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editRoutingTable

> ClusterRoutingTable editRoutingTable(organizationId, clusterId, opts)

Edit routing table

Edit routing table by returning updated table.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
let opts = {
  'clusterRoutingTableRequest': new QoveryApi.ClusterRoutingTableRequest() // ClusterRoutingTableRequest | 
};
apiInstance.editRoutingTable(organizationId, clusterId, opts, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 
 **clusterRoutingTableRequest** | [**ClusterRoutingTableRequest**](ClusterRoutingTableRequest.md)|  | [optional] 

### Return type

[**ClusterRoutingTable**](ClusterRoutingTable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClusterAdvancedSettings

> Object getClusterAdvancedSettings(organizationId, clusterId)

Get advanced settings

Get list and values of the advanced settings of the cluster.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getClusterAdvancedSettings(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterReadinessStatus

> ClusterReadinessStatus getClusterReadinessStatus(organizationId, clusterId)

Know if a cluster is ready to be deployed or not

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getClusterReadinessStatus(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterReadinessStatus**](ClusterReadinessStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterStatus

> ClusterStatusGet getClusterStatus(organizationId, clusterId)

Get cluster status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getClusterStatus(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterStatusGet**](ClusterStatusGet.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationCloudProviderInfo

> ClusterCloudProviderInfo getOrganizationCloudProviderInfo(organizationId, clusterId)

Get cluster cloud provider info and credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getOrganizationCloudProviderInfo(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterCloudProviderInfo**](ClusterCloudProviderInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationClusterStatus

> ClusterStatusResponseList getOrganizationClusterStatus(organizationId)

List all clusters statuses

Returns a list of clusters with only their id and status.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationClusterStatus(organizationId, (error, data, response) => {
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

[**ClusterStatusResponseList**](ClusterStatusResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoutingTable

> ClusterRoutingTable getRoutingTable(organizationId, clusterId)

Get routing table

Retrieve network routing table where each line corresponds to a route between a destination and a target.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getRoutingTable(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterRoutingTable**](ClusterRoutingTable.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClusterLogs

> ListClusterLogs200Response listClusterLogs(organizationId, clusterId)

List Cluster Logs

List Cluster Logs

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.listClusterLogs(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ListClusterLogs200Response**](ListClusterLogs200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationCluster

> ClusterResponseList listOrganizationCluster(organizationId)

List organization clusters

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationCluster(organizationId, (error, data, response) => {
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

[**ClusterResponseList**](ClusterResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## specifyClusterCloudProviderInfo

> ClusterCloudProviderInfo specifyClusterCloudProviderInfo(organizationId, clusterId, opts)

Specify cluster cloud provider info and credentials

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
let opts = {
  'clusterCloudProviderInfoRequest': new QoveryApi.ClusterCloudProviderInfoRequest() // ClusterCloudProviderInfoRequest | 
};
apiInstance.specifyClusterCloudProviderInfo(organizationId, clusterId, opts, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 
 **clusterCloudProviderInfoRequest** | [**ClusterCloudProviderInfoRequest**](ClusterCloudProviderInfoRequest.md)|  | [optional] 

### Return type

[**ClusterCloudProviderInfo**](ClusterCloudProviderInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopCluster

> ClusterStatus stopCluster(organizationId, clusterId)

Stop cluster

Cluster stop has been requester.

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.stopCluster(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterStatus**](ClusterStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCluster

> ClusterStatus updateCluster(organizationId, clusterId)

Update a cluster Version

allows to update cluster version

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.ClustersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.updateCluster(organizationId, clusterId, (error, data, response) => {
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
 **clusterId** | **String**| Cluster ID | 

### Return type

[**ClusterStatus**](ClusterStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

