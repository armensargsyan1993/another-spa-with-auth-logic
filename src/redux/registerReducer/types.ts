export const REGISTER__START = 'REGISTER/REGISTER__START'
export const REGISTER__PROCESS = 'REGISTER/REGISTER__PROCESS'
export const REGISTER__END = 'REGISTER/REGISTER__END'
export const REGISTER__ERROR = 'REGISTER/REGISTER__ERROR'
export const REGISTER__RESET = 'REGISTER/REGISTER__RESET'

type Start = typeof REGISTER__START
type Process = typeof REGISTER__PROCESS
type End = typeof REGISTER__END
type Error = typeof REGISTER__ERROR
type Reset = typeof REGISTER__RESET

export type Register =  Start | Process | End | Error | Reset