# QoveryApi.HelmRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**timeoutSec** | **Number** | Maximum number of seconds allowed for helm to run before killing it and mark it as failed  | [optional] [default to 600]
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called or when a new commit is updated. If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | [optional] 
**autoDeploy** | **Boolean** | Specify if the helm will be automatically updated after receiving a new image tag or a new commit according to the source type.   | 
**source** | [**HelmRequestAllOfSource**](HelmRequestAllOfSource.md) |  | 
**_arguments** | **[String]** | The extra arguments to pass to helm | 
**allowClusterWideResources** | **Boolean** | If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights  | [optional] [default to false]
**valuesOverride** | [**HelmRequestAllOfValuesOverride**](HelmRequestAllOfValuesOverride.md) |  | 


