module.exports = function(app) {
	app.post('/cookie', function(req, res) {
		console.log(req.body);
	});
};