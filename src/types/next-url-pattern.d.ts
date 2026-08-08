// Next.js exposes the URLPattern constructor in its server typings, while
// TypeScript's standard DOM lib does not yet include these two companion types.
// `urlpattern-polyfill` provides the remaining global URLPattern declarations.
type URLPatternInput = URLPatternInit | string;

interface URLPatternOptions {
  ignoreCase?: boolean;
}
