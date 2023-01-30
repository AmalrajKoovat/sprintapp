import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // jsArr : string = ''
  params: any
  stories:Array<any>=[
    // {
    //   storyname:'test1',
    //   storypoint:'point1'
    // },
    // {
    //   storyname:'test2',
    //   storypoint:'point2'
    // }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.params = history.state;
    // console.log("dashboard component",localStorage.getItem("storyArr"))
    this.getallStories()
  }
  getallStories(){
    let jsArr=JSON.parse(localStorage.getItem("storyArr"))
    console.log("json array",jsArr)
    this.stories=jsArr

  }
  addStory(){
    console.log("clicked");
    
    this.router.navigate(['/register'])
  }

  sprintcalcRoute(){
    this.router.navigate(['/sprintcalc'])
  }

  @HostListener('window:FilteredStories', ['$eventFilteredStories', '$event.detail'])
  FilteredStorieslistener(eventFilteredStories, detail) {
    console.log("event listener")
    this.stories=detail
  }

}
