/**
 * Alias for array
 *
 * @typeParam T - Type of objects the list contains
 */
type List<T> = Array<T>;

/**
 * Wrapper for an HTTP Response
 * @typeParam B - Response body
 * @param <H> - Headers
 */
interface HttpResponse<B, H> {
  body: B;
  headers: H;
  statusCode: number;
}
