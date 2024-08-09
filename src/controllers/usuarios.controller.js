const usuariosCtr1={};

usuariosCtr1.saludo=(req,res)=>{
    res.send('hola !!');
}


usuariosCtr1.getById= (req, res) => {
    const {idu} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario WHERE idu = ?',[idu], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

usuariosCtr1.getAll= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}


usuariosCtr1.add= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO usuario SET ?',[data], (err, usuario) => {
            res.redirect('/usuarios');
        })
    })
}

usuariosCtr1.delete= (req, res) => {
    const {idu} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM usuario WHERE idu = ?',[idu], (err, rows) => {
            res.json(rows);
        })
    })
}


usuariosCtr1.update= (req, res) => {
    const data = req.body;
    const {idu}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE usuario SET ? WHERE idu = ?',[data, idu], (err, usuario) => {
            this.getAll;
        })
    })
}

module.exports=usuariosCtr1;