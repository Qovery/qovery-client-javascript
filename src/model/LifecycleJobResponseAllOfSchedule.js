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
import JobRequestAllOfScheduleOnStart from './JobRequestAllOfScheduleOnStart';

/**
 * The LifecycleJobResponseAllOfSchedule model module.
 * @module model/LifecycleJobResponseAllOfSchedule
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class LifecycleJobResponseAllOfSchedule {
    /**
     * Constructs a new <code>LifecycleJobResponseAllOfSchedule</code>.
     * @alias module:model/LifecycleJobResponseAllOfSchedule
     */
    constructor() { 
        
        LifecycleJobResponseAllOfSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LifecycleJobResponseAllOfSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LifecycleJobResponseAllOfSchedule} obj Optional instance to populate.
     * @return {module:model/LifecycleJobResponseAllOfSchedule} The populated <code>LifecycleJobResponseAllOfSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LifecycleJobResponseAllOfSchedule();

            if (data.hasOwnProperty('on_start')) {
                obj['on_start'] = JobRequestAllOfScheduleOnStart.constructFromObject(data['on_start']);
            }
            if (data.hasOwnProperty('on_stop')) {
                obj['on_stop'] = JobRequestAllOfScheduleOnStart.constructFromObject(data['on_stop']);
            }
            if (data.hasOwnProperty('on_delete')) {
                obj['on_delete'] = JobRequestAllOfScheduleOnStart.constructFromObject(data['on_delete']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JobRequestAllOfScheduleOnStart} on_start
 */
LifecycleJobResponseAllOfSchedule.prototype['on_start'] = undefined;

/**
 * @member {module:model/JobRequestAllOfScheduleOnStart} on_stop
 */
LifecycleJobResponseAllOfSchedule.prototype['on_stop'] = undefined;

/**
 * @member {module:model/JobRequestAllOfScheduleOnStart} on_delete
 */
LifecycleJobResponseAllOfSchedule.prototype['on_delete'] = undefined;






export default LifecycleJobResponseAllOfSchedule;

