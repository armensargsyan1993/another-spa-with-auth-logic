export const AUTH__ME__START = 'AUTH__ME/AUTH__ME__START'
export const AUTH__ME__PROCESS = 'AUTH__ME/AUTH__ME__PROCESS'
export const AUTH__ME__END = 'AUTH__ME/AUTH__ME__END'
export const AUTH__ME__ERROR = 'AUTH__ME/AUTH__ME__ERROR'
export const AUTH__ME__RESET = 'AUTH__ME/AUTH__ME__RESET'



type Start = typeof AUTH__ME__START
type Process = typeof AUTH__ME__PROCESS
type End = typeof AUTH__ME__END
type Error = typeof AUTH__ME__ERROR
type Reset = typeof AUTH__ME__RESET

export type AuthMe =  Start | Process | End | Error | Reset
