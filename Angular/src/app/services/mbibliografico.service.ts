import { Injectable } from '@angular/core';
import { MaterialBibliografico } from '../class/MaterialBibliografico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbibliograficoService {

  private mbiblio: MaterialBibliografico[] = [
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
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 2,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Los juegos del hambre',
      categoria: 'Distopía',
      fechaPublicacion: '2008',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 3,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Harry Potter y la piedra filosofal',
      categoria: 'Novela',
      fechaPublicacion: '1997',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 4,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Proyecto',
      titulo: 'Proyecto tesis: Las paginas webs y sus consecuencias',
      categoria: 'Tesis',
      fechaPublicacion: '2018',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 5,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Programación para novatos',
      categoria: 'Programación',
      fechaPublicacion: '2010',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 6,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Revista',
      titulo: 'Revista interesante',
      categoria: 'Tecnología',
      fechaPublicacion: '2019',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 7,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Gracia y el Forastero',
      categoria: 'Romance',
      fechaPublicacion: '1964',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 8,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Cantar de Mio Cid',
      categoria: 'Poesía',
      fechaPublicacion: '1200',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 9,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Rebelion en la granja',
      categoria: 'Fabula',
      fechaPublicacion: '1945',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 10,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Un viejo que leia novelas de amor',
      categoria: 'Romance',
      fechaPublicacion: '1988',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 11,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Tesis',
      titulo: 'Proyecto Tesis: Mi biblioteca en linea',
      categoria: 'Tesis',
      fechaPublicacion: '2019',
      descripcion: 'Descripción no disponible.'
    },
    {
      id: 12,
      img: '../../../assets/img/Libros/Generic.jpg',
      tipo: 'Libro',
      titulo: 'Charlie y la fabrica de chocolate',
      categoria: 'Fantasia',
      fechaPublicacion: '1964',
      descripcion: 'Descripción no disponible.'
    }
  ];

  private urlBiblio = 'http://localhost:8080/biblio/mb';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getMbiblios(): Observable<MaterialBibliografico[]> {
    return new Observable((observer: Subscriber<any>) => {
      observer.next(this.mbiblio);
      observer.complete();
    });

    // return this.http.get<MaterialBibliografico[]>(this.urlBiblio);
  }

  getMBiblioById(id: string): Observable<MaterialBibliografico> {
    return new Observable((observer: Subscriber<any>) => {
      observer.next(this.mbiblio[id]);
      observer.complete();
    });
    // return this.http.get<MaterialBibliografico>(`${this.urlBiblio}/${id}`);
  }
}


