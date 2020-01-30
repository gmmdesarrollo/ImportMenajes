import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-mod-articulos',
  templateUrl: './mod-articulos.page.html',
  styleUrls: ['./mod-articulos.page.scss'],
})
export class ModArticulosPage implements OnInit {

  @Input() id;
  @Input() codigobarras;
  @Input() nombre;
  @Input() cantidad;
  @Input() descripcion;

  constructor(
    private modalCtrl: ModalController,
    private articuloService: ArticuloService,
    private barcodeScanner: BarcodeScanner
    ) { }

  ngOnInit() {
  }

  Salir(){
    this.modalCtrl.dismiss();
  }

  Actualizar(codigobarras,nombre,cantidad,descripcion) {
    const articulo = {
      id: this.id,
      nombre:  nombre,
      codigobarras: codigobarras,
      cantidad:  cantidad,
      descripcion: descripcion

      /*id: this.id,
      nombre:  (document.getElementById('txtnombre')).nodeValue,
      codigobarras: (document.getElementById('txtcodigo')).nodeValue,
      cantidad:  parseInt((document.getElementById('txtcantidad')).nodeValue),
      descripcion: (document.getElementById('txtdescripcion')).nodeValue*/
    };
    this.articuloService.updateArticulo(this.id,articulo)
    .subscribe(todo => {
      console.log(todo);
    });

    this.modalCtrl.dismiss();
  }

  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigobarras = barcodeData.text; 
      console.log('Barcode data', this.codigobarras);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
