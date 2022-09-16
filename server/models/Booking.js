import mongoose from 'mongoose';
const { Schema } = mongoose;


const bookingSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name : {
        type: String,
        require: true
    },
    last_name : {
        type: String,
        require: true
    },
    arrival_date : {
        type: String,
        require: true
    },
    depart_date : {
        type: String,
        require: true
    },
    number_of_person : {
        type: String,
        required: true
    },
    number_of_children : {
        type: String,
        required: true
    },
    site_location : {
        type: String,
        required: true,
    },
    summary : {
        type: String,
        required: false
    } 
}, {timestamps: true})




export default mongoose.model("Booking", bookingSchema)