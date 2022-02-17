import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WEB_FRAMEWORKS } from "src/app/core/constants/web-frameworks";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  public dataFrameworks: any[] = WEB_FRAMEWORKS;
  public dataFilter: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((x) => {
      if (x.q === "") {
        return (this.dataFilter = this.dataFrameworks);
      } else {
        return (this.dataFilter = this.filter(x.q));
      }
    });
  }

  public filter(q: string) {
    const result = [];
    for (const framework of this.dataFrameworks) {
      if (framework.tecnologia.toLowerCase().indexOf(q.toLowerCase()) != -1) {
        result.push(framework);
      }
    }
    return result;
  }
}
