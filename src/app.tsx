import { Component } from 'react';
import './app.less';
import { Provider } from 'react-redux';
import store from '~/store/index';

class App extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
