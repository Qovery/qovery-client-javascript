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

            if (data.hasOwnProperty('deployment.delay_start_time_sec')) {
                obj['deployment.delay_start_time_sec'] = ApiClient.convertToType(data['deployment.delay_start_time_sec'], 'Number');
            }
            if (data.hasOwnProperty('deployment.custom_domain_check_enabled')) {
                obj['deployment.custom_domain_check_enabled'] = ApiClient.convertToType(data['deployment.custom_domain_check_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('build.timeout_max_sec')) {
                obj['build.timeout_max_sec'] = ApiClient.convertToType(data['build.timeout_max_sec'], 'Number');
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
            if (data.hasOwnProperty('network.ingress.whitelist_source_range')) {
                obj['network.ingress.whitelist_source_range'] = ApiClient.convertToType(data['network.ingress.whitelist_source_range'], 'String');
            }
            if (data.hasOwnProperty('readiness_probe.type')) {
                obj['readiness_probe.type'] = ApiClient.convertToType(data['readiness_probe.type'], 'String');
            }
            if (data.hasOwnProperty('readiness_probe.http_get.path')) {
                obj['readiness_probe.http_get.path'] = ApiClient.convertToType(data['readiness_probe.http_get.path'], 'String');
            }
            if (data.hasOwnProperty('readiness_probe.initial_delay_seconds')) {
                obj['readiness_probe.initial_delay_seconds'] = ApiClient.convertToType(data['readiness_probe.initial_delay_seconds'], 'Number');
            }
            if (data.hasOwnProperty('readiness_probe.period_seconds')) {
                obj['readiness_probe.period_seconds'] = ApiClient.convertToType(data['readiness_probe.period_seconds'], 'Number');
            }
            if (data.hasOwnProperty('readiness_probe.timeout_seconds')) {
                obj['readiness_probe.timeout_seconds'] = ApiClient.convertToType(data['readiness_probe.timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('readiness_probe.success_threshold')) {
                obj['readiness_probe.success_threshold'] = ApiClient.convertToType(data['readiness_probe.success_threshold'], 'Number');
            }
            if (data.hasOwnProperty('readiness_probe.failure_threshold')) {
                obj['readiness_probe.failure_threshold'] = ApiClient.convertToType(data['readiness_probe.failure_threshold'], 'Number');
            }
            if (data.hasOwnProperty('liveness_probe.type')) {
                obj['liveness_probe.type'] = ApiClient.convertToType(data['liveness_probe.type'], 'String');
            }
            if (data.hasOwnProperty('liveness_probe.http_get.path')) {
                obj['liveness_probe.http_get.path'] = ApiClient.convertToType(data['liveness_probe.http_get.path'], 'String');
            }
            if (data.hasOwnProperty('liveness_probe.initial_delay_seconds')) {
                obj['liveness_probe.initial_delay_seconds'] = ApiClient.convertToType(data['liveness_probe.initial_delay_seconds'], 'Number');
            }
            if (data.hasOwnProperty('liveness_probe.period_seconds')) {
                obj['liveness_probe.period_seconds'] = ApiClient.convertToType(data['liveness_probe.period_seconds'], 'Number');
            }
            if (data.hasOwnProperty('liveness_probe.timeout_seconds')) {
                obj['liveness_probe.timeout_seconds'] = ApiClient.convertToType(data['liveness_probe.timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('liveness_probe.success_threshold')) {
                obj['liveness_probe.success_threshold'] = ApiClient.convertToType(data['liveness_probe.success_threshold'], 'Number');
            }
            if (data.hasOwnProperty('liveness_probe.failure_threshold')) {
                obj['liveness_probe.failure_threshold'] = ApiClient.convertToType(data['liveness_probe.failure_threshold'], 'Number');
            }
            if (data.hasOwnProperty('hpa.cpu.average_utilization_percent')) {
                obj['hpa.cpu.average_utilization_percent'] = ApiClient.convertToType(data['hpa.cpu.average_utilization_percent'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * please use `readiness_probe.initial_delay_seconds` and `liveness_probe.initial_delay_seconds` instead
 * @member {Number} deployment.delay_start_time_sec
 * @default 30
 */
ApplicationAdvancedSettings.prototype['deployment.delay_start_time_sec'] = 30;

/**
 * disable custom domain check when deploying an application
 * @member {Boolean} deployment.custom_domain_check_enabled
 * @default true
 */
ApplicationAdvancedSettings.prototype['deployment.custom_domain_check_enabled'] = true;

/**
 * @member {Number} build.timeout_max_sec
 * @default 1800
 */
ApplicationAdvancedSettings.prototype['build.timeout_max_sec'] = 1800;

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
 * list of source ranges to allow access to ingress proxy.  This property can be used to whitelist source IP ranges for ingress proxy. The value is a comma separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 To allow all source ranges, set 0.0.0.0/0. 
 * @member {String} network.ingress.whitelist_source_range
 * @default '0.0.0.0/0'
 */
ApplicationAdvancedSettings.prototype['network.ingress.whitelist_source_range'] = '0.0.0.0/0';

/**
 * `NONE` disable readiness probe `TCP` enable TCP readiness probe `HTTP` enable HTTP readiness probe 
 * @member {module:model/ApplicationAdvancedSettings.ReadinessProbeTypeEnum} readiness_probe.type
 * @default 'TCP'
 */
ApplicationAdvancedSettings.prototype['readiness_probe.type'] = 'TCP';

/**
 * HTTP GET path to check status (must returns 2xx E.g \"/healtz\") - only usable with TYPE = HTTP
 * @member {String} readiness_probe.http_get.path
 * @default '/'
 */
ApplicationAdvancedSettings.prototype['readiness_probe.http_get.path'] = '/';

/**
 * Delay before liveness probe is initiated
 * @member {Number} readiness_probe.initial_delay_seconds
 * @default 30
 */
ApplicationAdvancedSettings.prototype['readiness_probe.initial_delay_seconds'] = 30;

/**
 * How often to perform the probe
 * @member {Number} readiness_probe.period_seconds
 * @default 10
 */
ApplicationAdvancedSettings.prototype['readiness_probe.period_seconds'] = 10;

/**
 * When the probe times out
 * @member {Number} readiness_probe.timeout_seconds
 * @default 1
 */
ApplicationAdvancedSettings.prototype['readiness_probe.timeout_seconds'] = 1;

/**
 * Minimum consecutive successes for the probe to be considered successful after having failed.
 * @member {Number} readiness_probe.success_threshold
 * @default 1
 */
ApplicationAdvancedSettings.prototype['readiness_probe.success_threshold'] = 1;

/**
 * Minimum consecutive failures for the probe to be considered failed after having succeeded.
 * @member {Number} readiness_probe.failure_threshold
 * @default 3
 */
ApplicationAdvancedSettings.prototype['readiness_probe.failure_threshold'] = 3;

/**
 * `NONE` disable liveness probe `TCP` enable TCP liveness probe `HTTP` enable HTTP liveness probe 
 * @member {module:model/ApplicationAdvancedSettings.LivenessProbeTypeEnum} liveness_probe.type
 * @default 'TCP'
 */
ApplicationAdvancedSettings.prototype['liveness_probe.type'] = 'TCP';

/**
 * HTTP GET path to check status (must returns 2xx E.g \"/healtz\") - only usable with TYPE = HTTP
 * @member {String} liveness_probe.http_get.path
 * @default '/'
 */
ApplicationAdvancedSettings.prototype['liveness_probe.http_get.path'] = '/';

/**
 * Delay before liveness probe is initiated
 * @member {Number} liveness_probe.initial_delay_seconds
 * @default 30
 */
ApplicationAdvancedSettings.prototype['liveness_probe.initial_delay_seconds'] = 30;

/**
 * How often to perform the probe
 * @member {Number} liveness_probe.period_seconds
 * @default 10
 */
ApplicationAdvancedSettings.prototype['liveness_probe.period_seconds'] = 10;

/**
 * When the probe times out
 * @member {Number} liveness_probe.timeout_seconds
 * @default 5
 */
ApplicationAdvancedSettings.prototype['liveness_probe.timeout_seconds'] = 5;

/**
 * Minimum consecutive successes for the probe to be considered successful after having failed.
 * @member {Number} liveness_probe.success_threshold
 * @default 1
 */
ApplicationAdvancedSettings.prototype['liveness_probe.success_threshold'] = 1;

/**
 * Minimum consecutive failures for the probe to be considered failed after having succeeded.
 * @member {Number} liveness_probe.failure_threshold
 * @default 3
 */
ApplicationAdvancedSettings.prototype['liveness_probe.failure_threshold'] = 3;

/**
 * Percentage value of cpu usage at which point pods should scale up.
 * @member {Number} hpa.cpu.average_utilization_percent
 * @default 60
 */
ApplicationAdvancedSettings.prototype['hpa.cpu.average_utilization_percent'] = 60;





/**
 * Allowed values for the <code>readiness_probe.type</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationAdvancedSettings['ReadinessProbeTypeEnum'] = {

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "TCP"
     * @const
     */
    "TCP": "TCP",

    /**
     * value: "HTTP"
     * @const
     */
    "HTTP": "HTTP"
};


/**
 * Allowed values for the <code>liveness_probe.type</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationAdvancedSettings['LivenessProbeTypeEnum'] = {

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "TCP"
     * @const
     */
    "TCP": "TCP",

    /**
     * value: "HTTP"
     * @const
     */
    "HTTP": "HTTP"
};



export default ApplicationAdvancedSettings;

