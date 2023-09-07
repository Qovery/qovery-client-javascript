# QoveryApi.ContainerRegistryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**kind** | [**ContainerRegistryKindEnum**](ContainerRegistryKindEnum.md) |  | 
**description** | **String** |  | [optional] 
**url** | **String** | URL of the container registry: * For &#x60;DOCKER_HUB&#x60;: it must be &#x60;https://docker.io&#x60; (default with &#39;https://docker.io&#39; if no url provided for &#x60;DOCKER_HUB&#x60;) * For &#x60;GITHUB_CR&#x60;: it must be &#x60;https://ghcr.io&#x60; (default with &#39;https://ghcr.io&#39; if no url provided for &#x60;GITHUB_CR&#x60;) * For &#x60;GITLAB_CR&#x60;: it must be &#x60;https://registry.gitlab.com&#x60; (default with &#39;https://registry.gitlab.com&#39; if no url provided for &#x60;GITLAB_CR&#x60;) * For others: it&#39;s required and must start by &#x60;https://&#x60;  | [optional] 
**config** | [**ContainerRegistryRequestConfig**](ContainerRegistryRequestConfig.md) |  | 


