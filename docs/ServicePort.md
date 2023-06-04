# QoveryApi.ServicePort

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | [optional] 
**internalPort** | **Number** | The listening port of your service. | 
**externalPort** | **Number** | The exposed port for your service. This is optional. If not set a default port will be used. | [optional] 
**publiclyAccessible** | **Boolean** | Expose the port to the world | 
**isDefault** | **Boolean** | is the default port to use for domain | [optional] 
**protocol** | [**PortProtocolEnum**](PortProtocolEnum.md) |  | 


