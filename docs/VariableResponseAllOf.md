# QoveryApi.VariableResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overriddenVariable** | [**VariableOverride**](VariableOverride.md) |  | [optional] 
**aliasedVariable** | [**VariableAlias**](VariableAlias.md) |  | [optional] 
**scope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableType** | [**APIVariableTypeEnum**](APIVariableTypeEnum.md) |  | [optional] 
**serviceId** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceName** | **String** | present only for &#x60;BUILT_IN&#x60; variable | [optional] 
**serviceType** | [**LinkedServiceTypeEnum**](LinkedServiceTypeEnum.md) |  | [optional] 
**ownedBy** | **String** | Entity that created/own the variable (i.e: Qovery, Doppler) | [optional] 

