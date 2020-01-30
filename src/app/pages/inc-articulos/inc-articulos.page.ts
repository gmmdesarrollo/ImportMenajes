import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-inc-articulos',
  templateUrl: './inc-articulos.page.html',
  styleUrls: ['./inc-articulos.page.scss'],
})
export class IncArticulosPage implements OnInit {

  codigobarras:string;
  foto: any;

  constructor(
    private modalCtrl: ModalController,
    private articuloService: ArticuloService,
    private barcodeScanner: BarcodeScanner,
    private camera: Camera,
    private webview: WebView
  ) { }

  ngOnInit() {
  }

  Salir(){
    this.modalCtrl.dismiss();
  }

  Agregar(nombre,codigobarras,cantidad,descripcion) {
    const articulo = {
      nombre:  nombre,
      codigobarras: codigobarras,
      cantidad:  cantidad,
      descripcion: descripcion

    };
    this.articuloService.createArticulo(articulo)
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

  /*hacerFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
      console.log('Foto', this.foto);
    }, (err) => {
      console.log(err);
    });
  }*/

  capturarFoto() {
    this.camera.getPicture({
      quality: 100,
      //destinationType: this.camera.DestinationType.DATA_URL,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }).then(imageData => {
      //this.foto = 'data:image/jpeg;base64,' + imageData;
      this.foto = this.webview.convertFileSrc(imageData);
    })

  }

  buscarFoto(){
    this.camera.getPicture({
      quality: 100,
      //destinationType: this.camera.DestinationType.DATA_URL,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }).then(imageData => {
      //this.foto ='data:image/jpeg;base64,' + imageData;
      this.foto = this.webview.convertFileSrc(imageData);
    })

  }
}
