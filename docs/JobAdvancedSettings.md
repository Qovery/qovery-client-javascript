# QoveryApi.JobAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildTimeoutMaxSec** | **Number** | define the max timeout for the build | [optional] [default to 1800]
**buildCpuMaxInMilli** | **Number** | define the max cpu resources (in milli) | [optional] [default to 4000]
**buildRamMaxInGib** | **Number** | define the max ram resources (in gib) | [optional] [default to 8]
**deploymentTerminationGracePeriodSeconds** | **Number** | define how long in seconds an application is supposed to be stopped gracefully | [optional] [default to 60]
**deploymentAffinityNodeRequired** | **{String: String}** | Set pod placement on specific Kubernetes nodes labels | [optional] 
**jobDeleteTtlSecondsAfterFinished** | **Number** |  | [optional] 
**cronjobConcurrencyPolicy** | **String** |  | [optional] [default to &#39;Forbid&#39;]
**cronjobFailedJobsHistoryLimit** | **Number** |  | [optional] [default to 1]
**cronjobSuccessJobsHistoryLimit** | **Number** |  | [optional] [default to 1]
**securityServiceAccountName** | **String** | Allows you to set an existing Kubernetes service account name  | [optional] [default to &#39;&#39;]
**securityReadOnlyRootFilesystem** | **Boolean** | Mounts the container&#39;s root filesystem as read-only  | [optional] [default to false]


