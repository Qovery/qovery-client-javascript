# QoveryApi.ClusterAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**name** | **String** | name is case-insensitive | 
**description** | **String** |  | [optional] 
**region** | **String** |  | 
**cloudProvider** | [**CloudProviderEnum**](CloudProviderEnum.md) |  | 
**minRunningNodes** | **Number** |  | [optional] [default to 1]
**maxRunningNodes** | **Number** |  | [optional] [default to 1]
**diskSize** | **Number** | Unit is in GB. The disk size to be used for the node configuration | [optional] [default to 20]
**instanceType** | **String** | the instance type to be used for this cluster. The list of values can be retrieved via the endpoint /{CloudProvider}/instanceType | [optional] 
**kubernetes** | [**KubernetesEnum**](KubernetesEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**estimatedCloudProviderCost** | **Number** | This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration | [optional] 
**status** | [**ClusterStateEnum**](ClusterStateEnum.md) |  | [optional] 
**hasAccess** | **Boolean** |  | [optional] 
**version** | **String** |  | [optional] 
**isDefault** | **Boolean** |  | [optional] 
**production** | **Boolean** | specific flag to indicate that this cluster is a production one | [optional] 
**sshKeys** | **[String]** | Indicate your public ssh_key to remotely connect to your EC2 instance. | [optional] 
**features** | [**[ClusterFeature]**](ClusterFeature.md) |  | [optional] 
**deploymentStatus** | [**ClusterDeploymentStatusEnum**](ClusterDeploymentStatusEnum.md) |  | [optional] 


