import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation googleLogin {
  googleLogin(
    code: "4/0AcvDMrAPgq0Q58ODvc3kRjH8e49mg3UdtzKjNKv9AYr5UV2AentcnFdeBt166Vpj1GAdFA"
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