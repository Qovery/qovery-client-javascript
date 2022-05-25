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
import ContainerEditRequestAllOf from './ContainerEditRequestAllOf';
import ContainerStorage from './ContainerStorage';
import ContainerStorageStorage from './ContainerStorageStorage';
import Healthcheck from './Healthcheck';

/**
 * The ContainerEditRequest model module.
 * @module model/ContainerEditRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerEditRequest {
    /**
     * Constructs a new <code>ContainerEditRequest</code>.
     * @alias module:model/ContainerEditRequest
     * @implements module:model/ContainerStorage
     * @implements module:model/ApplicationPort
     * @implements module:model/ContainerEditRequestAllOf
     */
    constructor() { 
        ContainerStorage.initialize(this);ApplicationPort.initialize(this);ContainerEditRequestAllOf.initialize(this);
        ContainerEditRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerEditRequest} obj Optional instance to populate.
     * @return {module:model/ContainerEditRequest} The populated <code>ContainerEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerEditRequest();
            ContainerStorage.constructFromObject(data, obj);
            ApplicationPort.constructFromObject(data, obj);
            ContainerEditRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], [ContainerStorageStorage]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ApplicationPortPorts]);
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
            if (data.hasOwnProperty('sticky_session')) {
                obj['sticky_session'] = ApiClient.convertToType(data['sticky_session'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ContainerStorageStorage>} storage
 */
ContainerEditRequest.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ApplicationPortPorts>} ports
 */
ContainerEditRequest.prototype['ports'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ContainerEditRequest.prototype['name'] = undefined;

/**
 * give a description to this application
 * @member {String} description
 */
ContainerEditRequest.prototype['description'] = undefined;

/**
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerEditRequest.prototype['registry_id'] = undefined;

/**
 * name of the image container
 * @member {String} image_name
 */
ContainerEditRequest.prototype['image_name'] = undefined;

/**
 * @member {String} arguments
 */
ContainerEditRequest.prototype['arguments'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ContainerEditRequest.prototype['cpu'] = 250;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ContainerEditRequest.prototype['memory'] = 256;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerEditRequest.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerEditRequest.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthcheck
 */
ContainerEditRequest.prototype['healthcheck'] = undefined;

/**
 * Specify if the sticky session option (also called persistant session) is activated or not for this application. If activated, user will be redirected by the load balancer to the same instance each time he access to the application. 
 * @member {Boolean} sticky_session
 * @default false
 */
ContainerEditRequest.prototype['sticky_session'] = false;


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
// Implement ContainerEditRequestAllOf interface:
/**
 * name is case insensitive
 * @member {String} name
 */
ContainerEditRequestAllOf.prototype['name'] = undefined;
/**
 * give a description to this application
 * @member {String} description
 */
ContainerEditRequestAllOf.prototype['description'] = undefined;
/**
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerEditRequestAllOf.prototype['registry_id'] = undefined;
/**
 * name of the image container
 * @member {String} image_name
 */
ContainerEditRequestAllOf.prototype['image_name'] = undefined;
/**
 * @member {String} arguments
 */
ContainerEditRequestAllOf.prototype['arguments'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 250
 */
ContainerEditRequestAllOf.prototype['cpu'] = 250;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 256
 */
ContainerEditRequestAllOf.prototype['memory'] = 256;
/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerEditRequestAllOf.prototype['min_running_instances'] = 1;
/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerEditRequestAllOf.prototype['max_running_instances'] = 1;
/**
 * @member {module:model/Healthcheck} healthcheck
 */
ContainerEditRequestAllOf.prototype['healthcheck'] = undefined;
/**
 * Specify if the sticky session option (also called persistant session) is activated or not for this application. If activated, user will be redirected by the load balancer to the same instance each time he access to the application. 
 * @member {Boolean} sticky_session
 * @default false
 */
ContainerEditRequestAllOf.prototype['sticky_session'] = false;




export default ContainerEditRequest;

