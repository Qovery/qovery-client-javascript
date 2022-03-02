# QoveryApi.EnvironmentVariableResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | 
**value** | **String** | value of the env variable. | 
**overriddenVariable** | [**EnvironmentVariableResponseAllOfOverriddenVariable**](EnvironmentVariableResponseAllOfOverriddenVariable.md) |  | [optional] 
**aliasedVariable** | [**EnvironmentVariableResponseAllOfAliasedVariable**](EnvironmentVariableResponseAllOfAliasedVariable.md) |  | [optional] 
**scope** | **String** |  | 
**serviceName** | **String** |  | [optional] 



## Enum: ScopeEnum


* `BUILT_IN` (value: `"BUILT_IN"`)

* `ENVIRONMENT` (value: `"ENVIRONMENT"`)

* `PROJECT` (value: `"PROJECT"`)

* `APPLICATION` (value: `"APPLICATION"`)




