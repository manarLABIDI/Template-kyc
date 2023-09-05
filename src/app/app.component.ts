import { Component, OnInit} from '@angular/core';
import { FormPPServiceService } from './service/form-pp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'KYCTemplate';

  constructor( private _formService: FormPPServiceService){}
  ngOnInit(){}
}
