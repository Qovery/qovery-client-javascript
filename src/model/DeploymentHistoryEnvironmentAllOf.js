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
import DeploymentHistoryApplication from './DeploymentHistoryApplication';
import DeploymentHistoryContainer from './DeploymentHistoryContainer';
import DeploymentHistoryDatabase from './DeploymentHistoryDatabase';
import DeploymentHistoryJobResponse from './DeploymentHistoryJobResponse';
import StateEnum from './StateEnum';

/**
 * The DeploymentHistoryEnvironmentAllOf model module.
 * @module model/DeploymentHistoryEnvironmentAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryEnvironmentAllOf {
    /**
     * Constructs a new <code>DeploymentHistoryEnvironmentAllOf</code>.
     * @alias module:model/DeploymentHistoryEnvironmentAllOf
     */
    constructor() { 
        
        DeploymentHistoryEnvironmentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentHistoryEnvironmentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryEnvironmentAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryEnvironmentAllOf} The populated <code>DeploymentHistoryEnvironmentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryEnvironmentAllOf();

            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], [DeploymentHistoryApplication]);
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [DeploymentHistoryContainer]);
            }
            if (data.hasOwnProperty('databases')) {
                obj['databases'] = ApiClient.convertToType(data['databases'], [DeploymentHistoryDatabase]);
            }
            if (data.hasOwnProperty('jobs')) {
                obj['jobs'] = ApiClient.convertToType(data['jobs'], [DeploymentHistoryJobResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryEnvironmentAllOf.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryApplication>} applications
 */
DeploymentHistoryEnvironmentAllOf.prototype['applications'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryContainer>} containers
 */
DeploymentHistoryEnvironmentAllOf.prototype['containers'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryDatabase>} databases
 */
DeploymentHistoryEnvironmentAllOf.prototype['databases'] = undefined;

/**
 * @member {Array.<module:model/DeploymentHistoryJobResponse>} jobs
 */
DeploymentHistoryEnvironmentAllOf.prototype['jobs'] = undefined;






export default DeploymentHistoryEnvironmentAllOf;

