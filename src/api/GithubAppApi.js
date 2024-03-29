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
import OrganizationGithubAppConnectRequest from '../model/OrganizationGithubAppConnectRequest';

/**
* GithubApp service.
* @module api/GithubAppApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class GithubAppApi {

    /**
    * Constructs a new GithubAppApi. 
    * @alias module:api/GithubAppApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the organizationGithubAppConnect operation.
     * @callback module:api/GithubAppApi~organizationGithubAppConnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Connect a github account to an organization
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationGithubAppConnectRequest} opts.organizationGithubAppConnectRequest 
     * @param {module:api/GithubAppApi~organizationGithubAppConnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    organizationGithubAppConnect(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationGithubAppConnectRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling organizationGithubAppConnect");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/github/connect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the organizationGithubAppDisconnect operation.
     * @callback module:api/GithubAppApi~organizationGithubAppDisconnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disconnect a github account from an organization
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Indicates if the github app should be disconnected despite github applications linked to organization
     * @param {module:api/GithubAppApi~organizationGithubAppDisconnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    organizationGithubAppDisconnect(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling organizationGithubAppDisconnect");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/github/disconnect', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
