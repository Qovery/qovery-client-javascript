# QoveryApi.Secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | [optional] 
**overriddenSecret** | [**OverriddenSecret**](OverriddenSecret.md) |  | [optional] 
**aliasedSecret** | [**AliasedSecret**](AliasedSecret.md) |  | [optional] 
**scope** | [**EnvironmentVariableScopeEnum**](EnvironmentVariableScopeEnum.md) |  | 
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 


