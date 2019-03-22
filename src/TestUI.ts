
export class TestUI extends ui.test.TestPageUI {

    constructor() {
        super();
        //btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
        this.btn.on(Laya.Event.CLICK, this, this.onBtnClick);

        const html: Laya.HTMLDivElement = new Laya.HTMLDivElement();
        html.innerHTML = "<span color='#e3d26a'>使用</span>";
        this.addChild(html);
    }

    private onBtnClick(): void {
        //手动控制组件属性
        this.radio.selectedIndex = 1;
        this.clip.index = 8;
        this.tab.selectedIndex = 2;
        this.combobox.selectedIndex = 0;
        this.check.selected = true;
    }


}

