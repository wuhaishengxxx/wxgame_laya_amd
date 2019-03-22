
import { TestUI } from "./TestUI";
export class GameMain {

	constructor() {
		console.error("GameMain start");
		Laya.MiniAdpter.init();
		//程序入口
		Laya.init(480, 800, Laya.WebGL);
		//激活资源版本控制 
		Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, onLoaded));
		function onLoaded(): void {
			//实例UI界面
			const testUI: TestUI = new TestUI();
			Laya.stage.addChild(testUI);
		}
	}

}