/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      owner
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      owner
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      owner
      message
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
