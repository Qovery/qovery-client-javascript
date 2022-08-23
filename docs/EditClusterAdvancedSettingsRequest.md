# QoveryApi.EditClusterAdvancedSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryImageRetentionTime** | **Number** | Configure the number of seconds before cleaning images in the registry | [optional] [default to 31536000]
**loadBalancerSize** | **String** | Select the size of the main load_balancer (only effective for Scaleway) | [optional] [default to &#39;lb-s&#39;]
**plecoResourcesTtl** | **Number** |  | [optional] [default to -1]
**lokiLogRetentionInWeek** | **Number** | For how long in week loki is going to keep logs of your applications | [optional] [default to 12]


