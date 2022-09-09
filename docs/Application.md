# QoveryApi.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**storage** | [**[ServiceStorageStorageInner]**](ServiceStorageStorageInner.md) |  | [optional] 
**results** | [**[ServicePort]**](ServicePort.md) |  | [optional] 
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | [optional] 
**gitRepository** | [**ApplicationGitRepository**](ApplicationGitRepository.md) |  | [optional] 
**maximumCpu** | **Number** | Maximum cpu that can be allocated to the application based on organization cluster configuration. unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**maximumMemory** | **Number** | Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**name** | **String** | name is case insensitive | [optional] 
**description** | **String** | give a description to this application | [optional] 
**buildMode** | [**BuildModeEnum**](BuildModeEnum.md) |  | [optional] 
**dockerfilePath** | **String** | The path of the associated Dockerfile. Only if you are using build_mode &#x3D; DOCKER | [optional] 
**buildpackLanguage** | [**BuildPackLanguageEnum**](BuildPackLanguageEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] 
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] 
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]
**healthcheck** | [**Healthcheck**](Healthcheck.md) |  | [optional] 
**autoPreview** | **Boolean** | Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request.  | [optional] [default to true]


