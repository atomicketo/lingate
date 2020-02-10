import React, { Fragment } from "react";
import { Grid, Container } from "@material-ui/core";
import Card from "./Card";
const CardContainer = props => {
  const data = [
    {
      title: "Derivatives",
      desc:
        "The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value). Derivatives are a fundamental tool of calculus.",
      image:
        "https://images.unsplash.com/photo-1528082992860-d520150d6f6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    },
    {
      title: "Antiderivative",
      desc:
        "In calculus, an antiderivative, primitive function, primitive integral or indefinite integral of a function f is a differentiable function F whose derivative is equal to the original function f.",
      image:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    },
    // {
    //   title: "Limits",
    //   desc:
    //     "A limit is the value that a function (or sequence) approaches as the input (or index) approaches some value. Limits are essential to calculus (and mathematical analysis in general) and are used to define continuity, derivatives, and integrals",
    //   image:
    //     "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    // },
    // {
    //   title: "Continuity",
    //   desc:
    //     "A continuous function is a function that does not have any abrupt changes in value, known as discontinuities. More precisely, sufficiently small changes in the input of a continuous function result in arbitrarily small changes in its output",
    //   image:
    //     "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    // },
    // {
    //   title: "Chain Rule",
    //   desc:
    //     "In calculus, the chain rule is a formula to compute the derivative of a composite function. That is, if f and g are differentiable functions, then the chain rule expresses the derivative of their composite f ∘ g",
    //   image:
    //     "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    // },
    // {
    //   title: "Theorem of Calculus",
    //   desc:
    //     "The fundamental theorem of calculus is a theorem that links the concept of differentiating a function with the concept of integrating a function.",
    //   image:
    //     "https://images.unsplash.com/photo-1576834967753-ad2cf1cc8d19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    // },
  ];

  const { showDerivatives } = props
  return (
    <Fragment>
      {/* <Container maxWidth="xl" style={{ backgroundColor: "grey" }}> */}
      <Container maxWidth="xl" style={{ marginTop: 80 }}>
        <Grid container justify="center">
          <Card item={data[0]} className handleOnClick={() => {
            showDerivatives()
          }}></Card>
          <Card item={data[1]} className></Card>
          {/* <Card item={data[2]} className></Card> */}
        </Grid>
        {/* <Grid container justify="center">
          <Card item={data[3]} className></Card>
          <Card item={data[4]} className></Card>
          <Card item={data[5]} className></Card>
        </Grid> */}
      </Container>
      {props.children}
    </Fragment>
  );
};

export default CardContainer;
