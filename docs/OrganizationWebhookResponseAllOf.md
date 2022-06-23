# QoveryApi.OrganizationWebhookResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**OrganizationWebhookKindEnum**](OrganizationWebhookKindEnum.md) |  | [optional] 
**targetUrl** | **String** | Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with &#x60;http://&#x60; or &#x60;https://&#x60;  | [optional] 
**targetSecretSet** | **Boolean** |  | [optional] 
**description** | **String** |  | [optional] 
**enabled** | **Boolean** | Turn on or off your endpoint. | [optional] 
**events** | [**[OrganizationWebhookEventEnum]**](OrganizationWebhookEventEnum.md) |  | [optional] 
**projectIdFilter** | **[String]** |  | [optional] 
**environmentTypesFilter** | [**[EnvironmentModeEnum]**](EnvironmentModeEnum.md) | Specify the environment modes you want to filter to. This webhook will be triggered only if the event is coming from an environment with the specified mode.  | [optional] 


