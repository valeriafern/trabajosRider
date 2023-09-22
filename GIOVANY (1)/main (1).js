
/*
function mostrarDatos() {
var selectedMes = document.getElementById("mes").value;
var selectedAño = document.getElementById("año").value;
var selectedTrimestre = document.getElementById("frutas").value;
var selectedCompetencia = document.getElementById("fruta").value;
var selectedRadio = document.querySelector('input[name="fav_language"]:checked').value;


var datosSeleccionados = " Mes: " + selectedMes +
", Año: " + selectedAño +
", Trimestre: " + selectedTrimestre +
", Competencia: " + selectedCompetencia +
", Resultado: " + selectedRadio; 

var datosVector = [ `["${selectedMes}", "${selectedAño}", "${selectedTrimestre}", "${selectedCompetencia}", "${selectedRadio}"]`];

document.getElementById("datosSeleccionados").innerText = datosSeleccionados + datosVector;
}
*/

/*
function mostrarDatos(mes, año, frutas, fruta, radio) {

const datos=( "Mes:"+mes+", Año:"+año+", Trimestre:"+frutas+", Resultado:"+radio+", Competencia:"+fruta);

const datosSeleccionados = {
mes: mes,
año: año,
trimestre: frutas,
resultado: radio,
competencia: fruta,
};

document.getElementById('datosSeleccionados').textContent = datos + JSON.stringify(datosSeleccionados);
return datosSeleccionados;
}*/


function mostrarDatos(año, mes, trimestre, competencia, radio, fecha) {
const otroarreglo = [año, mes, trimestre, competencia, radio, fecha];
otroarreglo[5] = obtenerNombreMes(fecha); 
enviar(otroarreglo);
}

function enviar(otroarreglo) {
console.log(otroarreglo);
}

function obtenerNombreMes(fecha) {
const fechaObj = new Date(fecha);
const nombreMes = fechaObj.toLocaleString("default", { month: "long" });
return nombreMes;
}

const competenciaInput = document.getElementById("competencia");
const opcionesDiseno = document.getElementById("opciones-diseno");
const opcionesAnalisis = document.getElementById("opciones-analisis");

competenciaInput.addEventListener("change", () => {
const seleccion = competenciaInput.value.toLowerCase();

if (seleccion === "diseño") {
opcionesDiseno.style.display = "block";
opcionesAnalisis.style.display = "none";
} else if (seleccion === "analisis") {
opcionesDiseno.style.display = "none";
opcionesAnalisis.style.display = "block";
} else {
opcionesDiseno.style.display = "none";
opcionesAnalisis.style.display = "none";
}
});

/*
function minota(nota1,nota2,nota3){
    Arraynotas[nota1,nota2,nota3];
    definitiva=Calcular(Arraynotas);
    console.log(definitiva);
}

function Calcular(nota1,nota2,nota3){
    let definitiva=(nota1+nota2+nota3/3);
    return definitiva
}*/

/*
const nota1 = document.querySelector("#nota1").value;
const nota2 = document.querySelector("#nota2").value;
const nota3 = document.querySelector("#nota3").value;


const minota = (nota1, nota2, nota3) => {
const Arraynotas = [(nota1, nota2, nota3)];
const midefinitiva = Calcular(Arraynotas);
console.log(midefinitiva);
};

for (let i of Arraynotas) {
sumaNotas +=i;
const definitiva = sumaNotas / Arraynotas.length;
return definitiva;
};*/




const mostrarcalculo = () => {
const notas1 = parseFloat(document.querySelector("#nota1").value);
const notas2 = parseFloat(document.querySelector("#nota2").value);
const notas3 = parseFloat(document.querySelector("#nota3").value);

const arraynotas = [notas1, notas2, notas3];
const midefinitiva = calcular(arraynotas);
console.log(midefinitiva);
};

const calcular = (arraynotas) => {
let sumatoria = 0;
/*for (let i = 0; i < arraynotas.length; i++) {
sumatoria += arraynotas[i];
}*/
for (let i of arraynotas) {
sumatoria += i;
}
const notafinal = sumatoria / arraynotas.length;
return notafinal;
};










function porcentajes(){
    n1 = notas1 * 0.03;
    n1 = notas2 * 0.03;
    n1 = notas3 * 0.03;
    console.log(n1,n2,n3)
}










function general(){
    alert('1.mi funcion');
    lfuncion (afuncion)
}

function lfuncion (bfuncion){
    bfuncion();//callback
}

function afuncion(){
    alert('2.estoy trabajando');
}