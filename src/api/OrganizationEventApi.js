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
import OrganizationEventOrigin from '../model/OrganizationEventOrigin';
import OrganizationEventResponseList from '../model/OrganizationEventResponseList';
import OrganizationEventSubTargetType from '../model/OrganizationEventSubTargetType';
import OrganizationEventTargetType from '../model/OrganizationEventTargetType';
import OrganizationEventType from '../model/OrganizationEventType';

/**
* OrganizationEvent service.
* @module api/OrganizationEventApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class OrganizationEventApi {

    /**
    * Constructs a new OrganizationEventApi. 
    * @alias module:api/OrganizationEventApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getOrganizationEvents operation.
     * @callback module:api/OrganizationEventApi~getOrganizationEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationEventResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all events inside the organization
     * Get all events inside the organization
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of events to display in the current page (default to 10)
     * @param {String} opts.fromTimestamp Display events triggered since this timestamp.   A range of date can be specified by using `from-timestamp` with `to-timestamp` The format is a timestamp with nano precision 
     * @param {String} opts.toTimestamp Display events triggered before this timestamp.   A range of date can be specified by using `to-timestamp` with `from-timestamp` The format is a timestamp with nano precision 
     * @param {String} opts.continueToken Token used to fetch the next page results The format is a timestamp with nano precision 
     * @param {String} opts.stepBackToken Token used to fetch the previous page results The format is a timestamp with nano precision 
     * @param {module:model/OrganizationEventType} opts.eventType 
     * @param {module:model/OrganizationEventTargetType} opts.targetType 
     * @param {String} opts.targetId The target resource id to search.   Must be specified with the corresponding `target_type` 
     * @param {module:model/OrganizationEventSubTargetType} opts.subTargetType 
     * @param {String} opts.triggeredBy Information about the owner of the event (user name / apitoken / automatic action)
     * @param {module:model/OrganizationEventOrigin} opts.origin 
     * @param {module:api/OrganizationEventApi~getOrganizationEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationEventResponseList}
     */
    getOrganizationEvents(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationEvents");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'fromTimestamp': opts['fromTimestamp'],
        'toTimestamp': opts['toTimestamp'],
        'continueToken': opts['continueToken'],
        'stepBackToken': opts['stepBackToken'],
        'eventType': opts['eventType'],
        'targetType': opts['targetType'],
        'targetId': opts['targetId'],
        'subTargetType': opts['subTargetType'],
        'triggeredBy': opts['triggeredBy'],
        'origin': opts['origin']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrganizationEventResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
