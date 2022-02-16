# BetaQoveryApi.ApplicationPortResponsePorts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**internalPort** | **Number** | The listening port of your application | 
**externalPort** | **Number** | The exposed port for your application. This is optional. If not set a default port will be used. | [optional] 
**publiclyAccessible** | **Boolean** | Expose the port to the world | 
**protocol** | **String** |  | [optional] [default to &#39;HTTP&#39;]



## Enum: ProtocolEnum


* `HTTPS` (value: `"HTTPS"`)

* `HTTP` (value: `"HTTP"`)

* `TCP` (value: `"TCP"`)

* `UDP` (value: `"UDP"`)




