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
import DeleteMemberRequest from '../model/DeleteMemberRequest';
import InviteMember from '../model/InviteMember';
import InviteMemberRequest from '../model/InviteMemberRequest';
import InviteMemberResponseList from '../model/InviteMemberResponseList';
import MemberResponseList from '../model/MemberResponseList';
import MemberRoleUpdateRequest from '../model/MemberRoleUpdateRequest';
import TransferOwnershipRequest from '../model/TransferOwnershipRequest';

/**
* Members service.
* @module api/MembersApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class MembersApi {

    /**
    * Constructs a new MembersApi. 
    * @alias module:api/MembersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteInviteMember operation.
     * @callback module:api/MembersApi~deleteInviteMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an invited member
     * @param {String} organizationId Organization ID
     * @param {String} inviteId Invite ID
     * @param {module:api/MembersApi~deleteInviteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteInviteMember(organizationId, inviteId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteInviteMember");
      }
      // verify the required parameter 'inviteId' is set
      if (inviteId === undefined || inviteId === null) {
        throw new Error("Missing the required parameter 'inviteId' when calling deleteInviteMember");
      }

      let pathParams = {
        'organizationId': organizationId,
        'inviteId': inviteId
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
        '/organization/{organizationId}/inviteMember/{inviteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMember operation.
     * @callback module:api/MembersApi~deleteMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a member
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteMemberRequest} opts.deleteMemberRequest 
     * @param {module:api/MembersApi~deleteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteMember(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['deleteMemberRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteMember");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/member', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editOrganizationMemberRole operation.
     * @callback module:api/MembersApi~editOrganizationMemberRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an organization member role
     * Edit an organization member role
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberRoleUpdateRequest} opts.memberRoleUpdateRequest 
     * @param {module:api/MembersApi~editOrganizationMemberRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    editOrganizationMemberRole(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['memberRoleUpdateRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling editOrganizationMemberRole");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/member', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberInvitation operation.
     * @callback module:api/MembersApi~getMemberInvitationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get member invitation
     * @param {String} organizationId Organization ID
     * @param {String} inviteId Invite ID
     * @param {module:api/MembersApi~getMemberInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteMember}
     */
    getMemberInvitation(organizationId, inviteId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getMemberInvitation");
      }
      // verify the required parameter 'inviteId' is set
      if (inviteId === undefined || inviteId === null) {
        throw new Error("Missing the required parameter 'inviteId' when calling getMemberInvitation");
      }

      let pathParams = {
        'organizationId': organizationId,
        'inviteId': inviteId
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
      let returnType = InviteMember;
      return this.apiClient.callApi(
        '/organization/{organizationId}/inviteMember/{inviteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationInvitedMembers operation.
     * @callback module:api/MembersApi~getOrganizationInvitedMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteMemberResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get invited members
     * @param {String} organizationId Organization ID
     * @param {module:api/MembersApi~getOrganizationInvitedMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteMemberResponseList}
     */
    getOrganizationInvitedMembers(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationInvitedMembers");
      }

      let pathParams = {
        'organizationId': organizationId
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
      let returnType = InviteMemberResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/inviteMember', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationMembers operation.
     * @callback module:api/MembersApi~getOrganizationMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberResponseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization members
     * @param {String} organizationId Organization ID
     * @param {module:api/MembersApi~getOrganizationMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberResponseList}
     */
    getOrganizationMembers(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationMembers");
      }

      let pathParams = {
        'organizationId': organizationId
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
      let returnType = MemberResponseList;
      return this.apiClient.callApi(
        '/organization/{organizationId}/member', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAcceptInviteMember operation.
     * @callback module:api/MembersApi~postAcceptInviteMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept Invite in the organization
     * @param {String} organizationId Organization ID
     * @param {String} inviteId Invite ID
     * @param {module:api/MembersApi~postAcceptInviteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteMember}
     */
    postAcceptInviteMember(organizationId, inviteId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling postAcceptInviteMember");
      }
      // verify the required parameter 'inviteId' is set
      if (inviteId === undefined || inviteId === null) {
        throw new Error("Missing the required parameter 'inviteId' when calling postAcceptInviteMember");
      }

      let pathParams = {
        'organizationId': organizationId,
        'inviteId': inviteId
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
      let returnType = InviteMember;
      return this.apiClient.callApi(
        '/organization/{organizationId}/inviteMember/{inviteId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postInviteMember operation.
     * @callback module:api/MembersApi~postInviteMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite someone in the organization
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/InviteMemberRequest} opts.inviteMemberRequest 
     * @param {module:api/MembersApi~postInviteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteMember}
     */
    postInviteMember(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['inviteMemberRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling postInviteMember");
      }

      let pathParams = {
        'organizationId': organizationId
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
      let returnType = InviteMember;
      return this.apiClient.callApi(
        '/organization/{organizationId}/inviteMember', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postOrganizationTransferOwnership operation.
     * @callback module:api/MembersApi~postOrganizationTransferOwnershipCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer organization ownership to another user
     * @param {String} organizationId Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TransferOwnershipRequest} opts.transferOwnershipRequest 
     * @param {module:api/MembersApi~postOrganizationTransferOwnershipCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postOrganizationTransferOwnership(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['transferOwnershipRequest'];
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling postOrganizationTransferOwnership");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organization/{organizationId}/transferOwnership', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
