import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  public data: any;

  constructor() {}

  ngOnInit() {}

  public sendData(data) {
    console.log(data);
  }
}
