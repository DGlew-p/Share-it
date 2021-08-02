const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    object_id_reference: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    
    title: {
      type: String,
      minLength: 1,
   
    },

    image_upload: {
        url: String,
        filename: String,
    },

    tech_stack: {
      type: String,
  
    },

    project_description: {
      type: String,
      minLength: 3,
   
    },
  },
  {
    timestamps: true,
  }
);



let ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
