import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateblogComponent } from '../createblog/createblog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {

    // const dialogConfig = new MatDialogConfig();

    // // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateblogComponent, {data: {title: "", details: "", action:"Publish", index: -1}});

    dialogRef.afterClosed().subscribe(result => {
    });
    
      const dialogSubmitSubscription = 
      dialogRef.componentInstance.published.subscribe(result => {

        this.headerBlog.emit(
          {
            title: result.title,
            details: result.details,
            index: result.index
          }
        );

        // alert(result.title+"\n"+result.index+"\n"+result.details);
        dialogSubmitSubscription.unsubscribe();
    });
}

  public username:string="";
  public bullet:string = "\u2022";

  @Input('username') set setUsername(username:string){
    // console.log(username);
    this.username=username;
    if(username.length>0){
      this.itemSelected("BLOG");
    }
  }

  @Output()  headercomp:EventEmitter<string> = new EventEmitter<string>();
  @Output()  headerBlog:EventEmitter<{title: string, details: string, index:number}> = new EventEmitter<{title: string, details: string, index:number}>();

  itemSelected(item:string){
    this.activeItem = item;
    // debugger
    if(item === "CREATEBLOG"){
      item = "BLOG";
      this.openDialog();
      return;
    }

    this.headercomp.emit(item);
  }

  public activeItem:string = "LOGIN";

  public isActive(item:string):boolean{
    return this.activeItem === item;
  }
  
  public isInactive(item:string):boolean{
    return !(this.activeItem === item);
  }
}
