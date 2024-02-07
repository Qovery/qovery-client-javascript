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


import ApiClient from "../ApiClient";
import EnvironmentDeploymentRule from '../model/EnvironmentDeploymentRule';
import EnvironmentDeploymentRuleEditRequest from '../model/EnvironmentDeploymentRuleEditRequest';

/**
* EnvironmentDeploymentRule service.
* @module api/EnvironmentDeploymentRuleApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class EnvironmentDeploymentRuleApi {

    /**
    * Constructs a new EnvironmentDeploymentRuleApi. 
    * @alias module:api/EnvironmentDeploymentRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the editEnvironmentDeploymentRule operation.
     * @callback module:api/EnvironmentDeploymentRuleApi~editEnvironmentDeploymentRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentDeploymentRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an environment deployment rule
     * @param {String} environmentId Environment ID
     * @param {String} deploymentRuleId Deployment Rule ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentDeploymentRuleEditRequest} [environmentDeploymentRuleEditRequest] 
     * @param {module:api/EnvironmentDeploymentRuleApi~editEnvironmentDeploymentRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentDeploymentRule}
     */
    editEnvironmentDeploymentRule(environmentId, deploymentRuleId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentDeploymentRuleEditRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling editEnvironmentDeploymentRule");
      }
      // verify the required parameter 'deploymentRuleId' is set
      if (deploymentRuleId === undefined || deploymentRuleId === null) {
        throw new Error("Missing the required parameter 'deploymentRuleId' when calling editEnvironmentDeploymentRule");
      }

      let pathParams = {
        'environmentId': environmentId,
        'deploymentRuleId': deploymentRuleId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EnvironmentDeploymentRule;
      return this.apiClient.callApi(
        '/environment/{environmentId}/deploymentRule/{deploymentRuleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentDeploymentRule operation.
     * @callback module:api/EnvironmentDeploymentRuleApi~getEnvironmentDeploymentRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentDeploymentRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get environment deployment rule
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentDeploymentRuleApi~getEnvironmentDeploymentRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentDeploymentRule}
     */
    getEnvironmentDeploymentRule(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentDeploymentRule");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentDeploymentRule;
      return this.apiClient.callApi(
        '/environment/{environmentId}/deploymentRule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
