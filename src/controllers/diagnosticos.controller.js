const diagnsticosCtr1={};

diagnsticosCtr1.saludo=(req,res)=>{
    res.send('hola !!');
}


diagnsticosCtr1.getById= (req, res) => {
    const {folio} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM diagnostico WHERE folio = ?',[folio], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

diagnsticosCtr1.getAll= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM diagnostico', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}


diagnsticosCtr1.add= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO diagnostico SET ?',[data], (err, diagnostico) => {
            res.redirect('/diagnosticos');
        })
    })
}

diagnsticosCtr1.delete= (req, res) => {
    const {folio} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM diagnostico WHERE folio = ?',[folio], (err, rows) => {
            res.json(rows);
        })
    })
}


diagnsticosCtr1.update= (req, res) => {
    const data = req.body;
    const {folio}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE diagnostico SET ? WHERE folio = ?',[data, folio], (err, diagnostico) => {
            this.getAll;
        })
    })
}

module.exports=diagnsticosCtr1;
