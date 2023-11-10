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
import ApplicationGitRepositoryRequest from './ApplicationGitRepositoryRequest';
import HelmRequestAllOfValuesOverride from './HelmRequestAllOfValuesOverride';
import ReferenceObject from './ReferenceObject';

/**
 * The HelmResponseAllOf model module.
 * @module model/HelmResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmResponseAllOf {
    /**
     * Constructs a new <code>HelmResponseAllOf</code>.
     * @alias module:model/HelmResponseAllOf
     * @param environment {module:model/ReferenceObject} 
     * @param name {String} name is case insensitive
     * @param autoPreview {Boolean} Indicates if the 'environment preview option' is enabled.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
     * @param autoDeploy {Boolean} Specify if the service will be automatically updated after receiving a new image tag or a new commit according to the source type.  
     * @param source {module:model/OneOfobjectobject} 
     * @param _arguments {Array.<String>} The extra arguments to pass to helm
     * @param allowClusterWideResources {Boolean} If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights 
     * @param valuesOverride {module:model/HelmRequestAllOfValuesOverride} 
     */
    constructor(environment, name, autoPreview, autoDeploy, source, _arguments, allowClusterWideResources, valuesOverride) { 
        
        HelmResponseAllOf.initialize(this, environment, name, autoPreview, autoDeploy, source, _arguments, allowClusterWideResources, valuesOverride);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment, name, autoPreview, autoDeploy, source, _arguments, allowClusterWideResources, valuesOverride) { 
        obj['environment'] = environment;
        obj['name'] = name;
        obj['auto_preview'] = autoPreview;
        obj['auto_deploy'] = autoDeploy;
        obj['source'] = source;
        obj['arguments'] = _arguments;
        obj['allow_cluster_wide_resources'] = allowClusterWideResources || false;
        obj['values_override'] = valuesOverride;
    }

    /**
     * Constructs a <code>HelmResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HelmResponseAllOf} The populated <code>HelmResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmResponseAllOf();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], OneOfobjectobject);
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
 * @member {module:model/ReferenceObject} environment
 */
HelmResponseAllOf.prototype['environment'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
HelmResponseAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
HelmResponseAllOf.prototype['description'] = undefined;

/**
 * Indicates if the 'environment preview option' is enabled.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
HelmResponseAllOf.prototype['auto_preview'] = undefined;

/**
 * Specify if the service will be automatically updated after receiving a new image tag or a new commit according to the source type.  
 * @member {Boolean} auto_deploy
 */
HelmResponseAllOf.prototype['auto_deploy'] = undefined;

/**
 * @member {module:model/OneOfobjectobject} source
 */
HelmResponseAllOf.prototype['source'] = undefined;

/**
 * The extra arguments to pass to helm
 * @member {Array.<String>} arguments
 */
HelmResponseAllOf.prototype['arguments'] = undefined;

/**
 * If we should allow the chart to deploy object outside his specified namespace. Setting this flag to true, requires special rights 
 * @member {Boolean} allow_cluster_wide_resources
 * @default false
 */
HelmResponseAllOf.prototype['allow_cluster_wide_resources'] = false;

/**
 * @member {module:model/HelmRequestAllOfValuesOverride} values_override
 */
HelmResponseAllOf.prototype['values_override'] = undefined;






export default HelmResponseAllOf;

