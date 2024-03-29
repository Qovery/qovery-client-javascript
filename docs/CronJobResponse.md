# QoveryApi.CronJobResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the job based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | 
**maximumMemory** | **Number** | Maximum memory that can be allocated to the job based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | 
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | 
**maxNbRestart** | **Number** | Maximum number of restart allowed before the job is considered as failed 0 means that no restart/crash of the job is allowed  | [optional] 
**maxDurationSeconds** | **Number** | Maximum number of seconds allowed for the job to run before killing it and mark it as failed  | [optional] 
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled for this container.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | 
**port** | **Number** | Port where to run readiness and liveliness probes checks. The port will not be exposed externally | [optional] 
**source** | [**OneOfobjectobject**](OneOfobjectobject.md) |  | 
**healthchecks** | [**Healthcheck**](Healthcheck.md) |  | 
**autoDeploy** | **Boolean** | Specify if the job will be automatically updated after receiving a new image tag or a new commit according to the source type.  The new image tag shall be communicated via the \&quot;Auto Deploy job\&quot; endpoint https://api-doc.qovery.com/#tag/Jobs/operation/autoDeployJobEnvironments  | [optional] 
**jobType** | **String** |  | 
**schedule** | [**CronJobResponseAllOfSchedule**](CronJobResponseAllOfSchedule.md) |  | 



## Enum: JobTypeEnum


* `CRON` (value: `"CRON"`)




