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
			title:"Breakout",
			tech_stack:"NextJS",
			project_description:"In Breakout, the goal is to destroy all the bricks at the top. A ball bounces off the top and two sides of the screen. When a brick is hit, the ball bounces back and the brick is destroyed.",
			object_id_reference:"610824bbff79824ffb958149"


			
		},
		{
			title:"Rock Paper Scissors",
			tech_stack:"React , Icons8",
			project_description:"Rock-paper-scissors originated in China and spread with increased contact with East Asia, while developing different variants in signs over time.",
			object_id_reference:"610824bbff79824ffb958149"


		},
		{
			title:"Landing Page Template",
			tech_stack:"  HTML and CSS.",
			project_description:"This landing page was created as a temporary placeholder for my personal domain while I was working on my portfolio. It's designed keeping simplicity in mind for both setup and UI. ",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"qr-code generator",
			tech_stack:"JavaScript",
			project_description:"Making a qr-code generator is pretty simple tbh because of the existing stuff available on the internet.",
			object_id_reference:'6104855b08812d395ae9d950'


		},
		{
			title:"Pascaline- a simple calculator for all your needs",
			tech_stack:"JavaScript , Math.js",
			project_description:"Last week, I took part in the week-long IBD WFH tool building challenge hosted by crio.do. In this challenge, So I began thinking about what I could build and decided to work on an issue I found a few days ago.",
			object_id_reference:"610824bbff79824ffb958149"


		},
	

	]);


	console.log(items);
	console.log(projects);

	process.exit();
})();
