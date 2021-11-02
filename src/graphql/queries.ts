/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      owner
      message
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      userName
      userBio
      firstName
      lastName
      city
      skillLevel
      role
      openTo
      skill1
      skill2
      skill3
      about
      highlightLink1
      highlightLink2
      highlightTitle1
      highlightTitle2
      highlightLink3
      highlightTitle3
      highlightLink4
      highlightTitle4
      ghLink
      liLink
      twLink
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        userBio
        firstName
        lastName
        city
        skillLevel
        role
        openTo
        skill1
        skill2
        skill3
        about
        highlightLink1
        highlightLink2
        highlightTitle1
        highlightTitle2
        highlightLink3
        highlightTitle3
        highlightLink4
        highlightTitle4
        ghLink
        liLink
        twLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
