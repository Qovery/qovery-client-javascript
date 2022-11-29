# QoveryApi.JobRequestAllOfSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**JobScheduleEvent**](JobScheduleEvent.md) |  | [optional] 
**scheduledAt** | **String** | Can only be set if the event is CRON. Represent the cron format for the job schedule without seconds. For example: &#x60;* * * * *&#x60; represent the cron to launch the job every minute. See https://crontab.guru/ to WISIWIG interface. Timezone is UTC  | [optional] 


