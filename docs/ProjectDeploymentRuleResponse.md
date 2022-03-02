# QoveryApi.ProjectDeploymentRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**mode** | **String** |  | 
**clusterId** | **String** |  | 
**autoDeploy** | **Boolean** |  | [optional] [default to false]
**autoStop** | **Boolean** |  | [optional] [default to false]
**autoDelete** | **Boolean** |  | [optional] [default to false]
**timezone** | **String** |  | 
**startTime** | **Date** |  | 
**stopTime** | **Date** |  | 
**weekdays** | **[String]** |  | 
**wildcard** | **String** | wildcard pattern composed of &#39;?&#39; and/or &#39;*&#39; used to target new created environments | [default to &#39;&#39;]
**priorityIndex** | **Number** | used to select the first deployment rule to match new created environments | [optional] 



## Enum: ModeEnum


* `DEVELOPMENT` (value: `"DEVELOPMENT"`)

* `STAGING` (value: `"STAGING"`)

* `PRODUCTION` (value: `"PRODUCTION"`)





## Enum: [WeekdaysEnum]


* `MONDAY` (value: `"MONDAY"`)

* `TUESDAY` (value: `"TUESDAY"`)

* `WEDNESDAY` (value: `"WEDNESDAY"`)

* `THURSDAY` (value: `"THURSDAY"`)

* `FRIDAY` (value: `"FRIDAY"`)

* `SATURDAY` (value: `"SATURDAY"`)

* `SUNDAY` (value: `"SUNDAY"`)




