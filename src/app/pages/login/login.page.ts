import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user: User = new User();

  constructor(
    private authSvc: AuthService,
    private router:Router
    //private menuCtrl: MenuController
    ) {}
  
  ngOnInit() {
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log('Usuario Logeado Correctamente');
      this.router.navigateByUrl('/home');
    }

  }

}
