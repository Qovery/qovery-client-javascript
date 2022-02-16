# BetaQoveryApi.DatabaseEditRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case-insensitive | [optional] 
**version** | **String** |  | [optional] 
**accessibility** | **String** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**storage** | **Number** | unit is GB | [optional] 



## Enum: AccessibilityEnum


* `PUBLIC` (value: `"PUBLIC"`)

* `PRIVATE` (value: `"PRIVATE"`)




