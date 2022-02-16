# BetaQoveryApi.ApplicationGitRepositoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasAccess** | **Boolean** |  | [optional] 
**provider** | **String** |  | [optional] 
**owner** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**name** | **String** | repository name | [optional] 
**branch** | **String** |  | [optional] 
**rootPath** | **String** |  | [optional] 
**deployedCommitId** | **String** | Git commit ID corresponding to the deployed version of the app | [optional] 
**deployedCommitDate** | **Date** | Git commit date corresponding to the deployed version of the app | [optional] [readonly] 
**deployedCommitContributor** | **String** | Git commit user corresponding to the deployed version of the app | [optional] 
**deployedCommitTag** | **String** |  | [optional] 



## Enum: ProviderEnum


* `GITHUB` (value: `"GITHUB"`)

* `GITLAB` (value: `"GITLAB"`)




