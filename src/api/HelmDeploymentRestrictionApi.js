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
import HelmDeploymentRestrictionRequest from '../model/HelmDeploymentRestrictionRequest';
import HelmDeploymentRestrictionResponse from '../model/HelmDeploymentRestrictionResponse';
import HelmDeploymentRestrictionResponseList from '../model/HelmDeploymentRestrictionResponseList';

/**
* HelmDeploymentRestriction service.
* @module api/HelmDeploymentRestrictionApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class HelmDeploymentRestrictionApi {

    /**
    * Constructs a new HelmDeploymentRestrictionApi. 
    * @alias module:api/HelmDeploymentRestrictionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createHelmDeploymentRestriction operation.
     * @callback module:api/HelmDeploymentRestrictionApi~createHelmDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmDeploymentRestrictionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a helm deployment restriction
     * Create a helm deployment restriction
     * @param {String} helmId Helm ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmDeploymentRestrictionRequest} opts.helmDeploymentRestrictionRequest 
     * @param {module:api/HelmDeploymentRestrictionApi~createHelmDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmDeploymentRestrictionResponse}
     */
    createHelmDeploymentRestriction(helmId, opts, callback) {
      opts = opts || {};
      let postBody = opts['helmDeploymentRestrictionRequest'];
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling createHelmDeploymentRestriction");
      }

      let pathParams = {
        'helmId': helmId
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
      let returnType = HelmDeploymentRestrictionResponse;
      return this.apiClient.callApi(
        '/helm/{helmId}/deploymentRestriction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHelmDeploymentRestriction operation.
     * @callback module:api/HelmDeploymentRestrictionApi~deleteHelmDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a helm deployment restriction
     * Delete a helm deployment restriction
     * @param {String} helmId Helm ID
     * @param {String} deploymentRestrictionId Deployment Restriction ID
     * @param {module:api/HelmDeploymentRestrictionApi~deleteHelmDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteHelmDeploymentRestriction(helmId, deploymentRestrictionId, callback) {
      let postBody = null;
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling deleteHelmDeploymentRestriction");
      }
      // verify the required parameter 'deploymentRestrictionId' is set
      if (deploymentRestrictionId === undefined || deploymentRestrictionId === null) {
        throw new Error("Missing the required parameter 'deploymentRestrictionId' when calling deleteHelmDeploymentRestriction");
      }

      let pathParams = {
        'helmId': helmId,
        'deploymentRestrictionId': deploymentRestrictionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/helm/{helmId}/deploymentRestriction/{deploymentRestrictionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editHelmDeploymentRestriction operation.
     * @callback module:api/HelmDeploymentRestrictionApi~editHelmDeploymentRestrictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmDeploymentRestrictionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a helm deployment restriction
     * Edit a helm deployment restriction
     * @param {String} helmId Helm ID
     * @param {String} deploymentRestrictionId Deployment Restriction ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmDeploymentRestrictionRequest} opts.helmDeploymentRestrictionRequest 
     * @param {module:api/HelmDeploymentRestrictionApi~editHelmDeploymentRestrictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmDeploymentRestrictionResponse}
     */
    editHelmDeploymentRestriction(helmId, deploymentRestrictionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['helmDeploymentRestrictionRequest'];
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling editHelmDeploymentRestriction");
      }
      // verify the required parameter 'deploymentRestrictionId' is set
      if (deploymentRestrictionId === undefined || deploymentRestrictionId === null) {
        throw new Error("Missing the required parameter 'deploymentRestrictionId' when calling editHelmDeploymentRestriction");
      }

      let pathParams = {
        'helmId': helmId,
        'deploymentRestrictionId': deploymentRestrictionId
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
      let returnType = HelmDeploymentRestrictionResponse;
      return this.apiClient.callApi(
        '/helm/{helmId}/deploymentRestriction/{deploymentRestrictionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getHelmDeploymentRestrictions operation.
     * @callback module:api/HelmDeploymentRestrictionApi~getHelmDeploymentRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmDeploymentRestrictionResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get helm deployment restrictions
     * Get helm deployment restrictions
     * @param {String} helmId Helm ID
     * @param {module:api/HelmDeploymentRestrictionApi~getHelmDeploymentRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmDeploymentRestrictionResponseList}
     */
    getHelmDeploymentRestrictions(helmId, callback) {
      let postBody = null;
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling getHelmDeploymentRestrictions");
      }

      let pathParams = {
        'helmId': helmId
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
      let returnType = HelmDeploymentRestrictionResponseList;
      return this.apiClient.callApi(
        '/helm/{helmId}/deploymentRestriction', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
