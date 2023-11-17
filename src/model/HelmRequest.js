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
import HelmPortRequest from './HelmPortRequest';
import HelmPortRequestPortsInner from './HelmPortRequestPortsInner';
import HelmRequestAllOf from './HelmRequestAllOf';
import HelmRequestAllOfSource from './HelmRequestAllOfSource';
import HelmRequestAllOfValuesOverride from './HelmRequestAllOfValuesOverride';

/**
 * The HelmRequest model module.
 * @module model/HelmRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmRequest {
    /**
     * Constructs a new <code>HelmRequest</code>.
     * @alias module:model/HelmRequest
     * @implements module:model/HelmPortRequest
     * @implements module:model/HelmRequestAllOf
     * @param name {String} name is case insensitive
     * @param autoDeploy {Boolean} Specify if the helm will be automatically updated after receiving a new image tag or a new commit according to the source type.  
     * @param source {module:model/HelmRequestAllOfSource} 
     * @param _arguments {Array.<String>} The extra arguments to pass to helm
     * @param valuesOverride {module:model/HelmRequestAllOfValuesOverride} 
     */
    constructor(name, autoDeploy, source, _arguments, valuesOverride) { 
        HelmPortRequest.initialize(this);HelmRequestAllOf.initialize(this, name, autoDeploy, source, _arguments, valuesOverride);
        HelmRequest.initialize(this, name, autoDeploy, source, _arguments, valuesOverride);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, autoDeploy, source, _arguments, valuesOverride) { 
        obj['name'] = name;
        obj['auto_deploy'] = autoDeploy;
        obj['source'] = source;
        obj['arguments'] = _arguments;
        obj['values_override'] = valuesOverride;
    }

    /**
     * Constructs a <code>HelmRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmRequest} obj Optional instance to populate.
     * @return {module:model/HelmRequest} The populated <code>HelmRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmRequest();
            HelmPortRequest.constructFromObject(data, obj);
            HelmRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [HelmPortRequestPortsInner]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('timeout_sec')) {
                obj['timeout_sec'] = ApiClient.convertToType(data['timeout_sec'], 'Number');
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = HelmRequestAllOfSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('allow_cluster_wide_resources')) {
                obj['allow_cluster_wide_resources'] = ApiClient.convertToType(data['allow_cluster_wide_resources'], 'Boolean');
            }
            if (data.hasOwnProperty('values_override')) {
                obj['values_override'] = HelmRequestAllOfValuesOverride.constructFromObject(data['values_override']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/HelmPortRequestPortsInner>} ports
 */
HelmRequest.prototype['ports'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
HelmRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
HelmRequest.prototype['description'] = undefined;

/**
 * Maximum number of seconds allowed for helm to run before killing it and mark it as failed 
 * @member {Number} timeout_sec
 * @default 600
 */
HelmRequest.prototype['timeout_sec'] = 600;

/**
 * Indicates if the 'environment preview option' is enabled.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called or when a new commit is updated. If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
HelmRequest.prototype['auto_preview'] = undefined;

/**
 * Specify if the helm will be automatically updated after receiving a new image tag or a new commit according to the source type.  
 * @member {Boolean} auto_deploy
 */
HelmRequest.prototype['auto_deploy'] = undefined;

/**
 * @member {module:model/HelmRequestAllOfSource} source
 */
HelmRequest.prototype['source'] = undefined;

/**
 * The extra arguments to pass to helm
 * @member {Array.<String>} arguments
 */
HelmRequest.prototype['arguments'] = undefined;

/**
 * If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights 
 * @member {Boolean} allow_cluster_wide_resources
 * @default false
 */
HelmRequest.prototype['allow_cluster_wide_resources'] = false;

/**
 * @member {module:model/HelmRequestAllOfValuesOverride} values_override
 */
HelmRequest.prototype['values_override'] = undefined;


// Implement HelmPortRequest interface:
/**
 * @member {Array.<module:model/HelmPortRequestPortsInner>} ports
 */
HelmPortRequest.prototype['ports'] = undefined;
// Implement HelmRequestAllOf interface:
/**
 * name is case insensitive
 * @member {String} name
 */
HelmRequestAllOf.prototype['name'] = undefined;
/**
 * @member {String} description
 */
HelmRequestAllOf.prototype['description'] = undefined;
/**
 * Maximum number of seconds allowed for helm to run before killing it and mark it as failed 
 * @member {Number} timeout_sec
 * @default 600
 */
HelmRequestAllOf.prototype['timeout_sec'] = 600;
/**
 * Indicates if the 'environment preview option' is enabled.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called or when a new commit is updated. If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
HelmRequestAllOf.prototype['auto_preview'] = undefined;
/**
 * Specify if the helm will be automatically updated after receiving a new image tag or a new commit according to the source type.  
 * @member {Boolean} auto_deploy
 */
HelmRequestAllOf.prototype['auto_deploy'] = undefined;
/**
 * @member {module:model/HelmRequestAllOfSource} source
 */
HelmRequestAllOf.prototype['source'] = undefined;
/**
 * The extra arguments to pass to helm
 * @member {Array.<String>} arguments
 */
HelmRequestAllOf.prototype['arguments'] = undefined;
/**
 * If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights 
 * @member {Boolean} allow_cluster_wide_resources
 * @default false
 */
HelmRequestAllOf.prototype['allow_cluster_wide_resources'] = false;
/**
 * @member {module:model/HelmRequestAllOfValuesOverride} values_override
 */
HelmRequestAllOf.prototype['values_override'] = undefined;




export default HelmRequest;

