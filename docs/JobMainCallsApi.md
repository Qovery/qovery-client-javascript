# QoveryApi.JobMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteJob**](JobMainCallsApi.md#deleteJob) | **DELETE** /job/{jobId} | Delete job
[**editJob**](JobMainCallsApi.md#editJob) | **PUT** /job/{jobId} | Edit job
[**getJob**](JobMainCallsApi.md#getJob) | **GET** /job/{jobId} | Get job by ID
[**getJobStatus**](JobMainCallsApi.md#getJobStatus) | **GET** /job/{jobId}/status | Get job status
[**listJobCommit**](JobMainCallsApi.md#listJobCommit) | **GET** /job/{jobId}/commit | List last job commits



## deleteJob

> deleteJob(jobId)

Delete job

To delete the job you must have the admin permission

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMainCallsApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.deleteJob(jobId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editJob

> JobResponse editJob(jobId, opts)

Edit job

- To edit the job you must have the admin permission. 

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMainCallsApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'jobRequest': new QoveryApi.JobRequest() // JobRequest | 
};
apiInstance.editJob(jobId, opts, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **jobRequest** | [**JobRequest**](JobRequest.md)|  | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getJob

> JobResponse getJob(jobId)

Get job by ID

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMainCallsApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.getJob(jobId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJobStatus

> Status getJobStatus(jobId)

Get job status

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMainCallsApi();
let jobId = "jobId_example"; // String | Job ID
apiInstance.getJobStatus(jobId, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 

### Return type

[**Status**](Status.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listJobCommit

> CommitResponseList listJobCommit(jobId, opts)

List last job commits

Returns list of the last 100 commits made on the repository linked to the job

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.JobMainCallsApi();
let jobId = "jobId_example"; // String | Job ID
let opts = {
  'startId': "startId_example", // String | Starting point after which to return results
  'gitCommitId': "gitCommitId_example" // String | Git Commit ID
};
apiInstance.listJobCommit(jobId, opts, (error, data, response) => {
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
 **jobId** | **String**| Job ID | 
 **startId** | **String**| Starting point after which to return results | [optional] 
 **gitCommitId** | **String**| Git Commit ID | [optional] 

### Return type

[**CommitResponseList**](CommitResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

