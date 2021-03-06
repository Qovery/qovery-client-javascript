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
import InvoiceStatusEnum from './InvoiceStatusEnum';

/**
 * The InvoiceAllOf model module.
 * @module model/InvoiceAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class InvoiceAllOf {
    /**
     * Constructs a new <code>InvoiceAllOf</code>.
     * @alias module:model/InvoiceAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param status {module:model/InvoiceStatusEnum} 
     */
    constructor(id, createdAt, status) { 
        
        InvoiceAllOf.initialize(this, id, createdAt, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, status) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>InvoiceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceAllOf} obj Optional instance to populate.
     * @return {module:model/InvoiceAllOf} The populated <code>InvoiceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvoiceStatusEnum.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InvoiceAllOf.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
InvoiceAllOf.prototype['created_at'] = undefined;

/**
 * @member {module:model/InvoiceStatusEnum} status
 */
InvoiceAllOf.prototype['status'] = undefined;






export default InvoiceAllOf;

