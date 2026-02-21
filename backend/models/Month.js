import mongoose, {Schema} from "mongoose";

const monthSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    monthId: {
        type: Number,
        required: true,
    },
    events: {
        birthdays: [{
            type: Schema.Types.ObjectId,
            ref: "Birthday",
        }],
        anniversaries: [{
            type: Schema.Types.ObjectId,
            ref: "Anniversary"
        }]
    }
})


export default mongoose.model('Month', monthSchema)