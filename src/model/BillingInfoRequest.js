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
 * The BillingInfoRequest model module.
 * @module model/BillingInfoRequest
 * @version 1.0.3
 */
class BillingInfoRequest {
    /**
     * Constructs a new <code>BillingInfoRequest</code>.
     * @alias module:model/BillingInfoRequest
     * @param firstName {String} 
     * @param lastName {String} 
     * @param email {String} email used for billing, and to receive all invoices by email
     * @param address {String} 
     * @param city {String} 
     * @param zip {String} 
     * @param countryCode {String} ISO code of the country
     */
    constructor(firstName, lastName, email, address, city, zip, countryCode) { 
        
        BillingInfoRequest.initialize(this, firstName, lastName, email, address, city, zip, countryCode);
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
     * Constructs a <code>BillingInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingInfoRequest} obj Optional instance to populate.
     * @return {module:model/BillingInfoRequest} The populated <code>BillingInfoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingInfoRequest();

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
BillingInfoRequest.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
BillingInfoRequest.prototype['last_name'] = undefined;

/**
 * email used for billing, and to receive all invoices by email
 * @member {String} email
 */
BillingInfoRequest.prototype['email'] = undefined;

/**
 * @member {String} address
 */
BillingInfoRequest.prototype['address'] = undefined;

/**
 * @member {String} city
 */
BillingInfoRequest.prototype['city'] = undefined;

/**
 * @member {String} zip
 */
BillingInfoRequest.prototype['zip'] = undefined;

/**
 * only for US
 * @member {String} state
 */
BillingInfoRequest.prototype['state'] = undefined;

/**
 * ISO code of the country
 * @member {String} country_code
 */
BillingInfoRequest.prototype['country_code'] = undefined;

/**
 * name of the company to bill
 * @member {String} company
 */
BillingInfoRequest.prototype['company'] = undefined;

/**
 * @member {String} vat_number
 */
BillingInfoRequest.prototype['vat_number'] = undefined;






export default BillingInfoRequest;

