# QoveryApi.ClusterAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsCloudwatchEksLogsRetentionDays** | **Number** | Set the number of retention days for EKS Cloudwatch logs | [optional] [default to 90]
**awsVpcEnableS3FlowLogs** | **Boolean** | Enable flow logs for on the VPC and store them in an S3 bucket | [optional] [default to false]
**awsVpcFlowLogsRetentionDays** | **Number** | Set the number of retention days for flow logs. Disable with value \&quot;0\&quot; | [optional] [default to 365]
**lokiLogRetentionInWeek** | **Number** | For how long in week loki is going to keep logs of your applications | [optional] [default to 12]
**registryImageRetentionTime** | **Number** | Configure the number of seconds before cleaning images in the registry | [optional] [default to 31536000]
**cloudProviderContainerRegistryTags** | **{String: String}** | Add additional tags on the cluster dedicated registry | [optional] 
**loadBalancerSize** | **String** | Select the size of the main load_balancer (only effective for Scaleway) | [optional] [default to &#39;lb-s&#39;]
**databasePostgresqlDenyPublicAccess** | **Boolean** | Deny public access to any PostgreSQL database | [optional] [default to false]
**databasePostgresqlAllowedCidrs** | **[String]** | List of CIDRs allowed to access the PostgreSQL database | [optional] 
**databaseMysqlDenyPublicAccess** | **Boolean** | Deny public access to any MySql database | [optional] [default to false]
**databaseMysqlAllowedCidrs** | **[String]** | List of CIDRs allowed to access the MySql database | [optional] 
**databaseMongodbDenyPublicAccess** | **Boolean** | Deny public access to any MongoDB/DocumentDB database | [optional] [default to false]
**databaseMongodbAllowedCidrs** | **[String]** | List of CIDRs allowed to access the MongoDB/DocumentDB database | [optional] 
**databaseRedisDenyPublicAccess** | **Boolean** | Deny public access to any Redis database | [optional] [default to false]
**databaseRedisAllowedCidrs** | **[String]** | List of CIDRs allowed to access the Redis database | [optional] 
**awsIamAdminGroup** | **String** | AWS IAM group name with cluster access | [optional] [default to &#39;Admins&#39;]
**awsEksEc2MetadataImds** | **String** | Specify the [IMDS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) version you want to use:   * &#x60;required&#x60;: IMDS V2 only   * &#x60;optional&#x60;: IMDS V1 + V2  | [optional] [default to &#39;optional&#39;]
**plecoResourcesTtl** | **Number** |  | [optional] [default to -1]
**registryMirroringMode** | [**RegistryMirroringModeEnum**](RegistryMirroringModeEnum.md) |  | [optional] 
**nginxVcpuRequestInMilliCpu** | **Number** | vcpu request in millicores | [optional] [default to 100]
**nginxVcpuLimitInMilliCpu** | **Number** | vcpu limit in millicores | [optional] [default to 500]
**nginxMemoryRequestInMib** | **Number** | memory request in MiB | [optional] [default to 768]
**nginxMemoryLimitInMib** | **Number** | memory limit in MiB | [optional] [default to 768]
**nginxHpaCpuUtilizationPercentageThreshold** | **Number** | hpa cpu threshold in percentage | [optional] [default to 50]
**nginxHpaMinNumberInstances** | **Number** | hpa minimum number of instances | [optional] [default to 2]
**nginxHpaMaxNumberInstances** | **Number** | hpa maximum number of instances | [optional] [default to 25]



## Enum: AwsEksEc2MetadataImdsEnum


* `optional` (value: `"optional"`)

* `required` (value: `"required"`)




