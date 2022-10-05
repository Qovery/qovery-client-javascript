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
import ContainerRequestAllOf from './ContainerRequestAllOf';
import ServicePortRequest from './ServicePortRequest';
import ServicePortRequestPortsInner from './ServicePortRequestPortsInner';
import ServiceStorageRequest from './ServiceStorageRequest';
import ServiceStorageRequestStorageInner from './ServiceStorageRequestStorageInner';

/**
 * The ContainerRequest model module.
 * @module model/ContainerRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerRequest {
    /**
     * Constructs a new <code>ContainerRequest</code>.
     * @alias module:model/ContainerRequest
     * @implements module:model/ServiceStorageRequest
     * @implements module:model/ServicePortRequest
     * @implements module:model/ContainerRequestAllOf
     * @param name {String} name is case insensitive
     * @param registryId {String} id of the linked registry
     * @param imageName {String} The image name pattern differs according to chosen container registry provider:   * `ECR`: `repository` * `SCALEWAY_CR`: `namespace/image` * `DOCKER_HUB`: `image` or `repository/image` * `PUBLIC_ECR`: `registry_alias/repository` 
     * @param tag {String} tag of the image container
     */
    constructor(name, registryId, imageName, tag) { 
        ServiceStorageRequest.initialize(this);ServicePortRequest.initialize(this);ContainerRequestAllOf.initialize(this, name, registryId, imageName, tag);
        ContainerRequest.initialize(this, name, registryId, imageName, tag);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, registryId, imageName, tag) { 
        obj['name'] = name;
        obj['registry_id'] = registryId;
        obj['image_name'] = imageName;
        obj['tag'] = tag;
    }

    /**
     * Constructs a <code>ContainerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerRequest} obj Optional instance to populate.
     * @return {module:model/ContainerRequest} The populated <code>ContainerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerRequest();
            ServiceStorageRequest.constructFromObject(data, obj);
            ServicePortRequest.constructFromObject(data, obj);
            ContainerRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], [ServiceStorageRequestStorageInner]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ServicePortRequestPortsInner]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('registry_id')) {
                obj['registry_id'] = ApiClient.convertToType(data['registry_id'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ServiceStorageRequestStorageInner>} storage
 */
ContainerRequest.prototype['storage'] = undefined;

/**
 * @member {Array.<module:model/ServicePortRequestPortsInner>} ports
 */
ContainerRequest.prototype['ports'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ContainerRequest.prototype['name'] = undefined;

/**
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerRequest.prototype['registry_id'] = undefined;

/**
 * The image name pattern differs according to chosen container registry provider:   * `ECR`: `repository` * `SCALEWAY_CR`: `namespace/image` * `DOCKER_HUB`: `image` or `repository/image` * `PUBLIC_ECR`: `registry_alias/repository` 
 * @member {String} image_name
 */
ContainerRequest.prototype['image_name'] = undefined;

/**
 * tag of the image container
 * @member {String} tag
 */
ContainerRequest.prototype['tag'] = undefined;

/**
 * @member {Array.<String>} arguments
 */
ContainerRequest.prototype['arguments'] = undefined;

/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
ContainerRequest.prototype['entrypoint'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 500
 */
ContainerRequest.prototype['cpu'] = 500;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 512
 */
ContainerRequest.prototype['memory'] = 512;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerRequest.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerRequest.prototype['max_running_instances'] = 1;


// Implement ServiceStorageRequest interface:
/**
 * @member {Array.<module:model/ServiceStorageRequestStorageInner>} storage
 */
ServiceStorageRequest.prototype['storage'] = undefined;
// Implement ServicePortRequest interface:
/**
 * @member {Array.<module:model/ServicePortRequestPortsInner>} ports
 */
ServicePortRequest.prototype['ports'] = undefined;
// Implement ContainerRequestAllOf interface:
/**
 * name is case insensitive
 * @member {String} name
 */
ContainerRequestAllOf.prototype['name'] = undefined;
/**
 * id of the linked registry
 * @member {String} registry_id
 */
ContainerRequestAllOf.prototype['registry_id'] = undefined;
/**
 * The image name pattern differs according to chosen container registry provider:   * `ECR`: `repository` * `SCALEWAY_CR`: `namespace/image` * `DOCKER_HUB`: `image` or `repository/image` * `PUBLIC_ECR`: `registry_alias/repository` 
 * @member {String} image_name
 */
ContainerRequestAllOf.prototype['image_name'] = undefined;
/**
 * tag of the image container
 * @member {String} tag
 */
ContainerRequestAllOf.prototype['tag'] = undefined;
/**
 * @member {Array.<String>} arguments
 */
ContainerRequestAllOf.prototype['arguments'] = undefined;
/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
ContainerRequestAllOf.prototype['entrypoint'] = undefined;
/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 * @default 500
 */
ContainerRequestAllOf.prototype['cpu'] = 500;
/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 * @default 512
 */
ContainerRequestAllOf.prototype['memory'] = 512;
/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerRequestAllOf.prototype['min_running_instances'] = 1;
/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerRequestAllOf.prototype['max_running_instances'] = 1;




export default ContainerRequest;

