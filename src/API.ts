/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  owner: string,
  message?: string | null,
};

export type ModelMessageConditionInput = {
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  owner?: string,
  message?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateMessageInput = {
  id: string,
  owner?: string | null,
  message?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  userName: string,
  userBio?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  city?: string | null,
  skillLevel?: string | null,
  role?: string | null,
  openTo?: string | null,
  skill1?: string | null,
  skill2?: string | null,
  skill3?: string | null,
  about?: string | null,
  highlightLink1?: string | null,
  highlightLink2?: string | null,
  highlightTitle1?: string | null,
  highlightTitle2?: string | null,
  highlightLink3?: string | null,
  highlightTitle3?: string | null,
  highlightLink4?: string | null,
  highlightTitle4?: string | null,
  ghLink?: string | null,
  liLink?: string | null,
  twLink?: string | null,
};

export type ModelProfileConditionInput = {
  userName?: ModelStringInput | null,
  userBio?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  role?: ModelStringInput | null,
  openTo?: ModelStringInput | null,
  skill1?: ModelStringInput | null,
  skill2?: ModelStringInput | null,
  skill3?: ModelStringInput | null,
  about?: ModelStringInput | null,
  highlightLink1?: ModelStringInput | null,
  highlightLink2?: ModelStringInput | null,
  highlightTitle1?: ModelStringInput | null,
  highlightTitle2?: ModelStringInput | null,
  highlightLink3?: ModelStringInput | null,
  highlightTitle3?: ModelStringInput | null,
  highlightLink4?: ModelStringInput | null,
  highlightTitle4?: ModelStringInput | null,
  ghLink?: ModelStringInput | null,
  liLink?: ModelStringInput | null,
  twLink?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type Profile = {
  __typename: "Profile",
  id?: string,
  userName?: string,
  userBio?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  city?: string | null,
  skillLevel?: string | null,
  role?: string | null,
  openTo?: string | null,
  skill1?: string | null,
  skill2?: string | null,
  skill3?: string | null,
  about?: string | null,
  highlightLink1?: string | null,
  highlightLink2?: string | null,
  highlightTitle1?: string | null,
  highlightTitle2?: string | null,
  highlightLink3?: string | null,
  highlightTitle3?: string | null,
  highlightLink4?: string | null,
  highlightTitle4?: string | null,
  ghLink?: string | null,
  liLink?: string | null,
  twLink?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateProfileInput = {
  id: string,
  userName?: string | null,
  userBio?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  city?: string | null,
  skillLevel?: string | null,
  role?: string | null,
  openTo?: string | null,
  skill1?: string | null,
  skill2?: string | null,
  skill3?: string | null,
  about?: string | null,
  highlightLink1?: string | null,
  highlightLink2?: string | null,
  highlightTitle1?: string | null,
  highlightTitle2?: string | null,
  highlightLink3?: string | null,
  highlightTitle3?: string | null,
  highlightLink4?: string | null,
  highlightTitle4?: string | null,
  ghLink?: string | null,
  liLink?: string | null,
  twLink?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  userBio?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  role?: ModelStringInput | null,
  openTo?: ModelStringInput | null,
  skill1?: ModelStringInput | null,
  skill2?: ModelStringInput | null,
  skill3?: ModelStringInput | null,
  about?: ModelStringInput | null,
  highlightLink1?: ModelStringInput | null,
  highlightLink2?: ModelStringInput | null,
  highlightTitle1?: ModelStringInput | null,
  highlightTitle2?: ModelStringInput | null,
  highlightLink3?: ModelStringInput | null,
  highlightTitle3?: ModelStringInput | null,
  highlightLink4?: ModelStringInput | null,
  highlightTitle4?: ModelStringInput | null,
  ghLink?: ModelStringInput | null,
  liLink?: ModelStringInput | null,
  twLink?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input?: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input?: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input?: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id?: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      owner: string,
      message?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id?: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      userName: string,
      userBio?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      city?: string | null,
      skillLevel?: string | null,
      role?: string | null,
      openTo?: string | null,
      skill1?: string | null,
      skill2?: string | null,
      skill3?: string | null,
      about?: string | null,
      highlightLink1?: string | null,
      highlightLink2?: string | null,
      highlightTitle1?: string | null,
      highlightTitle2?: string | null,
      highlightLink3?: string | null,
      highlightTitle3?: string | null,
      highlightLink4?: string | null,
      highlightTitle4?: string | null,
      ghLink?: string | null,
      liLink?: string | null,
      twLink?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    userName: string,
    userBio?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    city?: string | null,
    skillLevel?: string | null,
    role?: string | null,
    openTo?: string | null,
    skill1?: string | null,
    skill2?: string | null,
    skill3?: string | null,
    about?: string | null,
    highlightLink1?: string | null,
    highlightLink2?: string | null,
    highlightTitle1?: string | null,
    highlightTitle2?: string | null,
    highlightLink3?: string | null,
    highlightTitle3?: string | null,
    highlightLink4?: string | null,
    highlightTitle4?: string | null,
    ghLink?: string | null,
    liLink?: string | null,
    twLink?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
