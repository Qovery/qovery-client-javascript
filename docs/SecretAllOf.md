# QoveryApi.SecretAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | key is case sensitive | [optional] 
**overriddenSecret** | [**OverriddenSecret**](OverriddenSecret.md) |  | [optional] 
**aliasedSecret** | [**AliasedSecret**](AliasedSecret.md) |  | [optional] 
**scope** | [**EnvironmentVariableScopeEnum**](EnvironmentVariableScopeEnum.md) |  | 
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 



## Enum: ServiceTypeEnum


* `APPLICATION` (value: `"APPLICATION"`)

* `DATABASE` (value: `"DATABASE"`)




