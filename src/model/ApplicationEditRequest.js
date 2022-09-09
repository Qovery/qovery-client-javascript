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
import ApplicationEditRequestAllOf from './ApplicationEditRequestAllOf';
import ApplicationGitRepositoryRequest from './ApplicationGitRepositoryRequest';
import BuildModeEnum from './BuildModeEnum';
import BuildPackLanguageEnum from './BuildPackLanguageEnum';
import Healthcheck from './Healthcheck';
import ServicePort from './ServicePort';
import ServicePortResponseList from './ServicePortResponseList';
import ServiceStorageRequest from './ServiceStorageRequest';
import ServiceStorageRequestStorageInner from './ServiceStorageRequestStorageInner';

/**
 * The ApplicationEditRequest model module.
 * @module model/ApplicationEditRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ApplicationEditRequest {
    /**
     * Constructs a new <code>ApplicationEditRequest</code>.
     * @alias module:model/ApplicationEditRequest
     * @implements module:model/ServiceStorageRequest
     * @implements module:model/ServicePortResponseList
     * @implements module:model/ApplicationEditRequestAllOf
     */
    constructor() { 
        ServiceStorageRequest.initialize(this);ServicePortResponseList.initialize(this);ApplicationEditRequestAllOf.initialize(this);
        ApplicationEditRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEditRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationEditRequest} The populated <code>ApplicationEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationEditRequest();
            ServiceStorageRequest.constructFromObject(data, obj);
            ServicePortResponseList.constructFromObject(data, obj);
            ApplicationEditRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], [ServiceStorageRequestStorageInner]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ServicePort]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('git_repository')) {
                obj['git_repository'] = ApplicationGitRepositoryRequest.constructFromObject(data['git_repository']);
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
            if (data.hasOwnProperty('sticky_session')) {
                obj['sticky_session'] = ApiClient.convertToType(data['sticky_session'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ServiceStorageRequestStorageInner>} storage
 */
ApplicationEditRequest.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ServicePort>} results
 */
ApplicationEditRequest.prototype['results'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ApplicationEditRequest.prototype['name'] = undefined;

/**
 * give a description to this application
 * @member {String} description
 */
ApplicationEditRequest.prototype['description'] = undefined;

/**
 * @member {module:model/ApplicationGitRepositoryRequest} git_repository
 */
ApplicationEditRequest.prototype['git_repository'] = undefined;

/**
 * @member {module:model/BuildModeEnum} build_mode
 */
ApplicationEditRequest.prototype['build_mode'] = undefined;

/**
 * The path of the associated Dockerfile
 * @member {String} dockerfile_path
 */
ApplicationEditRequest.prototype['dockerfile_path'] = undefined;

/**
 * @member {module:model/BuildPackLanguageEnum} buildpack_language
 */
ApplicationEditRequest.prototype['buildpack_language'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 500
 */
ApplicationEditRequest.prototype['cpu'] = 500;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 512
 */
ApplicationEditRequest.prototype['memory'] = 512;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ApplicationEditRequest.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ApplicationEditRequest.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthcheck
 */
ApplicationEditRequest.prototype['healthcheck'] = undefined;

/**
 * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
 * @member {Boolean} auto_preview
 * @default true
 */
ApplicationEditRequest.prototype['auto_preview'] = true;

/**
 * Specify if the sticky session option (also called persistant session) is activated or not for this application. If activated, user will be redirected by the load balancer to the same instance each time he access to the application. 
 * @member {Boolean} sticky_session
 * @default false
 */
ApplicationEditRequest.prototype['sticky_session'] = false;


// Implement ServiceStorageRequest interface:
/**
 * @member {Array.<module:model/ServiceStorageRequestStorageInner>} storage
 */
ServiceStorageRequest.prototype['storage'] = undefined;
// Implement ServicePortResponseList interface:
/**
 * @member {Array.<module:model/ServicePort>} results
 */
ServicePortResponseList.prototype['results'] = undefined;
// Implement ApplicationEditRequestAllOf interface:
/**
 * name is case insensitive
 * @member {String} name
 */
ApplicationEditRequestAllOf.prototype['name'] = undefined;
/**
 * give a description to this application
 * @member {String} description
 */
ApplicationEditRequestAllOf.prototype['description'] = undefined;
/**
 * @member {module:model/ApplicationGitRepositoryRequest} git_repository
 */
ApplicationEditRequestAllOf.prototype['git_repository'] = undefined;
/**
 * @member {module:model/BuildModeEnum} build_mode
 */
ApplicationEditRequestAllOf.prototype['build_mode'] = undefined;
/**
 * The path of the associated Dockerfile
 * @member {String} dockerfile_path
 */
ApplicationEditRequestAllOf.prototype['dockerfile_path'] = undefined;
/**
 * @member {module:model/BuildPackLanguageEnum} buildpack_language
 */
ApplicationEditRequestAllOf.prototype['buildpack_language'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 500
 */
ApplicationEditRequestAllOf.prototype['cpu'] = 500;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 512
 */
ApplicationEditRequestAllOf.prototype['memory'] = 512;
/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ApplicationEditRequestAllOf.prototype['min_running_instances'] = 1;
/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ApplicationEditRequestAllOf.prototype['max_running_instances'] = 1;
/**
 * @member {module:model/Healthcheck} healthcheck
 */
ApplicationEditRequestAllOf.prototype['healthcheck'] = undefined;
/**
 * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
 * @member {Boolean} auto_preview
 * @default true
 */
ApplicationEditRequestAllOf.prototype['auto_preview'] = true;
/**
 * Specify if the sticky session option (also called persistant session) is activated or not for this application. If activated, user will be redirected by the load balancer to the same instance each time he access to the application. 
 * @member {Boolean} sticky_session
 * @default false
 */
ApplicationEditRequestAllOf.prototype['sticky_session'] = false;




export default ApplicationEditRequest;

