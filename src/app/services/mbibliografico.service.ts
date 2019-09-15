import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MbibliograficoService {

  private mbiblio: Mbibliografico[] = [
    {
      id: 0,
      img: 'https://pictures.abebooks.com/JEREZ/5630295808.jpg',
      titulo: 'Caperucita Roja',
      tipo: 'Libro',
      categoria: 'Cuento de hadas',
      fechaPublicacion: '1020',
      descripcion: 'Caperucita Roja es un cuento de hadas de transmisión oral, difundido por gran parte de Europa, que luego se ha plasmado en diferentes escritos; llamado así por el hecho de que la protagonista lleva puesta siempre una caperuza de color rojo.'
    },
    {
      id: 1,
      img: '../../../assets/img/Libros/Generic.jpg',
      titulo: 'Metamorfosis',
      tipo: 'Libro',
      categoria: 'Absurdo',
      fechaPublicacion: '1915',
      descripcion: ''
    },
    {
      id: 2,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Los juegos del hambre',
      categoria: 'Distopía',
      fechaPublicacion: '2008',
      descripcion: ''
    },
    {
      id: 3,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Harry Potter y la piedra filosofal',
      categoria: 'Novela',
      fechaPublicacion: '1997',
      descripcion: ''
    },
    {
      id: 4,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Proyecto',
      titulo: 'Proyecto tesis: Las paginas webs y sus consecuencias',
      categoria: 'Tesis',
      fechaPublicacion: '2018',
      descripcion: ''
    },
    {
      id: 5,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Programación para novatos',
      categoria: 'Programación',
      fechaPublicacion: '2010',
      descripcion: ''
    },
    {
      id: 6,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Revista',
      titulo: 'Revista interesante',
      categoria: 'Tecnología',
      fechaPublicacion: '2019',
      descripcion: ''
    },
    {
      id: 7,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Gracia y el Forastero',
      categoria: 'Romance',
      fechaPublicacion: '1964',
      descripcion: ''
    },
    {
      id: 8,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Cantar de Mio Cid',
      categoria: 'Poesía',
      fechaPublicacion: '1200',
      descripcion: ''
    },
    {
      id: 9,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Rebelion en la granja',
      categoria: 'Fabula',
      fechaPublicacion: '1945',
      descripcion: ''
    },
    {
      id: 10,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Un viejo que leia novelas de amor',
      categoria: 'Romance',
      fechaPublicacion: '1988',
      descripcion: ''
    },
    {
      id: 11,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Tesis',
      titulo: 'Proyecto Tesis: Mi biblioteca en linea',
      categoria: 'Tesis',
      fechaPublicacion: '2019',
      descripcion: ''
    },
    {
      id: 12,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Charlie y la fabrica de chocolate',
      categoria: 'Fantasia',
      fechaPublicacion: '1964',
      descripcion: ''
    }
  ];


  constructor() {
    console.log("Servicio 'Material Bibliografico' cargado");
  }


  getMbiblios() {
    return this.mbiblio;
  }

  getMBiblio(id: string) {
    return this.mbiblio[id];
  }

  buscarMbiblios(termino: string) {

    let mbiblioArr: Mbibliografico[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.mbiblio.length; i++) {

      let texto = this.mbiblio[i];

      let nombre = texto.titulo.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        texto.id = i;
        mbiblioArr.push(texto);
      }
      if (mbiblioArr.length === 10) {
        return mbiblioArr;
      }
    }

    return mbiblioArr;

  }
}

export interface Mbibliografico {
  id: number;
  img: any;
  tipo: string;
  titulo: string;
  categoria: string;
  fechaPublicacion: string;
  descripcion: string;
} 
