# QoveryApi.ApplicationAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentCustomDomainCheckEnabled** | **Boolean** | disable custom domain check when deploying an application | [optional] 
**deploymentTerminationGracePeriodSeconds** | **Number** | define how long in seconds an application is supposed to be stopped gracefully | [optional] 
**deploymentAffinityNodeRequired** | **{String: String}** | Set pod placement on specific Kubernetes nodes labels | [optional] 
**deploymentAntiaffinityPod** | **String** | Define how you want pods affinity to behave: * &#x60;Preferred&#x60; allows, but does not require, pods of a given service are not co-located (or co-hosted) on a single node * &#x60;Requirred&#x60; ensures that the pods of a given service are not co-located (or co-hosted) on a single node (safer in term of availability but can be expensive depending on the number of replicas)  | [optional] 
**deploymentUpdateStrategyType** | **String** | * &#x60;RollingUpdate&#x60; gracefully rollout new versions, and automatically rollback if the new version fails to start * &#x60;Recreate&#x60; stop all current versions and create new ones once all old ones have been shutdown  | [optional] 
**deploymentUpdateStrategyRollingUpdateMaxUnavailablePercent** | **Number** | Define the percentage of a maximum number of pods that can be unavailable during the update process | [optional] 
**deploymentUpdateStrategyRollingUpdateMaxSurgePercent** | **Number** | Define the percentage of the maximum number of pods that can be created over the desired number of pods | [optional] 
**buildTimeoutMaxSec** | **Number** |  | [optional] 
**buildCpuMaxInMilli** | **Number** | define the max cpu resources (in milli) | [optional] 
**buildRamMaxInGib** | **Number** | define the max ram resources (in gib) | [optional] 
**networkIngressProxyBodySizeMb** | **Number** |  | [optional] 
**networkIngressEnableCors** | **Boolean** |  | [optional] 
**networkIngressCorsAllowOrigin** | **String** |  | [optional] 
**networkIngressCorsAllowMethods** | **String** |  | [optional] 
**networkIngressCorsAllowHeaders** | **String** |  | [optional] 
**networkIngressProxyBufferSizeKb** | **Number** | header buffer size used while reading response header from upstream | [optional] 
**networkIngressKeepaliveTimeSeconds** | **Number** | Limits the maximum time (in seconds) during which requests can be processed through one keepalive connection | [optional] 
**networkIngressKeepaliveTimeoutSeconds** | **Number** | Sets a timeout (in seconds) during which an idle keepalive connection to an upstream server will stay open. | [optional] 
**networkIngressSendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a response to the client | [optional] 
**networkIngressProxyConnectTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for establishing a connection to a proxied server | [optional] 
**networkIngressProxySendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the proxied server | [optional] 
**networkIngressProxyReadTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for reading a response from the proxied server | [optional] 
**networkIngressProxyBuffering** | **String** | Allows to enable or disable nginx &#x60;proxy-request-buffering&#x60; | [optional] 
**networkIngressWhitelistSourceRange** | **String** | list of source ranges to allow access to ingress proxy.  This property can be used to whitelist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 To allow all source ranges, set 0.0.0.0/0.  | [optional] 
**networkIngressDenylistSourceRange** | **String** | list of source ranges to deny access to ingress proxy.  This property can be used to blacklist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1  | [optional] 
**networkIngressBasicAuthEnvVar** | **String** | Set the name of an environment variable to use as a basic authentication (&#x60;login:crypted_password&#x60;) from &#x60;htpasswd&#x60; command.  | [optional] 
**networkIngressEnableStickySession** | **Boolean** | Enable the load balancer to bind a user&#39;s session to a specific target. This ensures that all requests from the user during the session are sent to the same target  | [optional] 
**networkIngressGrpcSendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the grpc server | [optional] 
**networkIngressGrpcReadTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the grpc server | [optional] 
**networkIngressExtraHeaders** | **String** | Allows to define response headers | [optional] 
**hpaCpuAverageUtilizationPercent** | **Number** | Percentage value of cpu usage at which point pods should scale up. | [optional] 
**securityServiceAccountName** | **String** | Allows you to set an existing Kubernetes service account name  | [optional] 
**securityReadOnlyRootFilesystem** | **Boolean** | Mounts the container&#39;s root filesystem as read-only  | [optional] 



## Enum: DeploymentAntiaffinityPodEnum


* `Preferred` (value: `"Preferred"`)

* `Requirred` (value: `"Requirred"`)





## Enum: DeploymentUpdateStrategyTypeEnum


* `RollingUpdate` (value: `"RollingUpdate"`)

* `Recreate` (value: `"Recreate"`)




