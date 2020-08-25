const fs = require('fs');
const nodeModules = `${__dirname}/node_modules`;
const srcCacheTwig = `${__dirname.slice(0, __dirname.lastIndexOf('/src'))}/var/cache/dev/twig`;

const arrResources = (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') ? [srcCacheTwig] : [srcCacheTwig, nodeModules];

removeResources('folder', arrResources);

function deleteFolderRecursive(path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach(file => {
			const curPath = path + "/" + file;
			if (fs.lstatSync(curPath).isDirectory()) {
				deleteFolderRecursive(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
}

function removeResources(type, names) {
	names.forEach(elem => {
		try {
			if (type === 'file') {
				fs.unlinkSync(elem);
			} else if (type === 'folder') {
				deleteFolderRecursive(elem);
			}
		} catch (err) {
			console.info(err);
		}
	});
}