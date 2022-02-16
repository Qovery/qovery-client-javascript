# BetaQoveryApi.CustomDomainResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validationDomain** | **String** | URL provided by Qovery. You must create a CNAME on your DNS provider using that URL | [optional] 
**status** | **String** |  | [optional] 
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**domain** | **String** | your custom domain | 



## Enum: StatusEnum


* `deploying` (value: `"deploying"`)

* `checking` (value: `"checking"`)

* `ready` (value: `"ready"`)

* `error` (value: `"error"`)




