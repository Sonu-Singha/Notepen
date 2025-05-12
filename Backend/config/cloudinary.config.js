// Code starts from Here


// Importing cloudinary & necessary packages
import { v2 as cloudinary } from 'cloudinary';

import { config } from "dotenv";
config();



// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
});


// Exporting cloudinary
export default cloudinary;