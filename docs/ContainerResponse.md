# QoveryApi.ContainerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**storage** | [**[ServiceStorageStorageInner]**](ServiceStorageStorageInner.md) |  | [optional] 
**results** | [**[ServicePort]**](ServicePort.md) |  | [optional] 
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | 
**registry** | [**ReferenceObject**](ReferenceObject.md) |  | 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | 
**maximumMemory** | **Number** | Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | 
**name** | **String** | name is case insensitive | 
**imageName** | **String** | name of the image container | 
**tag** | **String** | tag of the image container | 
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** | optional entrypoint when launching container | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | 
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running.  | [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [default to 1]
**autoPreview** | **Boolean** | Specify if the environment preview option is activated or not for this container. If activated, a preview environment will be automatically cloned at each pull request.  | 


