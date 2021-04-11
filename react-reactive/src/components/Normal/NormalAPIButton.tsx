import React from 'react'
import { NormalAPICall } from '../../reducer/actions';
import { iMetaAction } from '../../reducer/reducer'

interface AcceptableProps {
  dispatch: React.Dispatch<iMetaAction<any>>
}

/**
 * This just calls a normal API
 *
 */
const NormalAPIButton = (props: AcceptableProps) => {
  const { dispatch } = props;

  const handleNormalAPIButtonClick = () => {
    NormalAPICall(dispatch)
  }
  return <button onClick={() => handleNormalAPIButtonClick()}>This button calls the normal API</button>
}

export default NormalAPIButton