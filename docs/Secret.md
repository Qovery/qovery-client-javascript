# QoveryApi.Secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** | key is case sensitive | 
**overriddenSecret** | [**SecretOverride**](SecretOverride.md) |  | [optional] 
**aliasedSecret** | [**SecretAlias**](SecretAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableType** | [**APIVariableTypeEnum**](APIVariableTypeEnum.md) |  | [optional] 
**serviceId** | **String** |  | [optional] 
**serviceName** | **String** |  | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 
**ownedBy** | **String** | Entity that created/own the variable (i.e: Qovery, Doppler) | [optional] 


