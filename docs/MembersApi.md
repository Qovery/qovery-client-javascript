# QoveryApi.MembersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInviteMember**](MembersApi.md#deleteInviteMember) | **DELETE** /organization/{organizationId}/inviteMember/{inviteId} | Remove an invited member
[**deleteMember**](MembersApi.md#deleteMember) | **DELETE** /organization/{organizationId}/member/{userId} | Remove a member
[**getOrganizationInvitedMembers**](MembersApi.md#getOrganizationInvitedMembers) | **GET** /organization/{organizationId}/inviteMember | Get invited members
[**getOrganizationMembers**](MembersApi.md#getOrganizationMembers) | **GET** /organization/{organizationId}/member | Get organization members
[**postAcceptInviteMember**](MembersApi.md#postAcceptInviteMember) | **POST** /organization/{organizationId}/inviteMember/{inviteId} | Accept Invite in the organization
[**postInviteMember**](MembersApi.md#postInviteMember) | **POST** /organization/{organizationId}/inviteMember | Invite someone in the organization
[**postOrganizationTransferOwnership**](MembersApi.md#postOrganizationTransferOwnership) | **POST** /organization/{organizationId}/transferOwnership | Transfer organization ownership to another user



## deleteInviteMember

> deleteInviteMember(organizationId)

Remove an invited member

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.deleteInviteMember(organizationId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMember

> deleteMember(organizationId, userId)

Remove a member

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let userId = "userId_example"; // String | User ID
apiInstance.deleteMember(organizationId, userId, (error, data, response) => {
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
 **userId** | **String**| User ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getOrganizationInvitedMembers

> InviteMemberResponseList getOrganizationInvitedMembers(organizationId)

Get invited members

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationInvitedMembers(organizationId, (error, data, response) => {
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

[**InviteMemberResponseList**](InviteMemberResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationMembers

> MemberResponseList getOrganizationMembers(organizationId)

Get organization members

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationMembers(organizationId, (error, data, response) => {
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

[**MemberResponseList**](MemberResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAcceptInviteMember

> InviteMember postAcceptInviteMember(organizationId, inviteId)

Accept Invite in the organization

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let inviteId = "inviteId_example"; // String | Invite ID
apiInstance.postAcceptInviteMember(organizationId, inviteId, (error, data, response) => {
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
 **inviteId** | **String**| Invite ID | 

### Return type

[**InviteMember**](InviteMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInviteMember

> InviteMember postInviteMember(organizationId, opts)

Invite someone in the organization

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'inviteMemberRequest': new QoveryApi.InviteMemberRequest() // InviteMemberRequest | 
};
apiInstance.postInviteMember(organizationId, opts, (error, data, response) => {
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
 **inviteMemberRequest** | [**InviteMemberRequest**](InviteMemberRequest.md)|  | [optional] 

### Return type

[**InviteMember**](InviteMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postOrganizationTransferOwnership

> postOrganizationTransferOwnership(organizationId, opts)

Transfer organization ownership to another user

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.MembersApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'transferOwnershipRequest': new QoveryApi.TransferOwnershipRequest() // TransferOwnershipRequest | 
};
apiInstance.postOrganizationTransferOwnership(organizationId, opts, (error, data, response) => {
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
 **transferOwnershipRequest** | [**TransferOwnershipRequest**](TransferOwnershipRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

