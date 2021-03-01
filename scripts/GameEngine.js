import * as THREE from './components/three.module.js';
import GameObject from './GameObject.js';
import Settings from './Settings.js';

class GameEngine {

	/** @type {HTMLCanvasElement} */
	canvas = null;
	
	/** @type {THREE.Scene} */
	scene = null;
	
	/** @type {THREE.WebGLRenderer} */
	renderer = null;

	/** @type {THREE.PerspectiveCamera} */
	camera = null;

	control = null;

	/** @type {number} */
	frameDuration = 1000. / Settings.fps;

	/** @type {Array<GameObject>} */
	elements = null;

  constructor() {

  }

	// ------------------------------------- //
	// --------- System Utilities ---------- //
	// ------------------------------------- //
	/**
	 * function to update canvas dimensions
	 */
	updateSize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	/**
	 * function to initializing the engine
   * @param {HTMLCanvasElement} canvas
	 */
	init(canvas) {
		// Declaration
    this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer();
		this.camera = new THREE.PerspectiveCamera(Settings.fov, this.canvas.width / this.canvas.height, 0.1, 1000);

		
		this.camera.position.set(0, 0, 0);
		this.renderer.setSize(this.canvas.width, this.canvas.height);

		/* Set event listeners */
		window.addEventListener("resize", this.updateSize);

		this.loop();
	}


	// ------------------------------------- //
	// ------------- Game Loop ------------- //
	// ------------------------------------- //
	/** @type {number} */
	lastRenderTime = Date.now();

	loop() {
		/** @type {number} */
		const delta = Date.now() - this.lastRenderTime;
		this.lastRenderTime = Date.now();

		// Main code here
		this.renderer.render(this.scene, this.camera);

		

		let now = Date.now() + 5;
		let nextRenderTime = this.lastRenderTime + this.frameDuration;
		if (now > nextRenderTime)
			requestAnimationFrame(this.loop.bind(this));
		else
			setTimeout(this.loop.bind(this), nextRenderTime - now);
	}
}

export default new GameEngine();