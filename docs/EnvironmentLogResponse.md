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


* `INITIALIZED` (value: `"INITIALIZED"`)

* `QUEUED` (value: `"QUEUED"`)

* `BUILDING` (value: `"BUILDING"`)

* `BUILD_ERROR` (value: `"BUILD_ERROR"`)

* `BUILT` (value: `"BUILT"`)

* `DEPLOYING` (value: `"DEPLOYING"`)

* `DEPLOYMENT_ERROR` (value: `"DEPLOYMENT_ERROR"`)

* `DEPLOYED` (value: `"DEPLOYED"`)

* `STOPPING` (value: `"STOPPING"`)

* `STOP_ERROR` (value: `"STOP_ERROR"`)

* `STOPPED` (value: `"STOPPED"`)

* `DELETING` (value: `"DELETING"`)

* `DELETE_ERROR` (value: `"DELETE_ERROR"`)

* `DELETED` (value: `"DELETED"`)

* `RUNNING` (value: `"RUNNING"`)

* `RUNNING_ERROR` (value: `"RUNNING_ERROR"`)




