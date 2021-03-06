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
     */
    constructor(id, state) { 
        ReferenceObject.initialize(this, id);Status.initialize(this, state);
        ReferenceObjectStatus.initialize(this, id, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, state) { 
        obj['id'] = id;
        obj['state'] = state;
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
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('service_deployment_status')) {
                obj['service_deployment_status'] = ServiceDeploymentStatusEnum.constructFromObject(data['service_deployment_status']);
            }
            if (data.hasOwnProperty('last_deployment_date')) {
                obj['last_deployment_date'] = ApiClient.convertToType(data['last_deployment_date'], 'Date');
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
 * message related to the state
 * @member {String} message
 */
ReferenceObjectStatus.prototype['message'] = undefined;

/**
 * @member {module:model/ServiceDeploymentStatusEnum} service_deployment_status
 */
ReferenceObjectStatus.prototype['service_deployment_status'] = undefined;

/**
 * @member {Date} last_deployment_date
 */
ReferenceObjectStatus.prototype['last_deployment_date'] = undefined;


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
 * message related to the state
 * @member {String} message
 */
Status.prototype['message'] = undefined;
/**
 * @member {module:model/ServiceDeploymentStatusEnum} service_deployment_status
 */
Status.prototype['service_deployment_status'] = undefined;
/**
 * @member {Date} last_deployment_date
 */
Status.prototype['last_deployment_date'] = undefined;




export default ReferenceObjectStatus;

