import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlrevesPipe } from "src/app/shared/pipes/alreves.pipe";
import { CheckoutComponent } from "../checkout/checkout.component";
import { HomeComponent } from "../home/home.component";
import { IcecreamComponent } from "../icecream/icecream.component";
import { PipesComponent } from "../pipes/pipes.component";
import { SearchComponent } from "../search/search.component";
import { FooterComponent } from "./footer/footer.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    /* Layout */
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    /* Views */
    HomeComponent,
    SearchComponent,
    PipesComponent,
    IcecreamComponent,
    CheckoutComponent,
    AlrevesPipe,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
