/**
 * Represents a book in the catalog.
 * @public
 */
export class Book {
  /**
   * The title of the book.
   * @beta
   */
  public get title(): string {
    return "The book is on the table.";
  }

  /**
   * The author of the book.
   */
  public get author(): string {
    return "Fulano";
  }
}
