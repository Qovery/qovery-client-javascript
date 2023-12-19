# QoveryApi.DeployAllRequestHelmsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | id of the helm to be updated. | [optional] 
**chartVersion** | **String** | The new chart version for the Helm source. Use this only if the helm has a Helm repository source. | [optional] 
**gitCommitId** | **String** | The commit Id to deploy. Use this only if the helm has a Git repository source. | [optional] 
**valuesOverrideGitCommitId** | **String** | The commit Id of the override values to deploy. Use only if the helm has a Git override values repository. | [optional] 


