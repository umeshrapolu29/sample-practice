import { Component, OnInit,OnDestroy ,AfterViewInit,AfterContentInit } from '@angular/core';
import{MyserviceService} from '../myservice.service';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';

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
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
// phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
form=new FormGroup({
  firstname: new FormControl('',Validators.required),
  lastname:new FormControl('',[Validators.required,Validators.minLength(6)]),
  email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
  phone:new FormControl('',[Validators.required,Validators.minLength(10)])
    
})
get f() { return this.registerForm.controls; }
ngOnInit(){
  // this.registerForm=this.formBuilder.group({
  //   firstname:['',Validators.required],
  //   lastname:['',Validators.required]
  // })




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
