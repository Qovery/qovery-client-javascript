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
import BaseResponse from './BaseResponse';
import CommitResponse from './CommitResponse';

/**
 * The DeploymentHistoryApplicationResponse model module.
 * @module model/DeploymentHistoryApplicationResponse
 * @version 1.0.3
 */
class DeploymentHistoryApplicationResponse {
    /**
     * Constructs a new <code>DeploymentHistoryApplicationResponse</code>.
     * @alias module:model/DeploymentHistoryApplicationResponse
     * @implements module:model/BaseResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);
        DeploymentHistoryApplicationResponse.initialize(this, id, createdAt);
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
     * Constructs a <code>DeploymentHistoryApplicationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryApplicationResponse} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryApplicationResponse} The populated <code>DeploymentHistoryApplicationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryApplicationResponse();
            BaseResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = CommitResponse.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeploymentHistoryApplicationResponse.prototype['name'] = undefined;

/**
 * @member {module:model/CommitResponse} commit
 */
DeploymentHistoryApplicationResponse.prototype['commit'] = undefined;

/**
 * @member {module:model/DeploymentHistoryApplicationResponse.StatusEnum} status
 */
DeploymentHistoryApplicationResponse.prototype['status'] = undefined;

/**
 * @member {String} id
 */
DeploymentHistoryApplicationResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
DeploymentHistoryApplicationResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DeploymentHistoryApplicationResponse.prototype['updated_at'] = undefined;


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



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentHistoryApplicationResponse['StatusEnum'] = {

    /**
     * value: "READY"
     * @const
     */
    "READY": "READY",

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
    "RUNNING_ERROR": "RUNNING_ERROR"
};



export default DeploymentHistoryApplicationResponse;

