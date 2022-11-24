import { Component, OnInit,Renderer2 } from '@angular/core';
import { ScriptServiceServiceService } from "../../script-service-service.service";

const SCRIPT_PATH_LIST =[
 "../../../assets/BackOffice/js/dataTables/dataTables.bootstrap.min.js",
 "../../../assets/BackOffice/js/dataTables/jquery.dataTables.min.js",
 "../../../assets/BackOffice/js/flot/excanvas.min.js",
 "../../../assets/BackOffice/js/flot/jquery.colorhelpers.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.canvas.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.categories.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.crosshair.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.errorbars.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.fillbetween.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.image.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.navigate.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.pie.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.resize.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.selection.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.stack.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.symbol.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.threshold.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.time.js",
 "../../../assets/BackOffice/js/flot/jquery.flot.tooltip.min.js",
 "../../../assets/BackOffice/js/bootstrap.min.js",
 "../../../assets/BackOffice/js/flot-data.js",
 "../../../assets/BackOffice/js/jquery.min.js",
 "../../../assets/BackOffice/js/metisMenu.min.js",
 "../../../assets/BackOffice/js/morris-data.min.js",
 "../../../assets/BackOffice/js/morris-data.js",
 "../../../assets/BackOffice/js/raphael.min.js",
 "../../../assets/BackOffice/js/startmin.min.js",
  
  ] 

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(   private renderer: Renderer2,
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
