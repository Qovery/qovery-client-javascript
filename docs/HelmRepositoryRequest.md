# QoveryApi.HelmRepositoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**kind** | [**HelmRepositoryKindEnum**](HelmRepositoryKindEnum.md) |  | 
**description** | **String** |  | [optional] 
**url** | **String** | URL of the helm chart repository: * For &#x60;OCI&#x60;: it must start by oci:// * For &#x60;HTTPS&#x60;: it must be start by https://  | [optional] 
**skipTlsVerification** | **Boolean** | Bypass tls certificate verification when connecting to repository | 
**config** | [**HelmRepositoryRequestConfig**](HelmRepositoryRequestConfig.md) |  | 


