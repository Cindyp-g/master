const justificantesCtr1={};

justificantesCtr1.saludo=(req,res)=>{
    res.send('hola !!');
}

//consulta por su id
justificantesCtr1.getById= (req, res) => {
    const {id_j} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM justificante WHERE id = ?',[id_j], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}
//consultar todos los empleados
justificantesCtr1.getAll= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM justificante', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

//crear un empleado
justificantesCtr1.add= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO empleado SET ?',[data], (err, justificante) => {
            res.redirect('/justificantes');
        })
    })
}
//eliminar un empleado
justificantesCtr1.delete= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM justificante WHERE id = ?',[id_j], (err, rows) => {
            res.json(rows);
        })
    })
}

//editar la tabla 
justificantesCtr1.update= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE justificante SET ? WHERE id = ?',[data, id_j], (err, justificantes) => {
            this.getAll;
        })
    })
}

module.exports=justificantesCtr1;