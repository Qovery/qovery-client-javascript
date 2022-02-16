/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeploymentHistoryPaginatedResponseList from '../model/DeploymentHistoryPaginatedResponseList';

/**
* ApplicationDeploymentHistory service.
* @module api/ApplicationDeploymentHistoryApi
* @version 1.0.0
*/
export default class ApplicationDeploymentHistoryApi {

    /**
    * Constructs a new ApplicationDeploymentHistoryApi. 
    * @alias module:api/ApplicationDeploymentHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listApplicationDeploymentHistory operation.
     * @callback module:api/ApplicationDeploymentHistoryApi~listApplicationDeploymentHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentHistoryPaginatedResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List application deploys
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter. You can also filter by status (FAILED or SUCCESS), and git_commit_id
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startId Starting point after which to return results
     * @param {module:api/ApplicationDeploymentHistoryApi~listApplicationDeploymentHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentHistoryPaginatedResponseList}
     */
    listApplicationDeploymentHistory(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationDeploymentHistory");
      }

      let pathParams = {
        'applicationId': applicationId
      };
      let queryParams = {
        'startId': opts['startId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeploymentHistoryPaginatedResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/deploymentHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
