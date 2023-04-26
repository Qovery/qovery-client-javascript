# QoveryApi.OrganizationEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationEvents**](OrganizationEventApi.md#getOrganizationEvents) | **GET** /organization/{organizationId}/events | Get all events inside the organization



## getOrganizationEvents

> OrganizationEventResponseList getOrganizationEvents(organizationId, opts)

Get all events inside the organization

Get all events inside the organization

### Example

```javascript
import QoveryApi from 'qovery_api';
let defaultClient = QoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new QoveryApi.OrganizationEventApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'pageSize': 10, // Number | The number of events to display in the current page
  'fromTimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Display events triggered since this timestamp.   A range of date can be specified by using `from-timestamp` with `to-timestamp` 
  'toTimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Display events triggered before this timestamp.   A range of date can be specified by using `to-timestamp` with `from-timestamp` 
  'eventType': new QoveryApi.OrganizationEventType(), // OrganizationEventType | 
  'targetType': new QoveryApi.OrganizationEventTargetType(), // OrganizationEventTargetType | 
  'targetId': "targetId_example", // String | The target resource id to search.   Must be specified with the corresponding `target_type` 
  'subTargetType': new QoveryApi.OrganizationEventSubTargetType(), // OrganizationEventSubTargetType | 
  'triggeredBy': "triggeredBy_example", // String | Information about the owner of the event (user name / apitoken / automatic action)
  'origin': new QoveryApi.OrganizationEventOrigin() // OrganizationEventOrigin | 
};
apiInstance.getOrganizationEvents(organizationId, opts, (error, data, response) => {
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
 **pageSize** | **Number**| The number of events to display in the current page | [optional] [default to 10]
 **fromTimestamp** | **Date**| Display events triggered since this timestamp.   A range of date can be specified by using &#x60;from-timestamp&#x60; with &#x60;to-timestamp&#x60;  | [optional] 
 **toTimestamp** | **Date**| Display events triggered before this timestamp.   A range of date can be specified by using &#x60;to-timestamp&#x60; with &#x60;from-timestamp&#x60;  | [optional] 
 **eventType** | [**OrganizationEventType**](.md)|  | [optional] 
 **targetType** | [**OrganizationEventTargetType**](.md)|  | [optional] 
 **targetId** | **String**| The target resource id to search.   Must be specified with the corresponding &#x60;target_type&#x60;  | [optional] 
 **subTargetType** | [**OrganizationEventSubTargetType**](.md)|  | [optional] 
 **triggeredBy** | **String**| Information about the owner of the event (user name / apitoken / automatic action) | [optional] 
 **origin** | [**OrganizationEventOrigin**](.md)|  | [optional] 

### Return type

[**OrganizationEventResponseList**](OrganizationEventResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

