import React from "react";
import {  StreamAPICall } from "../../reducer/actions";
import { iMetaAction } from "../../reducer/reducer";

interface AcceptableProps {
  dispatch: React.Dispatch<iMetaAction<any>>
}

/**
 * 
 * This does the reactive API Call
 */
const ReactiveAPIButton = (props: AcceptableProps) => {
  const { dispatch } = props;
  const handleStreamAPIButtonClick = () => {
    StreamAPICall(dispatch);
  }
  return <button onClick={() => handleStreamAPIButtonClick()}>This will call the reactive stream</button>
}

export default ReactiveAPIButton;