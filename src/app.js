/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function generatorExcuses() {
    let fullExcuses = {
      who: ["The dog", "My grandma", "The mailman", "My bird"],
      action: ["ate", "peed", "crushed", "broke"],
      what: ["my homework", "my phone", "the car"],
      when: [
        "before the class",
        "when I was sleeping",
        "while I was exercising",
        "during my lunch",
        "while I was praying"
      ]
    };

    let randomExcuse1 = [];
    let randomExcuse2 = [];
    let randomExcuse3 = [];
    let randomExcuse4 = [];

    let randomWho = Math.floor(Math.random() * 3 + 1);
    let randomAction = Math.floor(Math.random() * 3 + 1);
    let randomWhat = Math.floor(Math.random() * 3 + 1);
    let randomWhen = Math.floor(Math.random() * 4 + 1);

    for (let i = 0; i < 1; i++) {
      randomExcuse1.push(fullExcuses.who[randomWho]);
      randomExcuse2.push(fullExcuses.action[randomAction]);
      randomExcuse3.push(fullExcuses.what[randomWhat]);
      randomExcuse4.push(fullExcuses.when[randomWhen]);
    }

    return (
      "OMG ! " +
      randomExcuse1 +
      " " +
      randomExcuse2 +
      " " +
      randomExcuse3 +
      " " +
      randomExcuse4
    );
  }

  let element = (document.getElementById(
    "excuse"
  ).innerHTML = generatorExcuses());
};
