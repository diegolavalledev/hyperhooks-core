_Hyperhooks_ is a minimalistic stand-alone implementation of [React Hooks](https://reactjs.org/docs/hooks-reference.html) and the _Virtual DOM_ concept exposed by the [React API](https://reactjs.org/docs/react-api.html).

# Core

The `hyperhooks-core` component provides the foundational `h` (for _hyperscript_) function which is equivalent to React's [createElement](https://reactjs.org/docs/react-api.html#createelement).

Additionally several hook functions are exposed: `useCallback`, `useEffect`, `useReducer`,  `useRef`, `useState`…

## DOM Renderer

`hyperhooks-core` is used by the [DOM Renderer](https://github.com/hyperhooks/hyperhooks-dom) to target the Web. 

## Swift renderer

Hyperhooks can also target native iOS (and other _Apple Platforms_) via the [Swift Renderer](https://github.com/hyperhooks/hyperhooks-swift).

# Usage

To use `hyperhooks-core` just import `lib/hyperhooks-core.js` into your module. You will need a renderer to generate views for a specific platform.

Alternatively you can add it to your page via `<script>` tag. 

```html
<script src="hyperhooks-core/lib/hyperhooks-core.js"></script>
```

# Build

`hyperhooks-core` is written in _Pure JavaScript_ with no transpiling needed.

# Test

Tests are located in the test folder. To run them, open `test/index.html` with your browser of choice and open the development console to see the results.
