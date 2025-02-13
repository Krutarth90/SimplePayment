import zod from 'zod';


async function checkBody(req, res, next) {

    const schema = zod.object ({
        fName : zod.string(),
        lName : zod.string(),
        username : zod.string().email(),
        password : zod.string().min(6)
    });
    
    const check = schema.safeParse(req.body);
    if(!check.success)
    {
        res.status(411).json({
            msg : "Incorrect Inputs"
        })
    }
    else
    {    
        next();
    }
}

export {
    checkBody
}