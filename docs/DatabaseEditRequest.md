# QoveryApi.DatabaseEditRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case-insensitive | [optional] 
**version** | **String** |  | [optional] 
**accessibility** | [**DatabaseAccessibilityEnum**](DatabaseAccessibilityEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB   Default value is linked to the database type: - MANAGED: 100 - CONTAINER   - POSTGRES: 100   - REDIS: 100   - MYSQL: 512   - MONGODB: 256  | [optional] 
**storage** | **Number** | unit is GB | [optional] 


