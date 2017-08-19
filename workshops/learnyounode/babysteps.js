var valor = 0;
//console.log(process.argv);

//map or destructuring + reduce
for(var i = 2; i < process.argv.length; i++) {
    valor +=  Number(process.argv[i]);
}

console.log(valor);
