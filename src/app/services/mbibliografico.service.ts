import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MbibliograficoService {

  private mbiblio: Mbibliografico[] = [
    {
      id: 0,
      titulo: 'Caperucita Roja',
      categoria: 'Cuento de hadas',
      fechaPublicacion: '1020'
    },
    {
      id: 1,
      titulo: 'Metamorfosis',
      categoria: 'Absurdo',
      fechaPublicacion: '1915'
    },
    {
      id: 2,
      titulo: 'Los juegos del hambre',
      categoria: 'Distopía',
      fechaPublicacion: '2008'
    },
    {
      id: 3,
      titulo: 'Harry Potter y la piedra filosofal',
      categoria: 'Novela',
      fechaPublicacion: '1997'
    },
    {
      id: 4,
      titulo: 'Proyecto tesis: Las paginas webs y sus consecuencias',
      categoria: 'Tesis',
      fechaPublicacion: '2018'
    },
    {
      id: 5,
      titulo: 'Programación para novatos',
      categoria: 'Programación',
      fechaPublicacion: '2010'
    },
    {
      id: 6,
      titulo: 'Revista interesante',
      categoria: 'Tecnología',
      fechaPublicacion: '2019'
    },
    {
      id: 7,
      titulo: 'Gracia y el Forastero',
      categoria: 'Romance',
      fechaPublicacion: '1964',
    },
    {
      id: 8,
      titulo: 'Cantar de Mio Cid',
      categoria: 'Poesía',
      fechaPublicacion: '1200',
    },
    {
      id: 9,
      titulo: 'Rebelion en la granja',
      categoria: 'Fabula',
      fechaPublicacion: '1945',
    },
    {
      id: 10,
      titulo: 'Un viejo que leia novelas de amor',
      categoria: 'Romance',
      fechaPublicacion: '1988',
    },
    {
      id: 11,
      titulo: 'Proyecto Tesis: Mi biblioteca en linea',
      categoria: 'Tesis',
      fechaPublicacion: '2019',
    },
    {
      id: 12,
      titulo: 'Charlie y la fabrica de chocolate',
      categoria: 'Fantasia',
      fechaPublicacion: '1964',
    }
  ];

  
constructor() {
    console.log("Servicio 'Material Bibliografico' cargado");
}


getMbiblios(){
    return this.mbiblio;
}

getMBiblio( id: string ){
  return this.mbiblio[id];
}

buscarMbiblios( termino:string ){

  let mbiblioArr:Mbibliografico[] = [];
  termino = termino.toLowerCase();

  for( let i = 0; i < this.mbiblio.length; i ++){

    let texto = this.mbiblio[i];

    let nombre = texto.titulo.toLowerCase();
    if ( nombre.indexOf( termino ) >= 0 ){
      texto.id = i;
      mbiblioArr.push( texto );
    }
    if(mbiblioArr.length === 10){
      return mbiblioArr;
    }
  }

  return mbiblioArr;

}
}

export interface Mbibliografico{
  id:number;
  titulo:string;
  categoria:string;
  fechaPublicacion:string;
} 
