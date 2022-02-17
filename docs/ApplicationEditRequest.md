# BetaQoveryApi.ApplicationEditRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | [optional] 
**description** | **String** | give a description to this application | [optional] 
**gitRepository** | [**ApplicationGitRepositoryRequest**](ApplicationGitRepositoryRequest.md) |  | [optional] 
**buildMode** | **String** | &#x60;DOCKER&#x60; requires &#x60;dockerfile_path&#x60; &#x60;BUILDPACKS&#x60; does not require any &#x60;dockerfile_path&#x60;  | [optional] 
**dockerfilePath** | **String** | The path of the associated Dockerfile | [optional] 
**buildpackLanguage** | **String** | Development language of the application | [optional] 
**cpu** | **Number** | unit is millicores (m). 1000m &#x3D; 1 cpu | [optional] [default to 250]
**memory** | **Number** | unit is MB. 1024 MB &#x3D; 1GB | [optional] [default to 256]
**minRunningInstances** | **Number** | Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running.  | [optional] [default to 1]
**maxRunningInstances** | **Number** | Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit.  | [optional] [default to 1]
**healthcheck** | [**Healthcheck**](Healthcheck.md) |  | [optional] 
**autoPreview** | **Boolean** | Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request.  | [optional] [default to true]
**stickySession** | **Boolean** | Specify if the sticky session option (also called persistant session) is activated or not for this application. If activated, user will be redirected by the load balancer to the same instance each time he access to the application.  | [optional] [default to false]
**storage** | [**[ApplicationStorageResponseStorage]**](ApplicationStorageResponseStorage.md) |  | [optional] 
**ports** | [**[ApplicationPortResponsePorts]**](ApplicationPortResponsePorts.md) |  | [optional] 



## Enum: BuildModeEnum


* `DOCKER` (value: `"DOCKER"`)

* `BUILDPACKS` (value: `"BUILDPACKS"`)





## Enum: BuildpackLanguageEnum


* `CLOJURE` (value: `"CLOJURE"`)

* `GO` (value: `"GO"`)

* `GRADLE` (value: `"GRADLE"`)

* `GRAILS` (value: `"GRAILS"`)

* `JAVA` (value: `"JAVA"`)

* `JVM` (value: `"JVM"`)

* `NODE_JS` (value: `"NODE_JS"`)

* `PHP` (value: `"PHP"`)

* `PLAY` (value: `"PLAY"`)

* `PYTHON` (value: `"PYTHON"`)

* `SCALA` (value: `"SCALA"`)




