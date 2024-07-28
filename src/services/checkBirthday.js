import sendBirthdayEmail from "./sendMail.js";

const checkBirthday = (users) => {
  users.forEach((user) => {
    if (isTodayBirthday(user.dateOfBirth)) {
      sendBirthdayEmail(user);
    }
  });
};
export default checkBirthday;
