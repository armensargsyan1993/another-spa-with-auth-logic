export const BOOTCAMPS__START = 'BOOTCAMPS/BOOTCAMPS__START'
export const BOOTCAMPS__PROCESS = 'BOOTCAMPS/BOOTCAMPS__PROCESS'
export const BOOTCAMPS__END = 'BOOTCAMPS/BOOTCAMPS__END'
export const BOOTCAMPS__ERROR = 'BOOTCAMPS/BOOTCAMPS__ERROR'
export const BOOTCAMPS__RESET = 'BOOTCAMPS/BOOTCAMPS__RESET'

type Start = typeof BOOTCAMPS__START
type Process = typeof BOOTCAMPS__PROCESS
type End = typeof BOOTCAMPS__END
type Error = typeof BOOTCAMPS__ERROR
type Reset = typeof BOOTCAMPS__RESET

export type BootCamps =  Start | Process | End | Error | Reset