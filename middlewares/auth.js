import { verifyToken } from "../utils/authentication.js";

const checkForAuthCookie = (cookieName) => {
    return (req, res, next) => {
        const authToken = req.cookies?.[cookieName];
        if (!authToken) {
            return next();
        }
        
        try {
            const userPayload = verifyToken(authToken);
            req.user = userPayload;
        }
        catch (error) { }

        return next();
    }
}

export { checkForAuthCookie };