import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { IconForDirective } from "./icon-for.directive";

@NgModule({
  declarations: [AppComponent, IconForDirective],
  imports: [BrowserModule, MatIconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
