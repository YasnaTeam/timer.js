# timer.js

The `timer.js` is a good way to postpone some codes for some times.

## Instalation

### bower
`
bower install js-timer
`
### npm
`
npm i postpone-timer
`

## Getting Started

Add the `timer.js` or the `timer.min.js` file in your HTML.

```html
<script src="dist/timer.min.js"></script>
<!--or-->
<script src="src/timer.js"></script>
```
## How to use

```js
let timer = new Timer();

timer.delay(function() {
  alert('Timer ended'); // The things to do after ending the time
}, 15); // 15 seconds 
```

## Author

* **EmiTis Yousefi** - [emitis89](https://github.com/emitis89)

## License

This project is licensed under the MIT License
