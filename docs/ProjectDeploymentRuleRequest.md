# QoveryApi.ProjectDeploymentRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**mode** | **String** |  | 
**clusterId** | **String** |  | 
**autoDeploy** | **Boolean** |  | 
**autoStop** | **Boolean** |  | 
**timezone** | **String** | specify value only if auto_stop &#x3D; false | [default to &#39;Europe/London&#39;]
**startTime** | **Date** | specify value only if auto_stop &#x3D; false | 
**stopTime** | **Date** | specify value only if auto_stop &#x3D; false | 
**weekdays** | **[String]** | specify value only if auto_stop &#x3D; false | 
**wildcard** | **String** | wildcard pattern composed of &#39;?&#39; and/or &#39;*&#39; used to target new created environments | 



## Enum: ModeEnum


* `PRODUCTION` (value: `"PRODUCTION"`)

* `DEVELOPMENT` (value: `"DEVELOPMENT"`)





## Enum: [WeekdaysEnum]


* `MONDAY` (value: `"MONDAY"`)

* `TUESDAY` (value: `"TUESDAY"`)

* `WEDNESDAY` (value: `"WEDNESDAY"`)

* `THURSDAY` (value: `"THURSDAY"`)

* `FRIDAY` (value: `"FRIDAY"`)

* `SATURDAY` (value: `"SATURDAY"`)

* `SUNDAY` (value: `"SUNDAY"`)




