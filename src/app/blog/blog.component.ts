import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateblogComponent } from '../createblog/createblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(title:string, details:string, index:number): void {

    // const dialogConfig = new MatDialogConfig();

    // // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateblogComponent, {data: {title: title, details: details, action:"Republish", index:index}});

    dialogRef.afterClosed().subscribe(result => {
    });
    
      const dialogSubmitSubscription = 
      dialogRef.componentInstance.published.subscribe(result => {
        // this.blogsBlog.emit(
        //   {
        //     title: result.title,
        //     details: result.details,
        //     index: result.index
        //   }
        // );
        this.addNewBlog(result.title,result.details,result.index);
      dialogSubmitSubscription.unsubscribe();
    });
}

@Input('newblog') set setNewBlogValue(blog:any){
  if(blog!=null){
    if(blog.title == null || blog.title.length<1){
     return; 
    }

    let newBlog = {
      title: blog.title,
      createdBy: this.username,
      description: blog.details,
      height: this.defaultHeight,
      action: this.see
    };

    this.blogs.push(newBlog);

  }
}

public addNewBlog(title:string,description:string,index:number):void{
  if(index>-1){
    this.blogs[index].title = title;
    this.blogs[index].description=description;
    this.blogs[index].createdBy = this.username;
    this.blogs[index].action= this.see;
    this.blogs[index].height = this.defaultHeight;
  }
}

// @Output()  blogsBlog:EventEmitter<{title: string, details: string, index:number}> = new EventEmitter<{title: string, details: string, index:number}>();

  ngOnInit(): void {
    this.filteredBlogs = this.blogs;
  }

  public username:string="";
  public bullet:string = "\u2022";
  public defaultHeight:string = "20px";
  public see:string = "see more";
  public search:string = "";

  public searchBlogs():void{
    console.log(this.search);
    this.filteredBlogs = this.blogs.filter(s => s.title.toLowerCase().includes(this.search.toLowerCase()));
    // console.log(this.search);
  }

  @Input('username') set setUsername(username:string){
    console.log("blog username setter: "+username);
    this.username=username;
    // if(username===null || username.length<1){
    //   alert("blogs says - user logged out "+username);
    // }
  }


  public seeAction(index:number):void{
    if(this.filteredBlogs[index].action==="see more"){
      this.filteredBlogs[index].height="fit-content";
      this.filteredBlogs[index].action="see less";
    }
    else{
      this.filteredBlogs[index].height=this.defaultHeight;
      this.filteredBlogs[index].action="see more";
    }
  }

  public edit(index:number):void{
    this.openDialog(this.filteredBlogs[index].title,this.filteredBlogs[index].description,index);
    // alert("edit: "+this.filteredBlogs[index].title);
  }

  filteredBlogs:any = []


  blogs = [
    {
      title: "How to Use MATERIAL CARD In Angular",
      createdBy: "Zain Shamshad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\nThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n\n\n\t",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "How to Use NGX TOASTER In Angular",
      createdBy: "Zain Shamshad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "How to Create a CUSTOM ATTRIBUTE DIRECTIVE In Angular",
      createdBy: "M. Hammad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "Bananas have potassium?",
      createdBy: "Zain Shamshad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "What are the tips to become a successful programmer",
      createdBy: "M. hammad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "Hakuna Matata",
      createdBy: "Zain Shamshad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "Oreo Biscuits - Love the biscuits not the money",
      createdBy: "M. Hammad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "A guide to develop work ethics",
      createdBy: "Zain Shamshad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "The story behind Dil Dil by Pakistan",
      createdBy: "M. Hammad",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    },
    {
      title: "NOT A TITLE",
      createdBy: "unknown",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      height: this.defaultHeight,
      action: this.see
    }
  ]

}
