# clipboard
```
npm install clipboard --save

```

``` javascript

var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

```


# crypto-js

```
npm install crypto-js
```

#  dragula
```
npm install dragula --save
npm install ng2-dragula --save
```

# tracking

```
npm install tracking
```


# placeholder.js
```

npm install --save placeholder.js
```

```javascript
import placeholder from 'placeholder.js';

```

# jbb
```
npm install --save jbb
```


# js-base64
```
npm install --save js-base64
```

```javascript
Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
// note .decodeURI() is unnecessary since it accepts both flavors
Base64.decode('5bCP6aO85by-');  // 小飼弾
```


```

npm install mathjs --save 


```

```javascript
var math = require('mathjs');

// functions and constants
math.round(math.e, 3);            // 2.718
math.atan2(3, -3) / math.pi;      // 0.75
math.log(1000, 10);               // 3
math.sqrt(-4);                    // 2i
math.pow([[-1, 2], [3, 1]], 2);   // [[7, 0], [0, 7]]
math.derivative('x^2 + x', 'x');  // 2 * x + 1

// expressions
math.eval('12 / (2.3 + 0.7)');    // 4
math.eval('5.08 cm to inch');     // 2 inch
math.eval('sin(45 deg) ^ 2');     // 0.5
math.eval('9 / 3 + 2i');          // 3 + 2i
math.eval('det([-1, 2; 3, 1])');  // -7

// chaining
math.chain(3)
    .add(4)
    .multiply(2)
    .done(); // 14
```


# pinyin4js
```

npm install pinyin4js --save
//ES5
require("pinyin4js"); //import 'pinyin4js';

// more detail methods in test
// WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调

// output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK))

//首字母风格
// output: xmnhdsxm
console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '', PinyinFormat.FIRST_LETTER))
// or
console.log(PinyinHelper.getShortPinyin('厦门你好大厦厦门'))

```


```
npm i eustia-module --save
```

```javascript
var uuid = require('eustia-module/uuid');

console.log(uuid()); // -> 0e3b84af-f911-4a55-b78a-cedf6f0bd815

```