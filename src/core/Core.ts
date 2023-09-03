export default class Core {
    canvasEl: HTMLCanvasElement;
    webglContext: WebGL2RenderingContext

    constructor(canvasEl: HTMLCanvasElement) {
        this.canvasEl = canvasEl;
        this.webglContext = this.canvasEl.getContext('webgl2');
    }
}