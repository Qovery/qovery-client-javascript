/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationGitRepositoryResponse from './ApplicationGitRepositoryResponse';
import ApplicationPortResponse from './ApplicationPortResponse';
import ApplicationPortResponsePorts from './ApplicationPortResponsePorts';
import ApplicationStorageResponse from './ApplicationStorageResponse';
import ApplicationStorageResponseStorage from './ApplicationStorageResponseStorage';
import BaseResponse from './BaseResponse';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';

/**
 * The ApplicationResponse model module.
 * @module model/ApplicationResponse
 * @version 1.0.1
 */
class ApplicationResponse {
    /**
     * Constructs a new <code>ApplicationResponse</code>.
     * @alias module:model/ApplicationResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ApplicationStorageResponse
     * @implements module:model/ApplicationPortResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);ApplicationStorageResponse.initialize(this);ApplicationPortResponse.initialize(this);
        ApplicationResponse.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>ApplicationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationResponse} obj Optional instance to populate.
     * @return {module:model/ApplicationResponse} The populated <code>ApplicationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationResponse();
            BaseResponse.constructFromObject(data, obj);
            ApplicationStorageResponse.constructFromObject(data, obj);
            ApplicationPortResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('git_repository')) {
                obj['git_repository'] = ApplicationGitRepositoryResponse.constructFromObject(data['git_repository']);
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
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
 * @member {module:model/ReferenceObject} environment
 */
ApplicationResponse.prototype['environment'] = undefined;

/**
 * @member {module:model/ApplicationGitRepositoryResponse} git_repository
 */
ApplicationResponse.prototype['git_repository'] = undefined;

/**
 * Maximum cpu that can be allocated to the application based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 * @default 250
 */
ApplicationResponse.prototype['maximum_cpu'] = 250;

/**
 * Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 * @default 256
 */
ApplicationResponse.prototype['maximum_memory'] = 256;

/**
 * name is case insensitive
 * @member {String} name
 */
ApplicationResponse.prototype['name'] = undefined;

/**
 * give a description to this application
 * @member {String} description
 */
ApplicationResponse.prototype['description'] = undefined;

/**
 * `DOCKER` requires `dockerfile_path` `BUILDPACKS` does not require any `dockerfile_path` 
 * @member {module:model/ApplicationResponse.BuildModeEnum} build_mode
 * @default 'BUILDPACKS'
 */
ApplicationResponse.prototype['build_mode'] = 'BUILDPACKS';

/**
 * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
 * @member {String} dockerfile_path
 */
ApplicationResponse.prototype['dockerfile_path'] = undefined;

/**
 * Development language of the application
 * @member {module:model/ApplicationResponse.BuildpackLanguageEnum} buildpack_language
 */
ApplicationResponse.prototype['buildpack_language'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ApplicationResponse.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ApplicationResponse.prototype['memory'] = 256;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ApplicationResponse.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ApplicationResponse.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthcheck
 */
ApplicationResponse.prototype['healthcheck'] = undefined;

/**
 * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
 * @member {Boolean} auto_preview
 * @default true
 */
ApplicationResponse.prototype['auto_preview'] = true;

/**
 * @member {String} id
 */
ApplicationResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
ApplicationResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ApplicationResponse.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/ApplicationStorageResponseStorage>} storage
 */
ApplicationResponse.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ApplicationPortResponsePorts>} ports
 */
ApplicationResponse.prototype['ports'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;
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
ApplicationResponse['BuildModeEnum'] = {

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
ApplicationResponse['BuildpackLanguageEnum'] = {

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



export default ApplicationResponse;

