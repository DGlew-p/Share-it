const User = require('../models/users');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough

module.exports = {
	create,
	login,
};

async function create(req, res) {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
		const user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});
		// NOTE: here we are storing a plaintext password. VERY VERY DANGEROUS. We will replace this in a second:
		console.log(req.body);

		// creating a jwt:
		// the first parameter specifies what we want to put into the token (in this case, our user document)
		// the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
		const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });

		res.status(200).json(token); // send it to the frontend
	} catch (err) {
		res.status(400).json(err);
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		// check password. if it's bad throw an error.
		if (!(await bcrypt.compare(req.body.password, user.password)))
			throw new Error();
		// if we got to this line, password is ok. give user a new token.
		const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
		res.status(200).json(token);
	} catch {
		res.status(400).json('Bad Credentials');
	}
}

// async function update(req, res) {
// 	console.log('this is req body', req.body);
// 	const updatedUser = await User.findById(req.user);
// 	console.log(updatedUser, 'Am I getting the user');
// 	updatedUser.bio = req.body.bio;
// 	updatedUser.location = req.body.location;
// 	updatedUser.skills = req.body.skills;
// 	await updatedUser.save(function (err) {
// 		if (err) return res.status(400).json(err);
// 		res.status(200).json('Ok');
// 	});
// }

// async function create(req, res) {
// 	try {
// 		let { email, password, passwordCheck, displayName } = req.body;

// 		//validate

// 		if (!email || !password || !passwordCheck) {
// 			return res.status(400).json({ msg: 'Not all fields have been entered.' });
// 		}

// 		if (password.length < 3) {
// 			return res
// 				.status(400)
// 				.json({ msg: 'The password needs to be at least 5 characters long' });
// 		}
// 		if (password !== passwordCheck) {
// 			return res
// 				.status(400)
// 				.json({ msg: 'Enter the same password twice for verfication.' });
// 		}
// 		const existingUser = await User.findOne({ email: email });
// 		if (existingUser) {
// 			return res
// 				.status(400)
// 				.json({ msg: 'An account with that email already exists.' });
// 		}
// 		if (!displayName) {
// 			displayName = email;
// 		}
// 		const salt = await bcrypt.genSalt();
// 		const passwordHash = await bcrypt.hash(password, salt);
// 		const newUser = new User({ email, password: passwordHash, displayName });
// 		const savedUser = await newUser.save();
// 		res.json(savedUser);
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// }

// async function login(req, res) {
// 	try {
// 		const { email, password } = req.body;
// 		if (!email || !password) {
// 			return res.status(400).json({ msg: 'Not all fields have been entered' });
// 		}
// 		const user = await User.findOne({ email: email });

// 		if (!user) {
// 			return res
// 				.status(400)
// 				.json({ msg: 'No account with this email has been registered' });
// 		}

// 		const isMatch = await bcrypt.compare(password, user.password);

// 		if (!isMatch) {
// 			return res.status(400).json({ msg: 'Invalid credientials' });
// 		}

// 		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
// 		res.json({
// 			token,
// 			user: { id: user._id, displayName: user.displayName },
// 		});
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// }

//validate

// if (!email || !password) return res.status(400).json({ msg: "Not all fields have been entered." });

// const user = await User.findOne({ email: email });
//  const user = await User.findOne({ email: req.body.email });
//  // check password. if it's bad throw an error.
//  if (!(await bcrypt.compare(req.body.password, user.password)))
//      throw new Error();
//  // if we got to this line, password is ok. give user a new token.
//  const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
//  res.status(200).json(token);
// } catch {
//  res.status(400).json('Bad Credentials');
// }

// const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
// const user = await User.create({
// 	name: req.body.name,
// 	email: req.body.email,
// 	'password: hashedPassword,
// });
// NOTE: here we are storing a plaintext password. VERY VERY DANGEROUS. We will replace this in a second:
// console.log(req.body);

// creating a jwt:
// the first parameter specifies what we want to put into the token (in this case, our user document)
// the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
// const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '24h' });

// 	res.status(200).json(token); // send it to the frontend
// } catch (err) {
// 	res.status(400).json(err);
//

// async function login(req, res) {
// 	const { email, password } = req.body;

//validate

// if (!email || !password) return res.status(400).json({ msg: "Not all fields have been entered." });

// const user = await User.findOne({ email: email });
// 	const user = await User.findOne({ email: req.body.email });
// 	// check password. if it's bad throw an error.
// 	if (!(await bcrypt.compare(req.body.password, user.password)))
// 		throw new Error();
// 	// if we got to this line, password is ok. give user a new token.
// 	const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
// 	res.status(200).json(token);
// } catch {
// 	res.status(400).json('Bad Credentials');
// }

// async function update(req, res) {
// 	console.log('this is req body', req.body);
// 	const updatedUser = await User.findById(req.paramas.id);
// 	console.log(updatedUser, 'Am I getting the user');
// 	updatedUser.bio = req.body.bio;
// 	updatedUser.location = req.body.location;
// 	updatedUser.skills = req.body.skills;
// 	await updatedUser.save(function (err) {
// 		if (err) return res.status(400).json(err);
// 		res.status(200).json('Ok');
// 	});
// }
