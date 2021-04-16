import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomepageComponent } from "./homepage/homepage.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavigationComponent,
    HomepageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
