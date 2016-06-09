import {Stat} from "../Stat/Stat";
import observableArray = require("data/observable-array");

export class Worker {
    private static workers: observableArray.ObservableArray<Worker> = new observableArray.ObservableArray<Worker>();
    workerName: string;
    private stats: Array<Stat>;

    constructor(name?: string) {
        if (name) {
            this.workerName = name;
            Worker.workers.push(this);
        }
    }

    static getWorkers() {
        return Worker.workers;
    }

    getWorkers() {
        return Worker.workers;
    }

    addStat(stat: Stat) {
        this.stats.push(stat);
    }

    dismiss() {
        var index = this.getWorkers().indexOf(this);
        this.getWorkers().splice(index, 1);
    }
}