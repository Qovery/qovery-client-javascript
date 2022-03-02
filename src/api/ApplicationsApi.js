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
import ApplicationRequest from '../model/ApplicationRequest';
import ApplicationResponse from '../model/ApplicationResponse';
import ApplicationResponseList from '../model/ApplicationResponseList';
import EnvironmentApplicationsCurrentScaleResponseList from '../model/EnvironmentApplicationsCurrentScaleResponseList';
import EnvironmentApplicationsInstanceResponseList from '../model/EnvironmentApplicationsInstanceResponseList';
import EnvironmentApplicationsStorageResponseList from '../model/EnvironmentApplicationsStorageResponseList';
import EnvironmentApplicationsSupportedLanguageList from '../model/EnvironmentApplicationsSupportedLanguageList';
import InlineObject1 from '../model/InlineObject1';
import ReferenceObjectStatusResponseList from '../model/ReferenceObjectStatusResponseList';
import Status from '../model/Status';

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
     * Callback function to receive the result of the createApplication operation.
     * @callback module:api/ApplicationsApi~createApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an application
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ApplicationRequest} opts.applicationRequest 
     * @param {module:api/ApplicationsApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponse}
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
      let returnType = ApplicationResponse;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deployAllApplications operation.
     * @callback module:api/ApplicationsApi~deployAllApplicationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy applications
     * Deploy to the last commit the applications you specified.
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/ApplicationsApi~deployAllApplicationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployAllApplications(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deployAllApplications");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentApplicationCurrentInstance operation.
     * @callback module:api/ApplicationsApi~getEnvironmentApplicationCurrentInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentApplicationsInstanceResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List running instances with CPU and RAM usage for each application
     * @param {String} environmentId Environment ID
     * @param {module:api/ApplicationsApi~getEnvironmentApplicationCurrentInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentApplicationsInstanceResponseList}
     */
    getEnvironmentApplicationCurrentInstance(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling getEnvironmentApplicationCurrentInstance");
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
      let returnType = EnvironmentApplicationsInstanceResponseList;
      return this.apiClient.callApi(
        '/environment/{environmentId}/application/instance', 'GET',
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
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.toUpdate return (or not) results that must be updated (default to false)
     * @param {module:api/ApplicationsApi~listApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationResponseList}
     */
    listApplication(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling listApplication");
      }

      let pathParams = {
        'environmentId': environmentId
      };
      let queryParams = {
        'toUpdate': opts['toUpdate']
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
