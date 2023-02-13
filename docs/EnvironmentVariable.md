# QoveryApi.EnvironmentVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive. | 
**value** | **String** | value of the env variable. | 
**mountPath** | **String** | should be set for file only. variable mount path makes variable a file (where file should be mounted). | [optional] 
**overriddenVariable** | [**EnvironmentVariableOverride**](EnvironmentVariableOverride.md) |  | [optional] 
**aliasedVariable** | [**EnvironmentVariableAlias**](EnvironmentVariableAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableType** | [**APIVariableTypeEnum**](APIVariableTypeEnum.md) |  | [optional] 
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 


