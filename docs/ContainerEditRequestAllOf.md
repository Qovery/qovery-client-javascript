# QoveryApi.ContainerEditRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**registryId** | **String** | id of the linked registry | 
**imageName** | **String** | name of the image container | 
**tag** | **String** | tag of the image container | 
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** | optional entrypoint when launching container | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 500]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 512]
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]


