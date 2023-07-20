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

/**
* EnvironmentExport service.
* @module api/EnvironmentExportApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class EnvironmentExportApi {

    /**
    * Constructs a new EnvironmentExportApi. 
    * @alias module:api/EnvironmentExportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the exportEnvironmentConfigurationIntoTerraform operation.
     * @callback module:api/EnvironmentExportApi~exportEnvironmentConfigurationIntoTerraformCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export full environment and its resources into Terraform manifests
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.exportSecrets export Secrets from configuration and include them into Terraform export (default to false)
     * @param {module:api/EnvironmentExportApi~exportEnvironmentConfigurationIntoTerraformCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    exportEnvironmentConfigurationIntoTerraform(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling exportEnvironmentConfigurationIntoTerraform");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
        'exportSecrets': opts['exportSecrets']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/zip'];
      let returnType = File;
      return this.apiClient.callApi(
        '/environment/{environmentId}/terraformExport', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}