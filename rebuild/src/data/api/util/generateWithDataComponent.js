import { Component } from 'react';

const generateWithDataComponent = (automateUrl, getComponentSpecificHooks) => {
  class WithDataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasData: false,
      };

      this.innerState = null;

      const componentSpecificHooks = getComponentSpecificHooks(
        {AUTOMATE_CORE_URL: automateUrl},
        {
          refresh: this.getDataAsyncWrapper,
          setState: state => { 
            this.innerState = state
          }, 
          getState: () => this.innerState, 
        },
        {...this.props.hooks},
      );
      const { getData } = componentSpecificHooks.lifecycle;
      const extraProps = componentSpecificHooks.props;
      this.getData = getData;
      this.extraProps = extraProps;
      this.refresh = componentSpecificHooks.refresh;
      this.refreshHandle = undefined;

    }
    componentWillMount() {
      this.getDataAsyncWrapper();
      if (this.refresh){
        this.refreshHandle = setInterval(this.getDataAsyncWrapper, this.refresh);
      }

    }
    componentWillUnmount(){
      clearInterval(this.refreshHandle);
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
