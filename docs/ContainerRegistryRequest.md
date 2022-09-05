# QoveryApi.ContainerRegistryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**kind** | [**ContainerRegistryKindEnum**](ContainerRegistryKindEnum.md) |  | 
**description** | **String** |  | [optional] 
**url** | **String** | URL of the container registry: * For &#x60;DOCKER_HUB&#x60;: should be &#x60;https://docker.io&#x60; * For others: must start by &#x60;https://&#x60;  | 
**config** | **{String: String}** | This field is dependent of the container registry kind: * &#x60;ECR&#x60; needs in the config: region, access_key_id, secret_access_key * &#x60;SCALEWAY_CR&#x60; needs in the config: region, scaleway_access_key, scaleway_secret_key * &#x60;DOCKER_HUB&#x60; needs in the config: username, password * &#x60;PUBLIC_ECR&#x60; needs in the config: access_key_id, secret_access_key * &#x60;DOCR&#x60; is not supported anymore  | 


