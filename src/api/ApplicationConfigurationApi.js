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
import ApplicationNetworkRequest from '../model/ApplicationNetworkRequest';
import ApplicationNetworkResponse from '../model/ApplicationNetworkResponse';

/**
* ApplicationConfiguration service.
* @module api/ApplicationConfigurationApi
* @version 1.0.3
*/
export default class ApplicationConfigurationApi {

    /**
    * Constructs a new ApplicationConfigurationApi. 
    * @alias module:api/ApplicationConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the editApplicationNetwork operation.
     * @callback module:api/ApplicationConfigurationApi~editApplicationNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationNetworkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Application Network
     * Edit the Network settings of the application.
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationNetworkRequest} opts.applicationNetworkRequest 
     * @param {module:api/ApplicationConfigurationApi~editApplicationNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationNetworkResponse}
     */
    editApplicationNetwork(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationNetworkRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editApplicationNetwork");
      }

      let pathParams = {
        'applicationId': applicationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApplicationNetworkResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/network', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationNetwork operation.
     * @callback module:api/ApplicationConfigurationApi~getApplicationNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationNetworkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Application Network information
     * Get status of the application network settings.
     * @param {String} applicationId Application ID
     * @param {module:api/ApplicationConfigurationApi~getApplicationNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationNetworkResponse}
     */
    getApplicationNetwork(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationNetwork");
      }

      let pathParams = {
        'applicationId': applicationId
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
      let returnType = ApplicationNetworkResponse;
      return this.apiClient.callApi(
        '/application/{applicationId}/network', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
