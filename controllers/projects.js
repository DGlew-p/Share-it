const Project = require('../models/projects');
const User = require('../models/users');

function index(req, res) {
	Project.find({}, function (err, project) {
		if (err) return res.status(400).json(err);
		res.status(200).json(project);
	});
}

// async function projectDetail (req, res){
//     const project = await Project.findById(req.params.id);
//     if(project.objectIdReference != req.user.id){
//         res.render('projects/readDetail', { project } );
//     }else{
//         res.render('projects/editDetail', { project } );
//     }

// };

<<<<<<< HEAD
async function create(req, res) {
	try {
		const Project = await Project.create({
			// objectIdReference : req.body.user_id,
			title: req.body.title,
			image_upload: req.body[(url, filename)],
			tech_stack: req.body.tech_stack,
			project_description: req.body.project_description,
		});
		console.log(req.body);
		// await newProject.save();
		res.status(200).json();
	} catch (err) {
		return res.status(400).json('Bad Request');
	}
}

async function update(req, res) {
	try {
		const updatedProject = await Project.findById(req.params.id);

		updatedProject.title = req.body.title;
		updatedProject.image.url = req.file.path;
		updatedProject.image.imageName = req.file.filename;
		updatedProject.tech_stack = req.body.tech_stack;
		updatedProject.project_description = req.body.project_description;

		await updatedProject.save();
		res.status(200).json('OK!');
	} catch (err) {
		return res.status(400).json('Bad Request');
	}
}

async function deleteProject(req, res) {
	await Project.findByIdAndDelete(req.body.id, function (err) {
		if (err) return res.status(400).json(err);
		res.status(200).json('deleted');
	});
}

module.exports = {
	index,
	create,
	update,
	delete: deleteProject,
	// projectDetail,
};
=======
async function create (req, res){
    try {
       let thing = await Project.create(req.body)
       console.log(thing+"   THING")
          // project.image_upload.url= req.file.path;
          // project.image_upload.filename = req.file.filename;
          res.status(200).json('CREATE');
      }
      catch(err) {
        return res.status(400).json('Bad control @ CREATE')
    }
 
  };
  

// async function update (req, res){
//     try {
//         const updatedProject = await Project.findById(req.params.id);

//         updatedProject.title = req.body.title;
//         updatedProject.image.url = req.file.path;
//         updatedProject.image.imageName = req.file.filename;
//         updatedProject.tech_stack = req.body.tech_stack;
//         updatedProject.project_description = req.body.project_description;

//         await updatedProject.save();
//         res.status(200).json('OK!')
//     } catch(err) {
//         return res.status(400).json('Bad Request')
//     }
//   };

//   async function deleteProject(req, res) {
//     await Project.findByIdAndDelete(req.body.id, function (err) {
//       if (err) return res.status(400).json(err);
//       res.status(200).json("deleted");
//     });
//   }

module.exports = {
    index,
    create,
    // update,
    // delete: deleteProject,
    // projectDetail,

} 
>>>>>>> e193d9b36ff42177b18e807e6d56e7b8fa14db84