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
 * The DeploymentHistoryHelmResponseAllOfRepository model module.
 * @module model/DeploymentHistoryHelmResponseAllOfRepository
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryHelmResponseAllOfRepository {
    /**
     * Constructs a new <code>DeploymentHistoryHelmResponseAllOfRepository</code>.
     * If the chart source if from a repository, the chart name and its version
     * @alias module:model/DeploymentHistoryHelmResponseAllOfRepository
     */
    constructor() { 
        
        DeploymentHistoryHelmResponseAllOfRepository.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentHistoryHelmResponseAllOfRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryHelmResponseAllOfRepository} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryHelmResponseAllOfRepository} The populated <code>DeploymentHistoryHelmResponseAllOfRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryHelmResponseAllOfRepository();

            if (data.hasOwnProperty('chart_name')) {
                obj['chart_name'] = ApiClient.convertToType(data['chart_name'], 'String');
            }
            if (data.hasOwnProperty('chart_version')) {
                obj['chart_version'] = ApiClient.convertToType(data['chart_version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} chart_name
 */
DeploymentHistoryHelmResponseAllOfRepository.prototype['chart_name'] = undefined;

/**
 * @member {String} chart_version
 */
DeploymentHistoryHelmResponseAllOfRepository.prototype['chart_version'] = undefined;






export default DeploymentHistoryHelmResponseAllOfRepository;

