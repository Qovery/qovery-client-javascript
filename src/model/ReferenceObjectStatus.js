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
import ReferenceObject from './ReferenceObject';
import ServiceDeploymentStatusEnum from './ServiceDeploymentStatusEnum';
import ServiceStepMetrics from './ServiceStepMetrics';
import StateEnum from './StateEnum';
import Status from './Status';

/**
 * The ReferenceObjectStatus model module.
 * @module model/ReferenceObjectStatus
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ReferenceObjectStatus {
    /**
     * Constructs a new <code>ReferenceObjectStatus</code>.
     * @alias module:model/ReferenceObjectStatus
     * @implements module:model/ReferenceObject
     * @implements module:model/Status
     * @param id {String} 
     * @param state {module:model/StateEnum} 
     * @param serviceDeploymentStatus {module:model/ServiceDeploymentStatusEnum} 
     */
    constructor(id, state, serviceDeploymentStatus) { 
        ReferenceObject.initialize(this, id);Status.initialize(this, id, state, serviceDeploymentStatus);
        ReferenceObjectStatus.initialize(this, id, state, serviceDeploymentStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, state, serviceDeploymentStatus) { 
        obj['id'] = id;
        obj['state'] = state;
        obj['service_deployment_status'] = serviceDeploymentStatus;
    }

    /**
     * Constructs a <code>ReferenceObjectStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferenceObjectStatus} obj Optional instance to populate.
     * @return {module:model/ReferenceObjectStatus} The populated <code>ReferenceObjectStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferenceObjectStatus();
            ReferenceObject.constructFromObject(data, obj);
            Status.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = StateEnum.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('service_deployment_status')) {
                obj['service_deployment_status'] = ServiceDeploymentStatusEnum.constructFromObject(data['service_deployment_status']);
            }
            if (data.hasOwnProperty('last_deployment_date')) {
                obj['last_deployment_date'] = ApiClient.convertToType(data['last_deployment_date'], 'Date');
            }
            if (data.hasOwnProperty('is_part_last_deployment')) {
                obj['is_part_last_deployment'] = ApiClient.convertToType(data['is_part_last_deployment'], 'Boolean');
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ServiceStepMetrics.constructFromObject(data['steps']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ReferenceObjectStatus.prototype['id'] = undefined;

/**
 * @member {module:model/StateEnum} state
 */
ReferenceObjectStatus.prototype['state'] = undefined;

/**
 * @member {module:model/ServiceDeploymentStatusEnum} service_deployment_status
 */
ReferenceObjectStatus.prototype['service_deployment_status'] = undefined;

/**
 * @member {Date} last_deployment_date
 */
ReferenceObjectStatus.prototype['last_deployment_date'] = undefined;

/**
 * @member {Boolean} is_part_last_deployment
 */
ReferenceObjectStatus.prototype['is_part_last_deployment'] = undefined;

/**
 * @member {module:model/ServiceStepMetrics} steps
 */
ReferenceObjectStatus.prototype['steps'] = undefined;


// Implement ReferenceObject interface:
/**
 * @member {String} id
 */
ReferenceObject.prototype['id'] = undefined;
// Implement Status interface:
/**
 * @member {String} id
 */
Status.prototype['id'] = undefined;
/**
 * @member {module:model/StateEnum} state
 */
Status.prototype['state'] = undefined;
/**
 * @member {module:model/ServiceDeploymentStatusEnum} service_deployment_status
 */
Status.prototype['service_deployment_status'] = undefined;
/**
 * @member {Date} last_deployment_date
 */
Status.prototype['last_deployment_date'] = undefined;
/**
 * @member {Boolean} is_part_last_deployment
 */
Status.prototype['is_part_last_deployment'] = undefined;
/**
 * @member {module:model/ServiceStepMetrics} steps
 */
Status.prototype['steps'] = undefined;




export default ReferenceObjectStatus;

