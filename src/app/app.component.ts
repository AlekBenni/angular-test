import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-test';
  img = 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png'

  constructor(){
    setTimeout(() => {
      this.img = "https://www.goodworklabs.com/wp-content/uploads/2017/05/9a_Angular-JS-development.jpg"
      console.log("Image was change!")
    }, 4000)
  }

}
