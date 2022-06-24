# QoveryApi.OrganizationWebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**OrganizationWebhookKindEnum**](OrganizationWebhookKindEnum.md) |  | 
**targetUrl** | **String** | Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with &#x60;http://&#x60; or &#x60;https://&#x60;  | 
**targetSecret** | **String** | Make sure you receive a payload to sign the Qovery request with your secret. Qovery will add a HTTP header &#x60;Qovery-Signature: &lt;Your Secret&gt;&#x60; to every webhook requests sent to your target URL.  | [optional] 
**description** | **String** |  | [optional] 
**enabled** | **Boolean** | Turn on or off your endpoint. | [optional] 
**events** | [**[OrganizationWebhookEventEnum]**](OrganizationWebhookEventEnum.md) |  | 
**projectNamesFilter** | **[String]** | Specify the project names you want to filter to.  This webhook will be triggered only if the event is coming from the specified Project IDs. Notes: 1. Wildcard is accepted E.g. &#x60;product*&#x60;. 2. Name is case insensitive.  | [optional] 
**environmentTypesFilter** | [**[EnvironmentModeEnum]**](EnvironmentModeEnum.md) | Specify the environment modes you want to filter to. This webhook will be triggered only if the event is coming from an environment with the specified mode.  | [optional] 


