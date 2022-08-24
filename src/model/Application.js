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
import ApplicationAllOf from './ApplicationAllOf';
import ApplicationGitRepository from './ApplicationGitRepository';
import ApplicationStorage from './ApplicationStorage';
import ApplicationStorageStorageInner from './ApplicationStorageStorageInner';
import Base from './Base';
import BuildModeEnum from './BuildModeEnum';
import BuildPackLanguageEnum from './BuildPackLanguageEnum';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';
import ServicePort from './ServicePort';
import ServicePortPortsInner from './ServicePortPortsInner';

/**
 * The Application model module.
 * @module model/Application
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Application {
    /**
     * Constructs a new <code>Application</code>.
     * @alias module:model/Application
     * @implements module:model/Base
     * @implements module:model/ApplicationStorage
     * @implements module:model/ServicePort
     * @implements module:model/ApplicationAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);ApplicationStorage.initialize(this);ServicePort.initialize(this);ApplicationAllOf.initialize(this);
        Application.initialize(this, id, createdAt);
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
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Application();
            Base.constructFromObject(data, obj);
            ApplicationStorage.constructFromObject(data, obj);
            ServicePort.constructFromObject(data, obj);
            ApplicationAllOf.constructFromObject(data, obj);

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
                obj['storage'] = ApiClient.convertToType(data['storage'], [ApplicationStorageStorageInner]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ServicePortPortsInner]);
            }
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
 * @member {String} id
 */
Application.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Application.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Application.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/ApplicationStorageStorageInner>} storage
 */
Application.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ServicePortPortsInner>} ports
 */
Application.prototype['ports'] = undefined;

/**
 * @member {module:model/ReferenceObject} environment
 */
Application.prototype['environment'] = undefined;

/**
 * @member {module:model/ApplicationGitRepository} git_repository
 */
Application.prototype['git_repository'] = undefined;

/**
 * Maximum cpu that can be allocated to the application based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
Application.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
Application.prototype['maximum_memory'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
Application.prototype['name'] = undefined;

/**
 * give a description to this application
 * @member {String} description
 */
Application.prototype['description'] = undefined;

/**
 * @member {module:model/BuildModeEnum} build_mode
 */
Application.prototype['build_mode'] = undefined;

/**
 * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
 * @member {String} dockerfile_path
 */
Application.prototype['dockerfile_path'] = undefined;

/**
 * @member {module:model/BuildPackLanguageEnum} buildpack_language
 */
Application.prototype['buildpack_language'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
Application.prototype['cpu'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
Application.prototype['memory'] = undefined;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
Application.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
Application.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthcheck
 */
Application.prototype['healthcheck'] = undefined;

/**
 * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
 * @member {Boolean} auto_preview
 * @default true
 */
Application.prototype['auto_preview'] = true;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;
// Implement ApplicationStorage interface:
/**
 * @member {Array.<module:model/ApplicationStorageStorageInner>} storage
 */
ApplicationStorage.prototype['storage'] = undefined;
// Implement ServicePort interface:
/**
 * @member {Array.<module:model/ServicePortPortsInner>} ports
 */
ServicePort.prototype['ports'] = undefined;
// Implement ApplicationAllOf interface:
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
 */
ApplicationAllOf.prototype['maximum_cpu'] = undefined;
/**
 * Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
ApplicationAllOf.prototype['maximum_memory'] = undefined;
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
 */
ApplicationAllOf.prototype['cpu'] = undefined;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
ApplicationAllOf.prototype['memory'] = undefined;
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




export default Application;

