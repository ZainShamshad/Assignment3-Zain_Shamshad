import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  @Output() published = new EventEmitter<any>();

  constructor(
      private toastr: ToastrService,
      public dialogRef: MatDialogRef<CreateblogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ){

    }


  ngOnInit(): void {
    this.title = this.data.title;
    this.details = this.data.details
    this.button_action = this.data.action
    this.sel_index = this.data.index
  }

  public title:string ="";
  public details:string ="";
  public limit:number = 10;
  public max_limit:number = 2000;
  public button_action:string = "";
  public sel_index:number = -1;

  public create():void {
    if(this.title.length<1){
      this.toastr.error('Blog title is compulsory!','TITLE NOT FOUND');
      return;
    }
    if(this.details.length<this.limit){
      this.toastr.error('Atleast '+this.limit+' words are required for detail!','VERY FEW DETAILS');
      return;
    }
    if(this.details.length>this.max_limit){
      this.toastr.error('Only '+this.max_limit+' words are allowed for detail!','TOO MUCH DETAILS');
      return;
    }
    
    const data = {
      title: this.title,
      details: this.details,
      index: this.sel_index
    }

    this.published.emit(data);
    this.dialogRef.close();
    // alert("creating...");
  }
}
