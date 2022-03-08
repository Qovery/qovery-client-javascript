# QoveryApi.DatabaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**type** | [**DatabaseTypeEnum**](DatabaseTypeEnum.md) |  | 
**version** | **String** |  | 
**mode** | [**DatabaseModeEnum**](DatabaseModeEnum.md) |  | 
**accessibility** | [**DatabaseAccessibilityEnum**](DatabaseAccessibilityEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**storage** | **Number** | unit is MB | [optional] [default to 10240]


