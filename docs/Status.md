# BetaQoveryApi.Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**state** | **String** | Status is a state machine. It starts with &#x60;BUILDING&#x60; or &#x60;DEPLOYING&#x60; state (or &#x60;INITIALIZED&#x60;if auto-deploy is deactivated). Then finish with &#x60;*_ERROR&#x60; or any termination state.  | 
**message** | **String** | message related to the state | [optional] 
**serviceDeploymentStatus** | **String** |  | [optional] 



## Enum: StateEnum


* `INITIALIZED` (value: `"INITIALIZED"`)

* `BUILDING_QUEUED` (value: `"BUILDING_QUEUED"`)

* `BUILDING` (value: `"BUILDING"`)

* `BUILD_ERROR` (value: `"BUILD_ERROR"`)

* `BUILT` (value: `"BUILT"`)

* `DEPLOYMENT_QUEUED` (value: `"DEPLOYMENT_QUEUED"`)

* `DEPLOYING` (value: `"DEPLOYING"`)

* `DEPLOYMENT_ERROR` (value: `"DEPLOYMENT_ERROR"`)

* `DEPLOYED` (value: `"DEPLOYED"`)

* `STOP_QUEUED` (value: `"STOP_QUEUED"`)

* `STOPPING` (value: `"STOPPING"`)

* `STOP_ERROR` (value: `"STOP_ERROR"`)

* `STOPPED` (value: `"STOPPED"`)

* `DELETE_QUEUED` (value: `"DELETE_QUEUED"`)

* `DELETING` (value: `"DELETING"`)

* `DELETE_ERROR` (value: `"DELETE_ERROR"`)

* `DELETED` (value: `"DELETED"`)

* `RUNNING` (value: `"RUNNING"`)

* `RUNNING_ERROR` (value: `"RUNNING_ERROR"`)

* `CANCEL_QUEUED` (value: `"CANCEL_QUEUED"`)

* `CANCELLING` (value: `"CANCELLING"`)

* `CANCEL_ERROR` (value: `"CANCEL_ERROR"`)

* `CANCELLED` (value: `"CANCELLED"`)





## Enum: ServiceDeploymentStatusEnum


* `NEVER_DEPLOYED` (value: `"NEVER_DEPLOYED"`)

* `UP_TO_DATE` (value: `"UP_TO_DATE"`)

* `OUT_OF_DATE` (value: `"OUT_OF_DATE"`)




