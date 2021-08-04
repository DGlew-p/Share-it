const ItemModel = require('./models/users');
const Project = require('./models/projects');

require('dotenv').config();
require('./config/database');

(async function populateDB() {
	await ItemModel.deleteMany({});
	await Project.deleteMany({});
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

	const projects = await Project.create([
		{
			title:"But I must explain to you",
			tech_stack:"how all this mistaken idea",
			project_description:"of denouncing was born and I will give you a complete account of the system,",
			object_id_reference:"610824bbff79824ffb958149"


			
		},
		{
			title:"ero eos et ducimus qui ",
			tech_stack:"Et harum est et expedita distinctio. Nam libero tempor",
			project_description:"dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit",
			object_id_reference:"610824bbff79824ffb958149"


		},
		{
			title:"Always hold in these matters ",
			tech_stack:"when our power of choice is untrammelled ",
			project_description:" These cases are perfectly simple and easy to distinguish. In a free hour",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"vero eos et iusto ",
			tech_stack:"how all this mistaken idea",
			project_description:"non recusandae. Itaque earum rerum hic aut perferendis doloribus asperiores repellat.",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"But I must explain to you",
			tech_stack:"how all this mistaken idea",
			project_description:"of denouncing was born and I will give you a complete account of the system,",
			object_id_reference:"610824bbff79824ffb958149"


		},
	

	]);


	console.log(items);
	console.log(projects);

	process.exit();
})();
