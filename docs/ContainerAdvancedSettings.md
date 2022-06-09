# QoveryApi.ContainerAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentDelayStartTimeSec** | **Number** |  | [optional] 
**deploymentCustomDomainCheckEnabled** | **Boolean** | disable custom domain check when deploying an application | [optional] 
**buildTimeoutMaxSec** | **Number** |  | [optional] 
**networkIngressProxyBodySizeMb** | **Number** |  | [optional] 
**networkIngressEnableCors** | **Boolean** |  | [optional] 
**networkIngressCorsAllowOrigin** | **String** |  | [optional] 
**networkIngressCorsAllowMethods** | **String** |  | [optional] 
**networkIngressCorsAllowHeaders** | **String** |  | [optional] 
**readinessProbeType** | **String** | &#x60;NONE&#x60; disable readiness probe &#x60;TCP&#x60; enable TCP readiness probe &#x60;HTTP&#x60; enable HTTP readiness probe  | [optional] 
**readinessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;/&#39;]
**readinessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] 
**readinessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] 
**readinessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] 
**readinessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] 
**readinessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] 
**livenessProbeType** | **String** | &#x60;NONE&#x60; disable liveness probe &#x60;TCP&#x60; enable TCP liveness probe &#x60;HTTP&#x60; enable HTTP liveness probe  | [optional] 
**livenessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;/&#39;]
**livenessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] 
**livenessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] 
**livenessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] 
**livenessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] 
**livenessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] 



## Enum: ReadinessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)





## Enum: LivenessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)




