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
import Database from '../model/Database';
import DatabaseResponseList from '../model/DatabaseResponseList';
import LogicalDatabase from '../model/LogicalDatabase';
import LogicalDatabaseResponseList from '../model/LogicalDatabaseResponseList';

/**
* ContainerDatabase service.
* @module api/ContainerDatabaseApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class ContainerDatabaseApi {

    /**
    * Constructs a new ContainerDatabaseApi. 
    * @alias module:api/ContainerDatabaseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the attachDatabaseToContainer operation.
     * @callback module:api/ContainerDatabaseApi~attachDatabaseToContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Database} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Link a database to the container
     * @param {String} containerId Container ID
     * @param {String} targetDatabaseId Target database ID
     * @param {module:api/ContainerDatabaseApi~attachDatabaseToContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Database}
     */
    attachDatabaseToContainer(containerId, targetDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling attachDatabaseToContainer");
      }
      // verify the required parameter 'targetDatabaseId' is set
      if (targetDatabaseId === undefined || targetDatabaseId === null) {
        throw new Error("Missing the required parameter 'targetDatabaseId' when calling attachDatabaseToContainer");
      }

      let pathParams = {
        'containerId': containerId,
        'targetDatabaseId': targetDatabaseId
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
      let returnType = Database;
      return this.apiClient.callApi(
        '/container/{containerId}/database/{targetDatabaseId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the attachLogicalDatabaseToContainer operation.
     * @callback module:api/ContainerDatabaseApi~attachLogicalDatabaseToContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Link a logical database to the container
     * @param {String} containerId Container ID
     * @param {String} targetLogicalDatabaseId Target database ID
     * @param {module:api/ContainerDatabaseApi~attachLogicalDatabaseToContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabase}
     */
    attachLogicalDatabaseToContainer(containerId, targetLogicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling attachLogicalDatabaseToContainer");
      }
      // verify the required parameter 'targetLogicalDatabaseId' is set
      if (targetLogicalDatabaseId === undefined || targetLogicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'targetLogicalDatabaseId' when calling attachLogicalDatabaseToContainer");
      }

      let pathParams = {
        'containerId': containerId,
        'targetLogicalDatabaseId': targetLogicalDatabaseId
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
      let returnType = LogicalDatabase;
      return this.apiClient.callApi(
        '/container/{containerId}/logicalDatabase/{targetLogicalDatabaseId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerDatabase operation.
     * @callback module:api/ContainerDatabaseApi~listContainerDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatabaseResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List linked databases
     * @param {String} containerId Container ID
     * @param {module:api/ContainerDatabaseApi~listContainerDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatabaseResponseList}
     */
    listContainerDatabase(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerDatabase");
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
      let returnType = DatabaseResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/database', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listContainerLogicalDatabase operation.
     * @callback module:api/ContainerDatabaseApi~listContainerLogicalDatabaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogicalDatabaseResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - List linked logical databases
     * @param {String} containerId Container ID
     * @param {module:api/ContainerDatabaseApi~listContainerLogicalDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogicalDatabaseResponseList}
     */
    listContainerLogicalDatabase(containerId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling listContainerLogicalDatabase");
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
      let returnType = LogicalDatabaseResponseList;
      return this.apiClient.callApi(
        '/container/{containerId}/logicalDatabase', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeDatabaseFromContainer operation.
     * @callback module:api/ContainerDatabaseApi~removeDatabaseFromContainerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Remove database link to this container.
     * @param {String} containerId Container ID
     * @param {String} targetDatabaseId Target database ID
     * @param {module:api/ContainerDatabaseApi~removeDatabaseFromContainerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeDatabaseFromContainer(containerId, targetDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling removeDatabaseFromContainer");
      }
      // verify the required parameter 'targetDatabaseId' is set
      if (targetDatabaseId === undefined || targetDatabaseId === null) {
        throw new Error("Missing the required parameter 'targetDatabaseId' when calling removeDatabaseFromContainer");
      }

      let pathParams = {
        'containerId': containerId,
        'targetDatabaseId': targetDatabaseId
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
        '/container/{containerId}/database/{targetDatabaseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeLogicalDatabaseFromContainer operation.
     * @callback module:api/ContainerDatabaseApi~removeLogicalDatabaseFromContainerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT YET IMPLEMENTED - Remove logical database link to this container.
     * @param {String} containerId Container ID
     * @param {String} targetLogicalDatabaseId Target database ID
     * @param {module:api/ContainerDatabaseApi~removeLogicalDatabaseFromContainerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeLogicalDatabaseFromContainer(containerId, targetLogicalDatabaseId, callback) {
      let postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling removeLogicalDatabaseFromContainer");
      }
      // verify the required parameter 'targetLogicalDatabaseId' is set
      if (targetLogicalDatabaseId === undefined || targetLogicalDatabaseId === null) {
        throw new Error("Missing the required parameter 'targetLogicalDatabaseId' when calling removeLogicalDatabaseFromContainer");
      }

      let pathParams = {
        'containerId': containerId,
        'targetLogicalDatabaseId': targetLogicalDatabaseId
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
        '/container/{containerId}/logicalDatabase/{targetLogicalDatabaseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
