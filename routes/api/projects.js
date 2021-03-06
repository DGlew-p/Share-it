var express = require('express');
var router = express.Router();
const multer = require('multer');
const { storage } = require('../../cloudinary/index');
const upload = multer({ storage });
const projectCtrl = require('../../controllers/projects');

router.get('/', projectCtrl.index);
// router.post('/new', projectCtrl.create);
router.delete('/', projectCtrl.delete);
router.post('/new', upload.single('image'), projectCtrl.create);
// router.put('/:id', upload.single('image'), projectCtrl.update);

// router.get('/:id', projectCtrl.show);
// router.get('/:id/edit', projectCtrl.edit);

// router.delete('/:id', projectCtrl.delete);

module.exports = router;
