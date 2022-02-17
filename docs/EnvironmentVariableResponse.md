# QoveryApi.EnvironmentVariableResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overriddenVariable** | **Object** |  | [optional] 
**aliasedVariable** | **Object** |  | [optional] 
**scope** | **String** |  | 
**serviceName** | **String** |  | [optional] 
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | 
**value** | **String** | value of the env variable. | 



## Enum: ScopeEnum


* `BUILT_IN` (value: `"BUILT_IN"`)

* `ENVIRONMENT` (value: `"ENVIRONMENT"`)

* `PROJECT` (value: `"PROJECT"`)

* `APPLICATION` (value: `"APPLICATION"`)




