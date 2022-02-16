# BetaQoveryApi.GitRepositoriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBitbucketRepositories**](GitRepositoriesApi.md#getBitbucketRepositories) | **GET** /account/bitbucket/repository | Get bitbucket repositories of the connected user
[**getBitbucketRepositoryBranches**](GitRepositoriesApi.md#getBitbucketRepositoryBranches) | **GET** /account/bitbucket/repository/branch | Get bitbucket branches of the specified repository
[**getGitProviderAccount**](GitRepositoriesApi.md#getGitProviderAccount) | **GET** /account/gitAuthProvider | Get git provider accounts
[**getGithubRepositories**](GitRepositoriesApi.md#getGithubRepositories) | **GET** /account/github/repository | Get github repositories of the connected user
[**getGithubRepositoryBranches**](GitRepositoriesApi.md#getGithubRepositoryBranches) | **GET** /account/github/repository/branch | Get github branches of the specified repository
[**getGitlabRepositories**](GitRepositoriesApi.md#getGitlabRepositories) | **GET** /account/gitlab/repository | Get gitlab repositories of the connected user
[**getGitlabRepositoryBranches**](GitRepositoriesApi.md#getGitlabRepositoryBranches) | **GET** /account/gitlab/repository/branch | Get gitlab branches of the specified repository



## getBitbucketRepositories

> GitRepositoryResponseList getBitbucketRepositories()

Get bitbucket repositories of the connected user

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
apiInstance.getBitbucketRepositories((error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBitbucketRepositoryBranches

> GitRepositoryBranchResponseList getBitbucketRepositoryBranches(opts)

Get bitbucket branches of the specified repository

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
let opts = {
  'name': "name_example" // String | The name of the repository where to retrieve the branches
};
apiInstance.getBitbucketRepositoryBranches(opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository where to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGitProviderAccount

> GitAuthProviderResponseList getGitProviderAccount()

Get git provider accounts

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
apiInstance.getGitProviderAccount((error, data, response) => {
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

[**GitAuthProviderResponseList**](GitAuthProviderResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGithubRepositories

> GitRepositoryResponseList getGithubRepositories()

Get github repositories of the connected user

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
apiInstance.getGithubRepositories((error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGithubRepositoryBranches

> GitRepositoryBranchResponseList getGithubRepositoryBranches(opts)

Get github branches of the specified repository

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
let opts = {
  'name': "name_example" // String | The name of the repository where to retrieve the branches
};
apiInstance.getGithubRepositoryBranches(opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository where to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGitlabRepositories

> GitRepositoryResponseList getGitlabRepositories()

Get gitlab repositories of the connected user

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
apiInstance.getGitlabRepositories((error, data, response) => {
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

[**GitRepositoryResponseList**](GitRepositoryResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGitlabRepositoryBranches

> GitRepositoryBranchResponseList getGitlabRepositoryBranches(opts)

Get gitlab branches of the specified repository

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.GitRepositoriesApi();
let opts = {
  'name': "name_example" // String | The name of the repository to retrieve the branches
};
apiInstance.getGitlabRepositoryBranches(opts, (error, data, response) => {
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
 **name** | **String**| The name of the repository to retrieve the branches | [optional] 

### Return type

[**GitRepositoryBranchResponseList**](GitRepositoryBranchResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

