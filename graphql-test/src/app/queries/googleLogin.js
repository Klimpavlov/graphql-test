import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation googleLogin {
  googleLogin(
    code: "4/0AQlEd8ymtS7CKVssenGRA33pLRNj3wQN_ArYvQqTjnhgUSrpz9ZVgF_cru4QlNN1ckEECA"
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