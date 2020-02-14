import React from 'react'
import MathJax from 'react-mathjax'
const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

// https://en.wikibooks.org/wiki/LaTeX/Mathematics

export default ({ latex }) => {
    return (
        <MathJax.Provider>
            <MathJax.Node formula={latex} />
        </MathJax.Provider>
    );
}