console.log("hola mundo");
let i = 0;

setInterval(function () {
  console.log(i);
  if (i === 5) {
    console.log("forzamos erro");
    var a = 3 + z;
  }
  i++;
  console.log("sigo activo");
}, 1000);
