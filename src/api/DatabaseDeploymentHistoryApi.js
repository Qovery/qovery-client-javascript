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
import ListDatabaseDeploymentHistory200Response from '../model/ListDatabaseDeploymentHistory200Response';

/**
* DatabaseDeploymentHistory service.
* @module api/DatabaseDeploymentHistoryApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class DatabaseDeploymentHistoryApi {

    /**
    * Constructs a new DatabaseDeploymentHistoryApi. 
    * @alias module:api/DatabaseDeploymentHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listDatabaseDeploymentHistory operation.
     * @callback module:api/DatabaseDeploymentHistoryApi~listDatabaseDeploymentHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDatabaseDeploymentHistory200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List database deploys
     * By default it returns the 20 last results. The response is paginated.
     * @param {String} databaseId Database ID
     * @param {Object} opts Optional parameters
     * @param {String} [startId] Starting point after which to return results
     * @param {module:api/DatabaseDeploymentHistoryApi~listDatabaseDeploymentHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDatabaseDeploymentHistory200Response}
     */
    listDatabaseDeploymentHistory(databaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling listDatabaseDeploymentHistory");
      }

      let pathParams = {
        'databaseId': databaseId
      };
      let queryParams = {
        'startId': opts['startId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDatabaseDeploymentHistory200Response;
      return this.apiClient.callApi(
        '/database/{databaseId}/deploymentHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
