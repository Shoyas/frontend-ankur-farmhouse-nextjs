export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
}
export interface IOrder {
  id: string;
  orderedServices: Object;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: IUser;
}
export interface IBooking_Order {
  id: string;
  upcomingOfferServices: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  takingScheduledDate: string;
  upcomingOfferStatus: string;
}
export interface IFeedback {
  id: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: IUser;
}

export interface IBlog {
  id: string;
  title: string;
  blog: string;
  contentImg: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: IUser;
}
export interface ICategory {
  id: string;
  title: string;
  categoryImg: string;
  createdAt: string;
  updatedAt: string;
}
export interface IService {
  id: string;
  title: string;
  price: string;
  unit: string;
  quantity: string;
  serviceImg: string;
  categoryId: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}
