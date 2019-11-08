module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'O título deve ser preenchido').notEmpty();
    req.assert('resumo', 'O resumo deve ser preenchido').notEmpty();
    req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres').len(10, 100);

    req.assert('autor', 'O autor deve ser preenchido').notEmpty();
    req.assert('data_noticia', 'A data deve ser preenchida').notEmpty();
    req.assert('noticia', 'A notícia deve ser preenchida').notEmpty();

    var erros = req.validationErrors();
    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    } 

    var connection = application.config.dbConnecition();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    });
}
