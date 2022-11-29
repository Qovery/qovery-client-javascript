# QoveryApi.DeploymentHistoryJobResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name of the job | [optional] 
**status** | [**DeploymentHistoryStatusEnum**](DeploymentHistoryStatusEnum.md) |  | [optional] 
**imageName** | **String** |  | [optional] 
**tag** | **String** |  | [optional] 
**commit** | [**Commit**](Commit.md) |  | [optional] 
**schedule** | [**JobResponseAllOfSchedule**](JobResponseAllOfSchedule.md) |  | [optional] 
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** |  | [optional] 


