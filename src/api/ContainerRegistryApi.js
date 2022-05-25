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
import ContainerRegistryRequest from '../model/ContainerRegistryRequest';
import ContainerRegistryResponse from '../model/ContainerRegistryResponse';

/**
* ContainerRegistry service.
* @module api/ContainerRegistryApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerRegistryApi {

    /**
    * Constructs a new ContainerRegistryApi. 
    * @alias module:api/ContainerRegistryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the editContainerRegistry operation.
     * @callback module:api/ContainerRegistryApi~editContainerRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerRegistryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a container registry
     * @param {String} organizationId Organization ID
     * @param {String} containerRegistryId Container Registry ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ContainerRegistryRequest} opts.containerRegistryRequest 
     * @param {module:api/ContainerRegistryApi~editContainerRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerRegistryResponse}
     */
    editContainerRegistry(organizationId, containerRegistryId, opts, callback) {
      opts = opts || {};
      let postBody = opts['containerRegistryRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editContainerRegistry");
      }
      // verify the required parameter 'containerRegistryId' is set
      if (containerRegistryId === undefined || containerRegistryId === null) {
        throw new Error("Missing the required parameter 'containerRegistryId' when calling editContainerRegistry");
      }

      let pathParams = {
        'organizationId': organizationId,
        'containerRegistryId': containerRegistryId
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
      let returnType = ContainerRegistryResponse;
      return this.apiClient.callApi(
        '/organization/{organizationId}/containerRegistry/{containerRegistryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
