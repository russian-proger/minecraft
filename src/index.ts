import Core from './core/Core';

// Init new Core
const canvasEl: HTMLCanvasElement = document.querySelector("canvas");
const core: Core = new Core(canvasEl);

// Globalizing
declare global {
    interface Window {
        core: Core;
    }
}
window.core = core;

