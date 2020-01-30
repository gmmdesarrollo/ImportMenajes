import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { IonList, ModalController } from '@ionic/angular';

import { ModArticulosPage } from '../mod-articulos/mod-articulos.page';
import { IncArticulosPage } from '../inc-articulos/inc-articulos.page';

import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-crud-articulos',
  templateUrl: './crud-articulos.page.html',
  styleUrls: ['./crud-articulos.page.scss'],
})
export class CrudArticulosPage implements OnInit {

  @ViewChild('lista',{static: false}) list: IonList;

  articulos: Observable<any>;

  constructor(
    private articuloService: ArticuloService,
    private modalCtrl : ModalController
    ) { }

  ngOnInit() {
    this.getAllArticulos();
  }

  getAllArticulos(){
    this.articulos = this.articuloService.getAllArticulos()
  }

  async crear(){
    const modal = await this.modalCtrl.create({
      component: IncArticulosPage
    });

    await modal.present();

  }

  async actualizar(art){
    const modal = await this.modalCtrl.create({
      component: ModArticulosPage,
      componentProps:{
        id: art.id,
        codigobarras: art.codigobarras,
        nombre: art.nombre,
        cantidad: art.cantidad,
        descripcion: art.descripcion
      }
    });

    await modal.present();
    
    console.log('Actualizar', art);
    this.list.closeSlidingItems();

  }

  eliminar(art){
    this.articuloService.deleteArticulo(art.id)
    .subscribe((data) => {
      console.log(data);
    });

    console.log('Eliminar', art);
    this.list.closeSlidingItems();
    
  }

  doRefresh(event){

    setTimeout(() => {
      
      this.getAllArticulos();
      event.target.complete();

    }, 1500);

  }

}
