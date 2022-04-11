# QoveryApi.DatabaseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**host** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**maximumMemory** | **Number** | Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**diskEncrypted** | **Boolean** | indicates if the database disk is encrypted or not | [optional] 


