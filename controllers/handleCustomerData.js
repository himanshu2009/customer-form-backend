

const customerData = require("../models/customerData")


exports.handleCustomerData = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const { companyName, address, telephoneNumber, faxNumber, emailAddress, websiteAddress, nameAndTitle, directEmailAddress, telephoneNoOfRepresentativeDirect, telephoneNoOfRepresentativeMobile, establishedDate, detailsOfService, year1,
            year2, year3, chf1, chf2, chf3, geographicService,
            businessType,
            legalStructure, consent } = req.body;

        const response = await customerData.create({
            companyName, address, faxNumber, telephoneNumber, emailAddress, websiteAddress, nameAndTitle, directEmailAddress, telephoneNoOfRepresentativeDirect, telephoneNoOfRepresentativeMobile, establishedDate, detailsOfService, year1,
            year2, year3, chf1, chf2, chf3, geographicService,
            businessType,
            legalStructure, consent
        })

        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        )

    }
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(404).json({
            success: false,
            data: "Internal server error",
            message: err.message

        })
    }
}