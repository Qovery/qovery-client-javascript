# QoveryApi.OrganizationEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationEventTargets**](OrganizationEventApi.md#getOrganizationEventTargets) | **GET** /organization/{organizationId}/targets | Get available event targets to filter events
[**getOrganizationEvents**](OrganizationEventApi.md#getOrganizationEvents) | **GET** /organization/{organizationId}/events | Get all events inside the organization



## getOrganizationEventTargets

> OrganizationEventTargetResponseList getOrganizationEventTargets(organizationId, opts)

Get available event targets to filter events

Get available event targets to filter events

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
  'fromTimestamp': "fromTimestamp_example", // String | Display targets available since this timestamp.   A range of date can be specified by using `from-timestamp` with `to-timestamp` The format is a timestamp with nano precision 
  'toTimestamp': "toTimestamp_example", // String | Display targets triggered before this timestamp.   A range of date can be specified by using `to-timestamp` with `from-timestamp` The format is a timestamp with nano precision 
  'eventType': new QoveryApi.OrganizationEventType(), // OrganizationEventType | 
  'targetType': new QoveryApi.OrganizationEventTargetType(), // OrganizationEventTargetType | 
  'triggeredBy': "triggeredBy_example", // String | Information about the owner of the event (user name / apitoken / automatic action)
  'origin': new QoveryApi.OrganizationEventOrigin(), // OrganizationEventOrigin | 
  'projectId': "projectId_example", // String | Mandatory when requesting an environment or a service
  'environmentId': "environmentId_example" // String | Mandatory when requesting a service
};
apiInstance.getOrganizationEventTargets(organizationId, opts, (error, data, response) => {
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
 **fromTimestamp** | **String**| Display targets available since this timestamp.   A range of date can be specified by using &#x60;from-timestamp&#x60; with &#x60;to-timestamp&#x60; The format is a timestamp with nano precision  | [optional] 
 **toTimestamp** | **String**| Display targets triggered before this timestamp.   A range of date can be specified by using &#x60;to-timestamp&#x60; with &#x60;from-timestamp&#x60; The format is a timestamp with nano precision  | [optional] 
 **eventType** | [**OrganizationEventType**](.md)|  | [optional] 
 **targetType** | [**OrganizationEventTargetType**](.md)|  | [optional] 
 **triggeredBy** | **String**| Information about the owner of the event (user name / apitoken / automatic action) | [optional] 
 **origin** | [**OrganizationEventOrigin**](.md)|  | [optional] 
 **projectId** | **String**| Mandatory when requesting an environment or a service | [optional] 
 **environmentId** | **String**| Mandatory when requesting a service | [optional] 

### Return type

[**OrganizationEventTargetResponseList**](OrganizationEventTargetResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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
  'fromTimestamp': "fromTimestamp_example", // String | Display events triggered since this timestamp.   A range of date can be specified by using `from-timestamp` with `to-timestamp` The format is a timestamp with nano precision 
  'toTimestamp': "toTimestamp_example", // String | Display events triggered before this timestamp.   A range of date can be specified by using `to-timestamp` with `from-timestamp` The format is a timestamp with nano precision 
  'continueToken': "continueToken_example", // String | Token used to fetch the next page results The format is a timestamp with nano precision 
  'stepBackToken': "stepBackToken_example", // String | Token used to fetch the previous page results The format is a timestamp with nano precision 
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
 **fromTimestamp** | **String**| Display events triggered since this timestamp.   A range of date can be specified by using &#x60;from-timestamp&#x60; with &#x60;to-timestamp&#x60; The format is a timestamp with nano precision  | [optional] 
 **toTimestamp** | **String**| Display events triggered before this timestamp.   A range of date can be specified by using &#x60;to-timestamp&#x60; with &#x60;from-timestamp&#x60; The format is a timestamp with nano precision  | [optional] 
 **continueToken** | **String**| Token used to fetch the next page results The format is a timestamp with nano precision  | [optional] 
 **stepBackToken** | **String**| Token used to fetch the previous page results The format is a timestamp with nano precision  | [optional] 
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

