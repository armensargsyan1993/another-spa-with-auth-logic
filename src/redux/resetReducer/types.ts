export const RESET__START = 'RESET/RESET__START'
export const RESET__PROCESS = 'RESET/RESET__PROCESS'
export const RESET__END = 'RESET/RESET__END'
export const RESET__ERROR = 'RESET/RESET__ERROR'
export const RESET__RESET = 'RESET/RESET__RESET'

type Start = typeof RESET__START
type Process = typeof RESET__PROCESS
type End = typeof RESET__END
type Error = typeof RESET__ERROR
type ResetT = typeof RESET__RESET

export type Reset =  Start | Process | End | Error | ResetT