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
import HelmDeployRequest from '../model/HelmDeployRequest';
import HelmForceEvent from '../model/HelmForceEvent';
import Status from '../model/Status';

/**
* HelmActions service.
* @module api/HelmActionsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class HelmActionsApi {

    /**
    * Constructs a new HelmActionsApi. 
    * @alias module:api/HelmActionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deployHelm operation.
     * @callback module:api/HelmActionsApi~deployHelmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy helm
     * You must provide a git commit id or an image tag depending on the source location of your code (git vs image repository).
     * @param {String} helmId Helm ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmForceEvent} opts.forceEvent When filled, it indicates the target event to be deployed.   If the concerned helm hasn't the target event provided, the helm won't be deployed. 
     * @param {module:model/HelmDeployRequest} opts.helmDeployRequest 
     * @param {module:api/HelmActionsApi~deployHelmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployHelm(helmId, opts, callback) {
      opts = opts || {};
      let postBody = opts['helmDeployRequest'];
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling deployHelm");
      }

      let pathParams = {
        'helmId': helmId
      };
      let queryParams = {
        'forceEvent': opts['forceEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/helm/{helmId}/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restartHelm operation.
     * @callback module:api/HelmActionsApi~restartHelmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deprecated - Restart helm
     * **Deprecated** - Please use the \"Redeploy helm\" endpoint now
     * @param {String} helmId Helm ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmForceEvent} opts.forceEvent When filled, it indicates the target event to be deployed.   If the concerned helm hasn't the target event provided, the helm won't be deployed. 
     * @param {module:api/HelmActionsApi~restartHelmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    restartHelm(helmId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling restartHelm");
      }

      let pathParams = {
        'helmId': helmId
      };
      let queryParams = {
        'forceEvent': opts['forceEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/helm/{helmId}/restart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopHelm operation.
     * @callback module:api/HelmActionsApi~stopHelmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop helm
     * @param {String} helmId Helm ID
     * @param {module:api/HelmActionsApi~stopHelmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    stopHelm(helmId, callback) {
      let postBody = null;
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling stopHelm");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/helm/{helmId}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
