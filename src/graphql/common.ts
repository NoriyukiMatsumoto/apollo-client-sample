import gql from "graphql-tag";
export const QUERY_POST = gql`
  query posts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
          id
          title
      }
      meta {
          totalCount
      }
    }
  }
`;
