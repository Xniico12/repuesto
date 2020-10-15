import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private client: ClientService, private route: Router, public atuh: AuthService) { }
  hide = true;
  notification: boolean;
  ngOnInit(): void {
    if (this.atuh.isLogedIn) {
      // tslint:disable-next-line: no-unused-expression
      this.route.navigate['/'];
    }
    this.form = this.fb.group({
      name_c: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  async onSubmit(){
    // Se recupera el token
    if (this.form.valid){
      this.client.postRequest(
        'http://127.0.0.1:5000/api/v01/register',
        {
          name_c : this.form.value.name_c,
          email: this.form.value.email,
          phone: this.form.value.phone,
          password: this.form.value.password,
        },
        // Se envia el token
      ).subscribe(
        (response: any) => {
          console.log(response);
          this.form.reset();

        }
      ),
      // tslint:disable-next-line: no-unused-expression
      (error) => {
        console.log(error.status);

      };
    }else{
      console.log('Error en la entrada de datos del formulario del cliente');
      this.notification = true;

    }

  }

}
