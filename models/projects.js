const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    object_id_reference: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    
    title: {
      type: String,
      minLength: 1,
      required: true,
    },

    image_upload: {
        url: String,
        filename: String,
    },

    tech_stack: {
      type: String,
      required: false,
    },

    project_description: {
      type: String,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
