import { sign,verify } from 'jsonwebtoken';

export const createAuthToken=(userName: String, status:number ,secret?:string | undefined, expires?:string ): Promise<{token: string, expireAt: Date}> => {
  return new Promise(function(resolve, reject) {
    sign({userName,status}, secret?secret:'' , {expiresIn:expires}, (err: Error | null, encoded: string | undefined) => {
      if (err === null && encoded !== undefined) {
        const expireAfter = 2 * 604800 /* two weeks */
        const expireAt = new Date()
        expireAt.setSeconds(expireAt.getSeconds() + expireAfter)
        
        resolve({token: encoded, expireAt: expireAt})
      } else {
        reject(err)
      }
    })
  })
}

export const verifyToken=async(token:string)=>{
  try {
    const usuario = await verify(token,process.env.JWT_SECRET?process.env.JWT_SECRET:'');
      return usuario
  } catch (error) {
      return error
  }
}