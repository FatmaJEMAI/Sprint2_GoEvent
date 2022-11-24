import { Component, OnInit,Renderer2 } from '@angular/core';
import { ScriptServiceServiceService } from "../../script-service-service.service";
const SCRIPT_PATH_LIST =[
  "../../../assets/FrontOffice/js/audio.js",
  "../../../assets/FrontOffice/js/audiojs.js",
  "../../../assets/FrontOffice/js/bootstrap.min.js",
  "../../../assets/FrontOffice/js/coundown-timer.js",
  "../../../assets/FrontOffice/js/gmaps.js",
  "../../../assets/FrontOffice/js/holder.js",
  "../../../assets/FrontOffice/js/html5shiv.js",
  "../../../assets/FrontOffice/js/jquery.countTo.js",
  "../../../assets/FrontOffice/js/jquery.fitvids.js",
  "../../../assets/FrontOffice/js/jquery.isotope.min.js",
  "../../../assets/FrontOffice/js/jquery.js",
  "../../../assets/FrontOffice/js/lightbox.min.js",
  "../../../assets/FrontOffice/js/main.js",
  "../../../assets/FrontOffice/js/masonry.min.js",

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

