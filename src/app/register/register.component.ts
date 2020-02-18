import { Component, OnInit,OnDestroy ,AfterViewInit,AfterContentInit } from '@angular/core';
import{MyserviceService} from '../myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   store='';
   registerForm: FormGroup;
   submitted = false;

  constructor(private service:MyserviceService,private formBuilder: FormBuilder ) 

  {
   
  this.store=service.mymethod()
  console.log(this.store)

}
get f() { return this.registerForm.controls; }
ngOnInit(){
  this.registerForm=this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required]
  })


}
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}



  


}
