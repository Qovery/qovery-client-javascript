# QoveryApi.ClusterResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimatedCloudProviderCost** | **Number** | This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration | [optional] 
**status** | **String** |  | [optional] 
**hasAccess** | **Boolean** |  | [optional] 
**version** | **String** |  | [optional] 
**isDefault** | **Boolean** |  | [optional] 
**id** | **String** |  | 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case-insensitive | 
**description** | **String** |  | [optional] 
**cloudProvider** | **String** |  | 
**region** | **String** |  | 
**autoUpdate** | **Boolean** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningNodes** | **Number** |  | [optional] [default to 1]
**maxRunningNodes** | **Number** |  | [optional] [default to 1]
**title** | **String** |  | [optional] 
**costPerMonthInCents** | **Number** |  | [optional] 
**costPerMonth** | **Number** |  | [optional] 
**currencyCode** | **String** |  | [optional] 
**valueType** | **String** |  | [optional] 
**value** | **String** |  | [optional] 
**isValueUpdatable** | **Boolean** |  | [optional] [default to false]
**acceptedValues** | [**[AnyOfstringboolean]**](AnyOfstringboolean.md) |  | [optional] 



## Enum: StatusEnum


* `READY` (value: `"READY"`)

* `RUNNING` (value: `"RUNNING"`)

* `WARNING` (value: `"WARNING"`)





## Enum: CloudProviderEnum


* `AWS` (value: `"AWS"`)

* `DIGITAL_OCEAN` (value: `"DIGITAL_OCEAN"`)

* `SCALEWAY` (value: `"SCALEWAY"`)





## Enum: ValueTypeEnum


* `BOOLEAN` (value: `"BOOLEAN"`)




