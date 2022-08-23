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
import ContainerAdvancedSettings from '../model/ContainerAdvancedSettings';
import ContainerNetwork from '../model/ContainerNetwork';
import ContainerNetworkRequest from '../model/ContainerNetworkRequest';

/**
* ContainerConfiguration service.
* @module api/ContainerConfigurationApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerConfigurationApi {

    /**
    * Constructs a new ContainerConfigurationApi. 
    * @alias module:api/ContainerConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the editContainerAdvancedSettings operation.
     * @callback module:api/ContainerConfigurationApi~editContainerAdvancedSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContainerAdvancedSettings>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit advanced settings
     * Edit advanced settings by returning table of advanced settings.
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/ContainerAdvancedSettings>} opts.containerAdvancedSettings 
     * @param {module:api/ContainerConfigurationApi~editContainerAdvancedSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContainerAdvancedSettings>}
     */
    editContainerAdvancedSettings(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerAdvancedSettings'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling editContainerAdvancedSettings");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ContainerAdvancedSettings];
      return this.apiClient.callApi(
        '/container/{containerId}/advancedSettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editContainerNetwork operation.
     * @callback module:api/ContainerConfigurationApi~editContainerNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerNetwork} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Container Network
     * Edit the Network settings of the container.
     * @param {String} containerId Container ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerNetworkRequest} opts.containerNetworkRequest 
     * @param {module:api/ContainerConfigurationApi~editContainerNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerNetwork}
     */
    editContainerNetwork(containerId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerNetworkRequest'];
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling editContainerNetwork");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContainerNetwork;
      return this.apiClient.callApi(
        '/container/{containerId}/network', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerAdvancedSettings operation.
     * @callback module:api/ContainerConfigurationApi~getContainerAdvancedSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContainerAdvancedSettings>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get advanced settings
     * Get list and values of the advanced settings of the container.
     * @param {String} containerId Container ID
     * @param {module:api/ContainerConfigurationApi~getContainerAdvancedSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContainerAdvancedSettings>}
     */
    getContainerAdvancedSettings(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerAdvancedSettings");
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
      let returnType = [ContainerAdvancedSettings];
      return this.apiClient.callApi(
        '/container/{containerId}/advancedSettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContainerNetwork operation.
     * @callback module:api/ContainerConfigurationApi~getContainerNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerNetwork} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Container Network information
     * Get status of the container network settings.
     * @param {String} containerId Container ID
     * @param {module:api/ContainerConfigurationApi~getContainerNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerNetwork}
     */
    getContainerNetwork(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerNetwork");
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
      let returnType = ContainerNetwork;
      return this.apiClient.callApi(
        '/container/{containerId}/network', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
