# QoveryApi.OrganizationCustomRoleProjectPermissionsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** |  | [optional] 
**projectName** | **String** |  | [optional] 
**isAdmin** | **Boolean** | If &#x60;is_admin&#x60; is &#x60;true&#x60;, the user is: - automatically &#x60;MANAGER&#x60; for each environment type - allowed to manage project deployment rules - able to delete the project Note that &#x60;permissions&#x60; can then be ignored for this project  | [optional] [default to false]
**permissions** | [**[OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner]**](OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner.md) |  | [optional] 


