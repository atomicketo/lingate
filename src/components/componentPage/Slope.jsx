import React from "react";
import Paper from "@material-ui/core/Paper";
import Mathjax from "../Mathjax";
export default function Slope(props) {
  return (
    <React.Fragment>
      <Paper
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          backgroundColor: "#113448",
          borderRadius: 10,
          color: "white",
          marginBottom: 50,
          padding: 20
        }}
        elevation={5}
      >
        INTRODUCTION TO DERIVATIVES
      </Paper>
      <p style={{ textAlign: "center", marginLeft: 0 }}>
        Its all about the slope!
      </p>
      <Paper
        style={{
          fontStyle: "italic",
          textAlign: "center",
          padding: 5,
          backgroundColor: "#ffffba",
          margin: "auto",
          maxWidth: 400,
          marginBottom: 40,
          fontSize: 20
        }}
        elevation={2}
      >
        <Mathjax latex={`Slope=\\frac{Change in Y}{Change in X}`} />
      </Paper>
      {/* First Item */}
      <img
        src="https://www.mathsisfun.com/algebra/images/slope.svg"
        alt="Slope"
      />
      <p
        style={{
          textAlign: "center",
          marginTop: 40,
          marginBottom: 40,
          marginLeft: 0
        }}
      >
        We can find an <strong>average</strong> slope between two points
      </p>
      {/* First Item */}
      <img
        src="https://www.mathsisfun.com/calculus/images/slope-average.svg"
        alt="Average Slope"
      />
      <p style={{ textAlign: "center", marginTop: 40, marginLeft: 0 }}>
        But how do we find the slope <strong>at a point?</strong>{" "}
      </p>
      <p style={{ textAlign: "center", marginBottom: 40, marginLeft: 0 }}>
        There is nothing to measure!
      </p>
      <img
        src="https://www.mathsisfun.com/calculus/images/slope-0-0.svg"
        alt="Slope Zero"
      />
      <p style={{ textAlign: "center", marginTop: 40, marginLeft: 0 }}>
        But with derivatives we use a small difference ...
      </p>{" "}
      <p style={{ textAlign: "center", marginBottom: 40, marginLeft: 0 }}>
        ... then have it shrink towards zero.
      </p>
      <img
        src="https://www.mathsisfun.com/calculus/images/slope-dy-dx.svg"
        alt="Circle"
      />
      <Paper
        elevation={4}
        style={{
          padding: 20,
          marginTop: 5,
          marginBottom: 10,
          backgroundColor: "#fcfcfc"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Let us Find a Derivative!
        </h2>
        <p>
          To find the derivative of a function <strong>y = f(x)</strong> we use
          the slope formula:
        </p>
        <Paper
          style={{
            fontStyle: "italic",
            textAlign: "center",
            padding: 5,
            backgroundColor: "#ffffba",
            margin: "auto",
            maxWidth: 400,
            marginBottom: 40
          }}
          elevation={2}
        >
          <Mathjax
            latex={`Slope=\\frac{Change in Y}{Change in X}= \\frac{Δy}{Δx}`}
          />
        </Paper>

        <img
          src="https://www.mathsisfun.com/calculus/images/slope-dy-dx2.gif"
          alt="Slope"
        />

        <p style={{ textAlign: "center" }}>
          And (from the diagram) we see that:
        </p>
        <p style={{ textAlign: "center" }}>
          x changes from <strong>x to x+Δx</strong>
        </p>
        <p style={{ textAlign: "center" }}>
          y changes from <strong>f(x) to f(x+Δx)</strong>
        </p>

        <p style={{ marginTop: 40 }}>Now follow these steps:</p>
        <ul>
          <li>Fill in this slope formula:</li>
          {/* <li> */}
          <Paper
            style={{
              fontStyle: "italic",
              textAlign: "center",
              padding: 5,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400,
              marginBottom: 40,
              marginTop: 40
            }}
            elevation={2}
          >
            <Mathjax latex={`\\frac{Δy}{Δx}=\\frac{f(x+Δx) − f(x)}{Δx}`} />
          </Paper>
          {/* </li> */}
          <li>Simplify it as best we can</li>
          <li>Then make Δx shrink towards zero.</li>
        </ul>

        <p style={{ marginTop: 40 }}>Now, you can do this!</p>

        <div
          style={{
            backgroundColor: "#e1f7d5",
            padding: 10,
            borderLeftStyle: "solid",
            borderLeftWidth: 5,
            borderLeftColor: "darkgreen",
            borderRadius: 5,
            marginTop: 24,
            marginBottom: 24
            // borderLeftWidth: 10,
            // borderLeftColor: "red"
          }}
        >
          <p>
            Example: the function <strong>f(x) = x2</strong>
          </p>
          <p>
            We know <strong>f(x) = x2</strong>, and we can calculate{" "}
            <strong>f(x+Δx) </strong>:
          </p>
          <p>
            Start with: <strong>f(x+Δx) = (x+Δx)</strong>
          </p>
          <Mathjax styles={{ fontSize: 14 }} latex={`(x + Δx)^2: f(x+Δx)`} />
          <Mathjax
            styles={{ fontSize: 14, marginLeft: 60 }}
            latex={`= x^2 + 2x Δx + (Δx)^2 )`}
          />
        </div>

        <div
          style={{
            backgroundColor: "#ddfffc",
            padding: 10,
            borderRadius: 5,
            marginTop: 24,
            marginBottom: 24,
            borderLeftStyle: "solid",
            borderLeftWidth: 5,
            borderLeftColor: "#00137D"
          }}
        >
          <p>The slope formula is:</p>
          {/* <p> */}
          <Mathjax latex={`\\frac{f(x+Δx) − f(x)}{Δx}`} />
          {/* </p> */}
          <p>
            Put in <strong>f(x+Δx)</strong> and <strong>f(x):</strong>
          </p>

          {/* x2 + 2x Δx + (Δx)2 − x2 */}
          {/* <p> */}
          <Mathjax latex={`\\frac{x^2 + 2x  Δx + (Δx) - x^2}{Δx}`} />
          {/* </p> */}
          <p>
            Simplify (x<sup>2</sup> and −x<sup>2</sup> cancel):
          </p>
          {/* <p> */}
          <Mathjax latex={`\\frac{2x Δx + (Δx)^2}{Δx}`} />
          {/* 2x Δx + (Δx)2 */}
          {/* </p> */}
          <p>Simplify more (divide through by Δx):</p>
          {/* <p> */}
          <Mathjax latex={`2x + Δx`} />
          {/* </p> */}
          <p>Then as Δx heads towards 0 we get:</p>
          {/* <p> */}
          <Mathjax latex={`2x`} />
          {/* </p> */}
          <p>
            Result: the derivative of x<sup>2</sup> is 2x
          </p>
          <p>In other words, the slope at x is 2x</p>
        </div>

        <div style={{ marginTop: 40 }}>
          <p>
            We write <strong>dx</strong> instead of{" "}
            <strong>"Δx heads towards 0"</strong>.
          </p>
          <p>
            And "the derivative of" is commonly written <sup>d</sup>&frasl;
            <sub>dx</sub>
            {"  "}:
          </p>
          <Paper
            style={{
              fontStyle: "italic",
              textAlign: "center",
              padding: 5,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400
            }}
          >
            {/* <p> */}
            <Mathjax latex={`\\frac{d}{dx}x2 = 2x`} />
            {/* </p> */}
            <p style={{ textAlign: "center", paddingTop: 16, margin: 0 }}>
              "The derivative of <strong>x2</strong> equals <strong>2x</strong>"
            </p>
            <p style={{ textAlign: "center", margin: 0 }}>
              or simply "d dx of <strong>x2</strong> equals <strong>2x</strong>"
            </p>
          </Paper>
          <p>
            What does <sup>d</sup>&frasl;
            <sub>dx</sub> x <sup>2</sup> = 2x mean?
          </p>

          <img
            src="https://www.mathsisfun.com/calculus/images/slope-x2-2.svg"
            alt="Slope"
          />
          <p style={{ textAlign: "center", margin: 0, marginTop: 20 }}>
            It means that, for the function x<sup>2</sup>, the slope or "rate of
            change" at any point is 2x.
          </p>
          <p style={{ textAlign: "center", margin: 0 }}>
            So when x=2 the slope is 2x = 4, as shown here:
          </p>
          <p style={{ textAlign: "center", margin: 0 }}>
            Or when x=5 the slope is 2x = 10, and so on.
          </p>

          <div
            className="Note"
            style={{
              backgroundColor: "#e2eeff",
              padding: 10,
              marginBottom: 24,
              marginTop: 24,
              borderRadius: 7,
              borderLeftStyle: "solid",
              borderLeftWidth: 5,
              borderLeftColor: "#00137D"
            }}
          >
            <p>Note: sometimes f’(x) is also used for "the derivative of":</p>
            <Mathjax latex={`f’(x) = 2x`} />
            <p style={{ textAlign: "center", margin: 0 }}>
              "The derivative of f(x) equals 2x"
            </p>
            <p style={{ textAlign: "center", margin: 0 }}>
              or simply "f-dash of x equals 2x"
            </p>
          </div>
        </div>
      </Paper>
      <style scoped jsx>{`
        img {
          display: block;
          margin: auto;
        }
        // @media (min-width: 769px) {
        //   p {
        //     margin-left: 200px;
        //   }
        //   li {
        //     margin-left: 200px;
        //   }
        // }
      `}</style>
    </React.Fragment>
  );
}
