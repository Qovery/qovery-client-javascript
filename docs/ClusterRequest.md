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
**diskSize** | **Number** | Unit is in GB. The disk size to be used for the node configuration | [optional] [default to 40]
**instanceType** | **String** | the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType | [optional] 
**kubernetes** | [**KubernetesEnum**](KubernetesEnum.md) |  | [optional] 
**production** | **Boolean** | specific flag to indicate that this cluster is a production one | [optional] 
**sshKeys** | **[String]** | Indicate your public ssh_key to remotely connect to your EC2 instance. | [optional] 
**features** | [**[ClusterRequestFeaturesInner]**](ClusterRequestFeaturesInner.md) |  | [optional] 


