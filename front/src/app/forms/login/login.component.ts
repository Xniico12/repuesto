import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../client.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private client: ClientService, public auth: AuthService, private route: Router, ) { }

  hide = true;
  // tslint:disable-next-line: typedef
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  // tslint:disable-next-line: typedef
  async onSubmit() {

    if (this.form.valid) {

      this.client.postRequest('http://127.0.0.1:5000/login', {
        mail: this.form.value.email,
        password: this.form.value.password
      }).subscribe(

        (response: any) => {
          console.log(response);
          // se almacena el token usando el servicio Auth
          this.auth.login(response.token);
          // se almacena el nombre del usuario en el almacenamiento de
          // sesion
          this.auth.setCourrentUser(response.name);
          // navegamos de nuevo al home, esta vez como usuario
          // logueado
          this.route.navigate( ['/']);
      }),

      // tslint:disable-next-line: no-unused-expression
      (error) => {

        console.log(error.status);

      };
    } else {

      console.log('Form error');
    }
  }
}