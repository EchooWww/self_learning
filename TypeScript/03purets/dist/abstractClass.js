"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instgram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.burst = burst;
    }
    getSepia() {
        console.log("get Sepia");
    }
}
const echoW = new Instgram("portrait", "vintage", 3);
echoW.getSepia();
