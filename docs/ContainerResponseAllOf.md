# QoveryApi.ContainerResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled for this container.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | 
**ports** | [**[ServicePort]**](ServicePort.md) |  | [optional] 


