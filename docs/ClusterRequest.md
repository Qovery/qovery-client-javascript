# QoveryApi.ClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case-insensitive | 
**description** | **String** |  | [optional] 
**cloudProvider** | [**CloudProviderEnum**](CloudProviderEnum.md) |  | 
**region** | **String** |  | 
**autoUpdate** | **Boolean** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningNodes** | **Number** |  | [optional] [default to 1]
**maxRunningNodes** | **Number** |  | [optional] [default to 1]
**features** | [**[ClusterFeatureRequestFeatures]**](ClusterFeatureRequestFeatures.md) |  | [optional] 


