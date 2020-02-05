"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
exports.transformCollection = transformCollection;
exports["default"] = void 0;

/**
 * Takes data and a transformer, and returns the transformed data
 *
 * @param data
 * @param transformer
 * @param args
 */
function transform(data, transformer) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return transformer.mapData(data, args);
}
/**
 * Takes a collection of data and a transformer, and returns the transformed data collection
 *
 * @param collection
 * @param transformer
 * @param args
 */


function transformCollection(collection, transformer) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return collection.map(function (data) {
    return transformer.mapData(data, args);
  });
}

var _default = {
  transform: transform,
  transformCollection: transformCollection
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zZm9ybWVycy50cyJdLCJuYW1lcyI6WyJ0cmFuc2Zvcm0iLCJkYXRhIiwidHJhbnNmb3JtZXIiLCJhcmdzIiwibWFwRGF0YSIsInRyYW5zZm9ybUNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7Ozs7OztBQU9PLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQWlDQyxXQUFqQyxFQUFzRjtBQUFBLE1BQXZCQyxJQUF1Qix1RUFBSixFQUFJO0FBQ3pGLFNBQU9ELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkgsSUFBcEIsRUFBMEJFLElBQTFCLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTRSxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBcURKLFdBQXJELEVBQTBHO0FBQUEsTUFBdkJDLElBQXVCLHVFQUFKLEVBQUk7QUFDN0csU0FBT0csVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQU4sSUFBSTtBQUFBLFdBQUlDLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkgsSUFBcEIsRUFBMEJFLElBQTFCLENBQUo7QUFBQSxHQUFuQixDQUFQO0FBQ0g7O2VBRWM7QUFDWEgsRUFBQUEsU0FBUyxFQUFUQSxTQURXO0FBRVhLLEVBQUFBLG1CQUFtQixFQUFuQkE7QUFGVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi9CYXNlVHJhbnNmb3JtZXInO1xuXG4vKipcbiAqIFRha2VzIGRhdGEgYW5kIGEgdHJhbnNmb3JtZXIsIGFuZCByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCBkYXRhXG4gKlxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB0cmFuc2Zvcm1lclxuICogQHBhcmFtIGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkYXRhOiBvYmplY3QsIHRyYW5zZm9ybWVyOiBCYXNlVHJhbnNmb3JtZXIsIGFyZ3M6IEFycmF5PGFueT4gPSBbXSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm1lci5tYXBEYXRhKGRhdGEsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRha2VzIGEgY29sbGVjdGlvbiBvZiBkYXRhIGFuZCBhIHRyYW5zZm9ybWVyLCBhbmQgcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgZGF0YSBjb2xsZWN0aW9uXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB0cmFuc2Zvcm1lclxuICogQHBhcmFtIGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUNvbGxlY3Rpb24oY29sbGVjdGlvbjogQXJyYXk8YW55PiwgdHJhbnNmb3JtZXI6IEJhc2VUcmFuc2Zvcm1lciwgYXJnczogQXJyYXk8YW55PiA9IFtdKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKGRhdGEgPT4gdHJhbnNmb3JtZXIubWFwRGF0YShkYXRhLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0cmFuc2Zvcm0sXG4gICAgdHJhbnNmb3JtQ29sbGVjdGlvbixcbn07XG4iXX0=