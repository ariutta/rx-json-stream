# rx-json-stream

This is an [RxJs](https://github.com/Reactive-Extensions/RxJS) wrapper for the [JSONStream module](https://github.com/dominictarr/JSONStream). It is intended to track the `JSONStream` API as closely as possible, with the following exceptions:

* If the `JSONStream` method expects a callback, the `rx-json-stream` method instead returns an Observable
* `Observable` replaces `Stream`

Pull requests welcome!
