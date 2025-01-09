import jwt from "../../config/jwt.js"

async function isAuthenticated(req,res,next){
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"jwt token needed"});
    }
    const token = authorization.replace("Bearer ","");
    const verified = jwt.verify(token);
    if(verified.error){
        return res.status(401).json({error:"jwt token not correct"});
    }
    req.user_id = verified.user_id;
    next();
}
async function isAdmin(req,res,next){
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"jwt token needed"});
    }
    const token = authorization.replace("Bearer ","");
    const verified = jwt.verify(token);
    if(verified.error){
        return res.status(401).json({error:"jwt token not correct"});
    }
    if(!verified.role || verified.role !== "admin"){
        return res.status(403).json({error:"not allowed"});
    }
    req.user_id = verified.user_id;
    next();
}

async function isAdminOrWaiter(req,res,next){
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"jwt token needed"});
    }
    const token = authorization.replace("Bearer ","");
    const verified = jwt.verify(token);
    if(verified.error){
        return res.status(401).json({error:"jwt token not correct"});
    }
    if((!verified.role || (verified.role !== "admin" && verified.role !== "camarero"))){
        return res.status(403).json({error:"not allowed"});
    }
    req.user_id = verified.user_id;

    next();
}

async function isAdminOrChef(req,res,next){
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"jwt token needed"});
    }
    const token = authorization.replace("Bearer ","");
    const verified = jwt.verify(token);
    if(verified.error){
        return res.status(401).json({error:"jwt token not correct"});
    }
    if((!verified.role || (verified.role !== "admin" && verified.role !== "cocinero"))){
        return res.status(403).json({error:"not allowed"});
    }

    next();
}

export const functions = {
    isAuthenticated,
    isAdmin,
    isAdminOrChef,
    isAdminOrWaiter
}

export default functions;