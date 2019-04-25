import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TopbarModule } from './shared/topbar/topbar.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { ModuleModule } from './components/module/module.module';


import { AppComponent } from './app.component';
import { ModuleService } from './module.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule, 
        TopbarModule,
        SidebarModule,
        ModuleModule
    ],
    providers: [
        ModuleService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
