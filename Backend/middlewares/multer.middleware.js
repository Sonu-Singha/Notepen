// Code starts from Here

// Importing path & multer

import path from "path";
import multer from "multer";






// Creating uploading system

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        // const extName =path.extname(file.originalname)
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})



// Exporting storage

const upload = multer({ storage: storage })

export default upload;