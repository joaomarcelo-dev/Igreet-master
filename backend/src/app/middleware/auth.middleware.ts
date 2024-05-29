import { NextFunction, Request, Response } from "express";
import jwtProvider from "../../providers/jwt.provider";

const authToken = async (req: Request, res: Response, next: NextFunction) => {  
  const authorization = req.headers.authorization || req.body.headers.Authorization
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token não recebido' })
  } 

  const [, token] = authorization.split(' ')

  try {
    jwtProvider.verify(token)
    res.locals['token_valid'] = true
    next()
  } catch (e) {
    res.status(401).json({ message: 'Token Inválido' });
  }
}

const authMiddleware = {
  authToken,
}

export default authMiddleware;
