# QoveryApi.ServiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | uuid of the associated service (application, database, job, gateway...) | 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**type** | [**ServiceTypeEnum**](ServiceTypeEnum.md) |  | [optional] 
**name** | **String** | name of the service | [optional] 
**deployedCommitId** | **String** | Git commit ID corresponding to the deployed version of the application | [optional] 
**lastUpdatedBy** | **String** | uuid of the user that made the last update | [optional] 
**consumedResourcesInPercent** | **Number** | global overview of resources consumption of the service | [optional] 
**serviceTypology** | **String** | describes the typology of service (container, postgresl, redis...) | [optional] 
**serviceVersion** | **String** | for databases this field exposes the database version | [optional] 
**toUpdate** | **Boolean** |  | [optional] 


