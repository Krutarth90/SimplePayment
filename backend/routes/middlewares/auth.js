import jwt from 'jsonwebtoken';
import { pass } from '../../config.js';

export function auth (req, res, next) {
    let head = req.headers.authorization;
    try {
        head = head.split(' ')
        const token = head[1];
        const decoded = jwt.verify(token, pass);
        req.id = decoded.id;
        next(); 
    } catch (error) {
        console.log(error);
        res.status(403).json({
            msg : 'ERROR'
        });
    }    
}