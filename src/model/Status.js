/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
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

/**
 * The Status model module.
 * @module model/Status
 * @version 1.0.0
 */
class Status {
    /**
     * Constructs a new <code>Status</code>.
     * @alias module:model/Status
     * @param state {module:model/Status.StateEnum} Status is a state machine. It starts with `BUILDING` or `DEPLOYING` state (or `INITIALIZED`if auto-deploy is deactivated). Then finish with `*_ERROR` or any termination state. 
     */
    constructor(state) { 
        
        Status.initialize(this, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state) { 
        obj['state'] = state;
    }

    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Status} obj Optional instance to populate.
     * @return {module:model/Status} The populated <code>Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('service_deployment_status')) {
                obj['service_deployment_status'] = ApiClient.convertToType(data['service_deployment_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Status.prototype['id'] = undefined;

/**
 * Status is a state machine. It starts with `BUILDING` or `DEPLOYING` state (or `INITIALIZED`if auto-deploy is deactivated). Then finish with `*_ERROR` or any termination state. 
 * @member {module:model/Status.StateEnum} state
 */
Status.prototype['state'] = undefined;

/**
 * message related to the state
 * @member {String} message
 */
Status.prototype['message'] = undefined;

/**
 * @member {module:model/Status.ServiceDeploymentStatusEnum} service_deployment_status
 */
Status.prototype['service_deployment_status'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Status['StateEnum'] = {

    /**
     * value: "INITIALIZED"
     * @const
     */
    "INITIALIZED": "INITIALIZED",

    /**
     * value: "BUILDING_QUEUED"
     * @const
     */
    "BUILDING_QUEUED": "BUILDING_QUEUED",

    /**
     * value: "BUILDING"
     * @const
     */
    "BUILDING": "BUILDING",

    /**
     * value: "BUILD_ERROR"
     * @const
     */
    "BUILD_ERROR": "BUILD_ERROR",

    /**
     * value: "BUILT"
     * @const
     */
    "BUILT": "BUILT",

    /**
     * value: "DEPLOYMENT_QUEUED"
     * @const
     */
    "DEPLOYMENT_QUEUED": "DEPLOYMENT_QUEUED",

    /**
     * value: "DEPLOYING"
     * @const
     */
    "DEPLOYING": "DEPLOYING",

    /**
     * value: "DEPLOYMENT_ERROR"
     * @const
     */
    "DEPLOYMENT_ERROR": "DEPLOYMENT_ERROR",

    /**
     * value: "DEPLOYED"
     * @const
     */
    "DEPLOYED": "DEPLOYED",

    /**
     * value: "STOP_QUEUED"
     * @const
     */
    "STOP_QUEUED": "STOP_QUEUED",

    /**
     * value: "STOPPING"
     * @const
     */
    "STOPPING": "STOPPING",

    /**
     * value: "STOP_ERROR"
     * @const
     */
    "STOP_ERROR": "STOP_ERROR",

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED",

    /**
     * value: "DELETE_QUEUED"
     * @const
     */
    "DELETE_QUEUED": "DELETE_QUEUED",

    /**
     * value: "DELETING"
     * @const
     */
    "DELETING": "DELETING",

    /**
     * value: "DELETE_ERROR"
     * @const
     */
    "DELETE_ERROR": "DELETE_ERROR",

    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED",

    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING",

    /**
     * value: "RUNNING_ERROR"
     * @const
     */
    "RUNNING_ERROR": "RUNNING_ERROR",

    /**
     * value: "CANCEL_QUEUED"
     * @const
     */
    "CANCEL_QUEUED": "CANCEL_QUEUED",

    /**
     * value: "CANCELLING"
     * @const
     */
    "CANCELLING": "CANCELLING",

    /**
     * value: "CANCEL_ERROR"
     * @const
     */
    "CANCEL_ERROR": "CANCEL_ERROR",

    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED"
};


/**
 * Allowed values for the <code>service_deployment_status</code> property.
 * @enum {String}
 * @readonly
 */
Status['ServiceDeploymentStatusEnum'] = {

    /**
     * value: "NEVER_DEPLOYED"
     * @const
     */
    "NEVER_DEPLOYED": "NEVER_DEPLOYED",

    /**
     * value: "UP_TO_DATE"
     * @const
     */
    "UP_TO_DATE": "UP_TO_DATE",

    /**
     * value: "OUT_OF_DATE"
     * @const
     */
    "OUT_OF_DATE": "OUT_OF_DATE"
};



export default Status;

