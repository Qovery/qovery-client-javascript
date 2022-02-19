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
import ApplicationResponseList from '../model/ApplicationResponseList';

/**
* DatabaseApplication service.
* @module api/DatabaseApplicationApi
* @version 1.0.3
*/
export default class DatabaseApplicationApi {

    /**
    * Constructs a new DatabaseApplicationApi. 
    * @alias module:api/DatabaseApplicationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listDatabaseApplication operation.
     * @callback module:api/DatabaseApplicationApi~listDatabaseApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List applications using the database
     * @param {String} databaseId Database ID
     * @param {module:api/DatabaseApplicationApi~listDatabaseApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponseList}
     */
    listDatabaseApplication(databaseId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling listDatabaseApplication");
      }

      let pathParams = {
        'databaseId': databaseId
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
      let returnType = ApplicationResponseList;
      return this.apiClient.callApi(
        '/database/{databaseId}/application', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeApplicationFromDatabase operation.
     * @callback module:api/DatabaseApplicationApi~removeApplicationFromDatabaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an application from this database 
     * @param {String} databaseId Database ID
     * @param {String} targetApplicationId Target application ID
     * @param {module:api/DatabaseApplicationApi~removeApplicationFromDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeApplicationFromDatabase(databaseId, targetApplicationId, callback) {
      let postBody = null;
      // verify the required parameter 'databaseId' is set
      if (databaseId === undefined || databaseId === null) {
        throw new Error("Missing the required parameter 'databaseId' when calling removeApplicationFromDatabase");
      }
      // verify the required parameter 'targetApplicationId' is set
      if (targetApplicationId === undefined || targetApplicationId === null) {
        throw new Error("Missing the required parameter 'targetApplicationId' when calling removeApplicationFromDatabase");
      }

      let pathParams = {
        'databaseId': databaseId,
        'targetApplicationId': targetApplicationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/database/{databaseId}/application/{targetApplicationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
