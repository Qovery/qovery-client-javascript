# QoveryApi.Database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case insensitive | 
**description** | **String** | give a description to this database | [optional] 
**type** | [**DatabaseTypeEnum**](DatabaseTypeEnum.md) |  | 
**version** | **String** |  | 
**mode** | [**DatabaseModeEnum**](DatabaseModeEnum.md) |  | 
**accessibility** | [**DatabaseAccessibilityEnum**](DatabaseAccessibilityEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**instanceType** | **String** | Database instance type to be used for this database. The list of values can be retrieved via the endpoint /{CloudProvider}/managedDatabase/instanceType/{region}/{dbType}. This field is null for container DB. | [optional] 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB   Default value is linked to the database type: - MANAGED: &#x60;100&#x60; - CONTAINER   - POSTGRES: &#x60;100&#x60;   - REDIS: &#x60;100&#x60;   - MYSQL: &#x60;512&#x60;   - MONGODB: &#x60;256&#x60;  | [optional] 
**storage** | **Number** | unit is GB | [optional] [default to 10]
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**host** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**maximumMemory** | **Number** | Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**diskEncrypted** | **Boolean** | indicates if the database disk is encrypted or not | [optional] 


