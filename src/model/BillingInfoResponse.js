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
 * The BillingInfoResponse model module.
 * @module model/BillingInfoResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class BillingInfoResponse {
    /**
     * Constructs a new <code>BillingInfoResponse</code>.
     * @alias module:model/BillingInfoResponse
     * @param firstName {String} 
     * @param lastName {String} 
     * @param email {String} email used for billing, and to receive all invoices by email
     * @param address {String} 
     * @param city {String} 
     * @param zip {String} 
     * @param countryCode {String} ISO code of the country
     */
    constructor(firstName, lastName, email, address, city, zip, countryCode) { 
        
        BillingInfoResponse.initialize(this, firstName, lastName, email, address, city, zip, countryCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, email, address, city, zip, countryCode) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['email'] = email;
        obj['address'] = address;
        obj['city'] = city;
        obj['zip'] = zip;
        obj['country_code'] = countryCode;
    }

    /**
     * Constructs a <code>BillingInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingInfoResponse} obj Optional instance to populate.
     * @return {module:model/BillingInfoResponse} The populated <code>BillingInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingInfoResponse();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('vat_number')) {
                obj['vat_number'] = ApiClient.convertToType(data['vat_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
BillingInfoResponse.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
BillingInfoResponse.prototype['last_name'] = undefined;

/**
 * email used for billing, and to receive all invoices by email
 * @member {String} email
 */
BillingInfoResponse.prototype['email'] = undefined;

/**
 * @member {String} address
 */
BillingInfoResponse.prototype['address'] = undefined;

/**
 * @member {String} city
 */
BillingInfoResponse.prototype['city'] = undefined;

/**
 * @member {String} zip
 */
BillingInfoResponse.prototype['zip'] = undefined;

/**
 * only for US
 * @member {String} state
 */
BillingInfoResponse.prototype['state'] = undefined;

/**
 * ISO code of the country
 * @member {String} country_code
 */
BillingInfoResponse.prototype['country_code'] = undefined;

/**
 * name of the company to bill
 * @member {String} company
 */
BillingInfoResponse.prototype['company'] = undefined;

/**
 * @member {String} vat_number
 */
BillingInfoResponse.prototype['vat_number'] = undefined;






export default BillingInfoResponse;

