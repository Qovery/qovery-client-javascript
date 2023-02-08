# QoveryApi.EditDeploymentStage200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | 
**name** | **String** | name is case insensitive | [optional] 
**description** | **String** |  | [optional] 
**deploymentOrder** | **Number** | Position of the deployment stage within the environment | [optional] 
**services** | [**[EditDeploymentStage200ResponseAllOfServicesInner]**](EditDeploymentStage200ResponseAllOfServicesInner.md) |  | [optional] 


