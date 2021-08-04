const Project = require('../models/projects');

function index(req, res) {
    Project.find({}, function(err, project) {
      if (err) return res.status(400).json(err);
      res.status(200).json(project)
    })
  }


// async function projectDetail (req, res){
//     const project = await Project.findById(req.params.id);
//     if(project.objectIdReference != req.user.id){
//         res.render('projects/readDetail', { project } );
//     }else{
//         res.render('projects/editDetail', { project } );    
//     }
    
// };

async function create (req, res){
    try {
       let thing = await Project.create(req.body)
       console.log(thing+"   THING")
          // image.url= req.file.path;
          // image.filename = req.file.filename;
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

async function deleteProject(req, res) {
	await Project.findByIdAndDelete(req.body.id, function (err) {
	  if (err) return res.status(400).json(err);
	  res.status(200).json("deleted");
	});
  }

module.exports = {
	index,
	create,
	// update,
	delete: deleteProject,
	// projectDetail,
};
