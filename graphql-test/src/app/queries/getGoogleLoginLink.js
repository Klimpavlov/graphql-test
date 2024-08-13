import { gql } from '@apollo/client';

export const GET_GOOGLE_LOGIN_LINK = gql`
    query getGoogleLoginLink {
        getGoogleLoginLink(platform: "ios") {
            url
        }
    }
`;
