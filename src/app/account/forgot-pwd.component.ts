import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,  Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-pwd.component.html',
//   styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  title = 'Reset Password';
  myFormModel : FormGroup;
  submitted = false;

  onSubmit(){
   
    this.submitted = true;
    console.log(this.myFormModel);
   if (this.myFormModel.invalid){
    alert('hello');
     return
   }
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myFormModel.value,null,4));
 }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myFormModel = this.formBuilder.group({
      email :['',[Validators.required,Validators.email]],
      Password :['',[Validators.required,Validators.minLength(5)]],
      ConfirmPassword :['',Validators.required],

    });
  }

  get f(){
    return this.myFormModel.controls
  }
  onReset(){
    this.submitted = false;
    this.myFormModel.reset();
  }

}
