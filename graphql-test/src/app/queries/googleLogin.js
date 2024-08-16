import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation googleLogin {
  googleLogin(
    code: "4/0AcvDMrAyth-_lHYsNjoydtHUQq3X2Bey8UFUDjONUofHoECrFYepMcBtfC8YAR0DSTLR-Q"
		platform: "ios"

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



// import { gql } from '@apollo/client';
//
// export const GOOGLE_LOGIN = gql`
//     mutation googleLogin($code: String!, $platform: String!) {
//   googleLogin(
//       code: $code,
//       platform: $platform
//
// ) {
//         id
//         email
//         name
//         token {
//             accessToken
//             refreshToken
//             tokenType
//         }
//
//     }
// }
//     `