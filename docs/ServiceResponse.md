# QoveryApi.ServiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | type of the service (application, database, job, gateway...) | [optional] 
**name** | **String** | name of the service | [optional] 
**id** | **String** | uuid of the associated service (application, database, job, gateway...) | 
**deployedCommitId** | **String** | Git commit ID corresponding to the deployed version of the application | [optional] 
**lastUpdatedBy** | **String** | uuid of the user that made the last update | [optional] 
**consumedResourcesInPercent** | **Number** | global overview of resources consumption of the service | [optional] 
**serviceTypology** | **String** | describes the typology of service (container, postgresl, redis...) | [optional] 
**serviceVersion** | **String** | for databases this field exposes the database version | [optional] 
**toUpdate** | **Boolean** |  | [optional] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: TypeEnum


* `APPLICATION` (value: `"APPLICATION"`)

* `DATABASE` (value: `"DATABASE"`)




