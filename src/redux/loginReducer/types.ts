export const LOGIN__START = 'LOGIN/LOGIN__START'
export const LOGIN__PROCESS = 'LOGIN/LOGIN__PROCESS'
export const LOGIN__END = 'LOGIN/LOGIN__END'
export const LOGIN__ERROR = 'LOGIN/LOGIN__ERROR'
export const LOGIN__RESET = 'LOGIN/LOGIN__RESET'
export const ROUTE__COMPLETE = 'LOGIN/ ROUTE__COMPLETE'


type Start = typeof LOGIN__START
type Process = typeof LOGIN__PROCESS
type End = typeof LOGIN__END
type Error = typeof LOGIN__ERROR
type Reset = typeof LOGIN__RESET
type RouteComplete = typeof ROUTE__COMPLETE

export type Login =  Start | Process | End | Error | Reset | RouteComplete