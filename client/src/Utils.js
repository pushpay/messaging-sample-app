export default class Utils {
  static formatE164ToUsLocal(number) {
    return `(${number.substring(2, 5)}) ${number.substring(
      5,
      8
    )}-${number.substring(8, 12)}`;
  }

  static threadIdToFriendlyList(threadId, myNumber) {
    if (!threadId || threadId === "") {
      return "";
    }
    let recipients = [];
    threadId.split(",").map(number => {
      if (number !== myNumber) {
        number = number.trim();
        if (number.startsWith("+1") && number.length === 12) {
          recipients.push(this.formatE164ToUsLocal(number));
        } else {
          recipients.push(number);
        }
      }
      return "";
    });
    return recipients.join(", ");
  }

  static sanitizeThreadId(threadId) {
    return threadId
      //.replace(/(\+1)?([^0-9,])?/g, "")
      .split(",")
      //.map(number => `+1${number}`)
      .concat(process.env.REACT_APP_APPLICATION_NUMBER)
      .sort()
      .join(",");
  }
}
