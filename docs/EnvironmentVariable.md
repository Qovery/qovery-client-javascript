# QoveryApi.EnvironmentVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | 
**value** | **String** | value of the env variable. | 
**overriddenVariable** | [**EnvironmentVariableAllOfOverriddenVariable**](EnvironmentVariableAllOfOverriddenVariable.md) |  | [optional] 
**aliasedVariable** | [**EnvironmentVariableAllOfAliasedVariable**](EnvironmentVariableAllOfAliasedVariable.md) |  | [optional] 
**scope** | [**EnvironmentVariableScopeEnum**](EnvironmentVariableScopeEnum.md) |  | 
**serviceName** | **String** |  | [optional] 


