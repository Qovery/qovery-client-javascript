# QoveryApi.ApplicationAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentDelayStartTimeSec** | **Number** | please use &#x60;readiness_probe.initial_delay_seconds&#x60; and &#x60;liveness_probe.initial_delay_seconds&#x60; instead | [optional] [default to 30]
**deploymentCustomDomainCheckEnabled** | **Boolean** | disable custom domain check when deploying an application | [optional] [default to true]
**buildTimeoutMaxSec** | **Number** |  | [optional] [default to 1800]
**networkIngressProxyBodySizeMb** | **Number** |  | [optional] [default to 100]
**networkIngressEnableCors** | **Boolean** |  | [optional] [default to false]
**networkIngressCorsAllowOrigin** | **String** |  | [optional] [default to &#39;*&#39;]
**networkIngressCorsAllowMethods** | **String** |  | [optional] [default to &#39;GET, PUT, POST, DELETE, PATCH, OPTIONS&#39;]
**networkIngressCorsAllowHeaders** | **String** |  | [optional] [default to &#39;DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization&#39;]
**networkIngressProxyBufferSizeKb** | **Number** | header buffer size used while reading response header from upstream | [optional] [default to 4]
**readinessProbeType** | **String** | &#x60;NONE&#x60; disable readiness probe &#x60;TCP&#x60; enable TCP readiness probe &#x60;HTTP&#x60; enable HTTP readiness probe  | [optional] [default to &#39;TCP&#39;]
**readinessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;/&#39;]
**readinessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] [default to 30]
**readinessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] [default to 10]
**readinessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] [default to 1]
**readinessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] [default to 1]
**readinessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] [default to 3]
**livenessProbeType** | **String** | &#x60;NONE&#x60; disable liveness probe &#x60;TCP&#x60; enable TCP liveness probe &#x60;HTTP&#x60; enable HTTP liveness probe  | [optional] [default to &#39;TCP&#39;]
**livenessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;/&#39;]
**livenessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] [default to 30]
**livenessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] [default to 10]
**livenessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] [default to 5]
**livenessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] [default to 1]
**livenessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] [default to 3]
**hpaCpuAverageUtilizationPercent** | **Number** | Percentage value of cpu usage at which point pods should scale up. | [optional] [default to 60]



## Enum: ReadinessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)





## Enum: LivenessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)




