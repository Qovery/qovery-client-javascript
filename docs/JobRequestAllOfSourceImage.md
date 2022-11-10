# QoveryApi.JobRequestAllOfSourceImage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imageName** | **String** | The image name pattern differs according to chosen container registry provider:   * &#x60;ECR&#x60;: &#x60;repository&#x60; * &#x60;SCALEWAY_CR&#x60;: &#x60;namespace/image&#x60; * &#x60;DOCKER_HUB&#x60;: &#x60;image&#x60; or &#x60;repository/image&#x60; * &#x60;PUBLIC_ECR&#x60;: &#x60;registry_alias/repository&#x60;  | [optional] 
**tag** | **String** | tag of the image container | [optional] 
**registryId** | **String** | tag of the image container | [optional] 


