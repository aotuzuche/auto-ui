type Handle = (payload?: any) => void;
interface EmitterEventMap {
  '*': Array<(type: string, payload?: any) => void>;
  [type: string]: Array<(payload?: any) => void>;
}

class emitter {
  public constructor() {
    if (!window.hasOwnProperty('__emitter_map__')) {
      Object.defineProperty(window, '__emitter_map__', { value: { '*': [] } });
    }
  }

  public on(type: string, handle: Handle, once: boolean = false) {
    const m: EmitterEventMap = (window as any).__emitter_map__;
    const typeName = once ? `${type}-once` : type;
    if (!m.hasOwnProperty(typeName)) {
      Object.defineProperty(m, typeName, { value: [], writable: true });
    }
    m[typeName].push(handle);
  }

  public once(type: string, handle: Handle) {
    if (type === '*') {
      throw new Error("The '*' type on 'once' is not supported");
    }
    this.on(type, handle, true);
  }

  public off(type: string, handle?: Handle) {
    const then = Promise ? (cb: () => void) => Promise.resolve().then(cb) : setTimeout;
    then(() => {
      const m: EmitterEventMap = (window as any).__emitter_map__;
      if (!handle) {
        if (m[type]) {
          m[type] = [];
        }
        if (m[`${type}-once`]) {
          m[`${type}-once`] = [];
        }
      } else {
        if (m[type]) {
          m[type].splice(m[type].indexOf(handle) >>> 0, 1);
        }
        if (m[`${type}-once`]) {
          m[`${type}-once`].splice(m[`${type}-once`].indexOf(handle) >>> 0, 1);
        }
      }
    });
  }

  public emit(type: string, payload?: any) {
    const m: EmitterEventMap = (window as any).__emitter_map__;
    const offList: Handle[] = [];
    if (m.hasOwnProperty(type)) {
      m[type].forEach(handle => handle(payload));
    }
    if (m.hasOwnProperty(`${type}-once`)) {
      m[`${type}-once`].forEach(handle => {
        handle(payload);
        offList.push(handle);
      });
    }
    m['*'].forEach(handle => handle(type, payload));
    offList.forEach(item => this.off(`${type}-once`, item));
  }
}

export default new emitter();
