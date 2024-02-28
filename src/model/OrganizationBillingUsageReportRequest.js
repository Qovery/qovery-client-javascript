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
 * The OrganizationBillingUsageReportRequest model module.
 * @module model/OrganizationBillingUsageReportRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationBillingUsageReportRequest {
    /**
     * Constructs a new <code>OrganizationBillingUsageReportRequest</code>.
     * @alias module:model/OrganizationBillingUsageReportRequest
     * @param from {Date} The start date of the report
     * @param to {Date} The end date of the report
     * @param reportExpirationInSeconds {Number} The number of seconds the report will be publicly available
     */
    constructor(from, to, reportExpirationInSeconds) { 
        
        OrganizationBillingUsageReportRequest.initialize(this, from, to, reportExpirationInSeconds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from, to, reportExpirationInSeconds) { 
        obj['from'] = from;
        obj['to'] = to;
        obj['report_expiration_in_seconds'] = reportExpirationInSeconds;
    }

    /**
     * Constructs a <code>OrganizationBillingUsageReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationBillingUsageReportRequest} obj Optional instance to populate.
     * @return {module:model/OrganizationBillingUsageReportRequest} The populated <code>OrganizationBillingUsageReportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationBillingUsageReportRequest();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
            if (data.hasOwnProperty('report_expiration_in_seconds')) {
                obj['report_expiration_in_seconds'] = ApiClient.convertToType(data['report_expiration_in_seconds'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The start date of the report
 * @member {Date} from
 */
OrganizationBillingUsageReportRequest.prototype['from'] = undefined;

/**
 * The end date of the report
 * @member {Date} to
 */
OrganizationBillingUsageReportRequest.prototype['to'] = undefined;

/**
 * The number of seconds the report will be publicly available
 * @member {Number} report_expiration_in_seconds
 */
OrganizationBillingUsageReportRequest.prototype['report_expiration_in_seconds'] = undefined;






export default OrganizationBillingUsageReportRequest;
