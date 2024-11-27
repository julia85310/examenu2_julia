/*Componente AnimalList (componente principal):
    Contiene:
        Un formulario con campos para ingresar:
            Nombre.
            Especie del animal.
            Edad.
            Sexo (tipo select donde solo se puede seleccionar macho o hembra).
        Un botón para agregar el animal a la lista.
        Una lista de componentes Animal que muestra todos los animales agregados.
    Cada Animal debe mostrar:
        Nombre.
        Especie.
        Edad.
        Sexo.
    Requisitos:
        Usa el hook useState para manejar la lista de contactos.
        Valida que el campo del nombre y especie no estén vacíos al pulsar agregar un animal.
*/
import {useState} from 'react';

export default function AnimalList(){

    const[animales, setAnimales] = useState([]);
    const[inputNombre, setInputNombre] = useState('');  
    const[inputEspecie, setInputEspecie] = useState('');
    const[inputEdad, setInputEdad] = useState('');
    const[inputSexo, setInputSexo] = useState('macho');

    /**
     * Comprueba si el nombre y la especie estan vacios.
     * Si lo estan muestra mensaje de error
     * Si no lo estan añade el animal al array y vacia los campos
     */
    function comprobarFormulario(e){
        e.preventDefault();
        if((inputNombre != '')&&(inputEspecie != '')){
            setAnimales([
                ...animales,
                {
                    nombre: inputNombre,
                    especie: inputEspecie,
                    edad: inputEdad,
                    sexo: inputSexo
                }
            ]);
            alert('Animal agregado con éxito');

            setInputEdad('');
            setInputNombre('');
            setInputEspecie('');
            setInputSexo('macho');
        }else{
            alert('Revisa los campos (nombre y especie no pueden estar vacios)');
        }
    }

    /**
     *  Devuelve un formulario con campos para ingresar:
     *       Nombre.
     *       Especie del animal.
     *       Edad.
     *       Sexo (tipo select donde solo se puede seleccionar macho o hembra).
     *   Un botón para agregar el animal a la lista.
     *   Una lista de componentes Animal que muestra todos los animales agregados usando map
     *  
     */
    return (
        <div>
            <h2>Formulario para agregar Animal</h2><br></br>
            <form onSubmit={comprobarFormulario}>
                <label>Nombre: <input type='text' value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} /></label><br></br>
                <label>Especie: <input type='text' value={inputEspecie} onChange={(e) => setInputEspecie(e.target.value)} /></label><br></br>
                <label>Edad: <input type='number' value={inputEdad} onChange={(e) => setInputEdad(e.target.value)} /></label><br></br>
                <select value={inputSexo} onChange={(e) => setInputSexo(e.target.value)}>
                    <option value='macho'>Macho</option>
                    <option value='hembra'>Hembra</option>
                </select><br></br>
                <input type='submit' value='Enviar'/>
            </form><br></br>
            <h2>Lista de animales</h2><br></br>
            <ul>
                {
                    animales.map((animal, indice) => 
                    (
                        <li key={indice}>
                            <Animal
                                nombre={animal.nombre}
                                especie={animal.especie}
                                edad={animal.edad}
                                sexo={animal.sexo}
                            />
                            <br></br>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

function Animal({nombre, especie, edad, sexo}){
    return(
        <div>
            <p>Nombre: {nombre}</p>
            <p>Especie: {especie}</p>
            {edad != '' && <p>Edad: {edad}</p>}
            <p>Sexo: {sexo}</p>
        </div>
    );
}