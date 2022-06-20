# QoveryApi.OrganizationWebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | Define the type of the webhook. &#x60;SLACK&#x60; is a special webhook type to push notifications directly to slack. The &#x60;target_url&#x60; must be a Slack compatible endpoint. | 
**targetUrl** | **String** | Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with &#x60;http://&#x60; or &#x60;https://&#x60;  | 
**targetSecret** | **String** | Make sure you receive a payload to sign the Qovery request with your secret. Qovery will add a HTTP header &#x60;Qovery-Signature: &lt;Your Secret&gt;&#x60; to every webhook requests sent to your target URL.  | [optional] 
**description** | **String** |  | [optional] 
**enabled** | **Boolean** | Turn on or off your endpoint. | [optional] 
**events** | **[String]** |  | 
**projectIdFilter** | **[String]** |  | [optional] 
**environmentTypesFilter** | [**[EnvironmentModeEnum]**](EnvironmentModeEnum.md) |  | [optional] 



## Enum: KindEnum


* `STANDARD` (value: `"STANDARD"`)

* `SLACK` (value: `"SLACK"`)





## Enum: [EventsEnum]


* `STARTED` (value: `"DEPLOYMENT_STARTED"`)

* `CANCELLED` (value: `"DEPLOYMENT_CANCELLED"`)

* `FAILURE` (value: `"DEPLOYMENT_FAILURE"`)

* `SUCCESSFUL` (value: `"DEPLOYMENT_SUCCESSFUL"`)




