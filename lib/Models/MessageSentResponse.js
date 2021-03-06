/**
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MessageSentResponse
 */
class MessageSentResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.to = this.constructor.getValue(obj.to);
        this.deliveryStatus = this.constructor.getValue(obj.deliveryStatus);
        this.description = this.constructor.getValue(obj.description);
        this.messageId = this.constructor.getValue(obj.messageId);
        this.messageType = this.constructor.getValue(obj.messageType);
        this.numberSegements = this.constructor.getValue(obj.numberSegements);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'to', realName: 'to' },
            { name: 'deliveryStatus', realName: 'deliveryStatus' },
            { name: 'description', realName: 'description' },
            { name: 'messageId', realName: 'messageId' },
            { name: 'messageType', realName: 'messageType' },
            { name: 'numberSegements', realName: 'numberSegements' },
        ]);
    }
}

module.exports = MessageSentResponse;
