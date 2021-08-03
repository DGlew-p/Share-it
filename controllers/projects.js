const Project = require('../models/projects');

function index(req, res) {
	Project.find({}, function (err, project) {
		if (err) return res.status(400).json(err);
		res.status(200).json(project);
	});
}

async function create(req, res) {
	try {
		let thing = await Project.create(req.body);
		console.log(thing + '   THING');
		// project.image_upload.url= req.file.path;
		// project.image_upload.filename = req.file.filename;
		res.status(200).json('CREATE');
	} catch (err) {
		return res.status(400).json('Bad control @ CREATE');
	}
}

module.exports = {
	index,
	create,
	// update,
	// delete: deleteProject,
	// projectDetail,
};
