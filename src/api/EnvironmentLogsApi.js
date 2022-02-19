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
import EnvironmentLogResponseList from '../model/EnvironmentLogResponseList';

/**
* EnvironmentLogs service.
* @module api/EnvironmentLogsApi
* @version 1.0.3
*/
export default class EnvironmentLogsApi {

    /**
    * Constructs a new EnvironmentLogsApi. 
    * @alias module:api/EnvironmentLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listEnvironmentLog operation.
     * @callback module:api/EnvironmentLogsApi~listEnvironmentLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentLogResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environment deployment logs
     * This returns the last 1000 environment deployment logs.
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentLogsApi~listEnvironmentLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentLogResponseList}
     */
    listEnvironmentLog(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listEnvironmentLog");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentLogResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
