import "./App.css";
import "./styles/index.scss";

import Posts from "./components/posts/Posts";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { increment, selectCount } from "./store/reducers/counter";

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <Posts />

      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
