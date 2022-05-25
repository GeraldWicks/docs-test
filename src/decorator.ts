class Book {
  /**
   * The title of the book.
   * @decorator `@jsonSerialized`
   * @decorator `@jsonFormat(JsonFormats.Url)`
   */
  public website: string | undefined;
}
