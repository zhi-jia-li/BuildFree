/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createThing = /* GraphQL */ `
  mutation CreateThing(
    $input: CreateThingInput!
    $condition: ModelThingConditionInput
  ) {
    createThing(input: $input, condition: $condition) {
      id
      name
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateThing = /* GraphQL */ `
  mutation UpdateThing(
    $input: UpdateThingInput!
    $condition: ModelThingConditionInput
  ) {
    updateThing(input: $input, condition: $condition) {
      id
      name
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteThing = /* GraphQL */ `
  mutation DeleteThing(
    $input: DeleteThingInput!
    $condition: ModelThingConditionInput
  ) {
    deleteThing(input: $input, condition: $condition) {
      id
      name
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
