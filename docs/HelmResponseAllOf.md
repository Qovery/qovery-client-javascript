# QoveryApi.HelmResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | 
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | 
**autoDeploy** | **Boolean** | Specify if the service will be automatically updated after receiving a new image tag or a new commit according to the source type.  | 
**ports** | [**[HelmResponseAllOfPorts]**](HelmResponseAllOfPorts.md) |  | [optional] 
**source** | [**OneOfobjectobject**](OneOfobjectobject.md) |  | 
**_arguments** | **[String]** | The extra arguments to pass to helm | 
**allowClusterWideResources** | **Boolean** | If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights  | [default to false]
**valuesOverride** | [**HelmResponseAllOfValuesOverride**](HelmResponseAllOfValuesOverride.md) |  | 


