import React from "react";
import { iMetaAction } from "../reducer/reducer";
import { createAction } from '../reducer/actions'

export const streamHelper = async <T>(url: string, actionType: string, dispatch: React.Dispatch<iMetaAction<T>>) => {
  const response = await fetch(url)
  const reader = response.body!.getReader()
  let completed = false;
  while (!completed) {
    const { done, value } = await reader.read()
    completed = done;
    const readableValue = new TextDecoder().decode(value)
    try{
      const useableValue : T = JSON.parse(readableValue)
      dispatch( createAction(actionType, useableValue) )
    }catch(error){
      console.error("Useless info, disregarding")
    }
  }
}