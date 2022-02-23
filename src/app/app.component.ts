import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-site-3';


  mainComponents = ["HOME","LOGIN","BLOG","ABOUTUS"];
  activeComponent:string = "LOGIN";

  public showMainComponent(activateComponent:string): void{
    for(let comp of this.mainComponents){
      if(comp === activateComponent){
        this.activeComponent = activateComponent;
        return;
      }
    }
    console.log("Unrecognised Component");
  }

  data:string = "";
  username:string="";

  newBlog = {
    title: "",
    createdBy: "",
    description: "",
    height: 0,
    action: ""
  };

  homeSender(item:string){
    if(item === "LOGOUT"){
      this.username = "";
      item = "LOGIN";
    }
    this.data = item;
    this.showMainComponent(item);
  }
  homeBlog(blog:any){
    this.newBlog = blog;
  }
  
  loginSender(username:string){
    this.username=username;
  }

}
