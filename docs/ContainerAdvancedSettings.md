# QoveryApi.ContainerAdvancedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentCustomDomainCheckEnabled** | **Boolean** | disable custom domain check when deploying an application | [optional] [default to true]
**deploymentTerminationGracePeriodSeconds** | **Number** | define how long in seconds an application is supposed to be stopped gracefully | [optional] [default to 60]
**deploymentUpdateStrategyType** | **String** | * &#x60;RollingUpdate&#x60; gracefully rollout new versions, and automatically rollback if the new version fails to start * &#x60;Recreate&#x60; stop all current versions and create new ones once all old ones have been shutdown  | [optional] [default to &#39;RollingUpdate&#39;]
**deploymentUpdateStrategyRollingUpdateMaxUnavailablePercent** | **Number** | Define the percentage of a maximum number of pods that can be unavailable during the update process | [optional] [default to 25]
**deploymentUpdateStrategyRollingUpdateMaxSurgePercent** | **Number** | Define the percentage of the maximum number of pods that can be created over the desired number of pods | [optional] [default to 25]
**networkIngressProxyBodySizeMb** | **Number** |  | [optional] [default to 100]
**networkIngressEnableCors** | **Boolean** |  | [optional] [default to false]
**networkIngressCorsAllowOrigin** | **String** |  | [optional] [default to &#39;*&#39;]
**networkIngressCorsAllowMethods** | **String** |  | [optional] [default to &#39;GET, PUT, POST, DELETE, PATCH, OPTIONS&#39;]
**networkIngressCorsAllowHeaders** | **String** |  | [optional] [default to &#39;DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization&#39;]
**networkIngressProxyBufferSizeKb** | **Number** | header buffer size used while reading response header from upstream | [optional] [default to 4]
**networkIngressKeepaliveTimeSeconds** | **Number** | Limits the maximum time (in seconds) during which requests can be processed through one keepalive connection | [optional] [default to 3600]
**networkIngressKeepaliveTimeoutSeconds** | **Number** | Sets a timeout (in seconds) during which an idle keepalive connection to an upstream server will stay open. | [optional] [default to 60]
**networkIngressSendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a response to the client | [optional] [default to 60]
**networkIngressProxyConnectTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for establishing a connection to a proxied server | [optional] [default to 60]
**networkIngressProxySendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the proxied server | [optional] [default to 60]
**networkIngressProxyReadTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for reading a response from the proxied server | [optional] [default to 60]
**networkIngressGrpcSendTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the grpc server | [optional] [default to 60]
**networkIngressGrpcReadTimeoutSeconds** | **Number** | Sets a timeout (in seconds) for transmitting a request to the grpc server | [optional] [default to 60]
**networkIngressWhitelistSourceRange** | **String** | list of source ranges to allow access to ingress proxy.  This property can be used to whitelist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 To allow all source ranges, set 0.0.0.0/0.  | [optional] [default to &#39;0.0.0.0/0&#39;]
**networkIngressDenylistSourceRange** | **String** | list of source ranges to deny access to ingress proxy.  This property can be used to blacklist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1  | [optional] [default to &#39;&#39;]
**networkIngressBasicAuthEnvVar** | **String** | Set the name of an environment variable to use as a basic authentication (&#x60;login:crypted_password&#x60;) from &#x60;htpasswd&#x60; command. You can add multiples comma separated values.  | [optional] [default to &#39;&#39;]
**networkIngressEnableStickySession** | **Boolean** | Enable the load balancer to bind a user&#39;s session to a specific target. This ensures that all requests from the user during the session are sent to the same target  | [optional] [default to false]
**securityServiceAccountName** | **String** | Allows you to set an existing Kubernetes service account name  | [optional] [default to &#39;&#39;]
**hpaCpuAverageUtilizationPercent** | **Number** | Percentage value of cpu usage at which point pods should scale up. | [optional] [default to 60]



## Enum: DeploymentUpdateStrategyTypeEnum


* `RollingUpdate` (value: `"RollingUpdate"`)

* `Recreate` (value: `"Recreate"`)




