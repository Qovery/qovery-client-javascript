# QoveryApi.DeploymentHistoryEnvironmentResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] 
**applications** | [**[DeploymentHistoryApplicationResponse]**](DeploymentHistoryApplicationResponse.md) |  | [optional] 
**databases** | [**[DeploymentHistoryDatabaseResponse]**](DeploymentHistoryDatabaseResponse.md) |  | [optional] 



## Enum: StatusEnum


* `READY` (value: `"READY"`)

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




