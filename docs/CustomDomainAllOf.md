# QoveryApi.CustomDomainAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validationDomain** | **String** | URL provided by Qovery. You must create a CNAME on your DNS provider using that URL | [optional] 
**status** | [**CustomDomainStatusEnum**](CustomDomainStatusEnum.md) |  | [optional] 
**generateCertificate** | **Boolean** | to control if a certificate has to be generated for this custom domain by Qovery. The default value is &#x60;true&#x60;. This flag should be set to &#x60;false&#x60; if a CDN or other entities are managing the certificate for the specified domain and the traffic is proxied by the CDN to Qovery. | [optional] 


