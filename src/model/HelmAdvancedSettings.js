/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HelmAdvancedSettings model module.
 * @module model/HelmAdvancedSettings
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmAdvancedSettings {
    /**
     * Constructs a new <code>HelmAdvancedSettings</code>.
     * @alias module:model/HelmAdvancedSettings
     */
    constructor() { 
        
        HelmAdvancedSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmAdvancedSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmAdvancedSettings} obj Optional instance to populate.
     * @return {module:model/HelmAdvancedSettings} The populated <code>HelmAdvancedSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmAdvancedSettings();

            if (data.hasOwnProperty('deployment.custom_domain_check_enabled')) {
                obj['deployment.custom_domain_check_enabled'] = ApiClient.convertToType(data['deployment.custom_domain_check_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('network.ingress.proxy_body_size_mb')) {
                obj['network.ingress.proxy_body_size_mb'] = ApiClient.convertToType(data['network.ingress.proxy_body_size_mb'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.enable_cors')) {
                obj['network.ingress.enable_cors'] = ApiClient.convertToType(data['network.ingress.enable_cors'], 'Boolean');
            }
            if (data.hasOwnProperty('network.ingress.cors_allow_origin')) {
                obj['network.ingress.cors_allow_origin'] = ApiClient.convertToType(data['network.ingress.cors_allow_origin'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.cors_allow_methods')) {
                obj['network.ingress.cors_allow_methods'] = ApiClient.convertToType(data['network.ingress.cors_allow_methods'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.cors_allow_headers')) {
                obj['network.ingress.cors_allow_headers'] = ApiClient.convertToType(data['network.ingress.cors_allow_headers'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.proxy_buffer_size_kb')) {
                obj['network.ingress.proxy_buffer_size_kb'] = ApiClient.convertToType(data['network.ingress.proxy_buffer_size_kb'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.keepalive_time_seconds')) {
                obj['network.ingress.keepalive_time_seconds'] = ApiClient.convertToType(data['network.ingress.keepalive_time_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.keepalive_timeout_seconds')) {
                obj['network.ingress.keepalive_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.keepalive_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.send_timeout_seconds')) {
                obj['network.ingress.send_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.send_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.proxy_connect_timeout_seconds')) {
                obj['network.ingress.proxy_connect_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.proxy_connect_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.proxy_send_timeout_seconds')) {
                obj['network.ingress.proxy_send_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.proxy_send_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.proxy_read_timeout_seconds')) {
                obj['network.ingress.proxy_read_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.proxy_read_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.proxy_buffering')) {
                obj['network.ingress.proxy_buffering'] = ApiClient.convertToType(data['network.ingress.proxy_buffering'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.proxy_request_buffering')) {
                obj['network.ingress.proxy_request_buffering'] = ApiClient.convertToType(data['network.ingress.proxy_request_buffering'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.grpc_send_timeout_seconds')) {
                obj['network.ingress.grpc_send_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.grpc_send_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.grpc_read_timeout_seconds')) {
                obj['network.ingress.grpc_read_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.grpc_read_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.whitelist_source_range')) {
                obj['network.ingress.whitelist_source_range'] = ApiClient.convertToType(data['network.ingress.whitelist_source_range'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.denylist_source_range')) {
                obj['network.ingress.denylist_source_range'] = ApiClient.convertToType(data['network.ingress.denylist_source_range'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.extra_headers')) {
                obj['network.ingress.extra_headers'] = ApiClient.convertToType(data['network.ingress.extra_headers'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.basic_auth_env_var')) {
                obj['network.ingress.basic_auth_env_var'] = ApiClient.convertToType(data['network.ingress.basic_auth_env_var'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.enable_sticky_session')) {
                obj['network.ingress.enable_sticky_session'] = ApiClient.convertToType(data['network.ingress.enable_sticky_session'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * disable custom domain check when deploying a helm
 * @member {Boolean} deployment.custom_domain_check_enabled
 */
HelmAdvancedSettings.prototype['deployment.custom_domain_check_enabled'] = undefined;

/**
 * @member {Number} network.ingress.proxy_body_size_mb
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_body_size_mb'] = undefined;

/**
 * @member {Boolean} network.ingress.enable_cors
 */
HelmAdvancedSettings.prototype['network.ingress.enable_cors'] = undefined;

/**
 * @member {String} network.ingress.cors_allow_origin
 */
HelmAdvancedSettings.prototype['network.ingress.cors_allow_origin'] = undefined;

/**
 * @member {String} network.ingress.cors_allow_methods
 */
HelmAdvancedSettings.prototype['network.ingress.cors_allow_methods'] = undefined;

/**
 * @member {String} network.ingress.cors_allow_headers
 */
HelmAdvancedSettings.prototype['network.ingress.cors_allow_headers'] = undefined;

/**
 * header buffer size used while reading response header from upstream
 * @member {Number} network.ingress.proxy_buffer_size_kb
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_buffer_size_kb'] = undefined;

/**
 * Limits the maximum time (in seconds) during which requests can be processed through one keepalive connection
 * @member {Number} network.ingress.keepalive_time_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.keepalive_time_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) during which an idle keepalive connection to an upstream server will stay open.
 * @member {Number} network.ingress.keepalive_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.keepalive_timeout_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) for transmitting a response to the client
 * @member {Number} network.ingress.send_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.send_timeout_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) for establishing a connection to a proxied server
 * @member {Number} network.ingress.proxy_connect_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_connect_timeout_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) for transmitting a request to the proxied server
 * @member {Number} network.ingress.proxy_send_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_send_timeout_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) for reading a response from the proxied server
 * @member {Number} network.ingress.proxy_read_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_read_timeout_seconds'] = undefined;

/**
 * Allows to enable or disable nginx `proxy-buffering`
 * @member {String} network.ingress.proxy_buffering
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_buffering'] = undefined;

/**
 * Allows to enable or disable nginx `proxy-request-buffering`
 * @member {String} network.ingress.proxy_request_buffering
 */
HelmAdvancedSettings.prototype['network.ingress.proxy_request_buffering'] = undefined;

/**
 * Sets a timeout (in seconds) for transmitting a request to the grpc server
 * @member {Number} network.ingress.grpc_send_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.grpc_send_timeout_seconds'] = undefined;

/**
 * Sets a timeout (in seconds) for transmitting a request to the grpc server
 * @member {Number} network.ingress.grpc_read_timeout_seconds
 */
HelmAdvancedSettings.prototype['network.ingress.grpc_read_timeout_seconds'] = undefined;

/**
 * list of source ranges to allow access to ingress proxy.  This property can be used to whitelist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 To allow all source ranges, set 0.0.0.0/0. 
 * @member {String} network.ingress.whitelist_source_range
 */
HelmAdvancedSettings.prototype['network.ingress.whitelist_source_range'] = undefined;

/**
 * list of source ranges to deny access to ingress proxy.  This property can be used to blacklist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 
 * @member {String} network.ingress.denylist_source_range
 */
HelmAdvancedSettings.prototype['network.ingress.denylist_source_range'] = undefined;

/**
 * Allows to define response headers
 * @member {String} network.ingress.extra_headers
 */
HelmAdvancedSettings.prototype['network.ingress.extra_headers'] = undefined;

/**
 * Set the name of an environment variable to use as a basic authentication (`login:crypted_password`) from `htpasswd` command. You can add multiples comma separated values. 
 * @member {String} network.ingress.basic_auth_env_var
 */
HelmAdvancedSettings.prototype['network.ingress.basic_auth_env_var'] = undefined;

/**
 * Enable the load balancer to bind a user's session to a specific target. This ensures that all requests from the user during the session are sent to the same target 
 * @member {Boolean} network.ingress.enable_sticky_session
 */
HelmAdvancedSettings.prototype['network.ingress.enable_sticky_session'] = undefined;






export default HelmAdvancedSettings;

