# WebHook Testing for Data Transferred from Wix Forms

## Installation

Start by Cloning this Repository (assuming that you have git installed on your machine. For Reference: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git ) 

## Open Terminal on your machine

Mac: Ctrl + Space , then type "Terminal"

Windows: Windows+R to open “Run” box. Type “cmd” 

Now clone the repository
```bash
git clone https://github.com/chrisopherd/webhook-test.git
cd webhook-test
```


## Starting the server on your machine by typing this into the terminal

```
node server.js
```
Now Visit http://localhost:4040 in the browser

## Follow these steps to Run an Automation Test

1. Copy the url presented. (Ex. ```http://9ab668e84ddc.ngrok.io/``` | _Keep in mind that the url changes every time the server is started_ )
2. Now click here to [dashboard](https://www.wix.com/signout?redirectTo=https://bo.wix.com/user-manager/goto-dashboard-as/a56bbd1a-443a-452c-95aa-9a091f2ec849) into christopherd@wix.com
3. Go to the Automation named **Ngrok Webhook test** or click [here](https://www.wix.com/dashboard/4f4212fe-ca7c-48fd-9305-db1061212f91/triggers/rules/6e75478a-9adb-47b5-9487-6c8952809621) to go into the automation rule.
4. Paste the Link from Ngrok into the Target URL for step 2 in the automation rule, then add ```/webhooks``` to the end. (Ex. ```http://9ab668e84ddc.ngrok.io/webhooks```)
5. Save the Automation
6. Visit https://www.wixcrm.com/home and fill out a test submission
7. Go back to the localhost:4040 tab and view the new POST request
8. Click on the POST Request & view the data transferred
9. (Optional) Click the dropdown arrow Next to Replay, followed by Replay with Modificiations
10. Change **Content-Type** in the Header from ```application/x-www-form-urlencoded``` to ```application/json``` 
11. Click **Replay** and view the latest POST request to see data (in JSON format) 
