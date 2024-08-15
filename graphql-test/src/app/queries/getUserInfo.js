import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
    query getUserInfo {
        getUserInfo {
            id
            email
            name
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