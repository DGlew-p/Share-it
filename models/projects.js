const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({

      title: {
      type: String,
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
    },

    object_id_reference: {
      type: Schema.Types.ObjectId, ref: 'User'
  },
},{
    timestamps: true,
  }
);



let ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
