import { Component, OnInit } from '@angular/core';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';

const URL = 'http://localhost:8000/api/upload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload: uploaded: ', item, status, response);
      alert('File uploaded successfully');
    }
  }

}
