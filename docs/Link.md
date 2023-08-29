# QoveryApi.Link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** |  | [optional] 
**internalPort** | **Number** | The port from which the service is reachable from within the cluster | [optional] 
**externalPort** | **Number** | The port from which the service is reachable from externally (i.e: 443 for HTTPS) | [optional] 
**isQoveryDomain** | **Boolean** | True if the domain is managed by Qovery, false if it belongs to the user | [optional] 
**isDefault** | **Boolean** | Indicate if the link is using the root of the domain and not one derivated from port i.e: p8080.zxxxx.jvm.worl      &#x3D;&gt; is_default &#x3D; false, is_qovery &#x3D; true zxxxx.jvm.world           &#x3D;&gt; is_default &#x3D; true, is_qovery &#x3D; true p8080-my-super-domain.com &#x3D;&gt; is_default &#x3D; false, is_qovery &#x3D; false my-super-domain.com       &#x3D;&gt; is_default &#x3D; true, is_qovery &#x3D; false  | [optional] 


