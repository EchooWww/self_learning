abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
}

class Instgram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
    this.burst = burst;
  }
  getSepia() {
    console.log("get Sepia");
  }
}

const echoW = new Instgram("portrait", "vintage", 3);
echoW.getSepia();
