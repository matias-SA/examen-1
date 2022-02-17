import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-icecream",
  templateUrl: "./icecream.component.html",
  styleUrls: ["./icecream.component.css"],
})
export class IcecreamComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  public orderIcecream(): void {}

  private initForm(): void {
    this.form = this.fb.group({
      helado: ["Gusto de helado"],
      entregaDelPedido: [""],
      name: [""],
    });
  }

  public submit(value) {
    console.log(value);
  }
}
