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
import LogResponseList from '../model/LogResponseList';

/**
* ContainerLogs service.
* @module api/ContainerLogsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerLogsApi {

    /**
    * Constructs a new ContainerLogsApi. 
    * @alias module:api/ContainerLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listContainerLog operation.
     * @callback module:api/ContainerLogsApi~listContainerLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List logs
     * This will list the last 1000 logs of the container
     * @param {String} containerId Container ID
     * @param {module:api/ContainerLogsApi~listContainerLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogResponseList}
     */
    listContainerLog(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerLog");
      }

      let pathParams = {
        'containerId': containerId
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
      let returnType = LogResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
