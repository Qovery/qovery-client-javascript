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
import CustomDomain from '../model/CustomDomain';
import CustomDomainRequest from '../model/CustomDomainRequest';
import CustomDomainResponseList from '../model/CustomDomainResponseList';

/**
* CustomDomain service.
* @module api/CustomDomainApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class CustomDomainApi {

    /**
    * Constructs a new CustomDomainApi. 
    * @alias module:api/CustomDomainApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApplicationCustomDomain operation.
     * @callback module:api/CustomDomainApi~createApplicationCustomDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add custom domain to the application.
     * Add a custom domain to this application in order not to use qovery autogenerated domain
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomDomainRequest} opts.customDomainRequest 
     * @param {module:api/CustomDomainApi~createApplicationCustomDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomDomain}
     */
    createApplicationCustomDomain(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['customDomainRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createApplicationCustomDomain");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomDomain;
      return this.apiClient.callApi(
        '/application/{applicationId}/customDomain', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomDomain operation.
     * @callback module:api/CustomDomainApi~deleteCustomDomainCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Custom Domain
     * To delete an CustomDomain you must have the project user permission
     * @param {String} applicationId Application ID
     * @param {String} customDomainId Custom Domain ID
     * @param {module:api/CustomDomainApi~deleteCustomDomainCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomDomain(applicationId, customDomainId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteCustomDomain");
      }
      // verify the required parameter 'customDomainId' is set
      if (customDomainId === undefined || customDomainId === null) {
        throw new Error("Missing the required parameter 'customDomainId' when calling deleteCustomDomain");
      }

      let pathParams = {
        'applicationId': applicationId,
        'customDomainId': customDomainId
      };
      let queryParams = {
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
        '/application/{applicationId}/customDomain/{customDomainId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editCustomDomain operation.
     * @callback module:api/CustomDomainApi~editCustomDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a Custom Domain
     * To edit a Custom Domain you must have the project user permission
     * @param {String} applicationId Application ID
     * @param {String} customDomainId Custom Domain ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomDomainRequest} opts.customDomainRequest 
     * @param {module:api/CustomDomainApi~editCustomDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomDomain}
     */
    editCustomDomain(applicationId, customDomainId, opts, callback) {
      opts = opts || {};
      let postBody = opts['customDomainRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling editCustomDomain");
      }
      // verify the required parameter 'customDomainId' is set
      if (customDomainId === undefined || customDomainId === null) {
        throw new Error("Missing the required parameter 'customDomainId' when calling editCustomDomain");
      }

      let pathParams = {
        'applicationId': applicationId,
        'customDomainId': customDomainId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomDomain;
      return this.apiClient.callApi(
        '/application/{applicationId}/customDomain/{customDomainId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomDomainStatus operation.
     * @callback module:api/CustomDomainApi~getCustomDomainStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Custom Domain status
     * @param {String} applicationId Application ID
     * @param {String} customDomainId Custom Domain ID
     * @param {module:api/CustomDomainApi~getCustomDomainStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomDomain}
     */
    getCustomDomainStatus(applicationId, customDomainId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomDomainStatus");
      }
      // verify the required parameter 'customDomainId' is set
      if (customDomainId === undefined || customDomainId === null) {
        throw new Error("Missing the required parameter 'customDomainId' when calling getCustomDomainStatus");
      }

      let pathParams = {
        'applicationId': applicationId,
        'customDomainId': customDomainId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomDomain;
      return this.apiClient.callApi(
        '/application/{applicationId}/customDomain/{customDomainId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplicationCustomDomain operation.
     * @callback module:api/CustomDomainApi~listApplicationCustomDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomDomainResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List application custom domains
     * @param {String} applicationId Application ID
     * @param {module:api/CustomDomainApi~listApplicationCustomDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomDomainResponseList}
     */
    listApplicationCustomDomain(applicationId, callback) {
      let postBody = null;
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling listApplicationCustomDomain");
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

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomDomainResponseList;
      return this.apiClient.callApi(
        '/application/{applicationId}/customDomain', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
