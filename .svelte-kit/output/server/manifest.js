export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.gif"]),
	mimeTypes: {".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.beec864e.js","app":"_app/immutable/entry/app.3599c9ee.js","imports":["_app/immutable/entry/start.beec864e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.9a39ce5c.js","_app/immutable/entry/app.3599c9ee.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
