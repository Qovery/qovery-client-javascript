# BetaQoveryApi.EnvironmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**project** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**lastUpdatedBy** | **String** | uuid of the user that made the last update | [optional] 
**cloudProvider** | **Object** |  | 
**mode** | **String** |  | 
**clusterId** | **String** |  | 
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: ModeEnum


* `PRODUCTION` (value: `"PRODUCTION"`)

* `DEVELOPMENT` (value: `"DEVELOPMENT"`)

* `STAGING` (value: `"STAGING"`)

* `PREVIEW` (value: `"PREVIEW"`)




