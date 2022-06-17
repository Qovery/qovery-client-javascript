# QoveryApi.GithubAppApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationGithubAppConnect**](GithubAppApi.md#organizationGithubAppConnect) | **POST** /organization/{organizationId}/github/connect | Connect a github account to an organization
[**organizationGithubAppDisconnect**](GithubAppApi.md#organizationGithubAppDisconnect) | **DELETE** /organization/{organizationId}/github/disconnect | Disconnect a github account from an organization



## organizationGithubAppConnect

> organizationGithubAppConnect(organizationId, opts)

Connect a github account to an organization

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.GithubAppApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationGithubAppConnectRequest': new QoveryApi.OrganizationGithubAppConnectRequest() // OrganizationGithubAppConnectRequest | 
};
apiInstance.organizationGithubAppConnect(organizationId, opts, (error, data, response) => {
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
 **organizationGithubAppConnectRequest** | [**OrganizationGithubAppConnectRequest**](OrganizationGithubAppConnectRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## organizationGithubAppDisconnect

> organizationGithubAppDisconnect(organizationId, opts)

Disconnect a github account from an organization

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.GithubAppApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'force': true // Boolean | Indicates if the github app should be disconnected despite github applications linked to organization
};
apiInstance.organizationGithubAppDisconnect(organizationId, opts, (error, data, response) => {
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
 **force** | **Boolean**| Indicates if the github app should be disconnected despite github applications linked to organization | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

