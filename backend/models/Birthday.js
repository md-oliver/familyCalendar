import mongoose, {Schema} from "mongoose";

const birthdaySchema = new Schema({
    of: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    monthId: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Birthday", birthdaySchema);