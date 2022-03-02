# QoveryApi.DatabaseResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case insensitive | 
**type** | **String** |  | 
**version** | **String** |  | 
**mode** | **String** |  | 
**accessibility** | **String** |  | [optional] [default to &#39;PRIVATE&#39;]
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**storage** | **Number** | unit is MB | [optional] [default to 10240]
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**host** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**maximumMemory** | **Number** | Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**diskEncrypted** | **Boolean** | indicates if the database disk is encrypted or not | [optional] 



## Enum: TypeEnum


* `POSTGRESQL` (value: `"POSTGRESQL"`)

* `MYSQL` (value: `"MYSQL"`)

* `MONGODB` (value: `"MONGODB"`)

* `REDIS` (value: `"REDIS"`)





## Enum: ModeEnum


* `MANAGED` (value: `"MANAGED"`)

* `CONTAINER` (value: `"CONTAINER"`)





## Enum: AccessibilityEnum


* `PUBLIC` (value: `"PUBLIC"`)

* `PRIVATE` (value: `"PRIVATE"`)




