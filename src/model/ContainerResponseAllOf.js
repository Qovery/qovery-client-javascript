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

import ApiClient from '../ApiClient';
import Healthcheck from './Healthcheck';
import ReferenceObject from './ReferenceObject';
import ServicePort from './ServicePort';

/**
 * The ContainerResponseAllOf model module.
 * @module model/ContainerResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerResponseAllOf {
    /**
     * Constructs a new <code>ContainerResponseAllOf</code>.
     * @alias module:model/ContainerResponseAllOf
     * @param environment {module:model/ReferenceObject} 
     * @param maximumCpu {Number} Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
     * @param maximumMemory {Number} Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
     * @param name {String} name is case insensitive
     * @param cpu {Number} unit is millicores (m). 1000m = 1 cpu
     * @param memory {Number} unit is MB. 1024 MB = 1GB
     * @param minRunningInstances {Number} Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
     * @param maxRunningInstances {Number} Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
     * @param healthchecks {module:model/Healthcheck} 
     * @param autoPreview {Boolean} Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
     */
    constructor(environment, maximumCpu, maximumMemory, name, cpu, memory, minRunningInstances, maxRunningInstances, healthchecks, autoPreview) { 
        
        ContainerResponseAllOf.initialize(this, environment, maximumCpu, maximumMemory, name, cpu, memory, minRunningInstances, maxRunningInstances, healthchecks, autoPreview);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment, maximumCpu, maximumMemory, name, cpu, memory, minRunningInstances, maxRunningInstances, healthchecks, autoPreview) { 
        obj['environment'] = environment;
        obj['maximum_cpu'] = maximumCpu;
        obj['maximum_memory'] = maximumMemory;
        obj['name'] = name;
        obj['cpu'] = cpu;
        obj['memory'] = memory;
        obj['min_running_instances'] = minRunningInstances || 1;
        obj['max_running_instances'] = maxRunningInstances || 1;
        obj['healthchecks'] = healthchecks;
        obj['auto_preview'] = autoPreview;
    }

    /**
     * Constructs a <code>ContainerResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ContainerResponseAllOf} The populated <code>ContainerResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerResponseAllOf();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ReferenceObject.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('maximum_cpu')) {
                obj['maximum_cpu'] = ApiClient.convertToType(data['maximum_cpu'], 'Number');
            }
            if (data.hasOwnProperty('maximum_memory')) {
                obj['maximum_memory'] = ApiClient.convertToType(data['maximum_memory'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('min_running_instances')) {
                obj['min_running_instances'] = ApiClient.convertToType(data['min_running_instances'], 'Number');
            }
            if (data.hasOwnProperty('max_running_instances')) {
                obj['max_running_instances'] = ApiClient.convertToType(data['max_running_instances'], 'Number');
            }
            if (data.hasOwnProperty('healthchecks')) {
                obj['healthchecks'] = Healthcheck.constructFromObject(data['healthchecks']);
            }
            if (data.hasOwnProperty('auto_preview')) {
                obj['auto_preview'] = ApiClient.convertToType(data['auto_preview'], 'Boolean');
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [ServicePort]);
            }
            if (data.hasOwnProperty('auto_deploy')) {
                obj['auto_deploy'] = ApiClient.convertToType(data['auto_deploy'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReferenceObject} environment
 */
ContainerResponseAllOf.prototype['environment'] = undefined;

/**
 * Maximum cpu that can be allocated to the container based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
 * @member {Number} maximum_cpu
 */
ContainerResponseAllOf.prototype['maximum_cpu'] = undefined;

/**
 * Maximum memory that can be allocated to the container based on organization cluster configuration. unit is MB. 1024 MB = 1GB
 * @member {Number} maximum_memory
 */
ContainerResponseAllOf.prototype['maximum_memory'] = undefined;

/**
 * name is case insensitive
 * @member {String} name
 */
ContainerResponseAllOf.prototype['name'] = undefined;

/**
 * give a description to this container
 * @member {String} description
 */
ContainerResponseAllOf.prototype['description'] = undefined;

/**
 * @member {Array.<String>} arguments
 */
ContainerResponseAllOf.prototype['arguments'] = undefined;

/**
 * optional entrypoint when launching container
 * @member {String} entrypoint
 */
ContainerResponseAllOf.prototype['entrypoint'] = undefined;

/**
 * unit is millicores (m). 1000m = 1 cpu
 * @member {Number} cpu
 */
ContainerResponseAllOf.prototype['cpu'] = undefined;

/**
 * unit is MB. 1024 MB = 1GB
 * @member {Number} memory
 */
ContainerResponseAllOf.prototype['memory'] = undefined;

/**
 * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no container running. 
 * @member {Number} min_running_instances
 * @default 1
 */
ContainerResponseAllOf.prototype['min_running_instances'] = 1;

/**
 * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
 * @member {Number} max_running_instances
 * @default 1
 */
ContainerResponseAllOf.prototype['max_running_instances'] = 1;

/**
 * @member {module:model/Healthcheck} healthchecks
 */
ContainerResponseAllOf.prototype['healthchecks'] = undefined;

/**
 * Indicates if the 'environment preview option' is enabled for this container.   If enabled, a preview environment will be automatically cloned when `/preview` endpoint is called.   If not specified, it takes the value of the `auto_preview` property from the associated environment. 
 * @member {Boolean} auto_preview
 */
ContainerResponseAllOf.prototype['auto_preview'] = undefined;

/**
 * @member {Array.<module:model/ServicePort>} ports
 */
ContainerResponseAllOf.prototype['ports'] = undefined;

/**
 * Specify if the container will be automatically updated after receiving a new image tag.  The new image tag shall be communicated via the \"Auto Deploy container\" endpoint https://api-doc.qovery.com/#tag/Containers/operation/autoDeployContainerEnvironments 
 * @member {Boolean} auto_deploy
 */
ContainerResponseAllOf.prototype['auto_deploy'] = undefined;






export default ContainerResponseAllOf;

