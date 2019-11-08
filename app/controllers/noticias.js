module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnecition();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error, result) => {
        res.render("noticias/noticias", { noticias: result })
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnecition();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;
    noticiaModel.getNoticia(id_noticia, (error, result) => {
        res.render("noticias/noticia", { noticia: result })
    });
} 
