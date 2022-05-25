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
import ApplicationPort from './ApplicationPort';
import ApplicationPortPorts from './ApplicationPortPorts';
import Base from './Base';
import ContainerResponseAllOf from './ContainerResponseAllOf';
import ContainerStorage from './ContainerStorage';
import ContainerStorageStorage from './ContainerStorageStorage';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';

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
     * @implements module:model/ContainerStorage
     * @implements module:model/ApplicationPort
     * @implements module:model/ContainerResponseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);ContainerStorage.initialize(this);ApplicationPort.initialize(this);ContainerResponseAllOf.initialize(this);
        ContainerResponse.initialize(this, id, createdAt);
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
            ContainerStorage.constructFromObject(data, obj);
            ApplicationPort.constructFromObject(data, obj);
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
                obj['storage'] = ApiClient.convertToType(data['storage'], [ContainerStorageStorage]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ApplicationPortPorts]);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
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
            if (data.hasOwnProperty('registry_id')) {
                obj['registry_id'] = ApiClient.convertToType(data['registry_id'], 'String');
            }
            if (data.hasOwnProperty('image_name')) {
                obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], 'String');
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
 * @member {Array.<module:model/ContainerStorageStorage>} storage
 */
ContainerResponse.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ApplicationPortPorts>} ports
 */
ContainerResponse.prototype['ports'] = undefined;

/**
 * @member {module:model/ReferenceObject} environment
 */
ContainerResponse.prototype['environment'] = undefined;

/**
 * Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 * @default 250
 */
ContainerResponse.prototype['maximum_cpu'] = 250;

/**
 * Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 * @default 256
 */
ContainerResponse.prototype['maximum_memory'] = 256;

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
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerResponse.prototype['registry_id'] = undefined;

/**
 * name of the image container
 * @member {String} image_name
 */
ContainerResponse.prototype['image_name'] = undefined;

/**
 * @member {String} arguments
 */
ContainerResponse.prototype['arguments'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ContainerResponse.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ContainerResponse.prototype['memory'] = 256;

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
 * @member {module:model/Healthcheck} healthcheck
 */
ContainerResponse.prototype['healthcheck'] = undefined;


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
// Implement ContainerStorage interface:
/**
 * @member {Array.<module:model/ContainerStorageStorage>} storage
 */
ContainerStorage.prototype['storage'] = undefined;
// Implement ApplicationPort interface:
/**
 * @member {Array.<module:model/ApplicationPortPorts>} ports
 */
ApplicationPort.prototype['ports'] = undefined;
// Implement ContainerResponseAllOf interface:
/**
 * @member {module:model/ReferenceObject} environment
 */
ContainerResponseAllOf.prototype['environment'] = undefined;
/**
 * Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 * @default 250
 */
ContainerResponseAllOf.prototype['maximum_cpu'] = 250;
/**
 * Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 * @default 256
 */
ContainerResponseAllOf.prototype['maximum_memory'] = 256;
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
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerResponseAllOf.prototype['registry_id'] = undefined;
/**
 * name of the image container
 * @member {String} image_name
 */
ContainerResponseAllOf.prototype['image_name'] = undefined;
/**
 * @member {String} arguments
 */
ContainerResponseAllOf.prototype['arguments'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ContainerResponseAllOf.prototype['cpu'] = 250;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ContainerResponseAllOf.prototype['memory'] = 256;
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
 * @member {module:model/Healthcheck} healthcheck
 */
ContainerResponseAllOf.prototype['healthcheck'] = undefined;




export default ContainerResponse;

