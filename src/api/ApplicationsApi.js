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
import Application from '../model/Application';
import ApplicationAdvancedSettings from '../model/ApplicationAdvancedSettings';
import ApplicationRequest from '../model/ApplicationRequest';
import ApplicationResponseList from '../model/ApplicationResponseList';
import CloneApplicationRequest from '../model/CloneApplicationRequest';
import EnvironmentApplicationsCurrentScaleResponseList from '../model/EnvironmentApplicationsCurrentScaleResponseList';
import EnvironmentApplicationsStorageResponseList from '../model/EnvironmentApplicationsStorageResponseList';
import EnvironmentApplicationsSupportedLanguageList from '../model/EnvironmentApplicationsSupportedLanguageList';
import ReferenceObjectStatusResponseList from '../model/ReferenceObjectStatusResponseList';

/**
* Applications service.
* @module api/ApplicationsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ApplicationsApi {

    /**
    * Constructs a new ApplicationsApi. 
    * @alias module:api/ApplicationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cloneApplication operation.
     * @callback module:api/ApplicationsApi~cloneApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Application} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone application
     * This will create a new application with the same configuration on the targeted environment Id.
     * @param {String} applicationId Application ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CloneApplicationRequest} opts.cloneApplicationRequest 
     * @param {module:api/ApplicationsApi~cloneApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Application}
     */
    cloneApplication(applicationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['cloneApplicationRequest'];
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling cloneApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Application;
      return this.apiClient.callApi(
        '/application/{applicationId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createApplication operation.
     * @callback module:api/ApplicationsApi~createApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Application} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an application
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationRequest} opts.applicationRequest 
     * @param {module:api/ApplicationsApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Application}
     */
    createApplication(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['applicationRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling createApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Application;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDefaultApplicationAdvancedSettings operation.
     * @callback module:api/ApplicationsApi~getDefaultApplicationAdvancedSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationAdvancedSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List default application advanced settings
     * @param {module:api/ApplicationsApi~getDefaultApplicationAdvancedSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationAdvancedSettings}
     */
    getDefaultApplicationAdvancedSettings(callback) {
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
      let returnType = ApplicationAdvancedSettings;
      return this.apiClient.callApi(
        '/defaultApplicationAdvancedSettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentApplicationCurrentScale operation.
     * @callback module:api/ApplicationsApi~getEnvironmentApplicationCurrentScaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentApplicationsCurrentScaleResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current scaling information for each application
     * Returns min, max, and running number of instances for each application
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~getEnvironmentApplicationCurrentScaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentApplicationsCurrentScaleResponseList}
     */
    getEnvironmentApplicationCurrentScale(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentApplicationCurrentScale");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentApplicationsCurrentScaleResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/currentScale', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentApplicationCurrentStorage operation.
     * @callback module:api/ApplicationsApi~getEnvironmentApplicationCurrentStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentApplicationsStorageResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List current storage disk usage for each application
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~getEnvironmentApplicationCurrentStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentApplicationsStorageResponseList}
     */
    getEnvironmentApplicationCurrentStorage(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentApplicationCurrentStorage");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentApplicationsStorageResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/currentStorage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentApplicationStatus operation.
     * @callback module:api/ApplicationsApi~getEnvironmentApplicationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReferenceObjectStatusResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all environment applications statuses
     * Returns a list of applications with only their id and status.
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~getEnvironmentApplicationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReferenceObjectStatusResponseList}
     */
    getEnvironmentApplicationStatus(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentApplicationStatus");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReferenceObjectStatusResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentApplicationSupportedLanguages operation.
     * @callback module:api/ApplicationsApi~getEnvironmentApplicationSupportedLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentApplicationsSupportedLanguageList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List supported languages
     * Returns list of languages supported by Buildpacks.
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~getEnvironmentApplicationSupportedLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentApplicationsSupportedLanguageList}
     */
    getEnvironmentApplicationSupportedLanguages(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentApplicationSupportedLanguages");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvironmentApplicationsSupportedLanguageList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/supportedLanguage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listApplication operation.
     * @callback module:api/ApplicationsApi~listApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List applications
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~listApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponseList}
     */
    listApplication(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listApplication");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApplicationResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
