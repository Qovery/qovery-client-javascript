# QoveryApi.ContainerRegistryRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessKeyId** | **String** | Required if kind is &#x60;ECR&#x60; or &#x60;PUBLIC_ECR&#x60; | [optional] 
**secretAccessKey** | **String** | Required if kind is &#x60;ECR&#x60; or &#x60;PUBLIC_ECR&#x60; | [optional] 
**region** | **String** | Required if kind is &#x60;ECR&#x60; or &#x60;SCALEWAY_CR&#x60; | [optional] 
**scalewayAccessKey** | **String** | Required if kind is &#x60;SCALEWAY_CR&#x60; | [optional] 
**scalewaySecretKey** | **String** | Required if kind is &#x60;SCALEWAY_CR&#x60; | [optional] 
**username** | **String** | optional, for kind &#x60;DOCKER_HUB&#x60;   We encourage you to set credentials for Docker Hub due to the limits on the pull rate  | [optional] 
**password** | **String** | optional, for kind &#x60;DOCKER_HUB&#x60;   We encourage you to set credentials for Docker Hub due to the limits on the pull rate  | [optional] 


