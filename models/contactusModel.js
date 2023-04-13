import mongoose from "mongoose";
const {Schema, model} = mongoose;


const contactSchema = new Schema({
        fullName: {
            type: String,
            required: [true, "Please enter fullName"]
        },
        email: {
            type: String,
            required: [true, "Please enter email"]
        },
        message: {
            type: String,
            required: [true, "Please enter description"]
        },
        
    }, {
        collection: 'contacts'
    });

    

const Contact = model('Contact',contactSchema);
export default Contact;