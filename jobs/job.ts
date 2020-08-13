import schedule from "node-schedule";
import testModel from "../schema/test.model";

export default class Job {
  constructor() {}

  public shopRefresh() {
    console.log("shopRefresh");
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [0, new schedule.Range(0, 6)];
    rule.second = [5, 10, 30, 50];
    // rule.hour = 0;
    // rule.minute = 15;
    schedule.scheduleJob(rule, async function () {
      console.log("JOB EXECUTADO!!!");
    });
  }
}
