import { Component } from 'react';

const generateWithDataComponent = (automateUrl, getComponentSpecificHooks) => {
  class WithDataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasData: false,
      };
      const componentSpecificHooks = getComponentSpecificHooks(
        {AUTOMATE_CORE_URL: automateUrl},
        {refresh: this.getDataAsyncWrapper}
      );
      const { getData } = componentSpecificHooks.lifecycle;
      const extraProps = componentSpecificHooks.props;
      this.getData = getData;
      this.extraProps = extraProps;
    }
    componentWillMount() {
      this.getDataAsyncWrapper();
    }
    getDataAsyncWrapper = async () => {
      const params = this.props.params || {};
      try {
        const data = await this.getData({...params})
        this.setState({
          hasData: true,
          data: data,
        });
      } catch (err) {
        console.error('error while fetching ', err);
      }
    }
    render() {
      const { children } = this.props;
      const { hasData, data } = this.state;
      if (hasData && children) {
        return children({
          data,
          ...this.extraProps,
        });
      } 
      return null;
    }
  
  }
  return WithDataComponent
}

export default generateWithDataComponent
