# QoveryApi.ContainerResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**registry** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**maximumMemory** | **Number** | Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**name** | **String** | name is case insensitive | [optional] 
**imageName** | **String** | name of the image container | [optional] 
**tag** | **String** | tag of the image container | [optional] 
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** | optional entrypoint when launching container | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]


