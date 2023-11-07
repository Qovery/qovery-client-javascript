# QoveryApi.ClusterAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsCloudwatchEksLogsRetentionDays** | **Number** | Set the number of retention days for EKS Cloudwatch logs | [optional] 
**awsVpcEnableS3FlowLogs** | **Boolean** | Enable flow logs for on the VPC and store them in an S3 bucket | [optional] 
**awsVpcFlowLogsRetentionDays** | **Number** | Set the number of retention days for flow logs. Disable with value \&quot;0\&quot; | [optional] 
**lokiLogRetentionInWeek** | **Number** | For how long in week loki is going to keep logs of your applications | [optional] 
**registryImageRetentionTime** | **Number** | Configure the number of seconds before cleaning images in the registry | [optional] 
**cloudProviderContainerRegistryTags** | **{String: String}** | Add additional tags on the cluster dedicated registry | [optional] 
**loadBalancerSize** | **String** | Select the size of the main load_balancer (only effective for Scaleway) | [optional] 
**databasePostgresqlDenyPublicAccess** | **Boolean** | Deny public access to any PostgreSQL database | [optional] 
**databasePostgresqlAllowedCidrs** | **[String]** | List of CIDRs allowed to access the PostgreSQL database | [optional] 
**databaseMysqlDenyPublicAccess** | **Boolean** | Deny public access to any MySql database | [optional] 
**databaseMysqlAllowedCidrs** | **[String]** | List of CIDRs allowed to access the MySql database | [optional] 
**databaseMongodbDenyPublicAccess** | **Boolean** | Deny public access to any MongoDB/DocumentDB database | [optional] 
**databaseMongodbAllowedCidrs** | **[String]** | List of CIDRs allowed to access the MongoDB/DocumentDB database | [optional] 
**databaseRedisDenyPublicAccess** | **Boolean** | Deny public access to any Redis database | [optional] 
**databaseRedisAllowedCidrs** | **[String]** | List of CIDRs allowed to access the Redis database | [optional] 
**awsIamAdminGroup** | **String** | AWS IAM group name with cluster access | [optional] 
**awsEksEc2MetadataImds** | **String** | Specify the [IMDS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) version you want to use:   * &#x60;required&#x60;: IMDS V2 only   * &#x60;optional&#x60;: IMDS V1 + V2  | [optional] 
**plecoResourcesTtl** | **Number** |  | [optional] 
**registryMirroringMode** | [**RegistryMirroringModeEnum**](RegistryMirroringModeEnum.md) |  | [optional] 
**nginxVcpuRequestInMilliCpu** | **Number** | vcpu request in millicores | [optional] 
**nginxVcpuLimitInMilliCpu** | **Number** | vcpu limit in millicores | [optional] 
**nginxMemoryRequestInMib** | **Number** | memory request in MiB | [optional] 
**nginxMemoryLimitInMib** | **Number** | memory limit in MiB | [optional] 
**nginxHpaCpuUtilizationPercentageThreshold** | **Number** | hpa cpu threshold in percentage | [optional] 
**nginxHpaMinNumberInstances** | **Number** | hpa minimum number of instances | [optional] 
**nginxHpaMaxNumberInstances** | **Number** | hpa maximum number of instances | [optional] 



## Enum: AwsEksEc2MetadataImdsEnum


* `optional` (value: `"optional"`)

* `required` (value: `"required"`)




