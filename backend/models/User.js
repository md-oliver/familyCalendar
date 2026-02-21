import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        minLength: 4,
        maxLength: 20,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15
    }
})

export default mongoose.model('User', userSchema);