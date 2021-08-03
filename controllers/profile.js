const User = require('../models/user');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough

module.exports = {
	create,

};


async function create(req, res) {
  console.log(create, 'at the create')
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
		const user = await User.create({
		
			bio: req.body.bio,
			location:	req.body.location,
			skills:	req.body.skills,
			image: req.body.image,
   password: hashedPassword,
  
	});
	console.log(user, 'want to see my user object')
	console.log(profileForm, 'at the controller profile form')
 const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
res.status(200).json(user, );
				}catch{
					res.status(400).json('failed to create user profile');
				}
}