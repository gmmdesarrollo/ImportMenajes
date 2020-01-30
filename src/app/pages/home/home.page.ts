import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authSvc: AuthService,
    private router:Router,
    private afAuth: AngularFireAuth,
    private menuCtrl: MenuController
    ) {}

  onLogout(){
    console.log('Logout!')
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  toogleMenu(){
    this.menuCtrl.toggle();
  }

}
