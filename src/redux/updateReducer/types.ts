export const UPDATE__START = 'UPDATE/UPDATE__START'
export const UPDATE__PROCESS = 'UPDATE/UPDATE__PROCESS'
export const UPDATE__END = 'UPDATE/UPDATE__END'
export const UPDATE__ERROR = 'UPDATE/UPDATE__ERROR'
export const UPDATE__RESET = 'UPDATE/UPDATE__RESET'

type Start = typeof UPDATE__START
type Process = typeof UPDATE__PROCESS
type End = typeof UPDATE__END
type Error = typeof UPDATE__ERROR
type Reset = typeof UPDATE__RESET

export type Update =  Start | Process | End | Error | Reset