const fs = require("fs");
const colors = require("colors");

let ListarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    data = "";

    console.log("====================================".green);
    console.log(`Tabla de base ${base}`.green);
    console.log("====================================".green);
    if (!Number(base)) return reject(`el parametro ${base} no es un numero`);
    if (!Number(limite))
      return reject(`El parametro ${limite} no es un numero`);

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    resolve(`${data}`);
  });
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    data = "";
    if (!Number(base)) return reject(`el parametro ${base} no es un numero`);
    if (!Number(limite))
      return reject(`El parametro ${limite} no es un numero`);
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) return reject(err);

      resolve(`tablas/tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  ListarTabla
};
