import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { SectionOneComponent }  from './section-one/section-one.component';
import { FlexLayoutModule}      from '@angular/flex-layout';
import { SectionTwoComponent } from './section-two/section-two.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent,
    FooterComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
