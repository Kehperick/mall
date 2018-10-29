import { Component, OnInit } from '@angular/core';
import {  Router , ParamMap, ActivatedRoute} from '@angular/router';
import{ FormGroup,FormBuilder, FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-large-form',
  templateUrl: './large-form.component.html',
  styleUrls: ['./large-form.component.css']
})
export class LargeFormComponent implements OnInit {

firstFormGroup:FormGroup;
secondFormGroup:FormGroup;
onLogin(){

}
  constructor(private router:Router, private route:ActivatedRoute,private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup=this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup=this._formBuilder.group({
      secondCtrl:['',Validators.required]
    });
  }
hide=true;

public login="login";
public RegisterText="Register";
public primary='#2962ff';
public hidelogin=true;

register(){
  this.router.navigate(['register'], {relativeTo: this.route});
  this.hidelogin=!this.hidelogin;
}
}
