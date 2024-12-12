class Logger {
  record() {
    console.log("Logger record");
  }
}
class DB {
  record() {
    console.log("DB record");
  }
}

function test(recorder: any) {
  recorder.record();
}

function demo() {
  let logger = new Logger();
  let db = new DB();
  test(logger);
  test(db);
}

demo();
