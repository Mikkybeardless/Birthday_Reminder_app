import Cron from "croner";
import checkBirthday from "./checkBirthday.js";
const everyDayJob = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const job = Cron("0 07 * * 0-6", () => {
    // Runs every day at 7AM
    console.log("Happy Birthday, time:", time);
    checkBirthday();
  });
};
export default everyDayJob;
