# QoveryApi.JobAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentTerminationGracePeriodSeconds** | **Number** | define how long in seconds an application is supposed to be stopped gracefully | [optional] [default to 60]
**jobDeleteTtlSecondsAfterFinished** | **Number** |  | [optional] 
**cronjobConcurrencyPolicy** | **String** |  | [optional] [default to &#39;Forbid&#39;]
**cronjobFailedJobsHistoryLimit** | **Number** |  | [optional] [default to 1]
**cronjobSuccessJobsHistoryLimit** | **Number** |  | [optional] [default to 1]
**readinessProbeType** | **String** | &#x60;NONE&#x60; disable readiness probe &#x60;TCP&#x60; enable TCP readiness probe &#x60;HTTP&#x60; enable HTTP readiness probe  | [optional] [default to &#39;NONE&#39;]
**readinessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;&#39;]
**readinessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] [default to 0]
**readinessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] [default to 0]
**readinessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] [default to 0]
**readinessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] [default to 0]
**readinessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] [default to 0]
**livenessProbeType** | **String** | &#x60;NONE&#x60; disable liveness probe &#x60;TCP&#x60; enable TCP liveness probe &#x60;HTTP&#x60; enable HTTP liveness probe  | [optional] [default to &#39;NONE&#39;]
**livenessProbeHttpGetPath** | **String** | HTTP GET path to check status (must returns 2xx E.g \&quot;/healtz\&quot;) - only usable with TYPE &#x3D; HTTP | [optional] [default to &#39;&#39;]
**livenessProbeInitialDelaySeconds** | **Number** | Delay before liveness probe is initiated | [optional] [default to 0]
**livenessProbePeriodSeconds** | **Number** | How often to perform the probe | [optional] [default to 0]
**livenessProbeTimeoutSeconds** | **Number** | When the probe times out | [optional] [default to 0]
**livenessProbeSuccessThreshold** | **Number** | Minimum consecutive successes for the probe to be considered successful after having failed. | [optional] [default to 0]
**livenessProbeFailureThreshold** | **Number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. | [optional] [default to 0]



## Enum: ReadinessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)





## Enum: LivenessProbeTypeEnum


* `NONE` (value: `"NONE"`)

* `TCP` (value: `"TCP"`)

* `HTTP` (value: `"HTTP"`)




