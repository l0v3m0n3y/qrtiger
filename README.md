# qrtiger
JavaScript library for qrtiger.com
# main
```js
const {qrtiger} = require('./qrtiger');

const qr = new qrtiger();
qr.generate_qr("t.me","url").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
