# QoveryApi.ClusterLogs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | log level | [optional] 
**timestamp** | **Date** | log date creation | [optional] 
**step** | **String** | log step | [optional] 
**message** | [**ClusterLogsMessage**](ClusterLogsMessage.md) |  | [optional] 
**error** | [**ClusterLogsError**](ClusterLogsError.md) |  | [optional] 
**details** | [**ClusterLogsDetails**](ClusterLogsDetails.md) |  | [optional] 



## Enum: StepEnum


* `LoadConfiguration` (value: `"LoadConfiguration"`)

* `Create` (value: `"Create"`)

* `Created` (value: `"Created"`)

* `CreateError` (value: `"CreateError"`)

* `Pause` (value: `"Pause"`)

* `Paused` (value: `"Paused"`)

* `PauseError` (value: `"PauseError"`)

* `Delete` (value: `"Delete"`)

* `Deleted` (value: `"Deleted"`)

* `DeleteError` (value: `"DeleteError"`)

* `RetrieveClusterConfig` (value: `"RetrieveClusterConfig"`)

* `RetrieveClusterResources` (value: `"RetrieveClusterResources"`)

* `ValidateSystemRequirements` (value: `"ValidateSystemRequirements"`)

* `UnderMigration` (value: `"UnderMigration"`)

* `Unknown` (value: `"Unknown"`)




