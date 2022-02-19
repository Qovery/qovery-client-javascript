/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
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
* ApplicationEvent service.
* @module api/ApplicationEventApi
* @version 1.0.2
*/
export default class ApplicationEventApi {

    /**
    * Constructs a new ApplicationEventApi. 
    * @alias module:api/ApplicationEventApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listApplicationEvent operation.
     * @callback module:api/ApplicationEventApi~listApplicationEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventPaginatedResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List application events
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startId Starting point after which to return results
     * @param {module:api/ApplicationEventApi~listApplicationEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventPaginatedResponseList}
     */
    listApplicationEvent(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationEvent");
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
      let returnType = EventPaginatedResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/event', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
