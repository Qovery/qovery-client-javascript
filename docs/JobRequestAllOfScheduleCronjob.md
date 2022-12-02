# QoveryApi.JobRequestAllOfScheduleCronjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_arguments** | **[String]** |  | [optional] 
**entrypoint** | **String** | optional entrypoint when launching container | [optional] 
**scheduledAt** | **String** | Can only be set if the event is CRON.   Represent the cron format for the job schedule without seconds.   For example: &#x60;* * * * *&#x60; represent the cron to launch the job every minute.   See https://crontab.guru/ to WISIWIG interface.   Timezone is UTC  | 


