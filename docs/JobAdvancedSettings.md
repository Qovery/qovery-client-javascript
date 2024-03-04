# QoveryApi.JobAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildTimeoutMaxSec** | **Number** | define the max timeout for the build | [optional] 
**buildCpuMaxInMilli** | **Number** | define the max cpu resources (in milli) | [optional] 
**buildRamMaxInGib** | **Number** | define the max ram resources (in gib) | [optional] 
**deploymentTerminationGracePeriodSeconds** | **Number** | define how long in seconds an application is supposed to be stopped gracefully | [optional] 
**deploymentAffinityNodeRequired** | **{String: String}** | Set pod placement on specific Kubernetes nodes labels | [optional] 
**jobDeleteTtlSecondsAfterFinished** | **Number** |  | [optional] 
**cronjobConcurrencyPolicy** | **String** |  | [optional] 
**cronjobFailedJobsHistoryLimit** | **Number** |  | [optional] 
**cronjobSuccessJobsHistoryLimit** | **Number** |  | [optional] 
**securityServiceAccountName** | **String** | Allows you to set an existing Kubernetes service account name  | [optional] 
**securityAutomountServiceAccountToken** | **Boolean** | Automount Kubernetes service account token to have access to Kubernetes API from pods  | [optional] 
**securityReadOnlyRootFilesystem** | **Boolean** | Mounts the container&#39;s root filesystem as read-only  | [optional] 


