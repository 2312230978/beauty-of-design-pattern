abstract class Recorder {
  abstract record(): void;
}

class Logger extends Recorder {
  record(): void {
    console.log("Logger record");
  }
}

class DB extends Recorder {
  record(): void {
    console.log("DB record");
  }
}

function test(recorder: Recorder) {
  recorder.record();
}

function demo() {
  let logger = new Logger();
  let db = new DB();
  test(logger);
  test(db);
}

demo();
