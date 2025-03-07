export default abstract class EventContainer<E extends Record<string, (...args: any[]) => any>> {
    private events;
    on<K extends keyof E>(eventName: K, eventHandler: E[K]): this;
    off<K extends keyof E>(eventName: K, eventHandler?: E[K]): this;
    protected hasEvent<K extends keyof E>(eventName: K): boolean;
    protected emit<K extends keyof E>(eventName: K, ...args: Parameters<E[K]>): Promise<ReturnType<E[K]>[]>;
}
//# sourceMappingURL=EventContainer.d.ts.map