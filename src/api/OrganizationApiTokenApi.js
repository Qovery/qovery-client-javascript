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
import OrganizationApiTokenCreateRequest from '../model/OrganizationApiTokenCreateRequest';
import OrganizationApiTokenCreateResponse from '../model/OrganizationApiTokenCreateResponse';
import OrganizationApiTokenResponseList from '../model/OrganizationApiTokenResponseList';

/**
* OrganizationApiToken service.
* @module api/OrganizationApiTokenApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationApiTokenApi {

    /**
    * Constructs a new OrganizationApiTokenApi. 
    * @alias module:api/OrganizationApiTokenApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createOrganizationApiToken operation.
     * @callback module:api/OrganizationApiTokenApi~createOrganizationApiTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationApiTokenCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization api token
     * Create an organization api token
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationApiTokenCreateRequest} opts.organizationApiTokenCreateRequest 
     * @param {module:api/OrganizationApiTokenApi~createOrganizationApiTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationApiTokenCreateResponse}
     */
    createOrganizationApiToken(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationApiTokenCreateRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createOrganizationApiToken");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrganizationApiTokenCreateResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/apiToken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrganizationApiToken operation.
     * @callback module:api/OrganizationApiTokenApi~deleteOrganizationApiTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete organization api token
     * Delete organization api token
     * @param {String} organizationId Organization ID
     * @param {String} apiTokenId Organization Api Token ID
     * @param {module:api/OrganizationApiTokenApi~deleteOrganizationApiTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganizationApiToken(organizationId, apiTokenId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganizationApiToken");
      }
      // verify the required parameter 'apiTokenId' is set
      if (apiTokenId === undefined || apiTokenId === null) {
        throw new Error("Missing the required parameter 'apiTokenId' when calling deleteOrganizationApiToken");
      }

      let pathParams = {
        'organizationId': organizationId,
        'apiTokenId': apiTokenId
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
        '/organization/{organizationId}/apiToken/{apiTokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationApiTokens operation.
     * @callback module:api/OrganizationApiTokenApi~listOrganizationApiTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationApiTokenResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization api tokens
     * List organization api tokens
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationApiTokenApi~listOrganizationApiTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationApiTokenResponseList}
     */
    listOrganizationApiTokens(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationApiTokens");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrganizationApiTokenResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/apiToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
