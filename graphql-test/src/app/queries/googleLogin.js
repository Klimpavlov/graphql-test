import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`

mutation googleLogin {
    googleLogin(
        code: "4/0AcvDMrCxMSRMOPDAYchhDmBUOsbpHaen80k1OiGK227wvdDAoCA9AXDmcOsyrKWhSh08vg"
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