import { BrowserModule }          from '@angular/platform-browser'
import { NgModule }               from '@angular/core'
import { AppRoutingModule }       from './app-routing.module'
import { AppComponent }           from './app.component'
import { SectionOneComponent }    from './section-one/section-one.component'
import { FlexLayoutModule}        from '@angular/flex-layout'
import { SectionTwoComponent }    from './section-two/section-two.component'
import { FooterComponent }        from './footer/footer.component'
import { SectionSkillComponent }  from './section-skill/section-skill.component'
import { ChartsModule }           from 'ng2-charts';
import { SectionProjectComponent } from './section-project/section-project.component'

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent,
    FooterComponent,
    SectionSkillComponent,
    SectionProjectComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
