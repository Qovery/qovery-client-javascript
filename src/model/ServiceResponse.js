/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
import BaseResponse from './BaseResponse';

/**
 * The ServiceResponse model module.
 * @module model/ServiceResponse
 * @version 1.0.0
 */
class ServiceResponse {
    /**
     * Constructs a new <code>ServiceResponse</code>.
     * @alias module:model/ServiceResponse
     * @implements module:model/BaseResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);
        ServiceResponse.initialize(this, id, createdAt);
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
     * Constructs a <code>ServiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResponse} obj Optional instance to populate.
     * @return {module:model/ServiceResponse} The populated <code>ServiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceResponse();
            BaseResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('deployed_commit_id')) {
                obj['deployed_commit_id'] = ApiClient.convertToType(data['deployed_commit_id'], 'String');
            }
            if (data.hasOwnProperty('last_updated_by')) {
                obj['last_updated_by'] = ApiClient.convertToType(data['last_updated_by'], 'String');
            }
            if (data.hasOwnProperty('consumed_resources_in_percent')) {
                obj['consumed_resources_in_percent'] = ApiClient.convertToType(data['consumed_resources_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('service_typology')) {
                obj['service_typology'] = ApiClient.convertToType(data['service_typology'], 'String');
            }
            if (data.hasOwnProperty('service_version')) {
                obj['service_version'] = ApiClient.convertToType(data['service_version'], 'String');
            }
            if (data.hasOwnProperty('to_update')) {
                obj['to_update'] = ApiClient.convertToType(data['to_update'], 'Boolean');
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
 * type of the service (application, database, job, gateway...)
 * @member {module:model/ServiceResponse.TypeEnum} type
 */
ServiceResponse.prototype['type'] = undefined;

/**
 * name of the service
 * @member {String} name
 */
ServiceResponse.prototype['name'] = undefined;

/**
 * uuid of the associated service (application, database, job, gateway...)
 * @member {String} id
 */
ServiceResponse.prototype['id'] = undefined;

/**
 * Git commit ID corresponding to the deployed version of the application
 * @member {String} deployed_commit_id
 */
ServiceResponse.prototype['deployed_commit_id'] = undefined;

/**
 * uuid of the user that made the last update
 * @member {String} last_updated_by
 */
ServiceResponse.prototype['last_updated_by'] = undefined;

/**
 * global overview of resources consumption of the service
 * @member {Number} consumed_resources_in_percent
 */
ServiceResponse.prototype['consumed_resources_in_percent'] = undefined;

/**
 * describes the typology of service (container, postgresl, redis...)
 * @member {String} service_typology
 */
ServiceResponse.prototype['service_typology'] = undefined;

/**
 * for databases this field exposes the database version
 * @member {String} service_version
 */
ServiceResponse.prototype['service_version'] = undefined;

/**
 * @member {Boolean} to_update
 */
ServiceResponse.prototype['to_update'] = undefined;

/**
 * @member {Date} created_at
 */
ServiceResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ServiceResponse.prototype['updated_at'] = undefined;


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
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ServiceResponse['TypeEnum'] = {

    /**
     * value: "APPLICATION"
     * @const
     */
    "APPLICATION": "APPLICATION",

    /**
     * value: "DATABASE"
     * @const
     */
    "DATABASE": "DATABASE"
};



export default ServiceResponse;

