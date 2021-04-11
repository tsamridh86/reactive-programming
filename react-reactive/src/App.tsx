import React, { useReducer } from 'react';
import DisplaySection from './components/DisplaySection/DisplaySection';
import NormalAPIButton from './components/Normal/NormalAPIButton';
import ReactiveAPIButton from './components/Reactive/ReactiveAPIButton';
import SimpleReducer, { simpleReducerInitState } from './reducer/reducer';


const App = () => {

  const [state, dispatch] = useReducer(SimpleReducer, simpleReducerInitState);

  return (
    <div >
      <NormalAPIButton dispatch={dispatch} />
      <ReactiveAPIButton dispatch={dispatch} />
      <DisplaySection >
        <><div>Standard content: <br />{state.content}</div>
          <div>Streamed content:</div>
          {state.streamedContent.map((content) => <div>{content.id} and {content.name}</div>)}
        </>
      </DisplaySection>
    </div>
  );
}

export default App;
