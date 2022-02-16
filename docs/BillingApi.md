# BetaQoveryApi.BillingApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCreditCard**](BillingApi.md#addCreditCard) | **POST** /organization/{organizationId}/creditCard | Add credit card
[**addCreditCode**](BillingApi.md#addCreditCode) | **POST** /organization/{organizationId}/creditCode | Add credit code
[**editOrganizationBillingInfo**](BillingApi.md#editOrganizationBillingInfo) | **PUT** /organization/{organizationId}/billingInfo | Edit Organization Billing Info
[**getClusterCurrentCost**](BillingApi.md#getClusterCurrentCost) | **GET** /organization/{organizationId}/cluster/{clusterId}/currentCost | Get cluster current cost
[**getOrganizationBillingInfo**](BillingApi.md#getOrganizationBillingInfo) | **GET** /organization/{organizationId}/billingInfo | Get organization billing info
[**getOrganizationBillingStatus**](BillingApi.md#getOrganizationBillingStatus) | **GET** /organization/{organizationId}/billingStatus | Get organization billing status
[**getOrganizationCurrentCost**](BillingApi.md#getOrganizationCurrentCost) | **GET** /organization/{organizationId}/currentCost | Get organization current cost
[**getOrganizationInvoice**](BillingApi.md#getOrganizationInvoice) | **GET** /organization/{organizationId}/invoice/{invoiceId} | Get organization invoice
[**getOrganizationInvoicePDF**](BillingApi.md#getOrganizationInvoicePDF) | **GET** /organization/{organizationId}/invoice/{invoiceId}/download | Get invoice link
[**listOrganizationCreditCards**](BillingApi.md#listOrganizationCreditCards) | **GET** /organization/{organizationId}/creditCard | List organization credit cards
[**listOrganizationInvoice**](BillingApi.md#listOrganizationInvoice) | **GET** /organization/{organizationId}/invoice | List organization invoices
[**organizationDownloadAllInvoices**](BillingApi.md#organizationDownloadAllInvoices) | **POST** /organization/{organizationId}/downloadInvoices | Download all invoices
[**organizationOrganizationIdCreditCardCreditCardIdDelete**](BillingApi.md#organizationOrganizationIdCreditCardCreditCardIdDelete) | **DELETE** /organization/{organizationId}/creditCard/{creditCardId} | Delete credit card



## addCreditCard

> CreditCardResponse addCreditCard(organizationId, opts)

Add credit card

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'creditCardRequest': new BetaQoveryApi.CreditCardRequest() // CreditCardRequest | 
};
apiInstance.addCreditCard(organizationId, opts, (error, data, response) => {
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
 **creditCardRequest** | [**CreditCardRequest**](CreditCardRequest.md)|  | [optional] 

### Return type

[**CreditCardResponse**](CreditCardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCreditCode

> addCreditCode(organizationId, opts)

Add credit code

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'organizationCreditCodeRequest': new BetaQoveryApi.OrganizationCreditCodeRequest() // OrganizationCreditCodeRequest | 
};
apiInstance.addCreditCode(organizationId, opts, (error, data, response) => {
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
 **organizationCreditCodeRequest** | [**OrganizationCreditCodeRequest**](OrganizationCreditCodeRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## editOrganizationBillingInfo

> BillingInfoResponse editOrganizationBillingInfo(organizationId, opts)

Edit Organization Billing Info

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let opts = {
  'billingInfoRequest': new BetaQoveryApi.BillingInfoRequest() // BillingInfoRequest | 
};
apiInstance.editOrganizationBillingInfo(organizationId, opts, (error, data, response) => {
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
 **billingInfoRequest** | [**BillingInfoRequest**](BillingInfoRequest.md)|  | [optional] 

### Return type

[**BillingInfoResponse**](BillingInfoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClusterCurrentCost

> CostRangeResponse getClusterCurrentCost(organizationId, clusterId)

Get cluster current cost

Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let clusterId = "clusterId_example"; // String | Cluster ID
apiInstance.getClusterCurrentCost(organizationId, clusterId, (error, data, response) => {
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

[**CostRangeResponse**](CostRangeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationBillingInfo

> BillingInfoResponse getOrganizationBillingInfo(organizationId)

Get organization billing info

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationBillingInfo(organizationId, (error, data, response) => {
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

[**BillingInfoResponse**](BillingInfoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationBillingStatus

> BillingStatus getOrganizationBillingStatus(organizationId)

Get organization billing status

This endpoint returns a \&quot;is_valid\&quot; boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationBillingStatus(organizationId, (error, data, response) => {
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

[**BillingStatus**](BillingStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationCurrentCost

> OrganizationCurrentCostResponse getOrganizationCurrentCost(organizationId)

Get organization current cost

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.getOrganizationCurrentCost(organizationId, (error, data, response) => {
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

[**OrganizationCurrentCostResponse**](OrganizationCurrentCostResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationInvoice

> InvoiceResponse getOrganizationInvoice(organizationId, invoiceId)

Get organization invoice

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let invoiceId = "invoiceId_example"; // String | Invoice ID
apiInstance.getOrganizationInvoice(organizationId, invoiceId, (error, data, response) => {
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
 **invoiceId** | **String**| Invoice ID | 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationInvoicePDF

> LinkResponse getOrganizationInvoicePDF(organizationId, invoiceId)

Get invoice link

This will return URL of the invoice PDF

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let invoiceId = "invoiceId_example"; // String | Invoice ID
apiInstance.getOrganizationInvoicePDF(organizationId, invoiceId, (error, data, response) => {
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
 **invoiceId** | **String**| Invoice ID | 

### Return type

[**LinkResponse**](LinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationCreditCards

> CreditCardResponseList listOrganizationCreditCards(organizationId)

List organization credit cards

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationCreditCards(organizationId, (error, data, response) => {
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

[**CreditCardResponseList**](CreditCardResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrganizationInvoice

> InvoiceResponseList listOrganizationInvoice(organizationId)

List organization invoices

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.listOrganizationInvoice(organizationId, (error, data, response) => {
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

[**InvoiceResponseList**](InvoiceResponseList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationDownloadAllInvoices

> organizationDownloadAllInvoices(organizationId)

Download all invoices

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
apiInstance.organizationDownloadAllInvoices(organizationId, (error, data, response) => {
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


## organizationOrganizationIdCreditCardCreditCardIdDelete

> organizationOrganizationIdCreditCardCreditCardIdDelete(organizationId, creditCardId)

Delete credit card

### Example

```javascript
import BetaQoveryApi from '_beta_qovery_api';
let defaultClient = BetaQoveryApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BetaQoveryApi.BillingApi();
let organizationId = "organizationId_example"; // String | Organization ID
let creditCardId = "creditCardId_example"; // String | Credit Card ID
apiInstance.organizationOrganizationIdCreditCardCreditCardIdDelete(organizationId, creditCardId, (error, data, response) => {
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
 **creditCardId** | **String**| Credit Card ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

