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
import ApplicationGitRepository from './ApplicationGitRepository';
import BuildModeEnum from './BuildModeEnum';
import BuildPackLanguageEnum from './BuildPackLanguageEnum';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';

/**
 * The ApplicationAllOf model module.
 * @module model/ApplicationAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ApplicationAllOf {
    /**
     * Constructs a new <code>ApplicationAllOf</code>.
     * @alias module:model/ApplicationAllOf
     */
    constructor() { 
        
        ApplicationAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAllOf} obj Optional instance to populate.
     * @return {module:model/ApplicationAllOf} The populated <code>ApplicationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationAllOf();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('git_repository')) {
                obj['git_repository'] = ApplicationGitRepository.constructFromObject(data['git_repository']);
            }
            if (data.hasOwnProperty('maximum_cpu')) {
                obj['maximum_cpu'] = ApiClient.convertToType(data['maximum_cpu'], 'Number');
            }
            if (data.hasOwnProperty('maximum_memory')) {
                obj['maximum_memory'] = ApiClient.convertToType(data['maximum_memory'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('build_mode')) {
                obj['build_mode'] = BuildModeEnum.constructFromObject(data['build_mode']);
            }
            if (data.hasOwnProperty('dockerfile_path')) {
                obj['dockerfile_path'] = ApiClient.convertToType(data['dockerfile_path'], 'String');
            }
            if (data.hasOwnProperty('buildpack_language')) {
                obj['buildpack_language'] = BuildPackLanguageEnum.constructFromObject(data['buildpack_language']);
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('min_running_instances')) {
                obj['min_running_instances'] = ApiClient.convertToType(data['min_running_instances'], 'Number');
            }
            if (data.hasOwnProperty('max_running_instances')) {
                obj['max_running_instances'] = ApiClient.convertToType(data['max_running_instances'], 'Number');
            }
            if (data.hasOwnProperty('healthcheck')) {
                obj['healthcheck'] = Healthcheck.constructFromObject(data['healthcheck']);
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReferenceObject} environment
 */
ApplicationAllOf.prototype['environment'] = undefined;

/**
 * @member {module:model/ApplicationGitRepository} git_repository
 */
ApplicationAllOf.prototype['git_repository'] = undefined;

/**
 * Maximum cpu that can be allocated to the application based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 * @default 250
 */
ApplicationAllOf.prototype['maximum_cpu'] = 250;

/**
 * Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 * @default 256
 */
ApplicationAllOf.prototype['maximum_memory'] = 256;

/**
 * name is case insensitive
 * @member {String} name
 */
ApplicationAllOf.prototype['name'] = undefined;

/**
 * give a description to this application
 * @member {String} description
 */
ApplicationAllOf.prototype['description'] = undefined;

/**
 * @member {module:model/BuildModeEnum} build_mode
 */
ApplicationAllOf.prototype['build_mode'] = undefined;

/**
 * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
 * @member {String} dockerfile_path
 */
ApplicationAllOf.prototype['dockerfile_path'] = undefined;

/**
 * @member {module:model/BuildPackLanguageEnum} buildpack_language
 */
ApplicationAllOf.prototype['buildpack_language'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ApplicationAllOf.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ApplicationAllOf.prototype['memory'] = 256;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ApplicationAllOf.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ApplicationAllOf.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthcheck
 */
ApplicationAllOf.prototype['healthcheck'] = undefined;

/**
 * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
 * @member {Boolean} auto_preview
 * @default true
 */
ApplicationAllOf.prototype['auto_preview'] = true;






export default ApplicationAllOf;
