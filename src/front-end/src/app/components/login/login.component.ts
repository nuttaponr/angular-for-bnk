import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
      });
    }

    login() {
      if (this.loginForm.valid) {
        this.authenticationService.authLogin(this.loginForm.value).subscribe((response) => {
          this.authenticationService.setToken(response["token"]);
          this.router.navigate(["/admin"]);
        });
      }
    }
}
