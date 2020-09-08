import {
    Schema,
    ObjectId,
    model
} from 'mongoose'

const AssetSchema = new Schema({
    assetID: ObjectId,
    spvID: { type: Number },
    name: { type: String },
    desc: { type: String, default: 'XYZ' },
    dealType: { type: String, default: 'A' },
    category: { type: String, default: 'furniture' },
    visibility: { type: Boolean, default: true },
    investmentInto: { type: String, default: 'furniture' },
    totalAmount: { type: Number, default: 0 },
    collectedAmount: { type: Number, default: 0 },
    irr: { type: Number, default: 0.0 },
    minAmount: { type: Number, default: 0 },
    maxAmount: { type: Number, default: 0 },
    overAmount: { type: Number, default: 0 },
    riskRating: { type: Number, default: 0 },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, defualt: null },
    dealCloseDate: { type: Date, deafult: null },
    tenure: { type: Number, default: null },
    repaymentCycle: { type: String, defualt: 'Monthly' },
    leadPartner: { type: Number, default: 1 },
    operatingPartner: { type: Number, default: 1 },
    assetAgreement: { type: String, default: "pending" },
    riskAgreement: { type: String, default: "pending" },
    postTaxYield: { type: Number, default: 0 },
    leaseRental: { type: Number, default: 100 },
    assetSaleValue: { type: Number, default: 100 },
    forecastedReturn: { type: Number, default: 100 },
    backgroundImage: { type: Number, default: "https://place-hold.it/300x500" },
    status: { type: String, default: 'active' },
    createdAt: { type: Date, default: Date.now },
    partnerName: { type: String, default: null },
    partnerLogo: { type: Number, default: "https://place-hold.it/64x64" },
    gripFee: { type: Boolean, default: false },
    hideAmount: { type: String, default: "No" }
});

const Asset = model('asset', AssetSchema)
export default Asset