import React, { Component, PropTypes } from 'react';
import AxiomBuilderComponent from './AxiomBuilderComponent';
import { Desktop, Mobile } from '../../util/ViewportSizing';

class AxiomBuilder extends Component {
  state = {
    isHidden: true,
  }
  render() {
    const { axioms, title, selectedIndex, onAxiomSelected, onAxiomChange, children } = this.props;
    return (
      <div>
        <Mobile>
          <AxiomBuilderComponent
            axioms={axioms}
            title={title}
            selectedIndex={selectedIndex}
            onAxiomSelected={onAxiomSelected}
            onAxiomChange={onAxiomChange}
            isHidden={this.state.isHidden}
            onMenuToggle={() => this.setState({ isHidden: !this.state.isHidden })}
            isMobile={true}
          >
            {children}
          </AxiomBuilderComponent>
        </Mobile>
        <Desktop>
          <AxiomBuilderComponent
            axioms={axioms}
            title={title}
            selectedIndex={selectedIndex}
            onAxiomSelected={onAxiomSelected}
            onAxiomChange={onAxiomChange}
            isHidden={this.state.isHidden}
            onMenuToggle={() => this.setState({ isHidden: !this.state.isHidden })}
            isMobile={false}
          >
            {children}
          </AxiomBuilderComponent>
        </Desktop>
      </div>

    )
  }


}


AxiomBuilder.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onAxiomSelected: PropTypes.func,
  onAxiomChange: PropTypes.func,
  children: PropTypes.node,
};

export default AxiomBuilder;
