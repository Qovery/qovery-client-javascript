# QoveryApi.DatabaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**type** | **String** |  | 
**version** | **String** |  | 
**mode** | **String** |  | 
**accessibility** | **String** |  | [optional] [default to &#39;PRIVATE&#39;]
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**storage** | **Number** | unit is MB | [optional] [default to 10240]



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




