export interface ValidationErrorsItemModel {
  code: string;
  message: string;
}
export interface ValidationErrorsModel {
  errors: Record<string, ValidationErrorsItemModel[] | undefined>;
}
export interface NonValidationErrorModel {
  error: string;
}

export type ErrorsModel = ValidationErrorsModel | NonValidationErrorModel;

export interface AxiosResponseErrorModel {
  response: {
    data: ErrorsModel;
    status: number;
  };
}
