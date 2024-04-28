/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThing = /* GraphQL */ `
  query GetThing($id: ID!) {
    getThing(id: $id) {
      id
      name
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listThings = /* GraphQL */ `
  query ListThings(
    $filter: ModelThingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        time
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
