/*
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.telstra.sapi.models;

import java.util.*;

public class MessageSentResponseBuilder {
    //the instance to build
    private MessageSentResponse messageSentResponse;

    /**
     * Default constructor to initialize the instance
     */
    public MessageSentResponseBuilder() {
        messageSentResponse = new MessageSentResponse();
    }

    /**
     * The mobile phone number (in E.164 format) that the message was sent to.
     */
    public MessageSentResponseBuilder to(String to) {
        messageSentResponse.setTo(to);
        return this;
    }

    /**
     * The current status of the message for this address. Possible values are; 'DeliveryImpossible' – The message has been rejected and cannot be delivered. see the description field. 'MessageWaiting' – The message will be delivered as soon as possible.
     */
    public MessageSentResponseBuilder deliveryStatus(String deliveryStatus) {
        messageSentResponse.setDeliveryStatus(deliveryStatus);
        return this;
    }

    /**
     * This is a string that describes why a message could not be delivered.
     */
    public MessageSentResponseBuilder description(String description) {
        messageSentResponse.setDescription(description);
        return this;
    }

    /**
     * The message ID of the SMS that was sent. Use this ID to view the message status or to receive get responses.
     */
    public MessageSentResponseBuilder messageId(String messageId) {
        messageSentResponse.setMessageId(messageId);
        return this;
    }

    /**
     * A string that identifys the transport mechanism that was selected for delivering the the message.
     */
    public MessageSentResponseBuilder messageType(MessageTypeEnum messageType) {
        messageSentResponse.setMessageType(messageType);
        return this;
    }

    /**
     * An integer between 0 and 65536 that indicates the number of chargable segments in the message. For SMS this will be the number of segments the message had to be divided into (after convertion) to a character set understood by the SMS network.
     */
    public MessageSentResponseBuilder numberSegements(Integer numberSegements) {
        messageSentResponse.setNumberSegements(numberSegements);
        return this;
    }
    /**
     * Build the instance with the given values
     */
    public MessageSentResponse build() {
        return messageSentResponse;
    }
}