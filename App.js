import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator} from 'react-native';
import { signinAdmin } from './services/auth';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import UserListContainer from './components/UserList/userListContainer';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: false,
  }
}

  componentDidMount() {
    try {
        this.setState({isLoading:true})
      // 'admin@gmail.com', 'admin1'
        signinAdmin('admin@gmail.com', 'admin1')
        console.log('ok')
        this.setState({isLoading:false})
    } catch(error) {
        console.log('error')
    }
  }


  render(){
    return this.state.isLoading ? ( <ActivityIndicator />) : (
    <Provider store={store}>
      <StatusBar  hidden = {false}/>
        <View style={styles.container}>
          <UserListContainer/>
        </View>
    </Provider>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
});
