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
 * The ApplicationAdvancedSettings model module.
 * @module model/ApplicationAdvancedSettings
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ApplicationAdvancedSettings {
    /**
     * Constructs a new <code>ApplicationAdvancedSettings</code>.
     * @alias module:model/ApplicationAdvancedSettings
     */
    constructor() { 
        
        ApplicationAdvancedSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationAdvancedSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAdvancedSettings} obj Optional instance to populate.
     * @return {module:model/ApplicationAdvancedSettings} The populated <code>ApplicationAdvancedSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationAdvancedSettings();

            if (data.hasOwnProperty('deployment.custom_domain_check_enabled')) {
                obj['deployment.custom_domain_check_enabled'] = ApiClient.convertToType(data['deployment.custom_domain_check_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('deployment.termination_grace_period_seconds')) {
                obj['deployment.termination_grace_period_seconds'] = ApiClient.convertToType(data['deployment.termination_grace_period_seconds'], 'Number');
            }
            if (data.hasOwnProperty('deployment.affinity.node.required')) {
                obj['deployment.affinity.node.required'] = ApiClient.convertToType(data['deployment.affinity.node.required'], {'String': 'String'});
            }
            if (data.hasOwnProperty('deployment.antiaffinity.pod')) {
                obj['deployment.antiaffinity.pod'] = ApiClient.convertToType(data['deployment.antiaffinity.pod'], 'String');
            }
            if (data.hasOwnProperty('deployment.update_strategy.type')) {
                obj['deployment.update_strategy.type'] = ApiClient.convertToType(data['deployment.update_strategy.type'], 'String');
            }
            if (data.hasOwnProperty('deployment.update_strategy.rolling_update.max_unavailable_percent')) {
                obj['deployment.update_strategy.rolling_update.max_unavailable_percent'] = ApiClient.convertToType(data['deployment.update_strategy.rolling_update.max_unavailable_percent'], 'Number');
            }
            if (data.hasOwnProperty('deployment.update_strategy.rolling_update.max_surge_percent')) {
                obj['deployment.update_strategy.rolling_update.max_surge_percent'] = ApiClient.convertToType(data['deployment.update_strategy.rolling_update.max_surge_percent'], 'Number');
            }
            if (data.hasOwnProperty('build.timeout_max_sec')) {
                obj['build.timeout_max_sec'] = ApiClient.convertToType(data['build.timeout_max_sec'], 'Number');
            }
            if (data.hasOwnProperty('build.cpu_max_in_milli')) {
                obj['build.cpu_max_in_milli'] = ApiClient.convertToType(data['build.cpu_max_in_milli'], 'Number');
            }
            if (data.hasOwnProperty('build.ram_max_in_gib')) {
                obj['build.ram_max_in_gib'] = ApiClient.convertToType(data['build.ram_max_in_gib'], 'Number');
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
            if (data.hasOwnProperty('network.ingress.whitelist_source_range')) {
                obj['network.ingress.whitelist_source_range'] = ApiClient.convertToType(data['network.ingress.whitelist_source_range'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.denylist_source_range')) {
                obj['network.ingress.denylist_source_range'] = ApiClient.convertToType(data['network.ingress.denylist_source_range'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.basic_auth_env_var')) {
                obj['network.ingress.basic_auth_env_var'] = ApiClient.convertToType(data['network.ingress.basic_auth_env_var'], 'String');
            }
            if (data.hasOwnProperty('network.ingress.enable_sticky_session')) {
                obj['network.ingress.enable_sticky_session'] = ApiClient.convertToType(data['network.ingress.enable_sticky_session'], 'Boolean');
            }
            if (data.hasOwnProperty('network.ingress.grpc_send_timeout_seconds')) {
                obj['network.ingress.grpc_send_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.grpc_send_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.grpc_read_timeout_seconds')) {
                obj['network.ingress.grpc_read_timeout_seconds'] = ApiClient.convertToType(data['network.ingress.grpc_read_timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('network.ingress.extra_headers')) {
                obj['network.ingress.extra_headers'] = ApiClient.convertToType(data['network.ingress.extra_headers'], 'String');
            }
            if (data.hasOwnProperty('hpa.cpu.average_utilization_percent')) {
                obj['hpa.cpu.average_utilization_percent'] = ApiClient.convertToType(data['hpa.cpu.average_utilization_percent'], 'Number');
            }
            if (data.hasOwnProperty('security.service_account_name')) {
                obj['security.service_account_name'] = ApiClient.convertToType(data['security.service_account_name'], 'String');
            }
            if (data.hasOwnProperty('security.read_only_root_filesystem')) {
                obj['security.read_only_root_filesystem'] = ApiClient.convertToType(data['security.read_only_root_filesystem'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * disable custom domain check when deploying an application
 * @member {Boolean} deployment.custom_domain_check_enabled
 * @default true
 */
ApplicationAdvancedSettings.prototype['deployment.custom_domain_check_enabled'] = true;

/**
 * define how long in seconds an application is supposed to be stopped gracefully
 * @member {Number} deployment.termination_grace_period_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['deployment.termination_grace_period_seconds'] = 60;

/**
 * Set pod placement on specific Kubernetes nodes labels
 * @member {Object.<String, String>} deployment.affinity.node.required
 */
ApplicationAdvancedSettings.prototype['deployment.affinity.node.required'] = undefined;

/**
 * Define how you want pods affinity to behave: * `Preferred` allows, but does not require, pods of a given service are not co-located (or co-hosted) on a single node * `Requirred` ensures that the pods of a given service are not co-located (or co-hosted) on a single node (safer in term of availability but can be expensive depending on the number of replicas) 
 * @member {module:model/ApplicationAdvancedSettings.DeploymentAntiaffinityPodEnum} deployment.antiaffinity.pod
 * @default 'Preferred'
 */
ApplicationAdvancedSettings.prototype['deployment.antiaffinity.pod'] = 'Preferred';

/**
 * * `RollingUpdate` gracefully rollout new versions, and automatically rollback if the new version fails to start * `Recreate` stop all current versions and create new ones once all old ones have been shutdown 
 * @member {module:model/ApplicationAdvancedSettings.DeploymentUpdateStrategyTypeEnum} deployment.update_strategy.type
 * @default 'RollingUpdate'
 */
ApplicationAdvancedSettings.prototype['deployment.update_strategy.type'] = 'RollingUpdate';

/**
 * Define the percentage of a maximum number of pods that can be unavailable during the update process
 * @member {Number} deployment.update_strategy.rolling_update.max_unavailable_percent
 * @default 25
 */
ApplicationAdvancedSettings.prototype['deployment.update_strategy.rolling_update.max_unavailable_percent'] = 25;

/**
 * Define the percentage of the maximum number of pods that can be created over the desired number of pods
 * @member {Number} deployment.update_strategy.rolling_update.max_surge_percent
 * @default 25
 */
ApplicationAdvancedSettings.prototype['deployment.update_strategy.rolling_update.max_surge_percent'] = 25;

/**
 * @member {Number} build.timeout_max_sec
 * @default 1800
 */
ApplicationAdvancedSettings.prototype['build.timeout_max_sec'] = 1800;

/**
 * define the max cpu resources (in milli)
 * @member {Number} build.cpu_max_in_milli
 * @default 4000
 */
ApplicationAdvancedSettings.prototype['build.cpu_max_in_milli'] = 4000;

/**
 * define the max ram resources (in gib)
 * @member {Number} build.ram_max_in_gib
 * @default 8
 */
ApplicationAdvancedSettings.prototype['build.ram_max_in_gib'] = 8;

/**
 * @member {Number} network.ingress.proxy_body_size_mb
 * @default 100
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_body_size_mb'] = 100;

/**
 * @member {Boolean} network.ingress.enable_cors
 * @default false
 */
ApplicationAdvancedSettings.prototype['network.ingress.enable_cors'] = false;

/**
 * @member {String} network.ingress.cors_allow_origin
 * @default '*'
 */
ApplicationAdvancedSettings.prototype['network.ingress.cors_allow_origin'] = '*';

/**
 * @member {String} network.ingress.cors_allow_methods
 * @default 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
 */
ApplicationAdvancedSettings.prototype['network.ingress.cors_allow_methods'] = 'GET, PUT, POST, DELETE, PATCH, OPTIONS';

/**
 * @member {String} network.ingress.cors_allow_headers
 * @default 'DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization'
 */
ApplicationAdvancedSettings.prototype['network.ingress.cors_allow_headers'] = 'DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';

/**
 * header buffer size used while reading response header from upstream
 * @member {Number} network.ingress.proxy_buffer_size_kb
 * @default 4
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_buffer_size_kb'] = 4;

/**
 * Limits the maximum time (in seconds) during which requests can be processed through one keepalive connection
 * @member {Number} network.ingress.keepalive_time_seconds
 * @default 3600
 */
ApplicationAdvancedSettings.prototype['network.ingress.keepalive_time_seconds'] = 3600;

/**
 * Sets a timeout (in seconds) during which an idle keepalive connection to an upstream server will stay open.
 * @member {Number} network.ingress.keepalive_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.keepalive_timeout_seconds'] = 60;

/**
 * Sets a timeout (in seconds) for transmitting a response to the client
 * @member {Number} network.ingress.send_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.send_timeout_seconds'] = 60;

/**
 * Sets a timeout (in seconds) for establishing a connection to a proxied server
 * @member {Number} network.ingress.proxy_connect_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_connect_timeout_seconds'] = 60;

/**
 * Sets a timeout (in seconds) for transmitting a request to the proxied server
 * @member {Number} network.ingress.proxy_send_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_send_timeout_seconds'] = 60;

/**
 * Sets a timeout (in seconds) for reading a response from the proxied server
 * @member {Number} network.ingress.proxy_read_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_read_timeout_seconds'] = 60;

/**
 * Allows to enable or disable nginx `proxy-buffering`
 * @member {String} network.ingress.proxy_buffering
 * @default 'on'
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_buffering'] = 'on';

/**
 * Allows to enable or disable nginx `proxy-request-buffering`
 * @member {String} network.ingress.proxy_request_buffering
 * @default 'on'
 */
ApplicationAdvancedSettings.prototype['network.ingress.proxy_request_buffering'] = 'on';

/**
 * list of source ranges to allow access to ingress proxy.  This property can be used to whitelist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 To allow all source ranges, set 0.0.0.0/0. 
 * @member {String} network.ingress.whitelist_source_range
 * @default '0.0.0.0/0'
 */
ApplicationAdvancedSettings.prototype['network.ingress.whitelist_source_range'] = '0.0.0.0/0';

/**
 * list of source ranges to deny access to ingress proxy.  This property can be used to blacklist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 
 * @member {String} network.ingress.denylist_source_range
 * @default ''
 */
ApplicationAdvancedSettings.prototype['network.ingress.denylist_source_range'] = '';

/**
 * Set the name of an environment variable to use as a basic authentication (`login:crypted_password`) from `htpasswd` command. 
 * @member {String} network.ingress.basic_auth_env_var
 * @default ''
 */
ApplicationAdvancedSettings.prototype['network.ingress.basic_auth_env_var'] = '';

/**
 * Enable the load balancer to bind a user's session to a specific target. This ensures that all requests from the user during the session are sent to the same target 
 * @member {Boolean} network.ingress.enable_sticky_session
 * @default false
 */
ApplicationAdvancedSettings.prototype['network.ingress.enable_sticky_session'] = false;

/**
 * Sets a timeout (in seconds) for transmitting a request to the grpc server
 * @member {Number} network.ingress.grpc_send_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.grpc_send_timeout_seconds'] = 60;

/**
 * Sets a timeout (in seconds) for transmitting a request to the grpc server
 * @member {Number} network.ingress.grpc_read_timeout_seconds
 * @default 60
 */
ApplicationAdvancedSettings.prototype['network.ingress.grpc_read_timeout_seconds'] = 60;

/**
 * Allows to define response headers
 * @member {String} network.ingress.extra_headers
 * @default '{}'
 */
ApplicationAdvancedSettings.prototype['network.ingress.extra_headers'] = '{}';

/**
 * Percentage value of cpu usage at which point pods should scale up.
 * @member {Number} hpa.cpu.average_utilization_percent
 * @default 60
 */
ApplicationAdvancedSettings.prototype['hpa.cpu.average_utilization_percent'] = 60;

/**
 * Allows you to set an existing Kubernetes service account name 
 * @member {String} security.service_account_name
 * @default ''
 */
ApplicationAdvancedSettings.prototype['security.service_account_name'] = '';

/**
 * Mounts the container's root filesystem as read-only 
 * @member {Boolean} security.read_only_root_filesystem
 * @default false
 */
ApplicationAdvancedSettings.prototype['security.read_only_root_filesystem'] = false;





/**
 * Allowed values for the <code>deployment.antiaffinity.pod</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationAdvancedSettings['DeploymentAntiaffinityPodEnum'] = {

    /**
     * value: "Preferred"
     * @const
     */
    "Preferred": "Preferred",

    /**
     * value: "Requirred"
     * @const
     */
    "Requirred": "Requirred"
};


/**
 * Allowed values for the <code>deployment.update_strategy.type</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationAdvancedSettings['DeploymentUpdateStrategyTypeEnum'] = {

    /**
     * value: "RollingUpdate"
     * @const
     */
    "RollingUpdate": "RollingUpdate",

    /**
     * value: "Recreate"
     * @const
     */
    "Recreate": "Recreate"
};



export default ApplicationAdvancedSettings;

