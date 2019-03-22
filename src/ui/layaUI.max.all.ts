
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class TestPageUI extends View {
		public btn2:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"width":800,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":480}},{"type":"Button","props":{"y":3,"x":765,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":66,"x":583,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"发送","height":66}},{"type":"TextInput","props":{"y":71,"x":132,"width":408,"text":"协议号","skin":"comp/textinput.png","name":"input","height":50,"fontSize":30}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
