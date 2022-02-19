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
import ReferenceObject from './ReferenceObject';

/**
 * The EnvironmentResponse model module.
 * @module model/EnvironmentResponse
 * @version 1.0.3
 */
class EnvironmentResponse {
    /**
     * Constructs a new <code>EnvironmentResponse</code>.
     * @alias module:model/EnvironmentResponse
     * @implements module:model/BaseResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);
        EnvironmentResponse.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['name'] = name;
        obj['cloud_provider'] = cloudProvider;
        obj['mode'] = mode;
        obj['cluster_id'] = clusterId;
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>EnvironmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentResponse} The populated <code>EnvironmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentResponse();
            BaseResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ReferenceObject.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('last_updated_by')) {
                obj['last_updated_by'] = ApiClient.convertToType(data['last_updated_by'], 'String');
            }
            if (data.hasOwnProperty('cloud_provider')) {
                obj['cloud_provider'] = ApiClient.convertToType(data['cloud_provider'], Object);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
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
 * name is case insensitive
 * @member {String} name
 */
EnvironmentResponse.prototype['name'] = undefined;

/**
 * @member {module:model/ReferenceObject} project
 */
EnvironmentResponse.prototype['project'] = undefined;

/**
 * uuid of the user that made the last update
 * @member {String} last_updated_by
 */
EnvironmentResponse.prototype['last_updated_by'] = undefined;

/**
 * @member {Object} cloud_provider
 */
EnvironmentResponse.prototype['cloud_provider'] = undefined;

/**
 * @member {module:model/EnvironmentResponse.ModeEnum} mode
 */
EnvironmentResponse.prototype['mode'] = undefined;

/**
 * @member {String} cluster_id
 */
EnvironmentResponse.prototype['cluster_id'] = undefined;

/**
 * @member {String} id
 */
EnvironmentResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentResponse.prototype['updated_at'] = undefined;


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
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentResponse['ModeEnum'] = {

    /**
     * value: "PRODUCTION"
     * @const
     */
    "PRODUCTION": "PRODUCTION",

    /**
     * value: "DEVELOPMENT"
     * @const
     */
    "DEVELOPMENT": "DEVELOPMENT",

    /**
     * value: "STAGING"
     * @const
     */
    "STAGING": "STAGING",

    /**
     * value: "PREVIEW"
     * @const
     */
    "PREVIEW": "PREVIEW"
};



export default EnvironmentResponse;

