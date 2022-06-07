# QoveryApi.ContainerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage** | [**[ApplicationStorageRequestStorageInner]**](ApplicationStorageRequestStorageInner.md) |  | [optional] 
**ports** | [**[ApplicationPortRequestPortsInner]**](ApplicationPortRequestPortsInner.md) |  | [optional] 
**name** | **String** | name is case insensitive | 
**description** | **String** | give a description to this container | [optional] 
**registryId** | **String** | id of the linked registry | 
**imageName** | **String** | name of the image container | 
**_arguments** | **String** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]
**healthcheck** | [**Healthcheck**](Healthcheck.md) |  | [optional] 


