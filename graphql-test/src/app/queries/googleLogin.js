import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation  googleLogin($code: String!, $platform: String!) {
        googleLogin(
            code: $code,
            platform: $platform
        ) {
        id
        email
        name
        token {
            accessToken
            refreshToken
            tokenType
        }

    }
}
    `