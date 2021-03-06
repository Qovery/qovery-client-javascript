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
import ServiceAllOf from './ServiceAllOf';
import ServiceTypeEnum from './ServiceTypeEnum';

/**
 * The Service model module.
 * @module model/Service
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Service {
    /**
     * Constructs a new <code>Service</code>.
     * @alias module:model/Service
     * @implements module:model/Base
     * @implements module:model/ServiceAllOf
     * @param id {String} uuid of the associated service (application, database, job, gateway...)
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);ServiceAllOf.initialize(this, id);
        Service.initialize(this, id, createdAt);
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
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Service();
            Base.constructFromObject(data, obj);
            ServiceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ServiceTypeEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
        }
        return obj;
    }


}

/**
 * uuid of the associated service (application, database, job, gateway...)
 * @member {String} id
 */
Service.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Service.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Service.prototype['updated_at'] = undefined;

/**
 * @member {module:model/ServiceTypeEnum} type
 */
Service.prototype['type'] = undefined;

/**
 * name of the service
 * @member {String} name
 */
Service.prototype['name'] = undefined;

/**
 * Git commit ID corresponding to the deployed version of the application
 * @member {String} deployed_commit_id
 */
Service.prototype['deployed_commit_id'] = undefined;

/**
 * uuid of the user that made the last update
 * @member {String} last_updated_by
 */
Service.prototype['last_updated_by'] = undefined;

/**
 * global overview of resources consumption of the service
 * @member {Number} consumed_resources_in_percent
 */
Service.prototype['consumed_resources_in_percent'] = undefined;

/**
 * describes the typology of service (container, postgresl, redis...)
 * @member {String} service_typology
 */
Service.prototype['service_typology'] = undefined;

/**
 * for databases this field exposes the database version
 * @member {String} service_version
 */
Service.prototype['service_version'] = undefined;

/**
 * @member {Boolean} to_update
 */
Service.prototype['to_update'] = undefined;


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
// Implement ServiceAllOf interface:
/**
 * @member {module:model/ServiceTypeEnum} type
 */
ServiceAllOf.prototype['type'] = undefined;
/**
 * name of the service
 * @member {String} name
 */
ServiceAllOf.prototype['name'] = undefined;
/**
 * uuid of the associated service (application, database, job, gateway...)
 * @member {String} id
 */
ServiceAllOf.prototype['id'] = undefined;
/**
 * Git commit ID corresponding to the deployed version of the application
 * @member {String} deployed_commit_id
 */
ServiceAllOf.prototype['deployed_commit_id'] = undefined;
/**
 * uuid of the user that made the last update
 * @member {String} last_updated_by
 */
ServiceAllOf.prototype['last_updated_by'] = undefined;
/**
 * global overview of resources consumption of the service
 * @member {Number} consumed_resources_in_percent
 */
ServiceAllOf.prototype['consumed_resources_in_percent'] = undefined;
/**
 * describes the typology of service (container, postgresl, redis...)
 * @member {String} service_typology
 */
ServiceAllOf.prototype['service_typology'] = undefined;
/**
 * for databases this field exposes the database version
 * @member {String} service_version
 */
ServiceAllOf.prototype['service_version'] = undefined;
/**
 * @member {Boolean} to_update
 */
ServiceAllOf.prototype['to_update'] = undefined;




export default Service;

