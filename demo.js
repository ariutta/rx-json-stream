var rxQuest = require('rx-quest');
var rxFs = require('rx-fs');
var rxJSONStream = require('rx-json-stream');
var Rx = require('rx');
var RxNode = require('rx-node-extra');

function bumpPackageJson(oldVersion, newVersion) {
  var dataSource = rxQuest.get('https://publicdata-weather.firebaseio.com/sanfrancisco\.json');

  /*
  var dataSource = rxFs.createReadObservable('./package.json', {
    json: true
  });
  //*/
  /*
  var dataSource = rxQuest.get('https://publicdata-weather.firebaseio.com/sanfrancisco\.json', {
    json: true
  });
  //*/

  /*
  var dataSource = rxQuest('https://publicdata-weather.firebaseio.com/sanfrancisco\.json', {
    json: true
  });
  //*/

  /*
  var dataSource = rxQuest.get('https://publicdata-weather.firebaseio.com/sanfrancisco\.json');
  //*/

  /*
  var dataSource = rxQuest.get({
    uri: 'https://publicdata-weather.firebaseio.com/sanfrancisco\.json',
    json: true
  });
  //*/

  /*
  var dataSource = rxQuest({
    uri: 'https://publicdata-weather.firebaseio.com/sanfrancisco\.json',
    json: true
  });
  //*/

  //var dataSource = rxFs.readFile('./package.json');

  dataSource
    //.let(rxJSONStream.parse('*'))
    //.let(rxJSONStream.parse('timezone'))
    .let(rxJSONStream.parse('*.data'))
    //.let(rxJSONStream.parse(true))
    //*/
    //.concatMap(rxJSONStream.stringify())
    /*
    .flatMap(Rx.Observable.pairs)
    .concatMap(rxJSONStream.stringifyObject())
    //*/
    .subscribe(function(data) {
      console.log('subscribed data');
      console.log(data);
      //console.log(JSON.parse(data));
      //console.log(JSON.stringify(JSON.parse(data)), null, '  ');
    }, function(err) {
      throw err;
    }, function() {
      console.log('complete');
    });
}

bumpPackageJson('1.0.0', '2.0.0');

/*
function isEven(x) { return x % 2 === 0; }
function mul10(x) { return x * 10; }

//var t = require('transducers-js');

var source = Rx.Observable.range(1, 5)
  .map(function(x) {
    console.log('x: ' + x);
    return x;
  })
  .transduce(t.comp(t.filter(isEven), t.map(mul10)));
  //.transduce(t.map(mul10));

var subscription = source.subscribe(
  function(x) {
    console.log('Next: %s', x);
  },
  function(err) {
    console.log('Error: %s', err);
  },
  function() {
    console.log('Completed');
  });
//*/

/*
var map    = t.map,
    filter = t.filter,
    comp   = t.comp,
    into   = t.into;

var inc = function(n) { return n + 1; };
var isEven = function(n) { return n % 2 == 0; };
var xf = comp(map(inc), filter(isEven));

console.log(into([], xf, [0,1,2,3,4])); // [2,4]
//*/

/*
function parseIt() {
  return function(o) {
    return o.concat(o);
  };
}

var obs = Rx.Observable.range(1, 3);

var source = obs.let(parseIt());

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });
//*/
