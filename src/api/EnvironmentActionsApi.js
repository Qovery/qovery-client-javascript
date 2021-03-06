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
import CloneRequest from '../model/CloneRequest';
import Environment from '../model/Environment';
import EnvironmentRestartRequest from '../model/EnvironmentRestartRequest';
import Status from '../model/Status';

/**
* EnvironmentActions service.
* @module api/EnvironmentActionsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class EnvironmentActionsApi {

    /**
    * Constructs a new EnvironmentActionsApi. 
    * @alias module:api/EnvironmentActionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelEnvironmentDeployment operation.
     * @callback module:api/EnvironmentActionsApi~cancelEnvironmentDeploymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel environment deployment
     * Cancel the current deployment of your environment.
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentActionsApi~cancelEnvironmentDeploymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    cancelEnvironmentDeployment(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling cancelEnvironmentDeployment");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/cancelDeployment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cloneEnvironment operation.
     * @callback module:api/EnvironmentActionsApi~cloneEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone environment
     * You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CloneRequest} opts.cloneRequest 
     * @param {module:api/EnvironmentActionsApi~cloneEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    cloneEnvironment(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['cloneRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling cloneEnvironment");
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
      let returnType = Environment;
      return this.apiClient.callApi(
        '/environment/{environmentId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deployEnvironment operation.
     * @callback module:api/EnvironmentActionsApi~deployEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy environment
     * This will deploy all the services of this environment to their latest version.
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentActionsApi~deployEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    deployEnvironment(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling deployEnvironment");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/deploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restartEnvironment operation.
     * @callback module:api/EnvironmentActionsApi~restartEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restart environment
     * @param {String} environmentId Environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvironmentRestartRequest} opts.environmentRestartRequest 
     * @param {module:api/EnvironmentActionsApi~restartEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    restartEnvironment(environmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['environmentRestartRequest'];
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling restartEnvironment");
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
        '/environment/{environmentId}/restart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopEnvironment operation.
     * @callback module:api/EnvironmentActionsApi~stopEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop environment
     * @param {String} environmentId Environment ID
     * @param {module:api/EnvironmentActionsApi~stopEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */
    stopEnvironment(environmentId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling stopEnvironment");
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/environment/{environmentId}/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
