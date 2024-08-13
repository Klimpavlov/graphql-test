import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
query getUserInfo {
    getUserInfo {
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