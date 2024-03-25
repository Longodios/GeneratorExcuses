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

    let randomExcuse = [];

    let random = Math.floor(Math.random() * 3 + 1);

    for (let i = 0; i < 1; i++) {
      randomExcuse.push(fullExcuses.who[random]);
      randomExcuse.push(fullExcuses.action[random]);
      randomExcuse.push(fullExcuses.what[random]);
      randomExcuse.push(fullExcuses.when[random]);
    }

    return randomExcuse;
  }
  console.log(
    (document.getElementById("excuse").innerHTML = generatorExcuses())
  );
};
