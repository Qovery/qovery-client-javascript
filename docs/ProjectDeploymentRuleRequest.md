# QoveryApi.ProjectDeploymentRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**mode** | [**EnvironmentModeEnum**](EnvironmentModeEnum.md) |  | 
**clusterId** | **String** |  | 
**autoDeploy** | **Boolean** |  | [optional] [default to false]
**autoStop** | **Boolean** |  | [optional] [default to false]
**timezone** | **String** |  | 
**startTime** | **Date** |  | 
**stopTime** | **Date** |  | 
**weekdays** | [**[WeekdayEnum]**](WeekdayEnum.md) |  | 
**wildcard** | **String** | wildcard pattern composed of &#39;?&#39; and/or &#39;*&#39; used to target new created environments | [default to &#39;&#39;]


