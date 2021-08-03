const ItemModel = require('./models/users');

require('dotenv').config();
require('./config/database');

(async function populateDB() {
	await ItemModel.deleteMany({});
	const items = await ItemModel.create([
		{
			name: 'John Smith',
			email: 'john@john.com',
			password: 'john',
			location: 'Toronto, Ontario',
			bio: 'Been Developing for 12 years',
			skills: 'React',
		},
		{
			name: 'Bill Taylor',
			email: 'bill@bill.com',
			password: 'john',
			location: 'Windsor, Ontario',
			bio: 'New Developer',
			skills: 'React',
		},
		{
			name: 'Russ Taylor',
			email: 'russ@russ.com',
			password: 'john',
			location: 'Vancouver, British Columbia',
			bio: 'Love to Hike etc..',
			skills: 'React',
		},
	]);

	console.log(items);

	process.exit();
})();
