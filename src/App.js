import {createStore} from 'redux'
import './App.css';

function App() {
  const addOne = () => {
    return{
      type: 'ADD_ONE',
      quantity: 1,
    }
  }

  const initialState = {
    num: 5,
  }

  const reducer = (state = initialState, action) => {
    switch(action.type){

      case 'ADD_ONE':
        return{
          ...state,
          num: state.num + 1,
        }

        default:
          return state
    }
  }

  const store = createStore(reducer);
  console.log(store.getState())

  const firstStoreData =  store.getState();
  console.dir(firstStoreData)

  console.log(`Initial state: ${JSON.stringify(firstStoreData)}`, firstStoreData);

  const unsubscribe = store.subscribe(() =>  console.log(`Updated state: `, store.getState()));

  store.dispatch(addOne());

  unsubscribe();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
