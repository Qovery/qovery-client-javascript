# QoveryApi.HelmResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**environment** | [**ReferenceObject**](ReferenceObject.md) |  | 
**name** | **String** | name is case insensitive | 
**description** | **String** |  | [optional] 
**autoPreview** | **Boolean** | Indicates if the &#39;environment preview option&#39; is enabled.   If enabled, a preview environment will be automatically cloned when &#x60;/preview&#x60; endpoint is called.   If not specified, it takes the value of the &#x60;auto_preview&#x60; property from the associated environment.  | 
**autoDeploy** | **Boolean** | Specify if the service will be automatically updated after receiving a new image tag or a new commit according to the source type.   | 
**source** | [**HelmResponseAllOfSource**](HelmResponseAllOfSource.md) |  | 
**_arguments** | **[String]** | The extra arguments to pass to helm | [optional] 
**allowClusterWideResources** | **Boolean** | If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights  | [optional] [default to false]
**valuesOverride** | [**HelmRequestAllOfValuesOverride**](HelmRequestAllOfValuesOverride.md) |  | [optional] 


