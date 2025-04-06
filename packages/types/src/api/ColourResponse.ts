export type ColourResponse<T = unknown> = {
  statusCode: number;
  success: boolean;
  data: T;
};
