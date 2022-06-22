# QoveryApi.ClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case-insensitive | 
**description** | **String** |  | [optional] 
**region** | **String** |  | 
**cloudProvider** | [**CloudProviderEnum**](CloudProviderEnum.md) |  | 
**minRunningNodes** | **Number** |  | [optional] [default to 1]
**maxRunningNodes** | **Number** |  | [optional] [default to 1]
**diskSize** | **Number** | Unit is in GB. The disk size to be used for the node configuration | [optional] [default to 20]
**instanceType** | **String** | the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType | [optional] 
**kubernetes** | [**KubernetesEnum**](KubernetesEnum.md) |  | [optional] 
**sshKeys** | [**ClusterAllOfSshKeys**](ClusterAllOfSshKeys.md) |  | [optional] 
**features** | [**ClusterRequestFeatures**](ClusterRequestFeatures.md) |  | [optional] 


