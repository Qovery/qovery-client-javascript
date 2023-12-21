# QoveryApi.DeploymentHistoryEnvironmentAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**StateEnum**](StateEnum.md) |  | [optional] 
**origin** | [**OrganizationEventOrigin**](OrganizationEventOrigin.md) |  | [optional] 
**triggeredBy** | **String** |  | [optional] 
**applications** | [**[DeploymentHistoryApplication]**](DeploymentHistoryApplication.md) |  | [optional] 
**containers** | [**[DeploymentHistoryContainer]**](DeploymentHistoryContainer.md) |  | [optional] 
**databases** | [**[DeploymentHistoryDatabase]**](DeploymentHistoryDatabase.md) |  | [optional] 
**jobs** | [**[DeploymentHistoryJobResponse]**](DeploymentHistoryJobResponse.md) |  | [optional] 
**helms** | [**[DeploymentHistoryHelmResponse]**](DeploymentHistoryHelmResponse.md) |  | [optional] 


