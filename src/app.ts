/**
 * This class keeps track of the number version
 * of your application
 */
class App {
  public version: number = 0;

  /**
   * This method prints the current version of your application.
   */
  public showVersion(): void {
    console.log("version: ", this.version);
  }

  /**
   * Increases the version number with 1
   * @returns the current version of your application
   */
  public increaseVersion(): number {
    this.version++;
    return this.version;
  }

  /**
   * change the version number to the newVersion number
   *
   * @param newVersion will be new value from the version number
   */
  public changeVersion(newVersion: number) {
    this.version = newVersion;
  }
}
