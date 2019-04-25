import { Component, OnInit, Input } from '@angular/core';
import { ModuleService } from 'app/module.service';
import { Module } from 'app/models/module.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
  })
  
  export class SidebarComponent implements OnInit {

    rows: Module[] = [];

    constructor(private moduleService: ModuleService){        
    }

    ngOnInit() {
        this.getModules();
    }

    getModules(){
        this.moduleService.getData().then((result) => {
            this.rows.push(result); 
            console.log(this.rows);
        });
    }
}
