const { argv } = require("./config/yargs");
const colors = require("colors");
const multiplicar = require("./multiplicar/multiplicar");

let commando = argv._[0];

switch (commando) {
  case "listar":
    var base = argv.base;
    var limite = argv.limite;
    multiplicar
      .ListarTabla(base, limite)
      .then(data => console.log(data))
      .catch(e => console.log(e));

    break;
  case "crear":
    var base = argv.base;
    var limite = argv.limite;
    multiplicar
      .crearArchivo(base, limite)
      .then(archivo => console.log(`Archivo Creado: ${archivo.green}`))
      .catch(err => console.log({ message: err }));
    break;
  default:
    console.log("comando no reconocido");
    break;
}
//let base = "8";

//let parametro = argv[2];
//let base = parametro.split("=")[1];
