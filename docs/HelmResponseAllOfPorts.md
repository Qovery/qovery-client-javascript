# QoveryApi.HelmResponseAllOfPorts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | [optional] 
**internalPort** | **Number** | The listening port of your service. | 
**externalPort** | **Number** | The exposed port for your service. This is optional. If not set a default port will be used. | [optional] 
**serviceName** | **String** |  | 
**namespace** | **String** |  | [optional] 
**protocol** | [**HelmPortProtocolEnum**](HelmPortProtocolEnum.md) |  | 
**isDefault** | **Boolean** | is the default port to use for domain | [optional] 


