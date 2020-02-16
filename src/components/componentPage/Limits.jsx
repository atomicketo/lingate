import React from "react";
import Paper from "@material-ui/core/Paper";
import Mathjax from "../Mathjax";

export default function Limits(props) {
  return (
    <React.Fragment>
      {/* <Paper
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
        LIMITS
      </Paper> */}
      <h2 style={{ letterSpacing: 7, textAlign: "center", marginTop: 48 }}>
        DEFINITION OF THE DERIVATIVE
      </h2>
      <p>
        The derivative of f(x) with respect to x is the function f′(x) and is
        defined as,
      </p>
      <br></br>
      <Paper
        style={{
          fontStyle: "italic",
          textAlign: "center",
          padding: 5,
          backgroundColor: "#ffffba",
          margin: "auto",
          maxWidth: 400
        }}
        elevation={2}
      >
        <Mathjax
          latex={`f'(x) = \\lim\\limits_{x \\to \\infty} f(x+h) - f(x)h`}
        />
        {/* f ′ ( x ) = lim h → 0 f ( x + h ) − f ( x ) h */}
      </Paper>
      <br></br>
      <p>
        Note that we replaced all the a’s in (1) with x’s to acknowledge the
        fact that the derivative is really a function as well. We often “read”
        f′(x) as <strong>“f prime of x”</strong>. Let’s compute a couple of
        derivatives using the definition.
      </p>
      <p>
        A function f(x) is called differentiable at{" "}
        <strong>x = a if f′(a)</strong> exists and f(x) is called differentiable
        on an interval if the derivative exists for each point in that interval.
      </p>
      <p>
        The next theorem shows us a very nice relationship between functions
        that are continuous and those that are differentiable.
      </p>
      <Paper
        elevation={4}
        style={{
          padding: 20,
          marginTop: 5,
          marginBottom: 10,
          backgroundColor: "#fcfcfc"
        }}
      >
        <h2>THEOREM</h2>
        <p>
          If f(x) is differentiable at x = a then f(x) is continuous at x = a .
        </p>
        <p>
          Note that this theorem does not work in reverse. Consider{" "}
          <strong>f(x) = |x|</strong> and take a look at,
        </p>
        <p>
          <Paper
            style={{
              fontStyle: "italic",
              textAlign: "center",
              padding: 5,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400
            }}
            elevation={2}
          >
            <Mathjax
              latex={` \\lim\\limits_{x \\to 0} f(x) = \\lim\\limits_{x \\to 0}|x| = 0 = f(0)`}
            />
          </Paper>
        </p>
        <p>
          So, f (x) = | x | is continuous at x = 0 but we’ve just shown above in
          Example 4 that f(x) = | x | is not differentiable at x = 0 .
        </p>
      </Paper>
      <Paper
        elevation={4}
        style={{
          padding: 20,
          marginTop: 5,
          marginBottom: 10,
          backgroundColor: "#fcfcfc"
        }}
      >
        <h2>ALTERNATE NOTION</h2>
        <p>
          Next, we need to discuss some alternate notation for the derivative.
          The typical derivative notation is the “prime” notation. However,
          there is another notation that is used on occasion so let’s cover
          that.
        </p>
        <p>
          Given a function <strong>y = f(x)</strong> all of the following are
          equivalent and represent the derivative of f ( x ) with respect to x.
        </p>
        <p>
          <Paper
            elevation={4}
            style={{
              padding: 20,
              marginTop: 5,
              marginBottom: 10,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400
            }}
          >
            <Mathjax latex={`f'(x)=y'=\\frac{df}{dx}=\\frac{dy}{dx}`} />
            {/* <Mathjax latex={`\\frac{n!}{k!(n-k)!} = \\binom{n}{k} `} /> */}
          </Paper>
        </p>
        <p>
          Because we also need to evaluate derivatives on occasion we also need
          a notation for evaluating derivatives when using the fractional
          notation. So, if we want to evaluate the derivative at x = a all of
          the following are equivalent.
        </p>
        <p>
          <Paper
            elevation={4}
            style={{
              padding: 20,
              marginTop: 5,
              marginBottom: 10,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400
            }}
          >
            <Mathjax latex={`f'(a)=y'|_{x=a}=\\frac{df}{dx}|_{x=a}`} />
          </Paper>
        </p>
        <p>
          Note as well that on occasion we will drop the (x) part on the
          function to simplify the notation somewhat. In these cases the
          following are equivalent.
        </p>
        <p>
          <Paper
            elevation={4}
            style={{
              padding: 20,
              marginTop: 5,
              marginBottom: 10,
              backgroundColor: "#ffffba",
              margin: "auto",
              maxWidth: 400
            }}
          >
            <Mathjax latex={`f'(x) = f'`} />
          </Paper>
        </p>
        <p>
          As a final note in this section we’ll acknowledge that computing most
          derivatives directly from the definition is a fairly complex (and
          sometimes painful) process filled with opportunities to make mistakes.
          In a couple of sections we’ll start developing formulas and/or
          properties that will help us to take the derivative of many of the
          common functions so we won’t need to resort to the definition of the
          derivative too often.
        </p>
        <p>
          This does not mean however that it isn’t important to know the
          definition of the derivative! It is an important definition that we
          should always know and keep in the back of our minds. It is just
          something that we’re not going to be working with all that much.
        </p>
      </Paper>
    </React.Fragment>
  );
}
