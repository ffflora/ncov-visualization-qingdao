const data = {
	市南区: '1',
	崂山区: '1',
	城阳区: '1',
	黄岛区: '1'
};

const dataTransform = d => Object.entries(d)
	.filter(l => !isNaN(l[1]))
	.map(l => [l[0], Number(l[1])]);

export default dataTransform(data);
