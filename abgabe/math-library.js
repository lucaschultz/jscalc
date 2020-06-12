// Regular expression defining secure input for eval()

const secureRegEx = new RegExp('^([-+*/ 0-9().]|Math[.]sqrt|Math[.]PI|Math[.]sin|Math[.]cos|Math[.]tan)*$');

// Using Function() is a little less evil than eval(), see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!

export default function calc (exprString) {
  if (!secureRegEx.test(exprString)) {
    return 'Security Alert!';
  }
  try {
    return Function('"use strict";return (' + exprString + ')')();
  } catch (error) {
    return 'syntax error';
  }
};