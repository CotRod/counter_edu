export enum EActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  RANDOM = 'RANDOM',
  RANDOM_ASYNC = 'RANDOM_ASYNC'
}

export type TActionWithPayload = {
  type: EActionTypes.RANDOM | EActionTypes.RANDOM_ASYNC,
  payload: number
}

export type TActionWithoutPayload = {
  type: Exclude<EActionTypes, EActionTypes.RANDOM | EActionTypes.RANDOM_ASYNC>
}

export type TAction = TActionWithPayload | TActionWithoutPayload;