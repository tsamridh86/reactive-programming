import { Customer, SimpleReducerActions } from "./actions";

/**
 * This is a simple reducer that will load content on the screen
 */
const SimpleReducer = (state: iSimpleReducer, action: iMetaAction<string & Customer & Customer[]>): iSimpleReducer => {

  switch (action.type) {
    case SimpleReducerActions.loading: return {
      ...state,
      loading: true,
      content: action.payload!,
    }
    case SimpleReducerActions.contentGot: return {
      ...state,
      loading: false,
      content: action.payload!
    }
    case SimpleReducerActions.streamingGot: return {
      ...state,
      loading: false,
      streamedContent: [...state.streamedContent, action.payload!]
    }
    default: return state;
  }

}

/**
 * This initial state also determines it's type,
 * pls change carefully
 */
export const simpleReducerInitState = {
  content: [] as Customer[],
  loading: false,
  streamedContent: [] as Customer[]
}

type iSimpleReducer = typeof simpleReducerInitState

export interface iMetaAction<T> {
  type: string;
  payload?: T
}


export default SimpleReducer