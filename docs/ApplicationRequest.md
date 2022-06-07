# QoveryApi.ApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage** | [**[ApplicationStorageRequestStorageInner]**](ApplicationStorageRequestStorageInner.md) |  | [optional] 
**ports** | [**[ApplicationPortRequestPortsInner]**](ApplicationPortRequestPortsInner.md) |  | [optional] 
**name** | **String** | name is case insensitive | 
**description** | **String** | give a description to this application | [optional] 
**gitRepository** | [**ApplicationGitRepositoryRequest**](ApplicationGitRepositoryRequest.md) |  | 
**buildMode** | [**BuildModeEnum**](BuildModeEnum.md) |  | [optional] 
**dockerfilePath** | **String** | The path of the associated Dockerfile. Only if you are using build_mode &#x3D; DOCKER | [optional] 
**buildpackLanguage** | [**BuildPackLanguageEnum**](BuildPackLanguageEnum.md) |  | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]
**healthcheck** | [**Healthcheck**](Healthcheck.md) |  | [optional] 
**autoPreview** | **Boolean** | Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request.  | [optional] [default to true]


