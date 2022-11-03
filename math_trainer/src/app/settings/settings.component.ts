import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {

  constructor( public calculation: CalculationService) { }

  

}
