
import { ISAUTENTICATE , ISAUTENTICATEError} from '../types/index';

const isAuth = (data) =>({type:ISAUTENTICATE, payload:data})
const isAuthError = (data) =>({type:ISAUTENTICATEError, payload:data})

export {isAuth, isAuthError};