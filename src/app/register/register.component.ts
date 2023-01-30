import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
// import { Stories } from '../model/stories';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {


  storyid : number = 0
  newstory : string =''
  storypoint : string =''
  showMsg : boolean = false

  profileForm = new FormGroup({
    // newstory: new FormControl(''),
    // storypoint: new FormControl(''),

    storyid: new FormControl('', Validators.compose([
      // Validators.required,
      
    ])),
    
    sprintpoint: new FormControl('', Validators.compose([
      Validators.required,
      
    ])),

    newstory: new FormControl('', Validators.compose([
      Validators.required,
      
    ])),
    storypoint: new FormControl('', Validators.compose([
      Validators.required,
      
    ])),
    
  });
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  addStory(){
    this.showMsg = true
    //  this.storyid = Math.random() * 1000;
    console.log(this.profileForm.get('newstory').value)
    this.profileForm.controls.storyid.patchValue(Math.random() * 1000)
    

    let storyArr =[]

    storyArr = !localStorage.getItem("storyArr") ? [] : JSON.parse(localStorage.getItem("storyArr"))
    
    let index = storyArr.findIndex(item => item.newstory === this.profileForm.get('newstory').value)
    console.log("arrays",storyArr,index)
    if (index === -1) {
      console.log("adding")
      storyArr.push(this.profileForm.value)
      localStorage.setItem("storyArr", JSON.stringify(storyArr))
      this.router.navigate(['/dashboard'])
    }
    
  }

  dashboardRoute(){
    this.router.navigate(['/dashboard'])
  }

  sprintcalcRoute(){
    console.log("hello sprint")
    this.router.navigate(['/sprintcalc'])
  }

}
