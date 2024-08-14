import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation googleLogin {
  googleLogin(
    code: "4/0AcvDMrBjGVrTWUls0BZhwjekkzyGarIPduXPcLUJ-AoizwNWEOTZGuMLAgzH5MwH7oqCmQ"
		platform: "ios"
   
) {
        id
        email
        name
        externalAccounts {
            id
            provider
            email
            name
            scopes
        }
        token {
            accessToken
            refreshToken
            tokenType
        }
        sessions {
            sessionID
            userID
            platform
            createdAt
            externalAccountId
        }
    }
}
`