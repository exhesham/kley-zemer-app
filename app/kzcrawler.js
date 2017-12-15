
import  repo from './repository/categories'

export { filterQuery, getSectionCategory, getSectionManufacture, getProductsSections, loadProducts};
function getSectionCategory(section) {
	var res = [];
	console.log('getSectionCategory:', section);
	if (Object.keys(repo.categories[section].categories).length === 0 ){
		return getSectionManufacture(section);
	}

	for (var key in repo.categories[section].categories) {
		res.push({'id': key, 'title': repo.categories[section].categories[key].name})
	}
	return res;
}

function getSectionManufacture(section) {
	console.log('getSectionManufacture:', section);
	var res = [];
	for (var key in repo.categories[section].manufactures) {
		res.push({'id': key, 'title': repo.categories[section].manufactures[key].name})
	}
	return res;
}

var allSections = getProductsSections();
function filterQuery(query){
	var res = [];

	for (var i=0;i< allSections.length;i++) {
		var section = allSections[i].id;



		for (var key in repo.categories[section].manufactures) {
			if(repo.categories[section].manufactures[key].name.indexOf(query)>-1) {
				res.push({'id': key, 'title': repo.categories[section].manufactures[key].name})
			}
		}
	}
	console.debug("found :" + res.length + " results")
	return res
}

function getProductsSections() {
	var res = [];
	for (var key in repo.categories) {
		res.push({'id': key, 'title': repo.categories[key].title})
	}
	return res;
}
function loadProducts(section, subsection) {
	console.log('loadProducts',section, subsection )
	// let res = await dataCrawler.crawl_data(section,subsection);
	if(!repo.all_products[section] || !repo.all_products[section][subsection]){
		console.log('no products for section:', section);
		return [];
	}
	return repo.all_products[section][subsection];
}

