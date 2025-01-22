import React from 'react'
import './Tienda.css';
import { CardProducto } from '../../components/CardProducto/CardProducto';
import { ListadoFiltrosCategorias } from '../../components/ListadoFiltrosCategorias/ListadoFiltrosCategorias';

const listadoProductos = [
    {id:2010,imagen:"teclado.png", titulo:"Teclado Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:22000 },
    {id:2023,imagen:"mouse.png", titulo:"Mouse Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:12000 },
    {id:3310,imagen:"silla.png", titulo:"Silla Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:2000 },
    {id:4010,imagen:"teclado.png", titulo:"Teclado Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:2000 },
    {id:4410,imagen:"teclado.png", titulo:"Teclado Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:2000 },
    {id:2013,imagen:"mouse.png", titulo:"Mouse Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:12000 },
    {id:3810,imagen:"silla.png", titulo:"Silla Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:2000 },
    {id:4010,imagen:"teclado.png", titulo:"Teclado Gamer", descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quod!", precio:2000 },
]
export const Tienda = () => {

    
    
    return (
        <section className='pagina-tienda'>
            <h2>Nuestra tienda</h2>

            <div className="contenedor-categorias">
              <ListadoFiltrosCategorias/>
            </div>
            <div className="contenedor contenedor-productos">

                {
                    listadoProductos.map( (producto) => {
                        return (
                            <CardProducto id={producto.id} imagen={producto.imagen}  titulo={producto.titulo} descripcion={producto.descripcion}  precio={producto.precio}  />
                        )
                    })
                }

            
            </div>
        </section>
    )
}
