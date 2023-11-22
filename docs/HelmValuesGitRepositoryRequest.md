# QoveryApi.HelmValuesGitRepositoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | application git repository URL | 
**branch** | **String** | Name of the branch to use. This is optional If not specified, then the branch used is the &#x60;main&#x60; or &#x60;master&#x60; one  | 
**paths** | **[String]** | List of path inside your git repository to locate values file. Must start by a / | 
**gitTokenId** | **String** | The git token id on Qovery side | [optional] 


