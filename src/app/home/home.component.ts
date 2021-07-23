import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,  Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls : ['home.component.css']
})
export class HomeComponent implements OnInit {
  
  myFormModel : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myFormModel = this.formBuilder.group({
      search :['',Validators.required]
    })

  }


  onSubmit(){
   
    this.submitted = true;
    console.log(this.myFormModel);
   if (this.myFormModel.invalid){
    alert('hello');
     return
   }
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myFormModel.value,null,4));
 }
 
}
