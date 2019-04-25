import { ModuleActions } from "./module.action.model";

export class Module {

    moduleID: string;    
    title: string = '';
    nmRazaoSocial: string = '';
    description: string = '';
    moduleActions: ModuleActions[] = [];

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
    
  }