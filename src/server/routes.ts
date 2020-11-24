import * as express from 'express';
import * as multer from 'multer';
import * as path from 'path';
import * as aws from 'aws-sdk';

const router = express.Router();

const s3 = new aws.S3({
    //secret keys????
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

/*
const storage = multerS3({
    s3,
    bucket: 'stacey-dnd-app',
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
});
*/

const upload = multer({ storage });

router.post('/api/blogs', upload.single('photo'), (req, res, next) => {
    /*
    const blog = req.body;
    const photo_url = req.file.location;
    const response = await db.blogs.insert(blog.title, blog.content, photo_url);
    */
    res.json('Look at the logs fool');
});

export default router;