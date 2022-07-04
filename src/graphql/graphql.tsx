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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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

export type AccessToken = {
  __typename?: 'AccessToken';
  access_token: Scalars['String'];
  access_token_expires_at: Scalars['String'];
  token_type: Scalars['String'];
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
  lastSeen?: Maybe<Scalars['Date']>;
  profileImage?: Maybe<Scalars['String']>;
  role?: Maybe<AdminRole>;
  status?: Maybe<AdminStatus>;
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

export type AdminProfileUpateInput = {
  fullName?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  status?: InputMaybe<AdminStatus>;
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

export enum AdminRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export enum AdminStatus {
  Available = 'Available',
  NotAvailable = 'NotAvailable'
}

export type Answer = {
  __typename?: 'Answer';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  helpful?: Maybe<Array<Maybe<Helpful>>>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type AnswerQuestionInput = {
  content: Scalars['String'];
  questionId: Scalars['ID'];
};

export type AnswerQuestionMutationResponse = MutationResponse & {
  __typename?: 'AnswerQuestionMutationResponse';
  answer: Answer;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type AnswerRequest = {
  __typename?: 'AnswerRequest';
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type AskQuestionInput = {
  content: Scalars['String'];
  schoolId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  whoCanAnswer: WhoCanAnswer;
};

export type AskQuestionMutationResponse = MutationResponse & {
  __typename?: 'AskQuestionMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  question: Question;
  success: Scalars['Boolean'];
};

export type Comment = {
  __typename?: 'Comment';
  answer?: Maybe<Answer>;
  answerId?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  helpful?: Maybe<Array<Maybe<Helpful>>>;
  id?: Maybe<Scalars['ID']>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  review?: Maybe<Review>;
  reviewId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentMutationResponse = MutationResponse & {
  __typename?: 'CommentMutationResponse';
  code: Scalars['String'];
  comment: Comment;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CommentOnAnswerInput = {
  answerId: Scalars['ID'];
  content: Scalars['String'];
};

export type CommentOnReviewInput = {
  content: Scalars['String'];
  reviewId: Scalars['ID'];
};

export type ConfirmEmailUpdateMutationResponse = MutationResponse & {
  __typename?: 'ConfirmEmailUpdateMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
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
  id?: Maybe<Scalars['ID']>;
  school?: Maybe<School>;
  status?: Maybe<RequestStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  subscribeToNewsLetter?: InputMaybe<Scalars['Boolean']>;
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

export type CreateReviewInput = {
  content: Scalars['String'];
  courseId: Scalars['ID'];
  rating: Scalars['Int'];
};

export type CreateReviewMutationResponse = MutationResponse & {
  __typename?: 'CreateReviewMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  review: Review;
  success: Scalars['Boolean'];
};

export type CreateSchoolEmailVerificationRequestInput = {
  email: Scalars['String'];
  schoolId: Scalars['ID'];
};

export type CreateSchoolEmailVerificationRequestMutationResponse = MutationResponse & {
  __typename?: 'CreateSchoolEmailVerificationRequestMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  schoolEmailVerificationRequest?: Maybe<SchoolEmailVerificationRequest>;
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
  emailSuffix: Scalars['String'];
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

export type CreateSchoolVerificationRequestInput = {
  proofImage: Scalars['Upload'];
  proofType: SchoolProofType;
  schoolId: Scalars['ID'];
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
  user?: Maybe<User>;
};

export type EditAnswerInput = {
  answerId: Scalars['ID'];
  content: Scalars['String'];
};

export type EditAnswerMutationResponse = MutationResponse & {
  __typename?: 'EditAnswerMutationResponse';
  answer: Answer;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
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
  published?: InputMaybe<Scalars['Boolean']>;
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
  user?: Maybe<User>;
};

export type FollowUserInput = {
  follow: Scalars['Boolean'];
  userId: Scalars['ID'];
};

export type FollowUserMutationResponse = MutationResponse & {
  __typename?: 'FollowUserMutationResponse';
  code: Scalars['String'];
  follower: Follower;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Follower = {
  __typename?: 'Follower';
  createdAt?: Maybe<Scalars['Date']>;
  follower?: Maybe<UserPublic>;
  followerId: Scalars['ID'];
  following?: Maybe<UserPublic>;
  userId: Scalars['ID'];
};

export type ForgotPasswordMutationResponse = MutationResponse & {
  __typename?: 'ForgotPasswordMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  resetPasswordHash: Scalars['String'];
  success: Scalars['Boolean'];
};

export type GetUserInput = {
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Helpful = {
  __typename?: 'Helpful';
  answer?: Maybe<Answer>;
  answerId?: Maybe<Scalars['ID']>;
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  reply?: Maybe<Reply>;
  replyId?: Maybe<Scalars['ID']>;
  review?: Maybe<Review>;
  reviewId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type HelpfulUnHelpfulAnswerInput = {
  answerId: Scalars['ID'];
  isHelpful: Scalars['Boolean'];
};

export type HelpfulUnHelpfulAnswerMutationResponse = MutationResponse & {
  __typename?: 'HelpfulUnHelpfulAnswerMutationResponse';
  answer: Answer;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type HelpfulUnHelpfulCommentInput = {
  commentId: Scalars['ID'];
  isHelpful: Scalars['Boolean'];
};

export type HelpfulUnHelpfulCommentMutationResponse = MutationResponse & {
  __typename?: 'HelpfulUnHelpfulCommentMutationResponse';
  code: Scalars['String'];
  comment: Comment;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type HelpfulUnHelpfulMutationResponse = MutationResponse & {
  __typename?: 'HelpfulUnHelpfulMutationResponse';
  code: Scalars['String'];
  helpful?: Maybe<Helpful>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type HelpfulUnHelpfulReplyInput = {
  isHelpful: Scalars['Boolean'];
  replyId: Scalars['ID'];
};

export type HelpfulUnHelpfulReplyMutationResponse = MutationResponse & {
  __typename?: 'HelpfulUnHelpfulReplyMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  reply: Reply;
  success: Scalars['Boolean'];
};

export type HelpfulUnHelpfulReviewInput = {
  isHelpful: Scalars['Boolean'];
  reviewId: Scalars['ID'];
};

export type MakeSuperAdminMutationResponse = MutationResponse & {
  __typename?: 'MakeSuperAdminMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite: AcceptInviteMutationResponse;
  acceptRejectCourseRequest: CourseRequest;
  acceptRejectDepartmentRequest: DepartmentRequest;
  acceptRejectFacultyRequest: FacultyRequest;
  acceptRejectSchoolRequest: SchoolRequest;
  acceptRejectSchoolVerificationRequest: SchoolVerificationRequest;
  accountLogin: AccountLoginMutationResponse;
  adminLogin: AdminLoginMutationResponse;
  answerQuestion: AnswerQuestionMutationResponse;
  askQuestion: AskQuestionMutationResponse;
  commentOnAnswer: CommentMutationResponse;
  commentOnReview: CommentMutationResponse;
  confirmEmailUpdate: ConfirmEmailUpdateMutationResponse;
  createAccount: CreateAccountMutationResponse;
  createCourse: CreateCourseMutationResponse;
  createCourseRequest?: Maybe<CourseRequest>;
  createDepartment: CreateDepartmentMutationResponse;
  createDepartmentRequest?: Maybe<DepartmentRequest>;
  createFaculty: CreateFacultyMutationResponse;
  createFacultyRequest?: Maybe<FacultyRequest>;
  createReview: CreateReviewMutationResponse;
  createSchool: CreateSchoolMutationResponse;
  createSchoolEmailVerificationRequest: CreateSchoolEmailVerificationRequestMutationResponse;
  createSchoolRequest?: Maybe<CreateSchoolRequestMutationResponse>;
  createSchoolVerificationRequest: SchoolVerificationRequestMutationResponse;
  deleteCourse: DeleteCourseMutationResponse;
  deleteCourseRequest?: Maybe<DeleteCourseRequestMutationResponse>;
  deleteDepartment: DeleteDepartmentMutationResponse;
  deleteDepartmentRequest?: Maybe<DeleteDepartmentRequestMutationResponse>;
  deleteFaculty: DeleteFacultyMutationResponse;
  deleteFacultyRequest?: Maybe<DeleteFacultyRequestMutationResponse>;
  deleteSchoolRequest?: Maybe<DeleteSchoolRequestMutationResponse>;
  deleteSchoolVerificationRequest: SchoolVerificationRequest;
  editAnswer: EditAnswerMutationResponse;
  editCourse: Course;
  editDepartment: Department;
  editFaculty: Faculty;
  editSchool: School;
  followUser: FollowUserMutationResponse;
  forgotPassword: ForgotPasswordMutationResponse;
  helpfulUnHelpfulAnswer: HelpfulUnHelpfulAnswerMutationResponse;
  helpfulUnHelpfulComment: HelpfulUnHelpfulCommentMutationResponse;
  helpfulUnHelpfulReply: HelpfulUnHelpfulReplyMutationResponse;
  makeSuperAdmin: MakeSuperAdminMutationResponse;
  removeAdmin: RemoveAdminMutationResponse;
  replyComment: ReplyCommentMutationResponse;
  reportQuestion: ReportQuestionMutationResponse;
  requestAnswer: RequestAnswerMutationResponse;
  resetPassword: ResetPasswordMutationResponse;
  sendInvite: SendInviteMutationResponse;
  subscribeToSchool: SubscribeToSchoolMutationResponse;
  updateAdminProfile?: Maybe<Admin>;
  updateEmail: UpdateEmailMutationResponse;
  updatePassword: UpdatePasswordMutationResponse;
  updatePreference: UpdatePreferenceMutationResponse;
  updateProfile: UserMutationResponse;
  verifyAccountEmail: UserMutationMessageResponse;
  verifySchoolEmail: UserMutationMessageResponse;
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


export type MutationAcceptRejectSchoolVerificationRequestArgs = {
  data: AcceptRejectRequestInput;
};


export type MutationAccountLoginArgs = {
  data: AccountLoginInput;
};


export type MutationAdminLoginArgs = {
  data: AdminLoginInput;
};


export type MutationAnswerQuestionArgs = {
  data: AnswerQuestionInput;
};


export type MutationAskQuestionArgs = {
  data: AskQuestionInput;
};


export type MutationCommentOnAnswerArgs = {
  data: CommentOnAnswerInput;
};


export type MutationCommentOnReviewArgs = {
  data: CommentOnReviewInput;
};


export type MutationConfirmEmailUpdateArgs = {
  resetEmailHash: Scalars['String'];
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


export type MutationCreateReviewArgs = {
  data: CreateReviewInput;
};


export type MutationCreateSchoolArgs = {
  data: CreateSchoolInput;
};


export type MutationCreateSchoolEmailVerificationRequestArgs = {
  data: CreateSchoolEmailVerificationRequestInput;
};


export type MutationCreateSchoolRequestArgs = {
  data: CreateSchoolRequestInput;
};


export type MutationCreateSchoolVerificationRequestArgs = {
  data: CreateSchoolVerificationRequestInput;
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


export type MutationDeleteSchoolVerificationRequestArgs = {
  schoolVerificationRequestId: Scalars['ID'];
};


export type MutationEditAnswerArgs = {
  data: EditAnswerInput;
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


export type MutationFollowUserArgs = {
  data: FollowUserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationHelpfulUnHelpfulAnswerArgs = {
  data: HelpfulUnHelpfulAnswerInput;
};


export type MutationHelpfulUnHelpfulCommentArgs = {
  data: HelpfulUnHelpfulCommentInput;
};


export type MutationHelpfulUnHelpfulReplyArgs = {
  data: HelpfulUnHelpfulReplyInput;
};


export type MutationMakeSuperAdminArgs = {
  adminId: Scalars['ID'];
};


export type MutationRemoveAdminArgs = {
  adminId: Scalars['ID'];
};


export type MutationReplyCommentArgs = {
  data: ReplyCommentInput;
};


export type MutationReportQuestionArgs = {
  data: ReportQuestionInput;
};


export type MutationRequestAnswerArgs = {
  data: RequestAnswerInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationSendInviteArgs = {
  data: SendInviteInput;
};


export type MutationSubscribeToSchoolArgs = {
  data: SubscribeToSchoolInput;
};


export type MutationUpdateAdminProfileArgs = {
  data: AdminProfileUpateInput;
};


export type MutationUpdateEmailArgs = {
  data: UpdateEmailInput;
};


export type MutationUpdatePasswordArgs = {
  data: UpdatePasswordInput;
};


export type MutationUpdatePreferenceArgs = {
  data: UpdatePreferenceInput;
};


export type MutationUpdateProfileArgs = {
  data: UpdateProfileInput;
};


export type MutationVerifyAccountEmailArgs = {
  verificationHash: Scalars['String'];
};


export type MutationVerifySchoolEmailArgs = {
  verificationHash: Scalars['String'];
};

export type MutationResponse = {
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Preference = {
  __typename?: 'Preference';
  allowAdvertisersToPromoteAnswers: Scalars['Boolean'];
  allowAdvertisersToPromoteReviews: Scalars['Boolean'];
  allowCommentOnAnswers: Scalars['Boolean'];
  allowCommentOnReviews: Scalars['Boolean'];
  allowNameSearch: Scalars['Boolean'];
  nofifyMeOfNewAnswersToASchoolISubscribedTo: Scalars['Boolean'];
  nofifyMeOfNewReviewsToASchoolISubscribedTo: Scalars['Boolean'];
  nofifyMeOfQuestionsToMySchool: Scalars['Boolean'];
  nofityMeOfNewMentions: Scalars['Boolean'];
  notifyFollowersOfNewAnswers: Scalars['Boolean'];
  notifyFollowersOfNewReviews: Scalars['Boolean'];
  notifyMeOfAnswersToMyQuestions: Scalars['Boolean'];
  notifyMeOfCommentsToMyContents: Scalars['Boolean'];
  notifyMeOfNewFollowers: Scalars['Boolean'];
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getAdmin: Admin;
  getAdminCourseRequests?: Maybe<Array<CourseRequest>>;
  getAdminDepartmentRequests?: Maybe<Array<DepartmentRequest>>;
  getAdminFacultyRequests?: Maybe<Array<FacultyRequest>>;
  getAdminSchoolRequests?: Maybe<Array<SchoolRequest>>;
  getAdminSchoolVerificationRequests?: Maybe<Array<SchoolVerificationRequest>>;
  getAdmins: Array<Admin>;
  getAnswer: Answer;
  getDepartmentCourses: Array<Course>;
  getFacultyDepartments: Array<Department>;
  getPopularTags: Array<Tag>;
  getQuestion: Question;
  getSchoolCourses: Array<Course>;
  getSchoolDepartments: Array<Department>;
  getSchoolFaculties: Array<Faculty>;
  getSchools: Array<School>;
  getUser: UserPublic;
  getUserCourseRequests?: Maybe<Array<CourseRequest>>;
  getUserDepartmentRequests?: Maybe<Array<DepartmentRequest>>;
  getUserFacultyRequests?: Maybe<Array<FacultyRequest>>;
  getUserSchoolRequests?: Maybe<Array<SchoolRequest>>;
  getUserSchoolVerificationRequests?: Maybe<Array<SchoolVerificationRequest>>;
  myProfile: User;
  questionFeed: QuestionFeed;
};


export type QueryGetAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryGetDepartmentCoursesArgs = {
  departmentId: Scalars['ID'];
};


export type QueryGetFacultyDepartmentsArgs = {
  facultyId: Scalars['ID'];
};


export type QueryGetPopularTagsArgs = {
  total: Scalars['Int'];
};


export type QueryGetQuestionArgs = {
  id: Scalars['ID'];
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


export type QueryGetUserArgs = {
  data: GetUserInput;
};


export type QueryQuestionFeedArgs = {
  filters: QuestionFilters;
};

export type Question = {
  __typename?: 'Question';
  answerRequests?: Maybe<Array<AnswerRequest>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  questionTags?: Maybe<Array<Maybe<QuestionTag>>>;
  reports?: Maybe<Array<Report>>;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  whoCanAnswer?: Maybe<WhoCanAnswer>;
};

export type QuestionFeed = {
  __typename?: 'QuestionFeed';
  cursor?: Maybe<Scalars['String']>;
  questions: Array<Question>;
};

export type QuestionFilters = {
  after?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<QuestionStatus>;
  whoCanAnswer?: InputMaybe<WhoCanAnswer>;
};

export enum QuestionStatus {
  All = 'ALL',
  Answered = 'ANSWERED',
  Unanswered = 'UNANSWERED'
}

export type QuestionTag = {
  __typename?: 'QuestionTag';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['ID']>;
  tag?: Maybe<Tag>;
  tagId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type RemoveAdminMutationResponse = MutationResponse & {
  __typename?: 'RemoveAdminMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Reply = {
  __typename?: 'Reply';
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  helpful?: Maybe<Array<Maybe<Helpful>>>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type ReplyCommentInput = {
  commentId: Scalars['ID'];
  content: Scalars['String'];
};

export type ReplyCommentMutationResponse = MutationResponse & {
  __typename?: 'ReplyCommentMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  reply?: Maybe<Reply>;
  success: Scalars['Boolean'];
};

export type Report = {
  __typename?: 'Report';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['ID']>;
  reason?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type ReportQuestionInput = {
  questionId: Scalars['ID'];
  reason: Scalars['String'];
};

export type ReportQuestionMutationResponse = MutationResponse & {
  __typename?: 'ReportQuestionMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  report?: Maybe<Report>;
  success: Scalars['Boolean'];
};

export type RequestAnswerInput = {
  questionId: Scalars['ID'];
  request: Scalars['Boolean'];
};

export type RequestAnswerMutationResponse = MutationResponse & {
  __typename?: 'RequestAnswerMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  question: Question;
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

export type Review = {
  __typename?: 'Review';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['String']>;
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  helpful?: Maybe<Array<Maybe<Helpful>>>;
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Int']>;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
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
  published?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  websiteURL?: Maybe<Scalars['String']>;
};

export type SchoolEmailVerificationRequest = {
  __typename?: 'SchoolEmailVerificationRequest';
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['ID']>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  verificationHash?: Maybe<Scalars['String']>;
};

export enum SchoolProofType {
  DatedClassScheduleForTheSemester = 'DATED_CLASS_SCHEDULE_FOR_THE_SEMESTER',
  DatedEnrollmentLetterOnSchoolLetterhead = 'DATED_ENROLLMENT_LETTER_ON_SCHOOL_LETTERHEAD',
  DatedOfficialUnofficialTranscript = 'DATED_OFFICIAL_UNOFFICIAL_TRANSCRIPT',
  DatedReceiptFromBursar = 'DATED_RECEIPT_FROM_BURSAR',
  DatedScholarshipFinancialAidLetter = 'DATED_SCHOLARSHIP_FINANCIAL_AID_LETTER',
  DatedSchoolId = 'DATED_SCHOOL_ID',
  DatedSyllabusForAClass = 'DATED_SYLLABUS_FOR_A_CLASS',
  Other = 'OTHER'
}

export type SchoolRequest = {
  __typename?: 'SchoolRequest';
  createdAt?: Maybe<Scalars['Date']>;
  emailSuffix?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  websiteURL?: Maybe<Scalars['String']>;
};

export type SchoolVerificationRequest = {
  __typename?: 'SchoolVerificationRequest';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  proofImage?: Maybe<Scalars['String']>;
  proofType?: Maybe<SchoolProofType>;
  school?: Maybe<School>;
  status?: Maybe<RequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type SchoolVerificationRequestMutationResponse = MutationResponse & {
  __typename?: 'SchoolVerificationRequestMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  schoolVerificationRequest?: Maybe<SchoolVerificationRequest>;
  success: Scalars['Boolean'];
};

export type SendInviteInput = {
  email: Scalars['String'];
  role: AdminRole;
};

export type SendInviteMutationResponse = MutationResponse & {
  __typename?: 'SendInviteMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  requestHashId: Scalars['ID'];
  success: Scalars['Boolean'];
};

export type SubscribeToSchoolInput = {
  schoolId: Scalars['ID'];
  subscribe: Scalars['Boolean'];
};

export type SubscribeToSchoolMutationResponse = MutationResponse & {
  __typename?: 'SubscribeToSchoolMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  subscriber: Subscriber;
  success: Scalars['Boolean'];
};

export type Subscriber = {
  __typename?: 'Subscriber';
  schoolId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  answerHelpful: Answer;
  answerRequested: Question;
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


export type SubscriptionAnswerHelpfulArgs = {
  answerId: Scalars['ID'];
};


export type SubscriptionAnswerRequestedArgs = {
  questionId: Scalars['ID'];
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

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  questionTags?: Maybe<Array<Maybe<QuestionTag>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String'];
  access_token_expires_at: Scalars['String'];
  refresh_token: Scalars['String'];
  refresh_token_expires_at: Scalars['String'];
  token_type: Scalars['String'];
};

export type UpdateEmailInput = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateEmailMutationResponse = MutationResponse & {
  __typename?: 'UpdateEmailMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  resetEmailHash: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdatePasswordMutationResponse = MutationResponse & {
  __typename?: 'UpdatePasswordMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UpdatePreferenceInput = {
  allowAdvertisersToPromoteAnswers?: InputMaybe<Scalars['Boolean']>;
  allowAdvertisersToPromoteReviews?: InputMaybe<Scalars['Boolean']>;
  allowCommentOnAnswers?: InputMaybe<Scalars['Boolean']>;
  allowCommentOnReviews?: InputMaybe<Scalars['Boolean']>;
  allowNameSearch?: InputMaybe<Scalars['Boolean']>;
  nofifyMeOfNewAnswersToASchoolISubscribedTo?: InputMaybe<Scalars['Boolean']>;
  nofifyMeOfNewReviewsToASchoolISubscribedTo?: InputMaybe<Scalars['Boolean']>;
  nofifyMeOfQuestionsToMySchool?: InputMaybe<Scalars['Boolean']>;
  nofityMeOfNewMentions?: InputMaybe<Scalars['Boolean']>;
  notifyFollowersOfNewAnswers?: InputMaybe<Scalars['Boolean']>;
  notifyFollowersOfNewReviews?: InputMaybe<Scalars['Boolean']>;
  notifyMeOfAnswersToMyQuestions?: InputMaybe<Scalars['Boolean']>;
  notifyMeOfCommentsToMyContents?: InputMaybe<Scalars['Boolean']>;
  notifyMeOfNewFollowers?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePreferenceMutationResponse = MutationResponse & {
  __typename?: 'UpdatePreferenceMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  preference: Preference;
  success: Scalars['Boolean'];
};

export type UpdateProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  answers?: Maybe<Array<Answer>>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  profileImage?: Maybe<Scalars['String']>;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['ID']>;
  schoolVerified?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  university?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userPreference?: Maybe<Preference>;
  username?: Maybe<Scalars['String']>;
};

export type UserMutationMessageResponse = MutationResponse & {
  __typename?: 'UserMutationMessageResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UserMutationResponse = MutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UserPublic = {
  __typename?: 'UserPublic';
  answers?: Maybe<Array<Answer>>;
  bio?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['Date']>;
  followers?: Maybe<Array<Follower>>;
  followings?: Maybe<Array<Follower>>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  profileImage?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Question>>;
  reviews?: Maybe<Array<Review>>;
  school?: Maybe<School>;
  schoolVerified?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export enum WhoCanAnswer {
  Everyone = 'EVERYONE',
  Students = 'STUDENTS',
  StudentsOfAParticularSchool = 'STUDENTS_OF_A_PARTICULAR_SCHOOL'
}

export type AdminLoginMutationVariables = Exact<{
  data: AdminLoginInput;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'AdminLoginMutationResponse', message: string, success: boolean, code: string, token: { __typename?: 'Token', access_token: string, token_type: string } } };

export type CreateSchoolMutationVariables = Exact<{
  data: CreateSchoolInput;
}>;


export type CreateSchoolMutation = { __typename?: 'Mutation', createSchool: { __typename?: 'CreateSchoolMutationResponse', message: string, success: boolean, code: string, school?: { __typename?: 'School', id?: string | null, name?: string | null, emailSuffix?: string | null, websiteURL?: string | null, published?: boolean | null, lat?: number | null, lng?: number | null, updatedAt?: any | null, createdAt?: any | null } | null } };

export type CreateFacultyMutationVariables = Exact<{
  data: CreateFacultyInput;
}>;


export type CreateFacultyMutation = { __typename?: 'Mutation', createFaculty: { __typename?: 'CreateFacultyMutationResponse', success: boolean, code: string, message: string, faculty?: { __typename?: 'Faculty', createdAt?: any | null, id?: string | null, updatedAt?: any | null, name?: string | null } | null } };

export type CreateDepartmentMutationVariables = Exact<{
  data: CreateDepartmentInput;
}>;


export type CreateDepartmentMutation = { __typename?: 'Mutation', createDepartment: { __typename?: 'CreateDepartmentMutationResponse', success: boolean, message: string, code: string, department?: { __typename?: 'Department', id?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } };

export type CreateCourseMutationVariables = Exact<{
  data: CreateCourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'CreateCourseMutationResponse', course?: { __typename?: 'Course', code?: string | null, id?: string | null, title?: string | null, updatedAt?: any | null, createdAt?: any | null } | null } };

export type SendInviteMutationVariables = Exact<{
  data: SendInviteInput;
}>;


export type SendInviteMutation = { __typename?: 'Mutation', sendInvite: { __typename?: 'SendInviteMutationResponse', code: string, success: boolean, message: string, requestHashId: string } };

export type AcceptInviteMutationVariables = Exact<{
  data: AcceptInviteInput;
}>;


export type AcceptInviteMutation = { __typename?: 'Mutation', acceptInvite: { __typename?: 'AcceptInviteMutationResponse', code: string, success: boolean, message: string } };

export type MakeSuperAdminMutationVariables = Exact<{
  adminId: Scalars['ID'];
}>;


export type MakeSuperAdminMutation = { __typename?: 'Mutation', makeSuperAdmin: { __typename?: 'MakeSuperAdminMutationResponse', code: string, success: boolean, message: string } };

export type RemoveAdminMutationVariables = Exact<{
  adminId: Scalars['ID'];
}>;


export type RemoveAdminMutation = { __typename?: 'Mutation', removeAdmin: { __typename?: 'RemoveAdminMutationResponse', code: string, success: boolean, message: string } };

export type UpdateAdminProfileMutationVariables = Exact<{
  data: AdminProfileUpateInput;
}>;


export type UpdateAdminProfileMutation = { __typename?: 'Mutation', updateAdminProfile?: { __typename?: 'Admin', id?: string | null, email?: string | null, fullName?: string | null, role?: AdminRole | null, updatedAt?: any | null, createdAt?: any | null, status?: AdminStatus | null, profileImage?: string | null, lastSeen?: any | null } | null };

export type EditSchoolMutationVariables = Exact<{
  data: EditSchoolInput;
}>;


export type EditSchoolMutation = { __typename?: 'Mutation', editSchool: { __typename?: 'School', id?: string | null, name?: string | null, fullAddress?: string | null, lat?: number | null, lng?: number | null, published?: boolean | null, websiteURL?: string | null, emailSuffix?: string | null, updatedAt?: any | null, createdAt?: any | null } };

export type EditFacultyMutationVariables = Exact<{
  data: EditFacultyInput;
}>;


export type EditFacultyMutation = { __typename?: 'Mutation', editFaculty: { __typename?: 'Faculty', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null } };

export type EditDepartmentMutationVariables = Exact<{
  data: EditDepartmentInput;
}>;


export type EditDepartmentMutation = { __typename?: 'Mutation', editDepartment: { __typename?: 'Department', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null } };

export type EditCourseMutationVariables = Exact<{
  data: EditCourseInput;
}>;


export type EditCourseMutation = { __typename?: 'Mutation', editCourse: { __typename?: 'Course', id?: string | null, title?: string | null, code?: string | null, updatedAt?: any | null, createdAt?: any | null } };

export type AcceptRejectSchoolRequestMutationVariables = Exact<{
  data: AcceptRejectRequestInput;
}>;


export type AcceptRejectSchoolRequestMutation = { __typename?: 'Mutation', acceptRejectSchoolRequest: { __typename?: 'SchoolRequest', id?: string | null, name?: string | null, fullAddress?: string | null, updatedAt?: any | null, createdAt?: any | null, websiteURL?: string | null, emailSuffix?: string | null, status?: RequestStatus | null } };

export type AcceptRejectFacultyRequestMutationVariables = Exact<{
  data: AcceptRejectRequestInput;
}>;


export type AcceptRejectFacultyRequestMutation = { __typename?: 'Mutation', acceptRejectFacultyRequest: { __typename?: 'FacultyRequest', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null } };

export type AcceptRejectDepartmentRequestMutationVariables = Exact<{
  data: AcceptRejectRequestInput;
}>;


export type AcceptRejectDepartmentRequestMutation = { __typename?: 'Mutation', acceptRejectDepartmentRequest: { __typename?: 'DepartmentRequest', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null } };

export type AcceptRejectCourseRequestMutationVariables = Exact<{
  data: AcceptRejectRequestInput;
}>;


export type AcceptRejectCourseRequestMutation = { __typename?: 'Mutation', acceptRejectCourseRequest: { __typename?: 'CourseRequest', id?: string | null, title?: string | null, code?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null } };

export type AcceptRejectSchoolVerificationRequestMutationVariables = Exact<{
  data: AcceptRejectRequestInput;
}>;


export type AcceptRejectSchoolVerificationRequestMutation = { __typename?: 'Mutation', acceptRejectSchoolVerificationRequest: { __typename?: 'SchoolVerificationRequest', id?: string | null, status?: RequestStatus | null, updatedAt?: any | null, createdAt?: any | null, proofImage?: string | null, proofType?: SchoolProofType | null, user?: { __typename?: 'User', id?: string | null, username?: string | null } | null, school?: { __typename?: 'School', id?: string | null, name?: string | null, fullAddress?: string | null, lat?: number | null, lng?: number | null, websiteURL?: string | null, emailSuffix?: string | null, updatedAt?: any | null, createdAt?: any | null } | null } };

export type GetSchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchoolsQuery = { __typename?: 'Query', getSchools: Array<{ __typename?: 'School', id?: string | null, name?: string | null, fullAddress?: string | null, lat?: number | null, lng?: number | null, websiteURL?: string | null, emailSuffix?: string | null, published?: boolean | null, updatedAt?: any | null, createdAt?: any | null }> };

export type GetSchoolFacultiesQueryVariables = Exact<{
  schoolId: Scalars['ID'];
}>;


export type GetSchoolFacultiesQuery = { __typename?: 'Query', getSchoolFaculties: Array<{ __typename?: 'Faculty', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, departments?: Array<{ __typename?: 'Department', id?: string | null, name?: string | null } | null> | null }> };

export type GetAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminQuery = { __typename?: 'Query', getAdmin: { __typename?: 'Admin', id?: string | null, email?: string | null, fullName?: string | null, role?: AdminRole | null, updatedAt?: any | null, createdAt?: any | null, status?: AdminStatus | null, profileImage?: string | null, lastSeen?: any | null } };

export type GetAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminsQuery = { __typename?: 'Query', getAdmins: Array<{ __typename?: 'Admin', createdAt?: any | null, updatedAt?: any | null, fullName?: string | null, email?: string | null, id?: string | null, role?: AdminRole | null, status?: AdminStatus | null, profileImage?: string | null, lastSeen?: any | null }> };

export type GetFacultyDepartmentsQueryVariables = Exact<{
  facultyId: Scalars['ID'];
}>;


export type GetFacultyDepartmentsQuery = { __typename?: 'Query', getFacultyDepartments: Array<{ __typename?: 'Department', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null }> };

export type GetDepartmentCoursesQueryVariables = Exact<{
  departmentId: Scalars['ID'];
}>;


export type GetDepartmentCoursesQuery = { __typename?: 'Query', getDepartmentCourses: Array<{ __typename?: 'Course', id?: string | null, title?: string | null, code?: string | null, updatedAt?: any | null, createdAt?: any | null }> };

export type GetAdminSchoolRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminSchoolRequestsQuery = { __typename?: 'Query', getAdminSchoolRequests?: Array<{ __typename?: 'SchoolRequest', id?: string | null, name?: string | null, fullAddress?: string | null, updatedAt?: any | null, createdAt?: any | null, websiteURL?: string | null, status?: RequestStatus | null, user?: { __typename?: 'User', id?: string | null, username?: string | null } | null }> | null };

export type GetAdminFacultyRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminFacultyRequestsQuery = { __typename?: 'Query', getAdminFacultyRequests?: Array<{ __typename?: 'FacultyRequest', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null, school?: { __typename?: 'School', id?: string | null, name?: string | null } | null, user?: { __typename?: 'User', username?: string | null, id?: string | null } | null }> | null };

export type GetAdminDepartmentRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminDepartmentRequestsQuery = { __typename?: 'Query', getAdminDepartmentRequests?: Array<{ __typename?: 'DepartmentRequest', id?: string | null, name?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null, school?: { __typename?: 'School', id?: string | null, name?: string | null } | null, faculty?: { __typename?: 'Faculty', id?: string | null, name?: string | null } | null, user?: { __typename?: 'User', id?: string | null, username?: string | null } | null }> | null };

export type GetAdminCourseRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminCourseRequestsQuery = { __typename?: 'Query', getAdminCourseRequests?: Array<{ __typename?: 'CourseRequest', id?: string | null, title?: string | null, code?: string | null, updatedAt?: any | null, createdAt?: any | null, status?: RequestStatus | null, school?: { __typename?: 'School', id?: string | null, name?: string | null } | null, department?: { __typename?: 'Department', id?: string | null, name?: string | null } | null, user?: { __typename?: 'User', id?: string | null, username?: string | null } | null }> | null };

export type GetAdminSchoolVerificationRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminSchoolVerificationRequestsQuery = { __typename?: 'Query', getAdminSchoolVerificationRequests?: Array<{ __typename?: 'SchoolVerificationRequest', id?: string | null, status?: RequestStatus | null, updatedAt?: any | null, createdAt?: any | null, proofImage?: string | null, proofType?: SchoolProofType | null, user?: { __typename?: 'User', username?: string | null, id?: string | null } | null, school?: { __typename?: 'School', id?: string | null, name?: string | null } | null }> | null };


export const AdminLoginDocument = gql`
    mutation AdminLogin($data: AdminLoginInput!) {
  adminLogin(data: $data) {
    message
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
export const CreateSchoolDocument = gql`
    mutation CreateSchool($data: CreateSchoolInput!) {
  createSchool(data: $data) {
    message
    success
    code
    school {
      id
      name
      emailSuffix
      websiteURL
      published
      lat
      lng
      updatedAt
      createdAt
    }
  }
}
    `;
export type CreateSchoolMutationFn = Apollo.MutationFunction<CreateSchoolMutation, CreateSchoolMutationVariables>;

/**
 * __useCreateSchoolMutation__
 *
 * To run a mutation, you first call `useCreateSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSchoolMutation, { data, loading, error }] = useCreateSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSchoolMutation(baseOptions?: Apollo.MutationHookOptions<CreateSchoolMutation, CreateSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSchoolMutation, CreateSchoolMutationVariables>(CreateSchoolDocument, options);
      }
export type CreateSchoolMutationHookResult = ReturnType<typeof useCreateSchoolMutation>;
export type CreateSchoolMutationResult = Apollo.MutationResult<CreateSchoolMutation>;
export type CreateSchoolMutationOptions = Apollo.BaseMutationOptions<CreateSchoolMutation, CreateSchoolMutationVariables>;
export const CreateFacultyDocument = gql`
    mutation CreateFaculty($data: CreateFacultyInput!) {
  createFaculty(data: $data) {
    faculty {
      createdAt
      id
      updatedAt
      name
    }
    success
    code
    message
  }
}
    `;
export type CreateFacultyMutationFn = Apollo.MutationFunction<CreateFacultyMutation, CreateFacultyMutationVariables>;

/**
 * __useCreateFacultyMutation__
 *
 * To run a mutation, you first call `useCreateFacultyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFacultyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFacultyMutation, { data, loading, error }] = useCreateFacultyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFacultyMutation(baseOptions?: Apollo.MutationHookOptions<CreateFacultyMutation, CreateFacultyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFacultyMutation, CreateFacultyMutationVariables>(CreateFacultyDocument, options);
      }
export type CreateFacultyMutationHookResult = ReturnType<typeof useCreateFacultyMutation>;
export type CreateFacultyMutationResult = Apollo.MutationResult<CreateFacultyMutation>;
export type CreateFacultyMutationOptions = Apollo.BaseMutationOptions<CreateFacultyMutation, CreateFacultyMutationVariables>;
export const CreateDepartmentDocument = gql`
    mutation CreateDepartment($data: CreateDepartmentInput!) {
  createDepartment(data: $data) {
    department {
      id
      name
      createdAt
      updatedAt
    }
    success
    message
    code
  }
}
    `;
export type CreateDepartmentMutationFn = Apollo.MutationFunction<CreateDepartmentMutation, CreateDepartmentMutationVariables>;

/**
 * __useCreateDepartmentMutation__
 *
 * To run a mutation, you first call `useCreateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepartmentMutation, { data, loading, error }] = useCreateDepartmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDepartmentMutation, CreateDepartmentMutationVariables>(CreateDepartmentDocument, options);
      }
export type CreateDepartmentMutationHookResult = ReturnType<typeof useCreateDepartmentMutation>;
export type CreateDepartmentMutationResult = Apollo.MutationResult<CreateDepartmentMutation>;
export type CreateDepartmentMutationOptions = Apollo.BaseMutationOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const CreateCourseDocument = gql`
    mutation CreateCourse($data: CreateCourseInput!) {
  createCourse(data: $data) {
    course {
      code
      id
      title
      updatedAt
      createdAt
    }
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const SendInviteDocument = gql`
    mutation SendInvite($data: SendInviteInput!) {
  sendInvite(data: $data) {
    code
    success
    message
    requestHashId
  }
}
    `;
export type SendInviteMutationFn = Apollo.MutationFunction<SendInviteMutation, SendInviteMutationVariables>;

/**
 * __useSendInviteMutation__
 *
 * To run a mutation, you first call `useSendInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInviteMutation, { data, loading, error }] = useSendInviteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendInviteMutation(baseOptions?: Apollo.MutationHookOptions<SendInviteMutation, SendInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendInviteMutation, SendInviteMutationVariables>(SendInviteDocument, options);
      }
export type SendInviteMutationHookResult = ReturnType<typeof useSendInviteMutation>;
export type SendInviteMutationResult = Apollo.MutationResult<SendInviteMutation>;
export type SendInviteMutationOptions = Apollo.BaseMutationOptions<SendInviteMutation, SendInviteMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($data: AcceptInviteInput!) {
  acceptInvite(data: $data) {
    code
    success
    message
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, options);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const MakeSuperAdminDocument = gql`
    mutation MakeSuperAdmin($adminId: ID!) {
  makeSuperAdmin(adminId: $adminId) {
    code
    success
    message
  }
}
    `;
export type MakeSuperAdminMutationFn = Apollo.MutationFunction<MakeSuperAdminMutation, MakeSuperAdminMutationVariables>;

/**
 * __useMakeSuperAdminMutation__
 *
 * To run a mutation, you first call `useMakeSuperAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeSuperAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeSuperAdminMutation, { data, loading, error }] = useMakeSuperAdminMutation({
 *   variables: {
 *      adminId: // value for 'adminId'
 *   },
 * });
 */
export function useMakeSuperAdminMutation(baseOptions?: Apollo.MutationHookOptions<MakeSuperAdminMutation, MakeSuperAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeSuperAdminMutation, MakeSuperAdminMutationVariables>(MakeSuperAdminDocument, options);
      }
export type MakeSuperAdminMutationHookResult = ReturnType<typeof useMakeSuperAdminMutation>;
export type MakeSuperAdminMutationResult = Apollo.MutationResult<MakeSuperAdminMutation>;
export type MakeSuperAdminMutationOptions = Apollo.BaseMutationOptions<MakeSuperAdminMutation, MakeSuperAdminMutationVariables>;
export const RemoveAdminDocument = gql`
    mutation RemoveAdmin($adminId: ID!) {
  removeAdmin(adminId: $adminId) {
    code
    success
    message
  }
}
    `;
export type RemoveAdminMutationFn = Apollo.MutationFunction<RemoveAdminMutation, RemoveAdminMutationVariables>;

/**
 * __useRemoveAdminMutation__
 *
 * To run a mutation, you first call `useRemoveAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAdminMutation, { data, loading, error }] = useRemoveAdminMutation({
 *   variables: {
 *      adminId: // value for 'adminId'
 *   },
 * });
 */
export function useRemoveAdminMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAdminMutation, RemoveAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAdminMutation, RemoveAdminMutationVariables>(RemoveAdminDocument, options);
      }
export type RemoveAdminMutationHookResult = ReturnType<typeof useRemoveAdminMutation>;
export type RemoveAdminMutationResult = Apollo.MutationResult<RemoveAdminMutation>;
export type RemoveAdminMutationOptions = Apollo.BaseMutationOptions<RemoveAdminMutation, RemoveAdminMutationVariables>;
export const UpdateAdminProfileDocument = gql`
    mutation UpdateAdminProfile($data: AdminProfileUpateInput!) {
  updateAdminProfile(data: $data) {
    id
    email
    fullName
    role
    updatedAt
    createdAt
    status
    profileImage
    lastSeen
  }
}
    `;
export type UpdateAdminProfileMutationFn = Apollo.MutationFunction<UpdateAdminProfileMutation, UpdateAdminProfileMutationVariables>;

/**
 * __useUpdateAdminProfileMutation__
 *
 * To run a mutation, you first call `useUpdateAdminProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminProfileMutation, { data, loading, error }] = useUpdateAdminProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdminProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdminProfileMutation, UpdateAdminProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdminProfileMutation, UpdateAdminProfileMutationVariables>(UpdateAdminProfileDocument, options);
      }
export type UpdateAdminProfileMutationHookResult = ReturnType<typeof useUpdateAdminProfileMutation>;
export type UpdateAdminProfileMutationResult = Apollo.MutationResult<UpdateAdminProfileMutation>;
export type UpdateAdminProfileMutationOptions = Apollo.BaseMutationOptions<UpdateAdminProfileMutation, UpdateAdminProfileMutationVariables>;
export const EditSchoolDocument = gql`
    mutation EditSchool($data: EditSchoolInput!) {
  editSchool(data: $data) {
    id
    name
    fullAddress
    lat
    lng
    published
    websiteURL
    emailSuffix
    updatedAt
    createdAt
  }
}
    `;
export type EditSchoolMutationFn = Apollo.MutationFunction<EditSchoolMutation, EditSchoolMutationVariables>;

/**
 * __useEditSchoolMutation__
 *
 * To run a mutation, you first call `useEditSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSchoolMutation, { data, loading, error }] = useEditSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditSchoolMutation(baseOptions?: Apollo.MutationHookOptions<EditSchoolMutation, EditSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSchoolMutation, EditSchoolMutationVariables>(EditSchoolDocument, options);
      }
export type EditSchoolMutationHookResult = ReturnType<typeof useEditSchoolMutation>;
export type EditSchoolMutationResult = Apollo.MutationResult<EditSchoolMutation>;
export type EditSchoolMutationOptions = Apollo.BaseMutationOptions<EditSchoolMutation, EditSchoolMutationVariables>;
export const EditFacultyDocument = gql`
    mutation EditFaculty($data: EditFacultyInput!) {
  editFaculty(data: $data) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;
export type EditFacultyMutationFn = Apollo.MutationFunction<EditFacultyMutation, EditFacultyMutationVariables>;

/**
 * __useEditFacultyMutation__
 *
 * To run a mutation, you first call `useEditFacultyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFacultyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFacultyMutation, { data, loading, error }] = useEditFacultyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditFacultyMutation(baseOptions?: Apollo.MutationHookOptions<EditFacultyMutation, EditFacultyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFacultyMutation, EditFacultyMutationVariables>(EditFacultyDocument, options);
      }
export type EditFacultyMutationHookResult = ReturnType<typeof useEditFacultyMutation>;
export type EditFacultyMutationResult = Apollo.MutationResult<EditFacultyMutation>;
export type EditFacultyMutationOptions = Apollo.BaseMutationOptions<EditFacultyMutation, EditFacultyMutationVariables>;
export const EditDepartmentDocument = gql`
    mutation EditDepartment($data: EditDepartmentInput!) {
  editDepartment(data: $data) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;
export type EditDepartmentMutationFn = Apollo.MutationFunction<EditDepartmentMutation, EditDepartmentMutationVariables>;

/**
 * __useEditDepartmentMutation__
 *
 * To run a mutation, you first call `useEditDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDepartmentMutation, { data, loading, error }] = useEditDepartmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<EditDepartmentMutation, EditDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDepartmentMutation, EditDepartmentMutationVariables>(EditDepartmentDocument, options);
      }
export type EditDepartmentMutationHookResult = ReturnType<typeof useEditDepartmentMutation>;
export type EditDepartmentMutationResult = Apollo.MutationResult<EditDepartmentMutation>;
export type EditDepartmentMutationOptions = Apollo.BaseMutationOptions<EditDepartmentMutation, EditDepartmentMutationVariables>;
export const EditCourseDocument = gql`
    mutation EditCourse($data: EditCourseInput!) {
  editCourse(data: $data) {
    id
    title
    code
    updatedAt
    createdAt
  }
}
    `;
export type EditCourseMutationFn = Apollo.MutationFunction<EditCourseMutation, EditCourseMutationVariables>;

/**
 * __useEditCourseMutation__
 *
 * To run a mutation, you first call `useEditCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCourseMutation, { data, loading, error }] = useEditCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditCourseMutation(baseOptions?: Apollo.MutationHookOptions<EditCourseMutation, EditCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCourseMutation, EditCourseMutationVariables>(EditCourseDocument, options);
      }
export type EditCourseMutationHookResult = ReturnType<typeof useEditCourseMutation>;
export type EditCourseMutationResult = Apollo.MutationResult<EditCourseMutation>;
export type EditCourseMutationOptions = Apollo.BaseMutationOptions<EditCourseMutation, EditCourseMutationVariables>;
export const AcceptRejectSchoolRequestDocument = gql`
    mutation AcceptRejectSchoolRequest($data: AcceptRejectRequestInput!) {
  acceptRejectSchoolRequest(data: $data) {
    id
    name
    fullAddress
    updatedAt
    createdAt
    websiteURL
    emailSuffix
    status
  }
}
    `;
export type AcceptRejectSchoolRequestMutationFn = Apollo.MutationFunction<AcceptRejectSchoolRequestMutation, AcceptRejectSchoolRequestMutationVariables>;

/**
 * __useAcceptRejectSchoolRequestMutation__
 *
 * To run a mutation, you first call `useAcceptRejectSchoolRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptRejectSchoolRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptRejectSchoolRequestMutation, { data, loading, error }] = useAcceptRejectSchoolRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptRejectSchoolRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptRejectSchoolRequestMutation, AcceptRejectSchoolRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptRejectSchoolRequestMutation, AcceptRejectSchoolRequestMutationVariables>(AcceptRejectSchoolRequestDocument, options);
      }
export type AcceptRejectSchoolRequestMutationHookResult = ReturnType<typeof useAcceptRejectSchoolRequestMutation>;
export type AcceptRejectSchoolRequestMutationResult = Apollo.MutationResult<AcceptRejectSchoolRequestMutation>;
export type AcceptRejectSchoolRequestMutationOptions = Apollo.BaseMutationOptions<AcceptRejectSchoolRequestMutation, AcceptRejectSchoolRequestMutationVariables>;
export const AcceptRejectFacultyRequestDocument = gql`
    mutation AcceptRejectFacultyRequest($data: AcceptRejectRequestInput!) {
  acceptRejectFacultyRequest(data: $data) {
    id
    name
    updatedAt
    createdAt
    status
  }
}
    `;
export type AcceptRejectFacultyRequestMutationFn = Apollo.MutationFunction<AcceptRejectFacultyRequestMutation, AcceptRejectFacultyRequestMutationVariables>;

/**
 * __useAcceptRejectFacultyRequestMutation__
 *
 * To run a mutation, you first call `useAcceptRejectFacultyRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptRejectFacultyRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptRejectFacultyRequestMutation, { data, loading, error }] = useAcceptRejectFacultyRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptRejectFacultyRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptRejectFacultyRequestMutation, AcceptRejectFacultyRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptRejectFacultyRequestMutation, AcceptRejectFacultyRequestMutationVariables>(AcceptRejectFacultyRequestDocument, options);
      }
export type AcceptRejectFacultyRequestMutationHookResult = ReturnType<typeof useAcceptRejectFacultyRequestMutation>;
export type AcceptRejectFacultyRequestMutationResult = Apollo.MutationResult<AcceptRejectFacultyRequestMutation>;
export type AcceptRejectFacultyRequestMutationOptions = Apollo.BaseMutationOptions<AcceptRejectFacultyRequestMutation, AcceptRejectFacultyRequestMutationVariables>;
export const AcceptRejectDepartmentRequestDocument = gql`
    mutation AcceptRejectDepartmentRequest($data: AcceptRejectRequestInput!) {
  acceptRejectDepartmentRequest(data: $data) {
    id
    name
    updatedAt
    createdAt
    status
  }
}
    `;
export type AcceptRejectDepartmentRequestMutationFn = Apollo.MutationFunction<AcceptRejectDepartmentRequestMutation, AcceptRejectDepartmentRequestMutationVariables>;

/**
 * __useAcceptRejectDepartmentRequestMutation__
 *
 * To run a mutation, you first call `useAcceptRejectDepartmentRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptRejectDepartmentRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptRejectDepartmentRequestMutation, { data, loading, error }] = useAcceptRejectDepartmentRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptRejectDepartmentRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptRejectDepartmentRequestMutation, AcceptRejectDepartmentRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptRejectDepartmentRequestMutation, AcceptRejectDepartmentRequestMutationVariables>(AcceptRejectDepartmentRequestDocument, options);
      }
export type AcceptRejectDepartmentRequestMutationHookResult = ReturnType<typeof useAcceptRejectDepartmentRequestMutation>;
export type AcceptRejectDepartmentRequestMutationResult = Apollo.MutationResult<AcceptRejectDepartmentRequestMutation>;
export type AcceptRejectDepartmentRequestMutationOptions = Apollo.BaseMutationOptions<AcceptRejectDepartmentRequestMutation, AcceptRejectDepartmentRequestMutationVariables>;
export const AcceptRejectCourseRequestDocument = gql`
    mutation AcceptRejectCourseRequest($data: AcceptRejectRequestInput!) {
  acceptRejectCourseRequest(data: $data) {
    id
    title
    code
    updatedAt
    createdAt
    status
  }
}
    `;
export type AcceptRejectCourseRequestMutationFn = Apollo.MutationFunction<AcceptRejectCourseRequestMutation, AcceptRejectCourseRequestMutationVariables>;

/**
 * __useAcceptRejectCourseRequestMutation__
 *
 * To run a mutation, you first call `useAcceptRejectCourseRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptRejectCourseRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptRejectCourseRequestMutation, { data, loading, error }] = useAcceptRejectCourseRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptRejectCourseRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptRejectCourseRequestMutation, AcceptRejectCourseRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptRejectCourseRequestMutation, AcceptRejectCourseRequestMutationVariables>(AcceptRejectCourseRequestDocument, options);
      }
export type AcceptRejectCourseRequestMutationHookResult = ReturnType<typeof useAcceptRejectCourseRequestMutation>;
export type AcceptRejectCourseRequestMutationResult = Apollo.MutationResult<AcceptRejectCourseRequestMutation>;
export type AcceptRejectCourseRequestMutationOptions = Apollo.BaseMutationOptions<AcceptRejectCourseRequestMutation, AcceptRejectCourseRequestMutationVariables>;
export const AcceptRejectSchoolVerificationRequestDocument = gql`
    mutation AcceptRejectSchoolVerificationRequest($data: AcceptRejectRequestInput!) {
  acceptRejectSchoolVerificationRequest(data: $data) {
    id
    status
    updatedAt
    createdAt
    proofImage
    proofType
    user {
      id
      username
    }
    school {
      id
      name
      fullAddress
      lat
      lng
      websiteURL
      emailSuffix
      updatedAt
      createdAt
    }
  }
}
    `;
export type AcceptRejectSchoolVerificationRequestMutationFn = Apollo.MutationFunction<AcceptRejectSchoolVerificationRequestMutation, AcceptRejectSchoolVerificationRequestMutationVariables>;

/**
 * __useAcceptRejectSchoolVerificationRequestMutation__
 *
 * To run a mutation, you first call `useAcceptRejectSchoolVerificationRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptRejectSchoolVerificationRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptRejectSchoolVerificationRequestMutation, { data, loading, error }] = useAcceptRejectSchoolVerificationRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAcceptRejectSchoolVerificationRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptRejectSchoolVerificationRequestMutation, AcceptRejectSchoolVerificationRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptRejectSchoolVerificationRequestMutation, AcceptRejectSchoolVerificationRequestMutationVariables>(AcceptRejectSchoolVerificationRequestDocument, options);
      }
export type AcceptRejectSchoolVerificationRequestMutationHookResult = ReturnType<typeof useAcceptRejectSchoolVerificationRequestMutation>;
export type AcceptRejectSchoolVerificationRequestMutationResult = Apollo.MutationResult<AcceptRejectSchoolVerificationRequestMutation>;
export type AcceptRejectSchoolVerificationRequestMutationOptions = Apollo.BaseMutationOptions<AcceptRejectSchoolVerificationRequestMutation, AcceptRejectSchoolVerificationRequestMutationVariables>;
export const GetSchoolsDocument = gql`
    query GetSchools {
  getSchools {
    id
    name
    fullAddress
    lat
    lng
    websiteURL
    emailSuffix
    published
    updatedAt
    createdAt
    published
  }
}
    `;

/**
 * __useGetSchoolsQuery__
 *
 * To run a query within a React component, call `useGetSchoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSchoolsQuery(baseOptions?: Apollo.QueryHookOptions<GetSchoolsQuery, GetSchoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, options);
      }
export function useGetSchoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchoolsQuery, GetSchoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, options);
        }
export type GetSchoolsQueryHookResult = ReturnType<typeof useGetSchoolsQuery>;
export type GetSchoolsLazyQueryHookResult = ReturnType<typeof useGetSchoolsLazyQuery>;
export type GetSchoolsQueryResult = Apollo.QueryResult<GetSchoolsQuery, GetSchoolsQueryVariables>;
export const GetSchoolFacultiesDocument = gql`
    query GetSchoolFaculties($schoolId: ID!) {
  getSchoolFaculties(schoolId: $schoolId) {
    id
    name
    updatedAt
    createdAt
    departments {
      id
      name
    }
  }
}
    `;

/**
 * __useGetSchoolFacultiesQuery__
 *
 * To run a query within a React component, call `useGetSchoolFacultiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchoolFacultiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchoolFacultiesQuery({
 *   variables: {
 *      schoolId: // value for 'schoolId'
 *   },
 * });
 */
export function useGetSchoolFacultiesQuery(baseOptions: Apollo.QueryHookOptions<GetSchoolFacultiesQuery, GetSchoolFacultiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchoolFacultiesQuery, GetSchoolFacultiesQueryVariables>(GetSchoolFacultiesDocument, options);
      }
export function useGetSchoolFacultiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchoolFacultiesQuery, GetSchoolFacultiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchoolFacultiesQuery, GetSchoolFacultiesQueryVariables>(GetSchoolFacultiesDocument, options);
        }
export type GetSchoolFacultiesQueryHookResult = ReturnType<typeof useGetSchoolFacultiesQuery>;
export type GetSchoolFacultiesLazyQueryHookResult = ReturnType<typeof useGetSchoolFacultiesLazyQuery>;
export type GetSchoolFacultiesQueryResult = Apollo.QueryResult<GetSchoolFacultiesQuery, GetSchoolFacultiesQueryVariables>;
export const GetAdminDocument = gql`
    query GetAdmin {
  getAdmin {
    id
    email
    fullName
    role
    updatedAt
    createdAt
    status
    profileImage
    lastSeen
  }
}
    `;

/**
 * __useGetAdminQuery__
 *
 * To run a query within a React component, call `useGetAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
      }
export function useGetAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
        }
export type GetAdminQueryHookResult = ReturnType<typeof useGetAdminQuery>;
export type GetAdminLazyQueryHookResult = ReturnType<typeof useGetAdminLazyQuery>;
export type GetAdminQueryResult = Apollo.QueryResult<GetAdminQuery, GetAdminQueryVariables>;
export const GetAdminsDocument = gql`
    query GetAdmins {
  getAdmins {
    createdAt
    updatedAt
    fullName
    email
    id
    role
    status
    profileImage
    lastSeen
  }
}
    `;

/**
 * __useGetAdminsQuery__
 *
 * To run a query within a React component, call `useGetAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminsQuery, GetAdminsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminsQuery, GetAdminsQueryVariables>(GetAdminsDocument, options);
      }
export function useGetAdminsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminsQuery, GetAdminsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminsQuery, GetAdminsQueryVariables>(GetAdminsDocument, options);
        }
export type GetAdminsQueryHookResult = ReturnType<typeof useGetAdminsQuery>;
export type GetAdminsLazyQueryHookResult = ReturnType<typeof useGetAdminsLazyQuery>;
export type GetAdminsQueryResult = Apollo.QueryResult<GetAdminsQuery, GetAdminsQueryVariables>;
export const GetFacultyDepartmentsDocument = gql`
    query GetFacultyDepartments($facultyId: ID!) {
  getFacultyDepartments(facultyId: $facultyId) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useGetFacultyDepartmentsQuery__
 *
 * To run a query within a React component, call `useGetFacultyDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacultyDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacultyDepartmentsQuery({
 *   variables: {
 *      facultyId: // value for 'facultyId'
 *   },
 * });
 */
export function useGetFacultyDepartmentsQuery(baseOptions: Apollo.QueryHookOptions<GetFacultyDepartmentsQuery, GetFacultyDepartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacultyDepartmentsQuery, GetFacultyDepartmentsQueryVariables>(GetFacultyDepartmentsDocument, options);
      }
export function useGetFacultyDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacultyDepartmentsQuery, GetFacultyDepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacultyDepartmentsQuery, GetFacultyDepartmentsQueryVariables>(GetFacultyDepartmentsDocument, options);
        }
export type GetFacultyDepartmentsQueryHookResult = ReturnType<typeof useGetFacultyDepartmentsQuery>;
export type GetFacultyDepartmentsLazyQueryHookResult = ReturnType<typeof useGetFacultyDepartmentsLazyQuery>;
export type GetFacultyDepartmentsQueryResult = Apollo.QueryResult<GetFacultyDepartmentsQuery, GetFacultyDepartmentsQueryVariables>;
export const GetDepartmentCoursesDocument = gql`
    query GetDepartmentCourses($departmentId: ID!) {
  getDepartmentCourses(departmentId: $departmentId) {
    id
    title
    code
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useGetDepartmentCoursesQuery__
 *
 * To run a query within a React component, call `useGetDepartmentCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartmentCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartmentCoursesQuery({
 *   variables: {
 *      departmentId: // value for 'departmentId'
 *   },
 * });
 */
export function useGetDepartmentCoursesQuery(baseOptions: Apollo.QueryHookOptions<GetDepartmentCoursesQuery, GetDepartmentCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepartmentCoursesQuery, GetDepartmentCoursesQueryVariables>(GetDepartmentCoursesDocument, options);
      }
export function useGetDepartmentCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartmentCoursesQuery, GetDepartmentCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepartmentCoursesQuery, GetDepartmentCoursesQueryVariables>(GetDepartmentCoursesDocument, options);
        }
export type GetDepartmentCoursesQueryHookResult = ReturnType<typeof useGetDepartmentCoursesQuery>;
export type GetDepartmentCoursesLazyQueryHookResult = ReturnType<typeof useGetDepartmentCoursesLazyQuery>;
export type GetDepartmentCoursesQueryResult = Apollo.QueryResult<GetDepartmentCoursesQuery, GetDepartmentCoursesQueryVariables>;
export const GetAdminSchoolRequestsDocument = gql`
    query GetAdminSchoolRequests {
  getAdminSchoolRequests {
    id
    name
    fullAddress
    updatedAt
    createdAt
    websiteURL
    status
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useGetAdminSchoolRequestsQuery__
 *
 * To run a query within a React component, call `useGetAdminSchoolRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminSchoolRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminSchoolRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminSchoolRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminSchoolRequestsQuery, GetAdminSchoolRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminSchoolRequestsQuery, GetAdminSchoolRequestsQueryVariables>(GetAdminSchoolRequestsDocument, options);
      }
export function useGetAdminSchoolRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminSchoolRequestsQuery, GetAdminSchoolRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminSchoolRequestsQuery, GetAdminSchoolRequestsQueryVariables>(GetAdminSchoolRequestsDocument, options);
        }
export type GetAdminSchoolRequestsQueryHookResult = ReturnType<typeof useGetAdminSchoolRequestsQuery>;
export type GetAdminSchoolRequestsLazyQueryHookResult = ReturnType<typeof useGetAdminSchoolRequestsLazyQuery>;
export type GetAdminSchoolRequestsQueryResult = Apollo.QueryResult<GetAdminSchoolRequestsQuery, GetAdminSchoolRequestsQueryVariables>;
export const GetAdminFacultyRequestsDocument = gql`
    query GetAdminFacultyRequests {
  getAdminFacultyRequests {
    id
    name
    school {
      id
      name
    }
    updatedAt
    createdAt
    status
    user {
      username
      id
    }
  }
}
    `;

/**
 * __useGetAdminFacultyRequestsQuery__
 *
 * To run a query within a React component, call `useGetAdminFacultyRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminFacultyRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminFacultyRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminFacultyRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminFacultyRequestsQuery, GetAdminFacultyRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminFacultyRequestsQuery, GetAdminFacultyRequestsQueryVariables>(GetAdminFacultyRequestsDocument, options);
      }
export function useGetAdminFacultyRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminFacultyRequestsQuery, GetAdminFacultyRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminFacultyRequestsQuery, GetAdminFacultyRequestsQueryVariables>(GetAdminFacultyRequestsDocument, options);
        }
export type GetAdminFacultyRequestsQueryHookResult = ReturnType<typeof useGetAdminFacultyRequestsQuery>;
export type GetAdminFacultyRequestsLazyQueryHookResult = ReturnType<typeof useGetAdminFacultyRequestsLazyQuery>;
export type GetAdminFacultyRequestsQueryResult = Apollo.QueryResult<GetAdminFacultyRequestsQuery, GetAdminFacultyRequestsQueryVariables>;
export const GetAdminDepartmentRequestsDocument = gql`
    query GetAdminDepartmentRequests {
  getAdminDepartmentRequests {
    id
    name
    school {
      id
      name
    }
    faculty {
      id
      name
    }
    user {
      id
      username
    }
    updatedAt
    createdAt
    status
  }
}
    `;

/**
 * __useGetAdminDepartmentRequestsQuery__
 *
 * To run a query within a React component, call `useGetAdminDepartmentRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminDepartmentRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminDepartmentRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminDepartmentRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminDepartmentRequestsQuery, GetAdminDepartmentRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminDepartmentRequestsQuery, GetAdminDepartmentRequestsQueryVariables>(GetAdminDepartmentRequestsDocument, options);
      }
export function useGetAdminDepartmentRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminDepartmentRequestsQuery, GetAdminDepartmentRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminDepartmentRequestsQuery, GetAdminDepartmentRequestsQueryVariables>(GetAdminDepartmentRequestsDocument, options);
        }
export type GetAdminDepartmentRequestsQueryHookResult = ReturnType<typeof useGetAdminDepartmentRequestsQuery>;
export type GetAdminDepartmentRequestsLazyQueryHookResult = ReturnType<typeof useGetAdminDepartmentRequestsLazyQuery>;
export type GetAdminDepartmentRequestsQueryResult = Apollo.QueryResult<GetAdminDepartmentRequestsQuery, GetAdminDepartmentRequestsQueryVariables>;
export const GetAdminCourseRequestsDocument = gql`
    query GetAdminCourseRequests {
  getAdminCourseRequests {
    id
    title
    code
    school {
      id
      name
    }
    department {
      id
      name
    }
    user {
      id
      username
    }
    updatedAt
    createdAt
    status
  }
}
    `;

/**
 * __useGetAdminCourseRequestsQuery__
 *
 * To run a query within a React component, call `useGetAdminCourseRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminCourseRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminCourseRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminCourseRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminCourseRequestsQuery, GetAdminCourseRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminCourseRequestsQuery, GetAdminCourseRequestsQueryVariables>(GetAdminCourseRequestsDocument, options);
      }
export function useGetAdminCourseRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminCourseRequestsQuery, GetAdminCourseRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminCourseRequestsQuery, GetAdminCourseRequestsQueryVariables>(GetAdminCourseRequestsDocument, options);
        }
export type GetAdminCourseRequestsQueryHookResult = ReturnType<typeof useGetAdminCourseRequestsQuery>;
export type GetAdminCourseRequestsLazyQueryHookResult = ReturnType<typeof useGetAdminCourseRequestsLazyQuery>;
export type GetAdminCourseRequestsQueryResult = Apollo.QueryResult<GetAdminCourseRequestsQuery, GetAdminCourseRequestsQueryVariables>;
export const GetAdminSchoolVerificationRequestsDocument = gql`
    query GetAdminSchoolVerificationRequests {
  getAdminSchoolVerificationRequests {
    id
    status
    updatedAt
    createdAt
    proofImage
    proofType
    user {
      username
      id
    }
    school {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAdminSchoolVerificationRequestsQuery__
 *
 * To run a query within a React component, call `useGetAdminSchoolVerificationRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminSchoolVerificationRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminSchoolVerificationRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminSchoolVerificationRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminSchoolVerificationRequestsQuery, GetAdminSchoolVerificationRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminSchoolVerificationRequestsQuery, GetAdminSchoolVerificationRequestsQueryVariables>(GetAdminSchoolVerificationRequestsDocument, options);
      }
export function useGetAdminSchoolVerificationRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminSchoolVerificationRequestsQuery, GetAdminSchoolVerificationRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminSchoolVerificationRequestsQuery, GetAdminSchoolVerificationRequestsQueryVariables>(GetAdminSchoolVerificationRequestsDocument, options);
        }
export type GetAdminSchoolVerificationRequestsQueryHookResult = ReturnType<typeof useGetAdminSchoolVerificationRequestsQuery>;
export type GetAdminSchoolVerificationRequestsLazyQueryHookResult = ReturnType<typeof useGetAdminSchoolVerificationRequestsLazyQuery>;
export type GetAdminSchoolVerificationRequestsQueryResult = Apollo.QueryResult<GetAdminSchoolVerificationRequestsQuery, GetAdminSchoolVerificationRequestsQueryVariables>;