import React, { Component } from 'react'
import DerivativesPage from './DerivativesPage';
import CardContainer from "./CardContainer";
import AntiDerivativesPage from "./AntiDerivativesPage"
import Drawer from './Drawer';
export default class LandingPage extends Component {
  state = {
    showDerivatives: false,
    showAntiDerivatives: false,
  }

  handleBack = () => {
    this.setState({ showDerivatives: false })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  renderComponent = () => {
    const { showDerivatives } = this.state
    if (showDerivatives) {
      return <DerivativesPage back={this.handleBack} />
    } else {
      return <CardContainer showDerivatives={() => this.setState({ showDerivatives: true })}
      />
    }
  }


  render() {
    return (
      <React.Fragment>
        <Drawer />
        {this.renderComponent()}
      </React.Fragment>
    )
  }
}


// renderComponent = () => {
//   const { showDerivatives, showAntiDerivatives } = this.state
//   if (showDerivatives) {
//     return <DerivativesPage back={() => this.setState({ showDerivatives: false })} />
//   } else if (showAntiDerivatives) {
//     return <AntiDerivativesPage back={() => this.setState({ showAntiDerivatives: false })} />
//   } else {
//     return <CardContainer
//       showDerivatives={() => this.setState({ showDerivatives: true })}
//       showAntiDerivatives={() => this.setState({ showAntiDerivatives: true })}
//     />
//   }
// }
