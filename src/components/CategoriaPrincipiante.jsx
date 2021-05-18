import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const CategoriaPrincipiante = () => {
    return (
        <div>
            <div class="container BotonesNivel" >
                
            </div>
            <div className="Categoria" class="container">
                <h1 style={{ color: 'white' }}>
                    Categoria Principiante
                </h1>
            </div>
            <div class="container" style={{ display: "flex", flexWrap: "wrap" }} >
                <div class="card m-2">
                    <img src='./Categorias/PechoPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pecho</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/EspaldaPrincipiante.png' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Espalda</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/BrazoPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Brazo</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pierna</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Abdominal</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Hombro</button>
                </div>
            </div>
        </div>
    )
}
export default CategoriaPrincipiante;