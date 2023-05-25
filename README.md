# wordkito-widgets


Would you like to place Wordkito tests on your website?

You can use the library you are looking at!

But if you're motivated to do it yourself, here's a link to an example of how the library works underneath:
https://codesandbox.io/s/wordkito-test-widget-example-mgeeg8?file=/src/App.tsx



# Installation
```bash
npm install wordkito-widgets
```


# Import
```js
import { WordkitoWidget } from "wordkito-widgets"
```


# Use
```js
import { WordkitoWidget } from "wordkito-widgets"

function App(){
    const deckId = "<id_of_your_deck>"  // You can find it in the URL when you enter a single deck or under the "share" button.

    return (
        <div>
            <WordkitoWidget 
                deckId={deckId}
            />
        </div>
    )
}
```


# If you want to use the test results.
```js
import { useWidgetTest, WordkitoWidget } from "wordkito-widgets"

function App(){
    const deckId = "<id_of_your_deck>"  // You can find it in the URL when you enter a single deck or under the "Share" button.


    return (
        <div>
            <WordkitoWidget 
                deckId={deckId}
                onFinished={({result}) => console.log(result)}
            />
        </div>
    )
}
```


