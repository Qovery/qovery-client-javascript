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
import Base from './Base';
import ContainerResponseAllOf from './ContainerResponseAllOf';
import ReferenceObject from './ReferenceObject';
import ServicePort from './ServicePort';
import ServiceStorage from './ServiceStorage';
import ServiceStorageStorageInner from './ServiceStorageStorageInner';

/**
 * The ContainerResponse model module.
 * @module model/ContainerResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerResponse {
    /**
     * Constructs a new <code>ContainerResponse</code>.
     * @alias module:model/ContainerResponse
     * @implements module:model/Base
     * @implements module:model/ServiceStorage
     * @implements module:model/ContainerResponseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param environment {module:model/ReferenceObject} 
     * @param registry {module:model/ReferenceObject} 
     * @param maximumCpu {Number} Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
     * @param maximumMemory {Number} Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
     * @param name {String} name is case insensitive
     * @param imageName {String} name of the image container
     * @param tag {String} tag of the image container
     * @param cpu {Number} unit is millicores (m). 1000m = 1 cpu
     * @param memory {Number} unit is MB. 1024 MB = 1GB
     * @param minRunningInstances {Number} Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
     * @param maxRunningInstances {Number} Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
     * @param autoPreview {Boolean} Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
     */
    constructor(id, createdAt, environment, registry, maximumCpu, maximumMemory, name, imageName, tag, cpu, memory, minRunningInstances, maxRunningInstances, autoPreview) { 
        Base.initialize(this, id, createdAt);ServiceStorage.initialize(this);ContainerResponseAllOf.initialize(this, environment, registry, maximumCpu, maximumMemory, name, imageName, tag, cpu, memory, minRunningInstances, maxRunningInstances, autoPreview);
        ContainerResponse.initialize(this, id, createdAt, environment, registry, maximumCpu, maximumMemory, name, imageName, tag, cpu, memory, minRunningInstances, maxRunningInstances, autoPreview);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, environment, registry, maximumCpu, maximumMemory, name, imageName, tag, cpu, memory, minRunningInstances, maxRunningInstances, autoPreview) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['environment'] = environment;
        obj['registry'] = registry;
        obj['maximum_cpu'] = maximumCpu;
        obj['maximum_memory'] = maximumMemory;
        obj['name'] = name;
        obj['image_name'] = imageName;
        obj['tag'] = tag;
        obj['cpu'] = cpu;
        obj['memory'] = memory;
        obj['min_running_instances'] = minRunningInstances || 1;
        obj['max_running_instances'] = maxRunningInstances || 1;
        obj['auto_preview'] = autoPreview;
    }

    /**
     * Constructs a <code>ContainerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerResponse} obj Optional instance to populate.
     * @return {module:model/ContainerResponse} The populated <code>ContainerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerResponse();
            Base.constructFromObject(data, obj);
            ServiceStorage.constructFromObject(data, obj);
            ContainerResponseAllOf.constructFromObject(data, obj);

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
                obj['storage'] = ApiClient.convertToType(data['storage'], [ServiceStorageStorageInner]);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('registry')) {
                obj['registry'] = ReferenceObject.constructFromObject(data['registry']);
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
            if (data.hasOwnProperty('image_name')) {
                obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
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
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ServicePort]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ContainerResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
ContainerResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ContainerResponse.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/ServiceStorageStorageInner>} storage
 */
ContainerResponse.prototype['storage'] = undefined;

/**
 * @member {module:model/ReferenceObject} environment
 */
ContainerResponse.prototype['environment'] = undefined;

/**
 * @member {module:model/ReferenceObject} registry
 */
ContainerResponse.prototype['registry'] = undefined;

/**
 * Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
ContainerResponse.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
ContainerResponse.prototype['maximum_memory'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ContainerResponse.prototype['name'] = undefined;

/**
 * give a description to this container
 * @member {String} description
 */
ContainerResponse.prototype['description'] = undefined;

/**
 * name of the image container
 * @member {String} image_name
 */
ContainerResponse.prototype['image_name'] = undefined;

/**
 * tag of the image container
 * @member {String} tag
 */
ContainerResponse.prototype['tag'] = undefined;

/**
 * @member {Array.<String>} arguments
 */
ContainerResponse.prototype['arguments'] = undefined;

/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
ContainerResponse.prototype['entrypoint'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
ContainerResponse.prototype['cpu'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
ContainerResponse.prototype['memory'] = undefined;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerResponse.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerResponse.prototype['max_running_instances'] = 1;

/**
 * Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
ContainerResponse.prototype['auto_preview'] = undefined;

/**
 * @member {Array.<module:model/ServicePort>} ports
 */
ContainerResponse.prototype['ports'] = undefined;


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
// Implement ServiceStorage interface:
/**
 * @member {Array.<module:model/ServiceStorageStorageInner>} storage
 */
ServiceStorage.prototype['storage'] = undefined;
// Implement ContainerResponseAllOf interface:
/**
 * @member {module:model/ReferenceObject} environment
 */
ContainerResponseAllOf.prototype['environment'] = undefined;
/**
 * @member {module:model/ReferenceObject} registry
 */
ContainerResponseAllOf.prototype['registry'] = undefined;
/**
 * Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
ContainerResponseAllOf.prototype['maximum_cpu'] = undefined;
/**
 * Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
ContainerResponseAllOf.prototype['maximum_memory'] = undefined;
/**
 * name is case insensitive
 * @member {String} name
 */
ContainerResponseAllOf.prototype['name'] = undefined;
/**
 * give a description to this container
 * @member {String} description
 */
ContainerResponseAllOf.prototype['description'] = undefined;
/**
 * name of the image container
 * @member {String} image_name
 */
ContainerResponseAllOf.prototype['image_name'] = undefined;
/**
 * tag of the image container
 * @member {String} tag
 */
ContainerResponseAllOf.prototype['tag'] = undefined;
/**
 * @member {Array.<String>} arguments
 */
ContainerResponseAllOf.prototype['arguments'] = undefined;
/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
ContainerResponseAllOf.prototype['entrypoint'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
ContainerResponseAllOf.prototype['cpu'] = undefined;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
ContainerResponseAllOf.prototype['memory'] = undefined;
/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerResponseAllOf.prototype['min_running_instances'] = 1;
/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerResponseAllOf.prototype['max_running_instances'] = 1;
/**
 * Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
ContainerResponseAllOf.prototype['auto_preview'] = undefined;
/**
 * @member {Array.<module:model/ServicePort>} ports
 */
ContainerResponseAllOf.prototype['ports'] = undefined;




export default ContainerResponse;

