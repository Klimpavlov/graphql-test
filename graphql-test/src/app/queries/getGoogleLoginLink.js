import { gql } from '@apollo/client';

export const GET_GOOGLE_LOGIN_LINK = gql`
    query GetGoogleLoginLink {
        getGoogleLoginLink(platform: "ios") {
            url
        }
    }
`;
