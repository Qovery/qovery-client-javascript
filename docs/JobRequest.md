# QoveryApi.JobRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 500]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 512]
**maxNbRestart** | **Number** | Maximum number of restart allowed before the job is considered as failed 0 means that no restart/crash of the job is allowed  | [optional] [default to 0]
**maxDurationSeconds** | **Number** | Maximum number of seconds allowed for the job to run before killing it and mark it as failed  | [optional] 
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled for this container.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | [optional] 
**port** | **Number** | Port where to run readiness and liveliness probes checks. The port will not be exposed externally | [optional] 
**source** | [**JobRequestAllOfSource**](JobRequestAllOfSource.md) |  | [optional] 
**healthchecks** | [**Healthcheck**](Healthcheck.md) |  | [optional] 
**schedule** | [**JobRequestAllOfSchedule**](JobRequestAllOfSchedule.md) |  | [optional] 
**autoDeploy** | **Boolean** | Specify if the job will be automatically updated after receiving a new image tag or a new commit according to the source type.  The new image tag shall be communicated via the \&quot;Auto Deploy job\&quot; endpoint https://api-doc.qovery.com/#tag/Jobs/operation/autoDeployJobEnvironments  | [optional] 


