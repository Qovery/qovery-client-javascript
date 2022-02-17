# BetaQoveryApi.EnvironmentLogResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**scope** | [**EnvironmentLogResponseScope**](EnvironmentLogResponseScope.md) |  | [optional] 
**state** | **String** | Status is a state machine. It starts with &#x60;BUILDING&#x60; or &#x60;DEPLOYING&#x60; state (or &#x60;INITIALIZED&#x60;if auto-deploy is deactivated). Then finish with &#x60;*_ERROR&#x60; or any termination state.  | [optional] 
**message** | **String** | Log message | 
**executionId** | **String** | Only for errors. Helps Qovery team to investigate. | [optional] 
**hint** | **String** |  | [optional] 



## Enum: StateEnum


* `BUILD_ERROR` (value: `"BUILD_ERROR"`)

* `BUILDING` (value: `"BUILDING"`)

* `BUILT` (value: `"BUILT"`)

* `DELETE_ERROR` (value: `"DELETE_ERROR"`)

* `DELETED` (value: `"DELETED"`)

* `DELETING` (value: `"DELETING"`)

* `DEPLOYED` (value: `"DEPLOYED"`)

* `DEPLOYING` (value: `"DEPLOYING"`)

* `DEPLOYMENT_ERROR` (value: `"DEPLOYMENT_ERROR"`)

* `INITIALIZED` (value: `"INITIALIZED"`)

* `QUEUED` (value: `"QUEUED"`)

* `RUNNING` (value: `"RUNNING"`)

* `RUNNING_ERROR` (value: `"RUNNING_ERROR"`)

* `STOP_ERROR` (value: `"STOP_ERROR"`)

* `STOPPED` (value: `"STOPPED"`)

* `STOPPING` (value: `"STOPPING"`)




