# Getting started

The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator.
It also allows your application to track the delivery status of both sent and received SMS messages.


## How to Build


You must have Python 2 >=2.7.9 or Python 3 >=3.4 installed on your system to install and run this SDK. This SDK package depends on other Python packages like nose, jsonpickle etc. 
These dependencies are defined in the ```requirements.txt``` file that comes with the SDK.
To resolve these dependencies, you can use the PIP Dependency manager. Install it by following steps at [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/).

Python and PIP executables should be defined in your PATH. Open command prompt and type ```pip --version```.
This should display the version of the PIP Dependency Manager installed if your installation was successful and the paths are properly defined.

* Using command line, navigate to the directory containing the generated files (including ```requirements.txt```) for the SDK.
* Run the command ```pip install -r requirements.txt```. This should install all the required dependencies.

![Building SDK - Step 1](https://apidocs.io/illustration/python?step=installDependencies&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python)


## How to Use

The following section explains how to use the Telstrasmsmessagingapi SDK package in a new project.

### 1. Open Project in an IDE

Open up a Python IDE like PyCharm. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

![Open project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=pyCharm)

Click on ```Open``` in PyCharm to browse to your generated SDK directory and then click ```OK```.

![Open project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=openProject0&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python)     

The project files will be displayed in the side bar as follows:

![Open project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=openProject1&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python&projectName=telstrasmsmessagingapi)     

### 2. Add a new Test Project

Create a new directory by right clicking on the solution name as shown below:

![Add a new project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=createDirectory&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python&projectName=telstrasmsmessagingapi)

Name the directory as "test"

![Add a new project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=nameDirectory)
   
Add a python file to this project with the name "testsdk"

![Add a new project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=createFile&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python&projectName=telstrasmsmessagingapi)

Name it "testsdk"

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=nameFile)

In your python file you will be required to import the generated python library using the following code lines

```Python
from telstrasmsmessagingapi.telstrasmsmessagingapi_client import TelstrasmsmessagingapiClient
```

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=projectFiles&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python&libraryName=telstrasmsmessagingapi.telstrasmsmessagingapi_client&projectName=telstrasmsmessagingapi)

After this you can write code to instantiate an API client object, get a controller object and  make API calls. Sample code is given in the subsequent sections.

### 3. Run the Test Project

To run the file within your test project, right click on your Python file inside your Test project and click on ```Run```

![Run Test Project - Step 1](https://apidocs.io/illustration/python?step=runProject&workspaceFolder=Telstra%20SMS%20Messaging%20API-Python&libraryName=telstrasmsmessagingapi.telstrasmsmessagingapi_client&projectName=telstrasmsmessagingapi)


## How to Test

You can test the generated SDK and the server with automatically generated test
cases. unittest is used as the testing framework and nose is used as the test
runner. You can run the tests as follows:

  1. From terminal/cmd navigate to the root directory of the SDK.
  2. Invoke 'pip install -r test-requirements.txt'
  3. Invoke 'nosetests'

## Initialization

### 

API client can be initialized as following.

```python

client = TelstrasmsmessagingapiClient()
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SMSController](#sms_controller)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get controller instance

An instance of the ``` SMSController ``` class can be accessed from the API Client.

```python
 sms_client = client.sms
```

### <a name="create_messages_sms_send"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.create_messages_sms_send") create_messages_sms_send

> *Tags:*  ``` Skips Authentication ``` 

> Send an SMS to a Australian or International mobile phone.

```python
def create_messages_sms_send(self,
                                 authorization,
                                 payload)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | A header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |
| payload |  ``` Required ```  | A JSON or XML payload containing the recipient's phone number and text message.
The recipient number should be in the format '04xxxxxxxx' where x is a digit |



#### Example Usage

```python
authorization = 'Authorization'
payload = SendSMSRequest()

result = sms_client.create_messages_sms_send(authorization, payload)

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




### <a name="get_messages_sms_outgoing_one"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.get_messages_sms_outgoing_one") get_messages_sms_outgoing_one

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the status of a single outgoing SMS message.

```python
def get_messages_sms_outgoing_one(self,
                                      authorization,
                                      message_id)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |
| messageId |  ``` Required ```  | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms |



#### Example Usage

```python
authorization = 'Authorization'
message_id = 'messageId'

result = sms_client.get_messages_sms_outgoing_one(authorization, message_id)

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




### <a name="get_messages_sms_outgoing_all"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.get_messages_sms_outgoing_all") get_messages_sms_outgoing_all

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the status for all recent outgoing SMS messages

```python
def get_messages_sms_outgoing_all(self,
                                      authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |



#### Example Usage

```python
authorization = 'Authorization'

result = sms_client.get_messages_sms_outgoing_all(authorization)

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




### <a name="get_messages_sms_incoming"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.get_messages_sms_incoming") get_messages_sms_incoming

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve the unread incoming SMS messages

```python
def get_messages_sms_incoming(self,
                                  authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS' |



#### Example Usage

```python
authorization = 'Authorization'

result = sms_client.get_messages_sms_incoming(authorization)

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



