import { Component } from '@angular/core';

@Component({
  selector: 'imgbase64',
  templateUrl: './imgbase64.component.html',
  styleUrls: ['./imgbase64.component.css']
})
export class Imgbase64Component {
  imgError: string = '';
  imgOk: boolean = false;
  base64: string = '';

  toBase64(fileInput: any) {
      this.imgError = '';
      if (fileInput.target.files && fileInput.target.files[0]) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
              const image = new Image();
              image.src = e.target.result;
              image.onload = rs => {
                  const imgBase64Path = e.target.result;
                  this.base64 = imgBase64Path;
                  this.imgOk = true;
              };
          };

          reader.readAsDataURL(fileInput.target.files[0]);
      }
  }

  clearImage() {
      this.base64 = '';
      this.imgOk = false;
  }

}