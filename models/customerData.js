
const mongoose = require("mongoose");

const customerDataSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            // required: true,
            maxlength: 50,
        },
        address: {
            type: String,
            // required: true,
            maxlength: 150

        },
        telephoneNumber: {
            type: Number,
            // required: true,
            maxlength: 10
        },
        faxNumber: {
            type: String,
            // required: true,
            maxlength: 15
        },
        emaiAddress: {
            type: String,
            // required: true,
            maxlength: 100,

        },
        websiteAddress: {
            type: String,
            // required: true,
            maxlength: 100,

        },
        nameAndTitle: {
            type: String,
            // required: true,
            maxlength: 50
        },
        directEmailAddress: {
            type: String,
            // required: true,
            maxlength: 50

        },
        telephoneNoOfRepresentativeDirect: {
            type: Number,
            // required: true,
            maxlength: 50

        },
        telephoneNoOfRepresentativeMobile: {
            type: Number,
            // required: true,
            maxlength: 50

        },
        establishedDate: {
            type: Date,
            // required: true,
            maxlength: 50

        },
        year1: {
            type: Date,
            // required: true,
            maxlength: 20

        },
        year2: {
            type: Date,
            // required: true,
            maxlength: 20

        },
        year3: {
            type: Date,
            // required: true,
            maxlength: 20


        },
        chf1: {
            type: Number,
            // required: true,
            maxlength: 50

        },
        chf2: {
            type: Number,
            // required: true,
            maxlength: 50
        },
        chf3: {
            type: Number,
            // required: true,
            maxlength: 50
        },
        geographicService: {
            type: String,
            // required: true,
            maxlength: 50

        },
        businessType: {
            type: String,
            // required: true,
            maxlength: 50

        },
        legalStructure: {
            type: String,
            // required: true,
            maxlength: 50

        },

        consent: {
            type: String,
            // required: true,
            maxlength: 50

        }










    }
)

module.exports = mongoose.model("customerData", customerDataSchema)

