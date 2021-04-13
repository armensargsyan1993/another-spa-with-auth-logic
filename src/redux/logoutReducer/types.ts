export const LOGOUT__START = 'LOGOUT/LOGOUT__START'
export const LOGOUT__PROCESS = 'LOGOUT/LOGOUT__PROCESS'
export const LOGOUT__END = 'LOGOUT/LOGOUT__END'
export const LOGOUT__ERROR = 'LOGOUT/LOGOUT__ERROR'
export const LOGOUT__RESET = 'LOGOUT/LOGOUT__RESET'

type Start = typeof LOGOUT__START
type Process = typeof LOGOUT__PROCESS
type End = typeof LOGOUT__END
type Error = typeof LOGOUT__ERROR
type Reset = typeof LOGOUT__RESET

export type Logout =  Start | Process | End | Error | Reset