import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubService} from './services/github.service';


import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { SearchComponent } from './components/search/search.component';
import { DateCountPipe } from './pipes/date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    SearchComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
