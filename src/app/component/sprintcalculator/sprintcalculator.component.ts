import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprintcalculator',
  templateUrl: './sprintcalculator.component.html',
  styleUrls: ['./sprintcalculator.component.css']
})
export class SprintcalculatorComponent implements OnInit {

  storyArr:Array<any>=[]
  clearstoryMsg:boolean=false
  clearsprintMsg:boolean=false
  filteredStories:Array<any> =[]
  profileForm = new FormGroup({
    
    sprintpoint: new FormControl('', Validators.compose([
      Validators.required,
      
    ]))
    
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  storyFetch(){
    this.storyArr = !localStorage.getItem("storyArr") ? [] : JSON.parse(localStorage.getItem("storyArr"))
    
    this.filteredStories = this.storyArr?this.storyArr.filter(item => item.sprintpoint === this.profileForm.get('sprintpoint').value):[]
    

    console.log("filtered array",this.filteredStories)
    
  }

  clearSprint(){

    let sprintArr = !localStorage.getItem("storyArr") ? [] : JSON.parse(localStorage.getItem("storyArr"))
    console.log("stories before",sprintArr)
    this.clearstoryMsg=true
          setTimeout(() => {
            this.clearstoryMsg = false
          }, 2000)


let newArr = []
 for(let i in sprintArr){
  console.log("element"+i,sprintArr[i].sprintpoint)
  if(sprintArr[i].sprintpoint !== this.profileForm.get('sprintpoint').value){
    newArr.push(sprintArr[i])
  }
 }
  
   localStorage.setItem("storyArr", JSON.stringify(newArr))

    console.log("stories after",sprintArr)
    this.storyFetch()
  }

   clearStory(){
    this.clearsprintMsg=true

          setTimeout(() => {
            this.clearsprintMsg = false
          }, 2000)

    localStorage.removeItem('storyArr');
    console.log("sprint deleted",localStorage.getItem("storyArr"))
    this.storyFetch()
  }

  dashboardRoute(){
    this.router.navigate(['/dashboard'])
  }

  registerRoute(){
    this.router.navigate(['/register'])
  }

}
