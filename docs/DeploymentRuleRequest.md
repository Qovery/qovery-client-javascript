# QoveryApi.DeploymentRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**mode** | [**EnvironmentModeEnum**](EnvironmentModeEnum.md) |  | 
**cluster** | **String** |  | 
**autoStop** | **Boolean** |  | [default to false]
**timezone** | **String** | specify value only if auto_stop &#x3D; false | [optional] [default to &#39;Europe/London&#39;]
**startTime** | **Date** | specify value only if auto_stop &#x3D; false | [optional] 
**stopTime** | **Date** | specify value only if auto_stop &#x3D; false | [optional] 
**weekdays** | [**[WeekdayEnum]**](WeekdayEnum.md) | specify value only if auto_stop &#x3D; false | [optional] 


