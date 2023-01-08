// this keyword explanation @mirceadev
"use strict";
console.log(this); // window

function standardFunction() {
  console.log(this);
}

standardFunction(); // window  => undefined

const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // window

const object = {
  description: "simple object",
};

object.s = standardFunction;
object.s(); // {description: 'simple object'...}

object.a = arrowFunction;
object.a(); // window

function callMeFromInside(func) {
  func();
}

object.c = callMeFromInside;

object.c(standardFunction); // window => undefined
object.c(arrowFunction); // window

function lastThing() {
  // this = obj
  (() => {
    console.log(this);
  })();
}
object.l = lastThing;
object.l(); // {description: 'simple object'...}
