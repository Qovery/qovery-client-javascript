# QoveryApi.Environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case insensitive | 
**organization** | [**ReferenceObject**](ReferenceObject.md) |  | 
**project** | [**ReferenceObject**](ReferenceObject.md) |  | 
**lastUpdatedBy** | **String** | uuid of the user that made the last update | [optional] 
**cloudProvider** | [**EnvironmentAllOfCloudProvider**](EnvironmentAllOfCloudProvider.md) |  | 
**mode** | [**EnvironmentModeEnum**](EnvironmentModeEnum.md) |  | 
**clusterId** | **String** |  | 
**clusterName** | **String** |  | [optional] 


