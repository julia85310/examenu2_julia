/*
Componente Library (componente principal):
Contiene:
    Una lista de libros, donde cada uno muestra:
    Título del libro.
    Botón editar.
    Cuando se pulsa el botón editar el campo pasa a ser un input con el texto guardado antes y un botón nuevo actualizar. 
    Al pulsarlo guarda el valor del campo modificado para volver a visualizar la lista normal y corriente.
Requisitos:
    Usa el hook useState para manejar la lista de libros.
*/
import {useState} from 'react';
export default function Library(){
    const librosIniciales = [
        {
            id: 1,
            titulo: 'Blancanieves'
        },
        {
            id: 2,
            titulo: 'Caperucita Roja'
        },
        {
            id: 3,
            titulo: 'Cenicienta'
        },
        {
            id: 4,
            titulo: 'La sirenita'
        }
    ];

    
    const[idEditandose, setIdEditandose] = useState(''); //id del libro que se esta editando
    const[libros, setLibros] = useState(librosIniciales);

    /**
     * Establece el id que se está editando
     */
    function handleInitEdit(id){
        setIdEditandose(id);
    }

    /**
     * Busca cual es el libro que se está editando 
     * y establece su nuevo titulo
     */
    function handleEditTitle(nuevoTitulo){
        setLibros(
            libros.map(libro => 
                {
                    if(libro.id == idEditandose){
                        return {
                            ...libro,
                            titulo: nuevoTitulo
                        };
                    }else{
                        return libro;
                    }
                }
            )
        );
        setIdEditandose('');
    }

    return(
        <div>
            <ul>
                {libros.map((libro) => (
                    <li key={libro.id}>
                        <Book
                            libro={libro}
                            onEdit={handleInitEdit}
                            editandose={idEditandose == libro.id? true : false}
                            onUpdate={handleEditTitle}
                        /> <br></br>
                    </li>
                ))} 
            </ul>
        </div>
    );
}

function Book({libro, onEdit, editandose, onUpdate}){

    const[inputEdit, setInputEdit] = useState(libro.titulo);

    /**
     * Devuelve si no se esta editando el titulo del libro y un boton 
     * para editar el titulo. 
     * Si se esta editando devuelve un input para escribir el nuevo titulo y 
     * un boton para actualizarlo y que deje de editarse
     */
    return(
        <div>
            { 
                editandose ? 
                    <p>
                        <input type='text' value={inputEdit} onChange={(e) => setInputEdit(e.target.value)}></input>
                        <button onClick={() => onUpdate(inputEdit)}>Actualizar</button>
                    </p>
                :
                    <p>
                        <p>{libro.titulo}</p>
                        <button onClick={() => onEdit(libro.id)}>Editar</button>
                    </p>
            }
        </div>
    );
}