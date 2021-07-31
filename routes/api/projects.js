var express = require('express');
var router = express.Router();
const multer = require('multer');
const { storage } = require('../../cloudinary');
const upload = multer({ storage });
const projectCtrl = require('../../controllers/projects');


router.get('/', projectCtrl.index);
router.get('/new', projectCtrl.new);
router.post('/', upload.single('image'), projectCtrl.create);
router.get('/:id', projectCtrl.show);
router.get('/:id/edit', projectCtrl.edit);
router.put('/:id', upload.single('image'), projectCtrl.update);
router.delete('/:id', projectCtrl.delete);


module.exports = router;