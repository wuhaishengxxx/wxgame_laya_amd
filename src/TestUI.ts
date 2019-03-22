
export class TestUI extends ui.test.TestPageUI {

    constructor() {
        super();
      
        const html: Laya.HTMLDivElement = new Laya.HTMLDivElement();
        html.innerHTML = "<span color='#e3d26a'>Html测试</span>";
        this.addChild(html);
    }



}

