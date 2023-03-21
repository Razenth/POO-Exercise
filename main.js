// class Persona{
//     nombre
//     peso
//     altura
//     edad

//     constructor(nombre,peso,altura,edad,cedula){
//         this.nombre= nombre
//         this.peso= peso
//         this.altura= altura
//         this.edad=edad
//         this.cedula=cedula
//     }

//     calularIMC(){
//         const imc=this.peso/(this.altura*this.altura)
//         return imc
//     }

//     info(){

//         return `Nombre: ${this.nombre} Cédula: ${this.cedula}`
//     }
// }

// const yo= new Persona('Santiago',70,1.65,19,1005282492)
// const Joel= new Persona ('Joel',80, 1.85,56)
// const Paula= new Persona ('Paula','56kg', '1.65', '24' )
// const imcYO=yo.calularIMC()

// // console.log(Persona)
// // console.log(yo)
// console.log(yo.nombre)
// console.log(yo.peso)
// console.log(yo.altura)
// console.log(`Mi edad: ${yo.edad}`)
// console.log(`Mi índice corporal es de: ${yo.calularIMC()}`)
// console.log(yo.info())

const inputNomb=document.querySelector('#nombre')
const inputApelli=document.querySelector('#apellido')
const inputFecha=document.querySelector('#fecha')
const inputCed=document.querySelector('#cedula')
const boton=document.querySelector('.boton')
const buscar=document.querySelector('.bi')
const inputBuscar = document.querySelector('.buscar')
let tabla=document.querySelector('.table_info')
let person=''
let arreglo=[]
let fechita=[]
let cedulaBusca=[]
fechita[0]= new Date().getFullYear()
fechita[1]= new Date().getMonth()+1
fechita[2]= new Date().getDate()
let año_hoy= new Date().getFullYear()



class Persona{
    nombre
    apellidos
    fecha_Naci
    cedula

    constructor(nombre,apellidos,fecha_Naci,cedula,edad){
        this.nombre= nombre
        this.apellidos= apellidos
        this.fecha_Naci= fecha_Naci
        this.cedula=cedula
        this.edad=edad
    }

    nombreCompleto(){
        let nombreCompleto=`${this.nombre} ${this.apellidos}`
        return nombreCompleto
    }

    cumpleaños(){
        if(fechita[1]==mes && fechita[2]==dia){
            return 'SI'

        }else{
            return 'NO'
        }

    }
}
let mes=null
let dia=null
boton.addEventListener('click',()=>{
    let nacido=inputFecha.value.split('-')
    mes=nacido[1]
    dia=nacido[2]
    if(inputNomb.value=='' || inputApelli.value==0 || inputFecha.value=='' || inputCed.value==''){
        alert('Falta escribir algún dato')
    }
    else{
        const person= new Persona(inputNomb.value,inputApelli.value,inputFecha.value,inputCed.value,parseInt(año_hoy-nacido[0]))
        arreglo.push(person)
        console.log(arreglo)
        // console.log(nacido)
        // console.log(person.nombreCompleto())
        // console.log(person.cumpleaños())
        cedulaBusca.push(inputCed.value)
        tabla.innerHTML+=`
        <tr>
            <th>${person.nombreCompleto()}</th>
            <th>${person.cumpleaños()}</th>
        </tr>
        `
    }
})

let buscarCed=document.querySelector('.buscar')
buscar.addEventListener('click',()=>{
    if(cedulaBusca.length>0){
        if(cedulaBusca.find(cedula=>cedula==buscarCed.value)){
            indice=cedulaBusca.findIndex(cedula=>cedula==buscarCed.value)
            console.log(indice)
            localStorage.setItem('MiArreglo', JSON.stringify(arreglo))
            localStorage.setItem('MiIndice', JSON.stringify(indice))
            // localStorage.setItem('Cumple?' , JSON.stringify(person.cumpleaños()))

        }else{
        alert('No encontré')
        }

    }else{
        alert('Debes ingresar aunque sea una persona primero')
        inputBuscar.value=''
        
    }
    // console.log(arreglo[1].nombre);
})