interface IRecorder {
  record(): void;
}

class Logger implements IRecorder {
  record(): void {
    console.log("Logger record");
  }
}

class DB implements IRecorder {
  record(): void {
    console.log("DB record");
  }
}

function test(recorder: IRecorder) {
  recorder.record();
}

function demo() {
  let logger = new Logger();
  let db = new DB();
  test(logger);
  test(db);
}

demo();
