# QoveryApi.EnvironmentVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | 
**value** | **String** | value of the env variable. | 
**overriddenVariable** | [**EnvironmentVariableOverride**](EnvironmentVariableOverride.md) |  | [optional] 
**aliasedVariable** | [**EnvironmentVariableAlias**](EnvironmentVariableAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 


