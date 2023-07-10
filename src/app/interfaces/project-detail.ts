export interface ProjectDetail {
  projID: string;
  projStatus: string;
  projTitle: string;
  projCount: number;
  appName: string;
  sites: ListSides;
  duration: string;
  jobID: string;
  submit_time: string;
}

export interface ProjectDetailOld {
  serverID: string;
  status: string;
  title: string;
  runNum: number;
  appName: string;
  sites: ListSides;
}
export interface ListSides {
  ICT?: boolean;
  RAMA?: boolean;
  KONKAEN?: boolean;
}
interface IExample {
  Name: string;
}

class ProjectDetailC implements ProjectDetail {
  private _projID: string = '';
  private _projStatus: string = '';
  private _projTitle: string = '';
  private _projCount: number = 0;
  private _appName: string = '';
  private _sites: ListSides | any = null;
  private _duration: string = '';
  private _jobID: string = '';
  private _submit_time: string = '';

  public get projID() {
    return this._projID;
  }
  public set projID(value) {
    this._projID = value;
  }

  public get projStatus() {
    return this._projStatus;
  }
  public set projStatus(value) {
    this._projStatus = value;
  }

  public get projTitle() {
    return this._projTitle;
  }
  public set projTitle(value) {
    this._projTitle = value;
  }

  public get projCount() {
    return this._projCount;
  }
  public set projCount(value) {
    this._projCount = value;
  }

  public get appName() {
    return this._appName;
  }
  public set appName(value) {
    this._appName = value;
  }

  public get sites() {
    return this._sites;
  }
  public set sites(value) {
    this._sites = value;
  }

  public get duration() {
    return this._duration;
  }
  public set duration(value) {
    this._duration = value;
  }

  public get jobID() {
    return this._jobID;
  }
  public set jobID(value) {
    this._jobID = value;
  }

  public get submit_time() {
    return this._submit_time;
  }
  public set submit_time(value) {
    this._submit_time = value;
  }
}
