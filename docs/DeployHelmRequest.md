# QoveryApi.DeployHelmRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | version of the chart to deploy. Cannot be set if &#x60;git_commit_id&#x60; is defined  | [optional] 
**gitCommitId** | **String** | Commit to deploy for chart source. Cannot be set if &#x60;version&#x60; is defined  | [optional] 
**valuesOverrideGitCommitId** | **String** | Commit to deploy for values override  | [optional] 


