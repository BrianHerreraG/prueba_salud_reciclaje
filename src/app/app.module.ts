import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ArticulosVendidosComponent } from './Articulos-vendidos/Articulos-vendidos.component';
import { ArticulosReservadosComponent } from './Articulos-reservados/Articulos-reservados.component';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      ArticulosVendidosComponent,
      ArticulosReservadosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
    ApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
