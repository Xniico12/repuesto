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
      id_p: ['', Validators.required],
      name_p: ['', Validators.required],
      mail_p: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      role_p:['',Validators.required]

    })
  }
/* id_p = fields.Str(required=True, validate=validate.Length(min=6, max=20))
    name_p = fields.Str(required=True, validate=validate.Length(min=3, max=20))
    mail_p = fields.Str(
        required=True, validate=validate.Length(min=10, max=45))
    phone = fields.Str(required=True, validate=validate.Length(min=7, max=10))
    password_p = fields.Str(
        required=True, validate=validate.Length(min=8, max=20))

    age = fields.Int(required=True, validate=validate.Range(min=18))
    role_p = fields.Str(required=True, validate=validate.Equal("2"))
*/
  async onSubmit(){
    // Se recupera el token
    if (this.form.valid){
      console.log(this.form);
      this.client.postRequest(
        'http://127.0.0.1:5000/signin',
        {
          id_p: this.form.value.id_p,
          name_p: this.form.value.name_p,
          mail_p: this.form.value.mail_p,
          phone: this.form.value.phone,
          password: this.form.value.password,
          age: this.form.value.age,
          role_p: '1',
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
