import { Component, OnInit,Renderer2 } from '@angular/core';
import { ScriptServiceServiceService } from "../../script-service-service.service";
const SCRIPT_PATH_LIST =[
  "../../../assets/FrontOffice/js/jquery.min.js",
  "../../../assets/FrontOffice/js/bootstrap.min.js",
  "../../../assets/FrontOffice/js/jquery.sticky.js",
  "../../../assets/FrontOffice/js/jquery.magnific-popup.min.js",
  "../../../assets/FrontOffice/js/magnific-popup-options.js",
  "../../../assets/FrontOffice/js/click-scroll.js",
  "../../../assets/FrontOffice/js/custom.js",

  ] 

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(  private renderer: Renderer2,
    private ScriptServiceService: ScriptServiceServiceService) { }

  ngOnInit() {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
       console.log('loaded');
     
      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }

    })
   
  }

}

