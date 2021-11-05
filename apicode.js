//APICode
var DB = MySQL();
DB->ip = "127.0.0.1"
DB->user = "root"
DB->pass = "clave_de_root"
DB->database = "Productos"
var con = DB.connect()

type Productos struct {
  id              int(11),
  cbFormato       string(45) Only Numbers Abcedario,
  cbData          string, //default 450
  nombre          string(100),
  fechaAlta       datetime,
  idUsuario       integer (> 10, 1000 <),
  idUnicoProducto string(100)
];


if(con)say "Connexion exitosa" else say "Fallo en la Connexion DB"
var tabla_producto = DB->query("SELECT idProducto, nombre, cbData, idUsuario, fechaAlta")

producto.routeGET("/producto",$idUsuario as id){
  tabla_producto.idUsuario(equal $idUsuario)
  tabla_producto.fechaAlta(< date("21-05-2017") and > date("14-05-2016"))
  producto.query("select ....",$resultado){
    print.json("productos",$resultado)
  }else{
    print.json("mensaje":"Se ha producido un error al generar el listado de productos.")
  }
}


producto.PUT("/add",$productoAdd){
  $parameter = ["cbformato","cbdata","nombre","fechaalta","usuario","fotodata"] //auto crea las variables recibirlas por PUT
  $parameter.cbformato.required = TRUE  // .required Establece como dato obligatorio al recibirlo, al verificar no estar genera un error automaticamente
  $parameter.nombre.least = 7     // en los campos texto se autoverificara que cumpla con el tamaño minimo y el limite maximo
  $parameter.nombre.required = TRUE
  $parameter.cbformato.least = 3
    // si el dato no es enviado y no es obligatorio se le asignara 1 dato minimo valido
	producto.query("insert ...."){
		print.json("mensaje":"Producto agregado con exito.")
	}else{
		print.json("mensaje":"Se ha producido un error al agregar el producto.")
	}
}


producto.GET("/list",$idProducto as idProducto){
  producto.query("select ....",$resultado){
    print.json("productos",$resultado)
  }else{
    print.json("mensaje":"Se ha producido un error al generar el listado de productos.")
  }
}
