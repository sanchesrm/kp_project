
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.clientes = function(req, res) {
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    var array_clientes = [];
    for (var i=0; i<120; i++)
    {
        array_clientes.push({
            codigo : i+1,
            nome : 'Nome de teste '+ (i+1),
            dataNascimento: randomDate(new Date(1970, 1, 1), new Date())
        });
    }
    res.json(array_clientes);
};

