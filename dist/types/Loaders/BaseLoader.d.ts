import EventEmitter from 'eventemitter3';
import BaseLoaderInterface from '../Interfaces/BaseLoader';
import SeekRange from '../Interfaces/SeekRange';
import MediaConfig from '../Interfaces/MediaConfig';
declare class BaseLoader implements BaseLoaderInterface {
    Tag: string;
    supportType: string;
    _type: string;
    _needStash: boolean;
    _onContentLengthKnown: Function | null;
    _onDataArrival: Function | null;
    _onError: Function | null;
    _onComplete: Function | null;
    _status: number;
    _onURLRedirect: Function | null;
    eventEmitter: EventEmitter;
    constructor(type: string, supportType: string);
    on(eventName: string, callback: EventEmitter.ListenerFn): void;
    once(eventName: string, callback: EventEmitter.ListenerFn): void;
    off(eventName: string, callback?: EventEmitter.ListenerFn): void;
    destroy(): void;
    isWorking(): boolean;
    readonly type: string;
    readonly status: number;
    readonly needStashBuffer: boolean;
    onContentLengthKnown: Function | null;
    onURLRedirect: Function | null;
    onDataArrival: Function | null;
    onError: Function | null;
    onComplete: Function | null;
    startLoad(mediaConfig: MediaConfig, range: SeekRange): void;
    abort(): void;
}
export default BaseLoader;
