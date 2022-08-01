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
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | [**ServiceType**](ServiceType.md) |  | [optional] 


