# QoveryApi.CreateOrganizationWebhook201ResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **Object** |  | [optional] 
**targetUrl** | **String** | Set the public HTTP or HTTPS endpoint that will receive the specified events. The target URL must starts with &#x60;http://&#x60; or &#x60;https://&#x60;  | [optional] 
**targetSecretSet** | **Boolean** |  | [optional] 
**description** | **String** |  | [optional] 
**enabled** | **Boolean** | Turn on or off your endpoint. | [optional] 
**events** | **[Object]** |  | [optional] 
**projectIdFilter** | **[String]** |  | [optional] 
**environmentTypesFilter** | [**[EnvironmentModeEnum]**](EnvironmentModeEnum.md) |  | [optional] 


