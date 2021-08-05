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
		{
			name: 'Elli Raynal',
			email: 'elli@elli.com',
			password: 'elli',
			location: 'Toronto',
			bio: 'CSS devotee',
			skills: 'React',
		},
	]);

	const projects = await Project.create([
		{
			title:"AAA But I must explain to you",
			tech_stack:"AAA how all this mistaken idea",
			project_description:"AAA of denouncing was born and I will give you a complete account of the system,",
			object_id_reference:"610824bbff79824ffb958149"


			
		},
		{
			title:"BBB You are the last hope of the universe.",
			tech_stack:"BBB I am Singing Wind, Chief of the Martians",
			project_description:"BBB Fry has discovered the smelliest object in the known universe!",
			object_id_reference:"610824bbff79824ffb958149"


		},
		{
			title:"CCC Always hold in these matters ",
			tech_stack:" CCC when our power of choice is untrammelled ",
			project_description:"CCC  Please, Don-Bot… look into your hard drive, and open your mercy file! ",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"DDD vero eos et iusto ",
			tech_stack:"DDD how all this mistaken idea",
			project_description:"DDD non recusandae. Itaque earum rerum hic aut perferendis doloribus asperiores repellat.",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"EEE But I must explain to you",
			tech_stack:"EEE how all this mistaken idea",
			project_description:"EEE of denouncing was born and I will give you a complete account of the system,",
			object_id_reference:"610824bbff79824ffb958149"


		},
	

	]);


	console.log(items);
	console.log(projects);

	process.exit();
})();
