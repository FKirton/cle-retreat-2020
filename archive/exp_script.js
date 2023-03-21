INTRO_PAGE = 'unformatted_intro.html';
LEXICON_CREATE = 'unformatted_lexicon_create.html';
LEXICON_TEST = 'unformatted_lexicon_test.html';
EXIT_PAGE = 'unformatted_exit.html';

window.onload = function () {
  if(window.location.pathname.includes(INTRO_PAGE)) {
    var next_page = LEXICON_CREATE;
    var button = document.getElementById("begin-button");
    button.addEventListener("click", function() {
      nextPage(next_page);
    });
  }
  if(window.location.pathname.includes(LEXICON_CREATE)) {
    var next_page = LEXICON_TEST;
    // DO SOME STUFF
  }

  if(window.location.pathname.includes(LEXICON_TEST)) {
    var next_page = EXIT_PAGE;
    // DO SOME STUFF
  }
};

function nextPage(page) {
  // DON'T LOAD PAGES LIKE THIS.
  // THE APPROACH WON'T WORK IF YOU'RE RUNNING YOUR CODE IN E.G. MECHANICAL TURK
  window.location.replace(page);
}

function lexiconCreation() {
  // show picture of humans, objects and actions
  // ask participant to select a symbol to represent the concept
}

function lexiconText() {
  // match symbols to concepts
  // give feedback
}

function sentenceCreation() {
  // use symbols to make sentences
}
