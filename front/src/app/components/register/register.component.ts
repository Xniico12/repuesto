import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,} from '@angular/forms'
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form ; FormGroup
/*
id_d  ,name_d  ,mail_d ,specialty,phone,role_d 
*/
  constructor(private fb: FormBuilder, private client: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      id_d: ['', Validators.required],
      name_d : ['', Validators.required],
      mail_d : ['',Validators.required],
      specialty: ['', Validators.required],
      phone : ['', Validators.required],
      role_d: ['', Validators.required],
    })
  }
  
  async onSubmit(){
    // Se recupera el token
    if (this.form.valid){
      this.client.postRequest(
        'http://127.0.0.1:5000/signin',{
          id_d :this.form.value.id_C, 
          name_d : this.form.value.name_d,
          mail_d : this.form.value.mail_d,
          specialty: this.form.value.specialty,
          Phone : this.form.value.Phone,
          role_d: this.form.value.role_d,
        },).subscribe(
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

    }

  }
       
}
