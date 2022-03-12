import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AcceptInviteInput = {
  fullName: Scalars['String'];
  password: Scalars['String'];
  requestHashId: Scalars['String'];
};

export type AcceptInviteMutationResponse = MutationResponse & {
  __typename?: 'AcceptInviteMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum AcceptOrReject {
  Accept = 'ACCEPT',
  Reject = 'REJECT'
}

export type AcceptRejectCourseRequestMutationResponse = MutationResponse & {
  __typename?: 'AcceptRejectCourseRequestMutationResponse';
  code: Scalars['String'];
  courseRequest?: Maybe<CourseRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type AcceptRejectDepartmentRequestMutationResponse = MutationResponse & {
  __typename?: 'AcceptRejectDepartmentRequestMutationResponse';
  code: Scalars['String'];
  departmentRequest?: Maybe<DepartmentRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type AcceptRejectRequestInput = {
  acceptOrReject: AcceptOrReject;
  id: Scalars['ID'];
};

export type AcceptRejectSchoolRequestMutationResponse = MutationResponse & {
  __typename?: 'AcceptRejectSchoolRequestMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  schoolRequest?: Maybe<SchoolRequest>;
  success: Scalars['Boolean'];
};

export type AcceptRequestFacultyRequestMutationResponse = MutationResponse & {
  __typename?: 'AcceptRequestFacultyRequestMutationResponse';
  code: Scalars['String'];
  facultyRequest?: Maybe<FacultyRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type AccountLoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type AccountLoginMutationResponse = MutationResponse & {
  __typename?: 'AccountLoginMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  token: Token;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AdminLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AdminLoginMutationResponse = MutationResponse & {
  __typename?: 'AdminLoginMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  token: Token;
};

export type AdminRequest = {
  __typename?: 'AdminRequest';
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  requestHashId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Course = {
  __typename?: 'Course';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CourseRequest = {
  __typename?: 'CourseRequest';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  department?: Maybe<Department>;
  faculty?: Maybe<Faculty>;
  id?: Maybe<Scalars['ID']>;
  school?: Maybe<School>;
  status?: Maybe<RequestStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateAccountMutationResponse = MutationResponse & {
  __typename?: 'CreateAccountMutationResponse';
  code: Scalars['String'];
  emailVerificationHash: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateCourseInput = {
  code: Scalars['String'];
  departmentId: Scalars['ID'];
  schoolId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateCourseMutationResponse = MutationResponse & {
  __typename?: 'CreateCourseMutationResponse';
  code: Scalars['String'];
  course?: Maybe<Course>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateCourseRequestInput = {
  code: Scalars['String'];
  departmentId: Scalars['ID'];
  schoolId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateCourseRequestMutationResponse = MutationResponse & {
  __typename?: 'CreateCourseRequestMutationResponse';
  code: Scalars['String'];
  courseRequest?: Maybe<CourseRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateDepartmentInput = {
  facultyId: Scalars['ID'];
  name: Scalars['String'];
  schoolId: Scalars['ID'];
};

export type CreateDepartmentMutationResponse = MutationResponse & {
  __typename?: 'CreateDepartmentMutationResponse';
  code: Scalars['String'];
  department?: Maybe<Department>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateDepartmentRequestInput = {
  facultyId: Scalars['ID'];
  name: Scalars['String'];
  schoolId: Scalars['ID'];
};

export type CreateDepartmentRequestMutationResponse = MutationResponse & {
  __typename?: 'CreateDepartmentRequestMutationResponse';
  code: Scalars['String'];
  departmentRequest?: Maybe<DepartmentRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateFacultyInput = {
  name: Scalars['String'];
  schoolId: Scalars['ID'];
};

export type CreateFacultyMutationResponse = MutationResponse & {
  __typename?: 'CreateFacultyMutationResponse';
  code: Scalars['String'];
  faculty?: Maybe<Faculty>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateFacultyRequestInput = {
  name: Scalars['String'];
  schoolId: Scalars['ID'];
};

export type CreateFacultyRequestMutationResponse = MutationResponse & {
  __typename?: 'CreateFacultyRequestMutationResponse';
  code: Scalars['String'];
  facultyRequest?: Maybe<FacultyRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateSchoolInput = {
  emailSuffix: Scalars['String'];
  fullAddress: Scalars['String'];
  name: Scalars['String'];
  websiteURL: Scalars['String'];
};

export type CreateSchoolMutationResponse = MutationResponse & {
  __typename?: 'CreateSchoolMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  school?: Maybe<School>;
  success: Scalars['Boolean'];
};

export type CreateSchoolRequestInput = {
  fullAddress: Scalars['String'];
  name: Scalars['String'];
  websiteURL: Scalars['String'];
};

export type CreateSchoolRequestMutationResponse = MutationResponse & {
  __typename?: 'CreateSchoolRequestMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  schoolRequest?: Maybe<SchoolRequest>;
  success: Scalars['Boolean'];
};

export type DeleteCourseMutationResponse = MutationResponse & {
  __typename?: 'DeleteCourseMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteCourseRequestMutationResponse = MutationResponse & {
  __typename?: 'DeleteCourseRequestMutationResponse';
  code: Scalars['String'];
  courseRequest?: Maybe<CourseRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteDepartmentMutationResponse = MutationResponse & {
  __typename?: 'DeleteDepartmentMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteDepartmentRequestMutationResponse = MutationResponse & {
  __typename?: 'DeleteDepartmentRequestMutationResponse';
  code: Scalars['String'];
  departmentRequest?: Maybe<DepartmentRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteFacultyMutationResponse = MutationResponse & {
  __typename?: 'DeleteFacultyMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteFacultyRequestMutationResponse = MutationResponse & {
  __typename?: 'DeleteFacultyRequestMutationResponse';
  code: Scalars['String'];
  facultyRequest?: Maybe<FacultyRequest>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteSchoolRequestMutationResponse = MutationResponse & {
  __typename?: 'DeleteSchoolRequestMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  schoolRequest?: Maybe<SchoolRequest>;
  success: Scalars['Boolean'];
};

export type Department = {
  __typename?: 'Department';
  courses?: Maybe<Array<Maybe<Course>>>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type DepartmentRequest = {
  __typename?: 'DepartmentRequest';
  createdAt?: Maybe<Scalars['Date']>;
  faculty?: Maybe<Faculty>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<School>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type EditCourseInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type EditCourseMutationResponse = MutationResponse & {
  __typename?: 'EditCourseMutationResponse';
  code: Scalars['String'];
  course?: Maybe<Course>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type EditDepartmentInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EditDepartmentMutationResponse = MutationResponse & {
  __typename?: 'EditDepartmentMutationResponse';
  code: Scalars['String'];
  department?: Maybe<Department>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type EditFacultyInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EditFacultyMutationResponse = MutationResponse & {
  __typename?: 'EditFacultyMutationResponse';
  code: Scalars['String'];
  faculty?: Maybe<Faculty>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type EditSchoolInput = {
  emailSuffix?: InputMaybe<Scalars['String']>;
  fullAddress?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  websiteURL?: InputMaybe<Scalars['String']>;
};

export type EditSchoolMutationResponse = MutationResponse & {
  __typename?: 'EditSchoolMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  school?: Maybe<School>;
  success: Scalars['Boolean'];
};

export type Faculty = {
  __typename?: 'Faculty';
  createdAt?: Maybe<Scalars['Date']>;
  departments?: Maybe<Array<Maybe<Department>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FacultyRequest = {
  __typename?: 'FacultyRequest';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<School>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ForgotPasswordMutationResponse = MutationResponse & {
  __typename?: 'ForgotPasswordMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  resetPasswordHash: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite: AcceptInviteMutationResponse;
  acceptRejectCourseRequest?: Maybe<AcceptRejectCourseRequestMutationResponse>;
  acceptRejectDepartmentRequest?: Maybe<AcceptRejectDepartmentRequestMutationResponse>;
  acceptRejectFacultyRequest?: Maybe<AcceptRequestFacultyRequestMutationResponse>;
  acceptRejectSchoolRequest?: Maybe<AcceptRejectSchoolRequestMutationResponse>;
  accountLogin: AccountLoginMutationResponse;
  adminLogin: AdminLoginMutationResponse;
  createAccount: CreateAccountMutationResponse;
  createCourse: CreateCourseMutationResponse;
  createCourseRequest?: Maybe<CreateCourseRequestMutationResponse>;
  createDepartment: CreateDepartmentMutationResponse;
  createDepartmentRequest?: Maybe<CreateDepartmentRequestMutationResponse>;
  createFaculty: CreateFacultyMutationResponse;
  createFacultyRequest?: Maybe<CreateFacultyRequestMutationResponse>;
  createSchool: CreateSchoolMutationResponse;
  createSchoolRequest?: Maybe<CreateSchoolRequestMutationResponse>;
  deleteCourse: DeleteCourseMutationResponse;
  deleteCourseRequest?: Maybe<DeleteCourseRequestMutationResponse>;
  deleteDepartment: DeleteDepartmentMutationResponse;
  deleteDepartmentRequest?: Maybe<DeleteDepartmentRequestMutationResponse>;
  deleteFaculty: DeleteFacultyMutationResponse;
  deleteFacultyRequest?: Maybe<DeleteFacultyRequestMutationResponse>;
  deleteSchoolRequest?: Maybe<DeleteSchoolRequestMutationResponse>;
  editCourse: EditCourseMutationResponse;
  editDepartment: EditDepartmentMutationResponse;
  editFaculty: EditFacultyMutationResponse;
  editSchool: EditSchoolMutationResponse;
  forgotPassword: ForgotPasswordMutationResponse;
  resetPassword: ResetPasswordMutationResponse;
  sendInvite: SendInviteMutationResponse;
  updateProfile?: Maybe<UserMutationResponse>;
  verifyAccountEmail: UserMutationResponse;
  verifySchoolEmail?: Maybe<UserMutationResponse>;
};


export type MutationAcceptInviteArgs = {
  data: AcceptInviteInput;
};


export type MutationAcceptRejectCourseRequestArgs = {
  data: AcceptRejectRequestInput;
};


export type MutationAcceptRejectDepartmentRequestArgs = {
  data: AcceptRejectRequestInput;
};


export type MutationAcceptRejectFacultyRequestArgs = {
  data: AcceptRejectRequestInput;
};


export type MutationAcceptRejectSchoolRequestArgs = {
  data: AcceptRejectRequestInput;
};


export type MutationAccountLoginArgs = {
  data: AccountLoginInput;
};


export type MutationAdminLoginArgs = {
  data: AdminLoginInput;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreateCourseRequestArgs = {
  data: CreateCourseRequestInput;
};


export type MutationCreateDepartmentArgs = {
  data: CreateDepartmentInput;
};


export type MutationCreateDepartmentRequestArgs = {
  data: CreateDepartmentRequestInput;
};


export type MutationCreateFacultyArgs = {
  data: CreateFacultyInput;
};


export type MutationCreateFacultyRequestArgs = {
  data: CreateFacultyRequestInput;
};


export type MutationCreateSchoolArgs = {
  data: CreateSchoolInput;
};


export type MutationCreateSchoolRequestArgs = {
  data: CreateSchoolRequestInput;
};


export type MutationDeleteCourseArgs = {
  courseId: Scalars['ID'];
};


export type MutationDeleteCourseRequestArgs = {
  courseRequestId: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  departmentID: Scalars['ID'];
};


export type MutationDeleteDepartmentRequestArgs = {
  departmentRequestId: Scalars['ID'];
};


export type MutationDeleteFacultyArgs = {
  facultyID: Scalars['ID'];
};


export type MutationDeleteFacultyRequestArgs = {
  facultyRequestId: Scalars['ID'];
};


export type MutationDeleteSchoolRequestArgs = {
  schoolRequestId: Scalars['ID'];
};


export type MutationEditCourseArgs = {
  data: EditCourseInput;
};


export type MutationEditDepartmentArgs = {
  data: EditDepartmentInput;
};


export type MutationEditFacultyArgs = {
  data: EditFacultyInput;
};


export type MutationEditSchoolArgs = {
  data: EditSchoolInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationSendInviteArgs = {
  email: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  data: UpdateProfileInput;
};


export type MutationVerifyAccountEmailArgs = {
  verificationId: Scalars['String'];
};


export type MutationVerifySchoolEmailArgs = {
  email: Scalars['String'];
};

export type MutationResponse = {
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getAdminCourseRequests?: Maybe<Array<CourseRequest>>;
  getAdminDepartmentRequests?: Maybe<Array<DepartmentRequest>>;
  getAdminFacultyRequests?: Maybe<Array<FacultyRequest>>;
  getAdminSchoolRequests?: Maybe<Array<SchoolRequest>>;
  getSchoolCourses: SchoolCoursesQueryResponse;
  getSchoolDepartments: SchoolDepartmentsQueryResponse;
  getSchoolFaculties: SchoolFacultiesQueryResponse;
  getSchools: Array<School>;
  getUserCourseRequests?: Maybe<Array<CourseRequest>>;
  getUserDepartmentRequests?: Maybe<Array<DepartmentRequest>>;
  getUserFacultyRequests?: Maybe<Array<FacultyRequest>>;
  getUserSchoolRequests?: Maybe<Array<SchoolRequest>>;
  myProfile?: Maybe<UserQueryResponse>;
};


export type QueryGetSchoolCoursesArgs = {
  schoolId: Scalars['ID'];
};


export type QueryGetSchoolDepartmentsArgs = {
  schoolId: Scalars['ID'];
};


export type QueryGetSchoolFacultiesArgs = {
  schoolId: Scalars['ID'];
};

export type QueryResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum RequestStatus {
  Accept = 'ACCEPT',
  Pending = 'PENDING',
  Reject = 'REJECT'
}

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  resetPasswordHash: Scalars['String'];
};

export type ResetPasswordMutationResponse = MutationResponse & {
  __typename?: 'ResetPasswordMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type School = {
  __typename?: 'School';
  createdAt?: Maybe<Scalars['Date']>;
  emailSuffix?: Maybe<Scalars['String']>;
  faculties?: Maybe<Array<Maybe<Faculty>>>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  websiteURL?: Maybe<Scalars['String']>;
};

export type SchoolCoursesQueryResponse = QueryResponse & {
  __typename?: 'SchoolCoursesQueryResponse';
  code: Scalars['String'];
  courses?: Maybe<Array<Maybe<Course>>>;
  success: Scalars['Boolean'];
};

export type SchoolDepartmentsQueryResponse = QueryResponse & {
  __typename?: 'SchoolDepartmentsQueryResponse';
  code: Scalars['String'];
  departments?: Maybe<Array<Maybe<Department>>>;
  success: Scalars['Boolean'];
};

export type SchoolFacultiesQueryResponse = QueryResponse & {
  __typename?: 'SchoolFacultiesQueryResponse';
  code: Scalars['String'];
  faculties?: Maybe<Array<Maybe<Faculty>>>;
  success: Scalars['Boolean'];
};

export type SchoolRequest = {
  __typename?: 'SchoolRequest';
  createdAt?: Maybe<Scalars['Date']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  websiteURL?: Maybe<Scalars['String']>;
};

export type SendInviteMutationResponse = MutationResponse & {
  __typename?: 'SendInviteMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  requestHashId: Scalars['ID'];
  success: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  courseRequestCreated?: Maybe<CourseRequest>;
  courseRequestDeleted?: Maybe<CourseRequest>;
  departmentRequestCreated?: Maybe<DepartmentRequest>;
  departmentRequestDeleted?: Maybe<DepartmentRequest>;
  facultyRequestCreated?: Maybe<FacultyRequest>;
  facultyRequestDeleted?: Maybe<FacultyRequest>;
  profileUpdated?: Maybe<User>;
  schoolRequestCreated?: Maybe<SchoolRequest>;
  schoolRequestDeleted?: Maybe<SchoolRequest>;
};


export type SubscriptionCourseRequestCreatedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionCourseRequestDeletedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionDepartmentRequestCreatedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionDepartmentRequestDeletedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionFacultyRequestCreatedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionFacultyRequestDeletedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionProfileUpdatedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionSchoolRequestCreatedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionSchoolRequestDeletedArgs = {
  userId: Scalars['ID'];
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String'];
  token_type: Scalars['String'];
};

export type UpdateProfileInput = {
  department?: InputMaybe<Scalars['String']>;
  faculty?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  university?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMutationResponse = MutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UserQueryResponse = MutationResponse & {
  __typename?: 'UserQueryResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type AdminLoginMutationVariables = Exact<{
  data: AdminLoginInput;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'AdminLoginMutationResponse', message: string, success: boolean, code: string, token: { __typename?: 'Token', access_token: string, token_type: string } } };


export const AdminLoginDocument = gql`
    mutation AdminLogin($data: AdminLoginInput!) {
  adminLogin(data: $data) {
    message
    success
    token {
      access_token
      token_type
    }
    success
    code
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;