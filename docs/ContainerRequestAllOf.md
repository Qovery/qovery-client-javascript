# QoveryApi.ContainerRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** | give a description to this container | [optional] 
**registryId** | **String** | id of the linked registry | 
**imageName** | **String** | The image name pattern differs according to chosen container registry provider:   * &#x60;ECR&#x60;: &#x60;repository&#x60; * &#x60;SCALEWAY_CR&#x60;: &#x60;namespace/image&#x60; * &#x60;DOCKER_HUB&#x60;: &#x60;image&#x60; or &#x60;repository/image&#x60; * &#x60;PUBLIC_ECR&#x60;: &#x60;registry_alias/repository&#x60;  | 
**tag** | **String** | tag of the image container | 
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** | optional entrypoint when launching container | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 500]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 512]
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]
**healthchecks** | [**Healthcheck**](Healthcheck.md) |  | [optional] 
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled for this container.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | [optional] 
**autoDeploy** | **Boolean** | Specify if the container will be automatically updated after receiving a new image tag.  The new image tag shall be communicated via the \&quot;Auto Deploy container\&quot; endpoint https://api-doc.qovery.com/#tag/Containers/operation/autoDeployContainerEnvironments  | [optional] 


