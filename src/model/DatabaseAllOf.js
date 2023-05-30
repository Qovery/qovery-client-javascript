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

/**
 * The DatabaseAllOf model module.
 * @module model/DatabaseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DatabaseAllOf {
    /**
     * Constructs a new <code>DatabaseAllOf</code>.
     * @alias module:model/DatabaseAllOf
     */
    constructor() { 
        
        DatabaseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatabaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseAllOf} obj Optional instance to populate.
     * @return {module:model/DatabaseAllOf} The populated <code>DatabaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseAllOf();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('maximum_cpu')) {
                obj['maximum_cpu'] = ApiClient.convertToType(data['maximum_cpu'], 'Number');
            }
            if (data.hasOwnProperty('maximum_memory')) {
                obj['maximum_memory'] = ApiClient.convertToType(data['maximum_memory'], 'Number');
            }
            if (data.hasOwnProperty('disk_encrypted')) {
                obj['disk_encrypted'] = ApiClient.convertToType(data['disk_encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReferenceObject} environment
 */
DatabaseAllOf.prototype['environment'] = undefined;

/**
 * @member {String} host
 */
DatabaseAllOf.prototype['host'] = undefined;

/**
 * @member {Number} port
 */
DatabaseAllOf.prototype['port'] = undefined;

/**
 * Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
DatabaseAllOf.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
DatabaseAllOf.prototype['maximum_memory'] = undefined;

/**
 * indicates if the database disk is encrypted or not
 * @member {Boolean} disk_encrypted
 */
DatabaseAllOf.prototype['disk_encrypted'] = undefined;

/**
 * Database instance type to be used for this database. The list of values can be retrieved via the endpoint /{CloudProvider}/managedDatabase/instanceType/{region}/{dbType}. This field is null for container DB.
 * @member {String} instance_type
 */
DatabaseAllOf.prototype['instance_type'] = undefined;






export default DatabaseAllOf;

