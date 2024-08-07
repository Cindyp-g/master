const empleadosCtr1={};

empleadosCtr1.saludo=(req,res)=>{
    res.send('hola !!');
}

//consulta por su id
empleadosCtr1.getById= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM empleado WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}
//consultar todos los empleados
empleadosCtr1.getAll= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM empleado', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

//crear un empleado
empleadosCtr1.add= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO empleado SET ?',[data], (err, empleado) => {
            res.redirect('/empleados');
        })
    })
}
//eliminar un empleado
empleadosCtr1.delete= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM empleado WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}

//editar la tabla 
empleadosCtr1.update= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE empleado SET ? WHERE id = ?',[data, id], (err, empleado) => {
            this.getAll;
        })
    })
}

module.exports=empleadosCtr1;