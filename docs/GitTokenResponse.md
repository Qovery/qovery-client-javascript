# QoveryApi.GitTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**type** | [**GitProviderEnum**](GitProviderEnum.md) |  | 
**expiredAt** | **Date** |  | [optional] 
**workspace** | **String** | Mandatory only for BITBUCKET git provider | [optional] 
**associatedServicesCount** | **Number** | The number of services using this git token | 


