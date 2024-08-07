const alumnosCtr1={};

alumnosCtr1.saludo=(req,res)=>{
    res.send('hola !!');
}


alumnosCtr1.getById= (req, res) => {
    const {folio} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM alumno WHERE numcontrol = ?',[numcontrol], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

alumnosCtr1.getAll= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM alumno', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}


alumnosCtr1.add= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO alumno SET ?',[data], (err, alumno) => {
            res.redirect('/alumnos');
        })
    })
}

alumnosCtr1.delete= (req, res) => {
    const {numcontrol} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM alumno WHERE numcontrol = ?',[numcontrol], (err, rows) => {
            res.json(rows);
        })
    })
}


alumnosCtr1.update= (req, res) => {
    const data = req.body;
    const {folio}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE alumno SET ? WHERE numcontrol = ?',[data, numcontrol], (err, alumno) => {
            this.getAll;
        })
    })
}

module.exports=alumnosCtr1;