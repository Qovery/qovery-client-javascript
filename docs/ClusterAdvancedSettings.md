# QoveryApi.ClusterAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lokiLogRetentionInWeek** | **Number** | For how long in week loki is going to keep logs of your applications | [optional] [default to 12]
**awsVpcEnableS3FlowLogs** | **Boolean** | Enable flow logs for on the VPC and store them in an S3 bucket | [optional] [default to false]
**awsVpcFlowLogsRetentionDays** | **Number** | Set the number of retention days for flow logs. Disable with value \&quot;0\&quot; | [optional] [default to 365]
**registryImageRetentionTime** | **Number** | Configure the number of seconds before cleaning images in the registry | [optional] [default to 31536000]
**cloudProviderContainerRegistryTags** | [**ClusterAdvancedSettingsCloudProviderContainerRegistryTags**](ClusterAdvancedSettingsCloudProviderContainerRegistryTags.md) |  | [optional] 
**loadBalancerSize** | **String** | Select the size of the main load_balancer (only effective for Scaleway) | [optional] [default to &#39;lb-s&#39;]
**plecoResourcesTtl** | **Number** |  | [optional] [default to -1]


