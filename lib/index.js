/**
  * @module TelstraSMSMessagingAPILib
  *
  * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator. It also allows your application to track the delivery status of both sent and received SMS messages. 
  */

'use strict';

const Configuration = require('./configuration');
const SMSController = require('./Controllers/SMSController');
const SendSMSRequest = require('./Models/SendSMSRequest');
const MessageSentResponse = require('./Models/MessageSentResponse');
const MessageTypeEnum = require('./Models/MessageTypeEnum');
const InboundPollResponse = require('./Models/InboundPollResponse');
const OutboundPollResponse = require('./Models/OutboundPollResponse');
const StatusEnum = require('./Models/StatusEnum');
const ErrorErrorException = require('./Exceptions/ErrorErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TelstraSMSMessagingAPILib
    Configuration,
    // controllers of TelstraSMSMessagingAPILib
    SMSController,
    // models of TelstraSMSMessagingAPILib
    SendSMSRequest,
    MessageSentResponse,
    MessageTypeEnum,
    InboundPollResponse,
    OutboundPollResponse,
    StatusEnum,
    // exceptions of TelstraSMSMessagingAPILib
    ErrorErrorException,
    APIException,
};

module.exports = initializer;
