# QoveryApi.DeploymentHistoryHelmResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name of the helm | [optional] 
**status** | [**StateEnum**](StateEnum.md) |  | [optional] 
**commit** | [**Commit**](Commit.md) |  | [optional] 
**repository** | [**DeploymentHistoryHelmResponseAllOfRepository**](DeploymentHistoryHelmResponseAllOfRepository.md) |  | [optional] 


