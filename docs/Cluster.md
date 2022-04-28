# QoveryApi.Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**name** | **String** | name is case-insensitive | 
**description** | **String** |  | [optional] 
**cloudProvider** | [**CloudProviderEnum**](CloudProviderEnum.md) |  | 
**region** | **String** |  | 
**autoUpdate** | **Boolean** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningNodes** | **Number** |  | [optional] [default to 1]
**maxRunningNodes** | **Number** |  | [optional] [default to 1]
**instanceType** | **String** | the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType | [optional] 
**estimatedCloudProviderCost** | **Number** | This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration | [optional] 
**status** | [**StateEnum**](StateEnum.md) |  | [optional] 
**features** | [**ClusterFeature**](ClusterFeature.md) |  | [optional] 
**hasAccess** | **Boolean** |  | [optional] 
**version** | **String** |  | [optional] 
**isDefault** | **Boolean** |  | [optional] 


