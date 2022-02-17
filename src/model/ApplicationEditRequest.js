/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationGitRepositoryRequest from './ApplicationGitRepositoryRequest';
import ApplicationPortResponse from './ApplicationPortResponse';
import ApplicationPortResponsePorts from './ApplicationPortResponsePorts';
import ApplicationStorageResponse from './ApplicationStorageResponse';
import ApplicationStorageResponseStorage from './ApplicationStorageResponseStorage';
import Healthcheck from './Healthcheck';

/**
 * The ApplicationEditRequest model module.
 * @module model/ApplicationEditRequest
 * @version 1.0.0
 */
class ApplicationEditRequest {
    /**
     * Constructs a new <code>ApplicationEditRequest</code>.
     * @alias module:model/ApplicationEditRequest
     * @implements module:model/ApplicationStorageResponse
     * @implements module:model/ApplicationPortResponse
     */
    constructor() { 
        ApplicationStorageResponse.initialize(this);ApplicationPortResponse.initialize(this);
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
            ApplicationStorageResponse.constructFromObject(data, obj);
            ApplicationPortResponse.constructFromObject(data, obj);

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
                obj['build_mode'] = ApiClient.convertToType(data['build_mode'], 'String');
            }
            if (data.hasOwnProperty('dockerfile_path')) {
                obj['dockerfile_path'] = ApiClient.convertToType(data['dockerfile_path'], 'String');
            }
            if (data.hasOwnProperty('buildpack_language')) {
                obj['buildpack_language'] = ApiClient.convertToType(data['buildpack_language'], 'String');
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
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], [ApplicationStorageResponseStorage]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ApplicationPortResponsePorts]);
            }
        }
        return obj;
    }


}

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
 * `DOCKER` requires `dockerfile_path` `BUILDPACKS` does not require any `dockerfile_path` 
 * @member {module:model/ApplicationEditRequest.BuildModeEnum} build_mode
 */
ApplicationEditRequest.prototype['build_mode'] = undefined;

/**
 * The path of the associated Dockerfile
 * @member {String} dockerfile_path
 */
ApplicationEditRequest.prototype['dockerfile_path'] = undefined;

/**
 * Development language of the application
 * @member {module:model/ApplicationEditRequest.BuildpackLanguageEnum} buildpack_language
 */
ApplicationEditRequest.prototype['buildpack_language'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ApplicationEditRequest.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ApplicationEditRequest.prototype['memory'] = 256;

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

/**
 * @member {Array.<module:model/ApplicationStorageResponseStorage>} storage
 */
ApplicationEditRequest.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ApplicationPortResponsePorts>} ports
 */
ApplicationEditRequest.prototype['ports'] = undefined;


// Implement ApplicationStorageResponse interface:
/**
 * @member {Array.<module:model/ApplicationStorageResponseStorage>} storage
 */
ApplicationStorageResponse.prototype['storage'] = undefined;
// Implement ApplicationPortResponse interface:
/**
 * @member {Array.<module:model/ApplicationPortResponsePorts>} ports
 */
ApplicationPortResponse.prototype['ports'] = undefined;



/**
 * Allowed values for the <code>build_mode</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationEditRequest['BuildModeEnum'] = {

    /**
     * value: "DOCKER"
     * @const
     */
    "DOCKER": "DOCKER",

    /**
     * value: "BUILDPACKS"
     * @const
     */
    "BUILDPACKS": "BUILDPACKS"
};


/**
 * Allowed values for the <code>buildpack_language</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationEditRequest['BuildpackLanguageEnum'] = {

    /**
     * value: "CLOJURE"
     * @const
     */
    "CLOJURE": "CLOJURE",

    /**
     * value: "GO"
     * @const
     */
    "GO": "GO",

    /**
     * value: "GRADLE"
     * @const
     */
    "GRADLE": "GRADLE",

    /**
     * value: "GRAILS"
     * @const
     */
    "GRAILS": "GRAILS",

    /**
     * value: "JAVA"
     * @const
     */
    "JAVA": "JAVA",

    /**
     * value: "JVM"
     * @const
     */
    "JVM": "JVM",

    /**
     * value: "NODE_JS"
     * @const
     */
    "NODE_JS": "NODE_JS",

    /**
     * value: "PHP"
     * @const
     */
    "PHP": "PHP",

    /**
     * value: "PLAY"
     * @const
     */
    "PLAY": "PLAY",

    /**
     * value: "PYTHON"
     * @const
     */
    "PYTHON": "PYTHON",

    /**
     * value: "SCALA"
     * @const
     */
    "SCALA": "SCALA"
};



export default ApplicationEditRequest;

