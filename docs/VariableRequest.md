# QoveryApi.VariableRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | the key of the environment variable | 
**value** | **String** | the value of the environment variable | 
**mountPath** | **String** | the path where the file will be mounted (only if type &#x3D;file) | [optional] 
**isSecret** | **Boolean** | if true, the variable will be considered as a secret and will not be accessible after its creation. Only your applications will be able to access its value at build and run time. | 
**variableScope** | [**APIVariableScopeEnum**](APIVariableScopeEnum.md) |  | 
**variableParentId** | **String** | based on the selected scope, it contains the ID of the service, environment or project where the variable is attached | 


