# BetaQoveryApi.EnvironmentDeploymentRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoDeploy** | **Boolean** |  | [optional] [default to true]
**autoStop** | **Boolean** |  | [optional] [default to false]
**timezone** | **String** | specify value only if auto_stop &#x3D; false | [optional] [default to &#39;Europe/London&#39;]
**startTime** | **Date** | specify value only if auto_stop &#x3D; false | [optional] 
**stopTime** | **Date** | specify value only if auto_stop &#x3D; false | [optional] 
**weekdays** | **[String]** | specify value only if auto_stop &#x3D; false | [optional] 
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: [WeekdaysEnum]


* `MONDAY` (value: `"MONDAY"`)

* `TUESDAY` (value: `"TUESDAY"`)

* `WEDNESDAY` (value: `"WEDNESDAY"`)

* `THURSDAY` (value: `"THURSDAY"`)

* `FRIDAY` (value: `"FRIDAY"`)

* `SATURDAY` (value: `"SATURDAY"`)

* `SUNDAY` (value: `"SUNDAY"`)




