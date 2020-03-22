module.exports = function(app){
    app.get('/dotproduct', function(req, res){
        res.render('../views/dotproduct.ejs');
        console.log('welcome');
    });
};