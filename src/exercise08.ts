export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  private handlers: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    const callbacks = this.handlers[eventName] ?? [];
    callbacks.push(callback);
    this.handlers[eventName] = callbacks;
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const callbacks = this.handlers[eventName];

    if (callbacks) {
      callbacks.forEach((handler) => handler(data));
    }
  }
}