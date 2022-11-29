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
import ListJobDeploymentHistory200Response from '../model/ListJobDeploymentHistory200Response';

/**
* JobDeploymentHistory service.
* @module api/JobDeploymentHistoryApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class JobDeploymentHistoryApi {

    /**
    * Constructs a new JobDeploymentHistoryApi. 
    * @alias module:api/JobDeploymentHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listJobDeploymentHistory operation.
     * @callback module:api/JobDeploymentHistoryApi~listJobDeploymentHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListJobDeploymentHistory200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List job deployments
     * Returns the 20 last job deployments
     * @param {String} jobId Job ID
     * @param {module:api/JobDeploymentHistoryApi~listJobDeploymentHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListJobDeploymentHistory200Response}
     */
    listJobDeploymentHistory(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling listJobDeploymentHistory");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListJobDeploymentHistory200Response;
      return this.apiClient.callApi(
        '/job/{jobId}/deploymentHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
