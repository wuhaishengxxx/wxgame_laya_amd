
declare namespace wx {

    export function request(obj: RequestObj): RequestTask;

    export class RequestTask {
        abort();
        offHeadersReceived(callback: Function);
        onHeadersReceived(callback: Function);
    }


    interface RequestObj {
        url: string;//		是	开发者服务器接口地址	
        data?: string | object | ArrayBuffer;//	否	请求的参数	
        header?: Object;//	否	设置请求的 header，header 中不能设置 Referer。 content-type?:        默认为 application/json	
        method?: string;//	GET	否	HTTP 请求方法	
        dataType?: string;//	json	否	返回的数据格式	
        responseType?: string;//	text	否	响应的数据类型	1.7.0
        success?: Function;//否	接口调用成功的回调函数	
        fail?: Function;//否	接口调用失败的回调函数	
        complete?: Function;//
    }

    //////////////////////sockert //////////

    export function sendSocketMessage(msg: SocketMessage): void;

    export function onSocketOpen(callback: Function): void;

    export function onSocketMessage(callback: Function): void;

    export function onSocketError(callback: Function): void;

    export function onSocketClose(callback: Function): void;

    export function connectSocket(data: SocketData): SocketTask;

    export function closeSocket(callback: Function): void;

    export class SocketTask {
        //通过 WebSocket 连接发送数据
        send(data: SocketMessage);

        //关闭 WebSocket 连接
        close(data :SocketCloseData);

        // 监听 WebSocket 连接打开事件
        onOpen(callback: Function);


        //监听 WebSocket 连接关闭事件
        onClose(callback: Function);

        // 监听 WebSocket 错误事件
        onError(callback: Function);

        //监听 WebSocket 接受到服务器的消息事件
        onMessage(callback: Function);

    }

    interface SocketMessage {
        data: string | ArrayBuffer;	//	是	需要发送的内容
        success?: Function;	//	否	接口调用成功的回调函数
        fail?: Function;	//	否	接口调用失败的回调函数
        complete?: Function;//
    }

    interface SocketData {
        url: string;//	是	开发者服务器 wss 接口地址	
        header?: Object;	//	否	HTTP Header，Header 中不能设置 Referer	
        protocols?: Array<string>;//		否	子协议数组	1.4.0
        tcpNoDelay?: boolean;//	false	否	建立 TCP 连接的时候的 TCP_NODELAY 设置	2.4.0
        success?: Function;	//	否	接口调用成功的回调函数	
        fail?: Function;//		否	接口调用失败的回调函数	
        complete?: Function;//
    }

 

    interface SocketCloseData {
        code?: number	//1000（表示正常关闭连接）	否	一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
        reason?: string	//	否	一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
        success?: Function;//			否	接口调用成功的回调函数
        fail?: Function;//			否	接口调用失败的回调函数
        complete?: Function;//	
    }

}