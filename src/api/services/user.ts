export type ErrorResponse = {error: {type: string, message: string}}
export type AuthResponse = ErrorResponse | {userId: string}

function auth(bearerToken:string): Promise<AuthResponse> {
    return new Promise( function(resolve, reject) {
        const token = bearerToken.replace('Bearer ', '')
        if(token === 'fakeToken') {
            resolve({userId: 'fakeToken'})
            return
        }

        resolve({error: {type: 'unauthorized', message: 'Authentication Failed.'}})
    })
}

export default {auth: auth}