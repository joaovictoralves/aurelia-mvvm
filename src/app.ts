import { RouterConfiguration, Router } from "aurelia-router";
import { AureliaPluginsTabs } from "aurelia-plugins-tabs";

export class App {

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        name: "Registrar",
        route: ["","register"],
        moduleId: "./view/view-build",
        nav: true,
        title: "Registrar Contas"
      },
      {
        name: "Listar",
        route: "list",
        moduleId: "./view/account-list",
        nav: true,
        title: "Listar Contas" 
      }
    ]);
  }

}
