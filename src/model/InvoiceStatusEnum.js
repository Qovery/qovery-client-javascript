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
/**
* Enum class InvoiceStatusEnum.
* @enum {}
* @readonly
*/
export default class InvoiceStatusEnum {
    
        /**
         * value: "NOT_PAID"
         * @const
         */
        "NOT_PAID" = "NOT_PAID";

    
        /**
         * value: "PAID"
         * @const
         */
        "PAID" = "PAID";

    
        /**
         * value: "PAYMENT_DUE"
         * @const
         */
        "PAYMENT_DUE" = "PAYMENT_DUE";

    
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING" = "PENDING";

    
        /**
         * value: "POSTED"
         * @const
         */
        "POSTED" = "POSTED";

    
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN" = "UNKNOWN";

    
        /**
         * value: "VOIDED"
         * @const
         */
        "VOIDED" = "VOIDED";

    

    /**
    * Returns a <code>InvoiceStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InvoiceStatusEnum} The enum <code>InvoiceStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
