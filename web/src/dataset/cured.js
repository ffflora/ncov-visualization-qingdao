const data = {
	市南区: '2',
	市北区: '6',
	李沧区: '4',
	崂山区: '2',
	城阳区: '2',
	黄岛区: '9',
	即墨区: '4',
	胶州市: '1',
	平度市: '3',
	莱西市: '1'
};

const dataTransform = d => Object.entries(d)
	.filter(l => !isNaN(l[1]))
	.map(l => [l[0], Number(l[1])]);

export default dataTransform(data);
