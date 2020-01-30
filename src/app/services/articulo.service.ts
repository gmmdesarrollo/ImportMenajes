import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Articulo } from './../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private api = 'http://orojas:9095/api';
 
  constructor(
    private http: HttpClient
  ) { }

  getAllArticulos() {
    const path = `${this.api}/articulos`;
    return this.http.get<Articulo[]>(path);
  }

  getArticulo(id: number) {
    const path = `${this.api}/articulos/${id}`;
    return this.http.get<Articulo>(path);
  }

  createArticulo(articulo: Articulo) {
    const path = `${this.api}/articulos`;
    return this.http.post(path, articulo);
  }

  updateArticulo(id: number,articulo: Articulo) {
    const path = `${this.api}/articulos/${articulo.id}`;
    return this.http.put<Articulo>(path, articulo);
  }

  deleteArticulo(id: number) {
    const path = `${this.api}/articulos/${id}`;
    return this.http.delete(path);
  }
}
