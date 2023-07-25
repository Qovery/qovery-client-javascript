# QoveryApi.DeployAllRequestJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | id of the job to be updated. | [optional] 
**imageTag** | **String** | new tag for the job image. Use only if job is an image source. Can be empty only if the service has been already deployed (in this case the service version won&#39;t be changed) | [optional] 
**gitCommitId** | **String** | Commit ID to deploy. Use only if job is a repository source. Can be empty only if the service has been already deployed (in this case the service version won&#39;t be changed) | [optional] 


