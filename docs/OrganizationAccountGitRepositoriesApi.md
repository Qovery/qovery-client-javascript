# QoveryApi.OrganizationAccountGitRepositoriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationBitbucketRepositories**](OrganizationAccountGitRepositoriesApi.md#getOrganizationBitbucketRepositories) | **GET** /organization/{organizationId}/account/bitbucket/repository | Get bitbucket repositories of the connected user
[**getOrganizationBitbucketRepositoryBranches**](OrganizationAccountGitRepositoriesApi.md#getOrganizationBitbucketRepositoryBranches) | **GET** /organization/{organizationId}/account/bitbucket/repository/branch | Get bitbucket branches of the specified repository
[**getOrganizationGitProviderAccount**](OrganizationAccountGitRepositoriesApi.md#getOrganizationGitProviderAccount) | **GET** /organization/{organizationId}/account/gitAuthProvider | Get git provider accounts
[**getOrganizationGithubRepositories**](OrganizationAccountGitRepositoriesApi.md#getOrganizationGithubRepositories) | **GET** /organization/{organizationId}/account/github/repository | Get github repositories of the connected user
[**getOrganizationGithubRepositoryBranches**](OrganizationAccountGitRepositoriesApi.md#getOrganizationGithubRepositoryBranches) | **GET** /organization/{organizationId}/account/github/repository/branch | Get github branches of the specified repository
[**getOrganizationGitlabRepositories**](OrganizationAccountGitRepositoriesApi.md#getOrganizationGitlabRepositories) | **GET** /organization/{organizationId}/account/gitlab/repository | Get gitlab repositories of the connected user
[**getOrganizationGitlabRepositoryBranches**](OrganizationAccountGitRepositoriesApi.md#getOrganizationGitlabRepositoryBranches) | **GET** /organization/{organizationId}/account/gitlab/repository/branch | Get gitlab branches of the specified repository



## getOrganizationBitbucketRepositories

> GitRepositoryResponseList getOrganizationBitbucketRepositories(organizationId)

Get bitbucket repositories of the connected user

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationBitbucketRepositories(organizationId, (error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationBitbucketRepositoryBranches

> GitRepositoryBranchResponseList getOrganizationBitbucketRepositoryBranches(organizationId, opts)

Get bitbucket branches of the specified repository

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'name': "name_example" // String | The name of the repository where to retrieve the branches
};
apiInstance.getOrganizationBitbucketRepositoryBranches(organizationId, opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository where to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationGitProviderAccount

> GitAuthProviderResponseList getOrganizationGitProviderAccount(organizationId)

Get git provider accounts

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationGitProviderAccount(organizationId, (error, data, response) => {
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

[**GitAuthProviderResponseList**](GitAuthProviderResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationGithubRepositories

> GitRepositoryResponseList getOrganizationGithubRepositories(organizationId)

Get github repositories of the connected user

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationGithubRepositories(organizationId, (error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationGithubRepositoryBranches

> GitRepositoryBranchResponseList getOrganizationGithubRepositoryBranches(organizationId, opts)

Get github branches of the specified repository

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'name': "name_example" // String | The name of the repository where to retrieve the branches
};
apiInstance.getOrganizationGithubRepositoryBranches(organizationId, opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository where to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationGitlabRepositories

> GitRepositoryResponseList getOrganizationGitlabRepositories(organizationId)

Get gitlab repositories of the connected user

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationGitlabRepositories(organizationId, (error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationGitlabRepositoryBranches

> GitRepositoryBranchResponseList getOrganizationGitlabRepositoryBranches(organizationId, opts)

Get gitlab branches of the specified repository

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

let apiInstance = new QoveryApi.OrganizationAccountGitRepositoriesApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'name': "name_example" // String | The name of the repository to retrieve the branches
};
apiInstance.getOrganizationGitlabRepositoryBranches(organizationId, opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

