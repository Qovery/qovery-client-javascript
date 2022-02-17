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
import AccountInfoResponse from '../model/AccountInfoResponse';

/**
* AccountInfo service.
* @module api/AccountInfoApi
* @version 1.0.0
*/
export default class AccountInfoApi {

    /**
    * Constructs a new AccountInfoApi. 
    * @alias module:api/AccountInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAccountInformation operation.
     * @callback module:api/AccountInfoApi~getAccountInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account information
     * @param {module:api/AccountInfoApi~getAccountInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountInfoResponse}
     */
    getAccountInformation(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = AccountInfoResponse;
      return this.apiClient.callApi(
        '/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
