# QoveryApi.VariableResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**key** | **String** |  | 
**value** | **String** |  | 
**mountPath** | **String** |  | [optional] 
**overriddenVariable** | [**VariableOverride**](VariableOverride.md) |  | [optional] 
**aliasedVariable** | [**VariableAlias**](VariableAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableType** | [**APIVariableTypeEnum**](APIVariableTypeEnum.md) |  | [optional] 
**serviceId** | **String** | The id of the service referenced by this variable. | [optional] 
**serviceName** | **String** | The name of the service referenced by this variable. | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 
**ownedBy** | **String** | Entity that created/own the variable (i.e: Qovery, Doppler) | [optional] 


