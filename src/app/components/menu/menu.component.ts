import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router:Router,
    private afAuth: AngularFireAuth,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}

  onLogout(){
    console.log('Logout!')
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
