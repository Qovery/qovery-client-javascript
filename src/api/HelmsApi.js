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
import CloneServiceRequest from '../model/CloneServiceRequest';
import HelmAdvancedSettings from '../model/HelmAdvancedSettings';
import HelmDefaultValuesRequest from '../model/HelmDefaultValuesRequest';
import HelmRequest from '../model/HelmRequest';
import HelmResponse from '../model/HelmResponse';
import HelmResponseList from '../model/HelmResponseList';
import ReferenceObjectStatusResponseList from '../model/ReferenceObjectStatusResponseList';

/**
* Helms service.
* @module api/HelmsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class HelmsApi {

    /**
    * Constructs a new HelmsApi. 
    * @alias module:api/HelmsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cloneHelm operation.
     * @callback module:api/HelmsApi~cloneHelmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone helm
     * This will create a new helm with the same configuration on the targeted environment Id.
     * @param {String} helmId Helm ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CloneServiceRequest} [cloneServiceRequest] 
     * @param {module:api/HelmsApi~cloneHelmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmResponse}
     */
    cloneHelm(helmId, opts, callback) {
      opts = opts || {};
      let postBody = opts['cloneServiceRequest'];
      // verify the required parameter 'helmId' is set
      if (helmId === undefined || helmId === null) {
        throw new Error("Missing the required parameter 'helmId' when calling cloneHelm");
      }

      let pathParams = {
        'helmId': helmId
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
      let returnType = HelmResponse;
      return this.apiClient.callApi(
        '/helm/{helmId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createHelm operation.
     * @callback module:api/HelmsApi~createHelmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a helm
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmRequest} [helmRequest] 
     * @param {module:api/HelmsApi~createHelmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmResponse}
     */
    createHelm(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['helmRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createHelm");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = HelmResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/helm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createHelmDefaultValues operation.
     * @callback module:api/HelmsApi~createHelmDefaultValuesCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get helm default values
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/HelmDefaultValuesRequest} [helmDefaultValuesRequest] 
     * @param {module:api/HelmsApi~createHelmDefaultValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createHelmDefaultValues(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['helmDefaultValuesRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createHelmDefaultValues");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/environment/{environmentId}/helmDefaultValues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDefaultHelmAdvancedSettings operation.
     * @callback module:api/HelmsApi~getDefaultHelmAdvancedSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmAdvancedSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List default helm advanced settings
     * @param {module:api/HelmsApi~getDefaultHelmAdvancedSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmAdvancedSettings}
     */
    getDefaultHelmAdvancedSettings(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = HelmAdvancedSettings;
      return this.apiClient.callApi(
        '/defaultHelmAdvancedSettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentHelmStatus operation.
     * @callback module:api/HelmsApi~getEnvironmentHelmStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferenceObjectStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all environment helm statuses
     * Returns a list of helms with only their id and status.
     * @param {String} environmentId Environment ID
     * @param {module:api/HelmsApi~getEnvironmentHelmStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferenceObjectStatusResponseList}
     */
    getEnvironmentHelmStatus(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentHelmStatus");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = ReferenceObjectStatusResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/helm/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listHelms operation.
     * @callback module:api/HelmsApi~listHelmsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HelmResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List helms
     * @param {String} environmentId Environment ID
     * @param {module:api/HelmsApi~listHelmsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HelmResponseList}
     */
    listHelms(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listHelms");
      }

      let pathParams = {
        'environmentId': environmentId
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
      let returnType = HelmResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/helm', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
