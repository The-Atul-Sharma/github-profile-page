export const filterType = [{
		id: 1,
		title: 'All',
		filter: {
			show: 'All',
		},
	},
	{
		id: 2,
		title: 'Public',
		filter: {
			private: false,
		}
	},
	{
		id: 3,
		title: 'Private',
		filter: {
			private: true,
		}
	},
	{
		id: 4,
		title: 'Forks',
		filter: {
			fork: true,
		}
	},
	{
		id: 5,
		title: 'Archived',
		filter: {
			archived: true,
		}
	},
];

export const filterLanguage = [{
		id: 1,
		title: 'All'
	},
	{
		id: 2,
		title: 'JavaScript'
	},
	{
		id: 3,
		title: 'HTML'
	},
	{
		id: 4,
		title: 'TypeScript'
	},
	{
		id: 5,
		title: 'CSS'
	},
	{
		id: 6,
		title: 'Python'
	},
	{
		id: 7,
		title: 'R'
	},
	{
		id: 8,
		title: 'Java'
	}
];
