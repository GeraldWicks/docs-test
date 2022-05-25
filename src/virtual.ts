class Base {
  /** @virtual */
  public render(): void {}

  /** @sealed */
  public initialize(): void {}
}

class Child extends Base {
  /** @override */
  public render(): void {}
}
