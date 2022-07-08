
export function generateBearerToken():string {
    //Can't find resources on how secure the generation needs to be
    //Just gonna create a random string then

    const TOKEN_LENGTH = 15;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+#$_-';
    let token = '';

    for(let i = 0; i < TOKEN_LENGTH; i++){
        token += alphabet.charAt(Math.floor((Math.random() * alphabet.length)) - 1);
    }

    return token;
}

export function validateBearerToken():boolean{

    return false;
}
