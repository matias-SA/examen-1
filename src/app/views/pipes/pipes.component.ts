import { Component } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styles: [],
})
export class PipesComponent {
  public source = [
    {
      name: "Fecha de Investigación",
      tipo: "date",
      value: "05/21/2018",
    },
    {
      name: "Pobreza en Bangladesh",
      tipo: "percent",
      value: "51.23",
    },
    {
      name: "Dólar hoy",
      tipo: "currency",
      value: "219.20321192783",
    },
    {
      name: "Discurso de personas que hablan al revés",
      tipo: "alreves",
      value:
        "zap ed nos ne sominev ,séver la nalbah euq sanosrep sal somos sortoson",
    },
    {
      name: "Fecha de la revolución de los monos",
      tipo: "date",
      value: "01/29/2033",
    },
  ];
}
