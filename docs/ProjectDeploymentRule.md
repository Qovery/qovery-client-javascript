# QoveryApi.ProjectDeploymentRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**mode** | [**EnvironmentModeEnum**](EnvironmentModeEnum.md) |  | 
**clusterId** | **String** |  | 
**autoStop** | **Boolean** |  | [optional] [default to false]
**timezone** | **String** |  | 
**startTime** | **Date** |  | 
**stopTime** | **Date** |  | 
**weekdays** | [**[WeekdayEnum]**](WeekdayEnum.md) |  | 
**wildcard** | **String** | wildcard pattern composed of &#39;?&#39; and/or &#39;*&#39; used to target new created environments | [default to &#39;&#39;]
**priorityIndex** | **Number** | used to select the first deployment rule to match new created environments | [optional] 


