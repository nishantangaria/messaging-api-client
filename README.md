# Getting started

The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator.
It also allows your application to track the delivery status of both sent and received SMS messages.


## How to Build

The generated code uses a few Maven dependencies e.g., Jackson, UniRest,
and Apache HttpClient. The reference to these dependencies is already
added in the pom.xml file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Eclipse click on ``` File -> Import ```.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/java?step=import0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

* In the import dialog, select ``` Existing Java Project ``` and click ``` Next ```.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/java?step=import1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

* Browse to locate the folder containing the source code. Select the detected location of the project and click ``` Finish ```.

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/java?step=import2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

* Upon successful import, the project will be automatically built by Eclipse after automatically resolving the dependencies.

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/java?step=import3&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

## How to Use

The following section explains how to use the TelstraSMSMessagingAPI library in a new console project.

### 1. Starting a new project

For starting a new project, click the menu command ``` File > New > Project ```.

![Add a new project in Eclipse](https://apidocs.io/illustration/java?step=createNewProject0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

Next, choose ``` Maven > Maven Project ```and click ``` Next ```.

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/java?step=createNewProject1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

Here, make sure to use the current workspace by choosing ``` Use default Workspace location ```, as shown in the picture below and click ``` Next ```.

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/java?step=createNewProject2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

Following this, select the *quick start* project type to create a simple project with an existing class and a ``` main ``` method. To do this, choose ``` maven-archetype-quickstart ``` item from the list and click ``` Next ```.

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/java?step=createNewProject3&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

In the last step, provide a ``` Group Id ``` and ``` Artifact Id ``` as shown in the picture below and click ``` Finish ```.

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/java?step=createNewProject4&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

### 2. Add reference of the library project

The created Maven project manages its dependencies using its ``` pom.xml ``` file. In order to add a dependency on the *TelstraSMSMessagingAPILib* client library, double click on the ``` pom.xml ``` file in the ``` Package Explorer ```. Opening the ``` pom.xml ``` file will render a graphical view on the cavas. Here, switch to the ``` Dependencies ``` tab and click the ``` Add ``` button as shown in the picture below.

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/java?step=testProject0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

Clicking the ``` Add ``` button will open a dialog where you need to specify TelstraSMSMessagingAPI in ``` Group Id ``` and TelstraSMSMessagingAPILib in the ``` Artifact Id ``` fields. Once added click ``` OK ```. Save the ``` pom.xml ``` file.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

### 3. Write sample code

Once the ``` SimpleConsoleApp ``` is created, a file named ``` App.java ``` will be visible in the *Package Explorer* with a ``` main ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject2&workspaceFolder=Telstra%20SMS%20Messaging%20API-Java&workspaceName=TelstraSMSMessagingAPI&projectName=TelstraSMSMessagingAPILib&rootNamespace=com.telstra.sapi)

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Eclipse, for running the tests do the following:

1. Select the project *TelstraSMSMessagingAPILib* from the package explorer.
2. Select "Run -> Run as -> JUnit Test" or use "Alt + Shift + X" followed by "T" to run the Tests.

## Initialization

### 

API client can be initialized as following.

```java

TelstraSMSMessagingAPIClient client = new TelstraSMSMessagingAPIClient();
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SMSController](#sms_controller)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png "com.telstra.sapi.controllers.SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```java
SMSController sMS = client.getSMS();
```

### <a name="create_messages_sms_send_async"></a>![Method: ](https://apidocs.io/img/method.png "com.telstra.sapi.controllers.SMSController.createMessagesSmsSendAsync") createMessagesSmsSendAsync

> *Tags:*  ``` Skips Authentication ``` 

> Send an SMS to a Australian or International mobile phone.


```java
void createMessagesSmsSendAsync(
        final String authorization,
        final SendSMSRequest payload,
        final APICallBack<MessageSentResponse> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | A header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |
| payload |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and text message.
The recipient number should be in the format '04xxxxxxxx' where x is a digit |


#### Example Usage

```java
try {
    String authorization = "Authorization";
    SendSMSRequest payload = new SendSMSRequest();
    // Invoking the API call with sample inputs
    sMS.createMessagesSmsSendAsync(authorization, payload, new APICallBack<MessageSentResponse>() {
        public void onSuccess(HttpContext context, MessageSentResponse response) {
            // TODO success callback handler
        }
        public void onFailure(HttpContext context, Throwable error) {
            // TODO failure callback handler
        }
    });
} catch(JsonProcessingException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



### <a name="get_messages_sms_outgoing_one_async"></a>![Method: ](https://apidocs.io/img/method.png "com.telstra.sapi.controllers.SMSController.getMessagesSmsOutgoingOneAsync") getMessagesSmsOutgoingOneAsync

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the status of a single outgoing SMS message.


```java
void getMessagesSmsOutgoingOneAsync(
        final String authorization,
        final String messageId,
        final APICallBack<OutboundPollResponse> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |
| messageId |  ``` Required ```  | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms |


#### Example Usage

```java
String authorization = "Authorization";
String messageId = "messageId";
// Invoking the API call with sample inputs
sMS.getMessagesSmsOutgoingOneAsync(authorization, messageId, new APICallBack<OutboundPollResponse>() {
    public void onSuccess(HttpContext context, OutboundPollResponse response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



### <a name="get_messages_sms_outgoing_all_async"></a>![Method: ](https://apidocs.io/img/method.png "com.telstra.sapi.controllers.SMSController.getMessagesSmsOutgoingAllAsync") getMessagesSmsOutgoingAllAsync

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the status for all recent outgoing SMS messages


```java
void getMessagesSmsOutgoingAllAsync(
        final String authorization,
        final APICallBack<List<OutboundPollResponse>> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |


#### Example Usage

```java
String authorization = "Authorization";
// Invoking the API call with sample inputs
sMS.getMessagesSmsOutgoingAllAsync(authorization, new APICallBack<List<OutboundPollResponse>>() {
    public void onSuccess(HttpContext context, List<OutboundPollResponse> response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



### <a name="get_messages_sms_incoming_async"></a>![Method: ](https://apidocs.io/img/method.png "com.telstra.sapi.controllers.SMSController.getMessagesSmsIncomingAsync") getMessagesSmsIncomingAsync

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the unread incoming SMS messages


```java
void getMessagesSmsIncomingAsync(
        final String authorization,
        final APICallBack<List<InboundPollResponse>> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |


#### Example Usage

```java
String authorization = "Authorization";
// Invoking the API call with sample inputs
sMS.getMessagesSmsIncomingAsync(authorization, new APICallBack<List<InboundPollResponse>>() {
    public void onSuccess(HttpContext context, List<InboundPollResponse> response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid or missing request parameters |
| 401 | Invalid or no credentials passed in the request |
| 403 | Authorization credentials passed and accepted but account does not have permission |
| 404 | The requested URI does not exist |
| 405 | The requested resource does not support the supplied verb |
| 415 | API does not support the requested content type |
| 422 | The request is formed correctly, but due to some condition the request cannot be processed e.g. email is required and it is not provided in the request |
| 500 | An internal error occurred when processing the request |
| 501 | The HTTP method being used has not yet been implemented for the requested resource |
| 503 | The service requested is currently unavailable |



[Back to List of Controllers](#list_of_controllers)



