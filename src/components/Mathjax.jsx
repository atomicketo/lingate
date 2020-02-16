import React from "react";
import MathJax from "react-mathjax";
const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

// https://en.wikibooks.org/wiki/LaTeX/Mathematics

const quadratic = `\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta`;

export default ({ latex, styles }) => {
  return (
    <MathJax.Provider>
      <MathJax.Node formula={latex} style={styles} />
    </MathJax.Provider>
  );
};
