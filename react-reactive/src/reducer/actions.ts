import { iMetaAction } from "./reducer"
import axios from "axios";
import React from "react";
import { streamHelper } from "../stream/helper";

export const SimpleReducerActions = {
  loading: 'loading',
  contentGot: 'contentGot',
  streamingGot: 'streamingGot'
}

export const createAction = <T>(type: string, payload?: T): iMetaAction<T> => ({
  type,
  payload
})

/**
 * This method will call the normal API
 * 
 * @param dispatch - I haven't used proper thunk so like this
 * 
 */
export const NormalAPICall = async (dispatch: React.Dispatch<iMetaAction<string | Customer[]>>) => {
  dispatch(createAction(SimpleReducerActions.loading, "firing the normal API Call"))
  const response = await axios.get("http://localhost:9191/customers")
  const data: Customer[] = response.data
  const ans = data.reduce((acc, curr) => `${acc} \n ${curr.id} and ${curr.name}`, "")
  dispatch(createAction(SimpleReducerActions.contentGot, ans))
}

export const StreamAPICall = async (dispatch: React.Dispatch<iMetaAction<string | Customer>>) => {
  dispatch(createAction(SimpleReducerActions.loading, "firing the stream API"))
  streamHelper<Customer>("http://localhost:9191/customers/stream", SimpleReducerActions.streamingGot, dispatch)

}

export interface Customer {
  id: string,
  name: string
}