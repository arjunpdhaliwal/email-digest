# email-digest
A JavaScript Reddit/Hacker News e-mail digest.

Fill out the blank strings in `data/` first with your API keys and the desired e-mail addresses. You can then run `serverless invoke --function send local` to send a digest immediately.

Alternatively, to set it up to run on time intervals, add your AWS credentials to Serverless, add your service to `serverless.yml`, modify the cron time in `serverless.yml` and deploy with `serverless deploy`. 
