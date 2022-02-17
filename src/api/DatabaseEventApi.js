/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
import EventPaginatedResponseList from '../model/EventPaginatedResponseList';

/**
* DatabaseEvent service.
* @module api/DatabaseEventApi
* @version 1.0.0
*/
export default class DatabaseEventApi {

    /**
    * Constructs a new DatabaseEventApi. 
    * @alias module:api/DatabaseEventApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listDatabaseEvent operation.
     * @callback module:api/DatabaseEventApi~listDatabaseEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventPaginatedResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List database  events
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * @param {String} databaseId Database ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startId Starting point after which to return results
     * @param {module:api/DatabaseEventApi~listDatabaseEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventPaginatedResponseList}
     */
    listDatabaseEvent(databaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling listDatabaseEvent");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EventPaginatedResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/event', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
