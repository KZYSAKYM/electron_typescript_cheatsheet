import { BrowserWindow, app, App, } from 'electron';
import path from 'path';

class AppBase {
	private mainWindow: BrowserWindow | null = null;
	private app: App;
	private mainURL: string = `file://${__dirname}/index.html`;
	private preloadURL: string = `scripts/preload.js`;

	constructor(app: App) {
		this.app = app;
		this.app.allowRendererProcessReuse = true;
		this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
		this.app.on('ready', this.onReady.bind(this));
		this.app.on('activate', this.onActivated.bind(this));
		// Quit before windows closed
		// this.app.on('before-quit', this.onBeforeQuitted.bind(this))
		// Quit after windows closed in case of call app.quit or Cmd+Q
		// this.app.on('will-quit', this.onWillQuitted.bind(this))
	};

	private onWindowAllClosed() {
		// On macOS it is common for applications and their menu bar
		// to stay active until the user quits explicitly with Cmd + Q
		if (process.platform !== 'darwin') {
			this.app.quit();
		}
	};

	private create() {
		this.mainWindow = new BrowserWindow({
			width: 720,
			height: 480,
			minWidth: 360,
			minHeight: 240,
			acceptFirstMouse: true,
			titleBarStyle: 'default', // 'hidden'
			webPreferences: {
				preload: path.join(__dirname, this.preloadURL),
			},
		});

		this.mainWindow.loadURL(this.mainURL);

		this.mainWindow.on('closed', () => {
			this.mainWindow = null;
		});
	};

	private onReady() {
		this.create();
	};

	private onActivated() {
		if (this.mainWindow === null) {
			this.create();
		}
	};
};

const HomeApp: AppBase = new AppBase(app);