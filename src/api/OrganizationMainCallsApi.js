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
import Organization from '../model/Organization';
import OrganizationEditRequest from '../model/OrganizationEditRequest';
import OrganizationRequest from '../model/OrganizationRequest';
import OrganizationResponseList from '../model/OrganizationResponseList';

/**
* OrganizationMainCalls service.
* @module api/OrganizationMainCallsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationMainCallsApi {

    /**
    * Constructs a new OrganizationMainCallsApi. 
    * @alias module:api/OrganizationMainCallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~createOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationRequest} opts.organizationRequest 
     * @param {module:api/OrganizationMainCallsApi~createOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    createOrganization(opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationRequest'];

      let pathParams = {
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~deleteOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization
     * To delete an organization you must have the admin permission
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~deleteOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganization");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~editOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an organization
     * To edit an organization you must have the admin permission
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationEditRequest} opts.organizationEditRequest 
     * @param {module:api/OrganizationMainCallsApi~editOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    editOrganization(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['organizationEditRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editOrganization");
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~getOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization by ID
     * @param {String} organizationId Organization ID
     * @param {module:api/OrganizationMainCallsApi~getOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    getOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganization");
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organization/{organizationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganization operation.
     * @callback module:api/OrganizationMainCallsApi~listOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user organizations
     * @param {module:api/OrganizationMainCallsApi~listOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationResponseList}
     */
    listOrganization(callback) {
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
      let returnType = OrganizationResponseList;
      return this.apiClient.callApi(
        '/organization', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
