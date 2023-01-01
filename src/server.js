const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {

	const server = Hapi.server({
		port: 5000,
		host: 'localhost',
		routes: {
			cors: {
				origin: ['*']
			}
		}
	});

	server.route(routes)

	await server.start();
	console.log(`Server has running on ${server.info.uri}`)
	console.log(`Local Address: ${server.info.address}`)
	console.log(`ID: ${server.info.id}`)
}
init()