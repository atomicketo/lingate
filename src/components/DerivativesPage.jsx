import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Drawer from '../components/Drawer';
import { Card } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    paddingTop: {
        paddingTop: 50
    }
});

export default function DerivativesPage(props) {
    const { back } = props;
    return (
        <React.Fragment>
            <Drawer />
            <Container fixed style={{ marginTop: 80 }}>
                <Card style={{ padding: 20 }}>
                    <p style={{ fontWeight: 'bold', fontSize: 26 }}>
                        Definition of the Derivative
                   </p>
                    <p>The derivative of f(x) with respect to x is the function f′(x) and is defined as,</p>
                    <br></br>

                    <p style={{ marginLeft: 30, fontStyle: 'italic' }}>f
′
(
x
)
=
lim
h
→
0

f
(
x
+
h
)
−
f
(
x
)
h</p>
                    <br></br>

                    <p>Note that we replaced all the a’s in
                    (1)
                     with x’s to acknowledge the fact that the derivative is really a function as well. We often “read”
                    f
                    ′
                    (
                    x
                    )
                     as “f prime of x”.

Let’s compute a couple of derivatives using the definition.</p>
                    <p>A function
                    f
                    (
                    x
                    )
                     is called differentiable at
                    x
                    =
                    a
                     if
                    f
                    ′
                    (
                    a
                    )
                     exists and
                    f
                    (
                    x
                    )
 is called differentiable on an interval if the derivative exists for each point in that interval.
 </p>
                    <p>The next theorem shows us a very nice relationship between functions that are continuous and those that are differentiable.

                    </p>
                    <p style={{ fontWeight: 'bold' }}>Theorem</p>
                    <p>If
f
(
x
)
 is differentiable at
x
=
a
 then
f
(
x
)
 is continuous at
x
=
a
.</p>
                    <p>Note that this theorem does not work in reverse. Consider
                    f
                    (
                    x
                    )
                    =
                    |
                    x
                    |
 and take a look at,</p>

                    <p>lim
                   x
                   →
                   0

                   f
                   (
                   x
                   )
                   =
                   lim
                   x
                   →
                   0

                   |
                   x
                   |
                   =
                   0
                   =
                   f
                   (
                   0
)</p>

                    <p>So,
                    f
                    (
                    x
                    )
                    =
                    |
                    x
                    |
                     is continuous at
                    x
                    =
                    0
                     but we’ve just shown above in Example 4 that
                    f
                    (
                    x
                    )
                    =
                    |
                    x
                    |
                     is not differentiable at
                    x
                    =
                    0
.</p>
                    <p style={{ fontWeight: 'bold' }}>Alternate Notation</p>
                    <p>
                        Next, we need to discuss some alternate notation for the derivative. The typical derivative notation is the “prime” notation. However, there is another notation that is used on occasion so let’s cover that.</p>
                    <p>Given a function
    y
    =
    f
    (
    x
    )
     all of the following are equivalent and represent the derivative of
    f
    (
    x
    )
 with respect to x.</p>
                    <p>f
                   ′
                   (
                   x
                   )
                   =
                   y
                   ′
                   =
                   d
                   f
                   d
                   x
                   =
                   d
                   y
                   d
                   x
                   =
                   d
                   d
                   x
                   (
                   f
                   (
                   x
                   )
                   )
                   =
                   d
                   d
                   x
                   (
                   y
)</p>

                    <p>Because we also need to evaluate derivatives on occasion we also need a notation for evaluating derivatives when using the fractional notation. So, if we want to evaluate the derivative at
                    x
                    =
                    a
 all of the following are equivalent.</p>
                    <p>f
                   ′
                   (
                   a
                   )
                   =
                   y
                   ′
                   ∣
                   ∣
                   x
                   =
                   a
                   =
                   d
                   f
                   d
                   x
                   ∣
                   ∣
                   ∣
                   x
                   =
                   a
                   =
                   d
                   y
                   d
                   x
                   ∣
                   ∣
                   ∣
                   x
                   =
a</p>

                    <p>Note as well that on occasion we will drop the
                    (
                    x
                    )
 part on the function to simplify the notation somewhat. In these cases the following are equivalent.</p>
                    <p>f
    ′
    (
    x
    )
    =
    f
′</p>

                    <p>As a final note in this section we’ll acknowledge that computing most derivatives directly from the definition is a fairly complex (and sometimes painful) process filled with opportunities to make mistakes. In a couple of sections we’ll start developing formulas and/or properties that will help us to take the derivative of many of the common functions so we won’t need to resort to the definition of the derivative too often.</p>
                    <p>This does not mean however that it isn’t important to know the definition of the derivative! It is an important definition that we should always know and keep in the back of our minds. It is just something that we’re not going to be working with all that much.</p>
                    <Button variant="contained" style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }} color="#3f51b5" onClick={() => back()}>Back</Button>
                </Card>
            </Container>
        </React.Fragment>
    );
}
