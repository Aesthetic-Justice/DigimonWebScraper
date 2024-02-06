const { Double, UUID } = require("bson");
const { Schema, model } = require(`mongoose`);

const cardEntrySchema = new Schema(
    {
        _id:{
            type: String,
            default: UUID.generate()
        },
        setID:{
            type: String,
            require: true,
            trimmed: true
        },
        name: {
            type: String,
            trimmed: true
        },
        type: {
            type: String,
            trimmed: true
        },
        rarity: {
            type: String,
            trimmed: true
        },
        alt: {
            type: Boolean,
            trimmed: true
        },
        form: {
            type: String,
            trimmed: true
        },
        attribute: {
            type: String,
            trimmed: true
        },
        type: {
            type: String,
            trimmed: true
        },
        DP: {
            type: Number
        },
        playCost:{
            type: Number
        },
        digivolveCost1:{
            type: String,
            trimmed: true
        },
        digivolveCost2:{
            type: String,
            trimmed: true
        },
        upperText:{
            type: String
        },
        lowerText:{
            type: String
        },
        promoInfo:{
            type: String
        }

    }
)

const Card = model('card',cardEntrySchema);
module.exports = Card;