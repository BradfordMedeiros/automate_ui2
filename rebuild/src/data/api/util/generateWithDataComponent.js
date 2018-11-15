import { Component } from 'react';

/*   
   ({ AUTOMATE_CORE_URL }, { })   // data to pass in, then hooks 
  {
    lifecycle: {
      getInitialData: () => [],
      getData: 
    },
    props: {}   // these get injected into child component
  })
*/

const generateWithDataComponent = (automateUrl, getComponentSpecificHooks) => {
  const componentSpecificHooks = getComponentSpecificHooks({ AUTOMATE_CORE_URL: automateUrl });
  const { getData } = componentSpecificHooks.lifecycle;

  class WithDataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasData: false,
      };
    }
    componentWillMount() {
      this.getData();
    }
    getData = async () => {
      try {
        const data = await getData()
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
        });
      } 
      return null;
    }
  
  }
  return WithDataComponent
}

export default generateWithDataComponent
