export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

  // sintaxis de retorno implícito ({}) en lugar de return { ... }
  // este patrón permite controlar las acciones desde un único lugar
  export const doReset = ():CounterAction => ({
        type: 'reset' 
  })

  export const doIncreaseBy = (value:number):CounterAction => ({
    type: 'increaseBy',
    payload: { value }
  })