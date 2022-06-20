# QoveryApi.OrganizationWebhookCreateResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**Kind**](Kind.md) |  | [optional] 
**targetUrl** | **String** | Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with &#x60;http://&#x60; or &#x60;https://&#x60;  | [optional] 
**targetSecretSet** | **Boolean** |  | [optional] 
**description** | **String** |  | [optional] 
**enabled** | **Boolean** | Turn on or off your endpoint. | [optional] 
**events** | [**[Items]**](Items.md) |  | [optional] 
**projectIdFilter** | **[String]** |  | [optional] 
**environmentTypesFilter** | [**[EnvironmentModeEnum]**](EnvironmentModeEnum.md) |  | [optional] 


