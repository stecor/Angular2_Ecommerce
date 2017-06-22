import { Component } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./sign-up.component.html',
    styleUrls:['./sign-up.component.css']
})
export class SignUpComponent{
    email: string;
    password1: string;
    password2: string;
    passwordfail: boolean = false;

    constructor(private userSVC: UserService, private router: Router){}

    signup(){
        if (this.password1 !== this.password2){
            this.passwordfail = true;
        }
        else
        {
            this.passwordfail = false;
            this.userSVC.register(this.email, this.password1);
            this.userSVC.verifyUser();
        }
    }

    cancel(){
        this.router.navigate(['/admin/login']);
    }
}