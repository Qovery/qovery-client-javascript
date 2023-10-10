# QoveryApi.EnvironmentVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive. | 
**value** | **String** | value of the env variable. | [optional] 
**mountPath** | **String** | should be set for file only. variable mount path makes variable a file (where file should be mounted). | [optional] 
**overriddenVariable** | [**EnvironmentVariableOverride**](EnvironmentVariableOverride.md) |  | [optional] 
**aliasedVariable** | [**EnvironmentVariableAlias**](EnvironmentVariableAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableType** | [**APIVariableTypeEnum**](APIVariableTypeEnum.md) |  | [optional] 
**serviceId** | **String** |  | [optional] 
**serviceName** | **String** |  | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 
**ownedBy** | **String** | Entity that created/own the variable (i.e: Qovery, Doppler) | [optional] 


