import { AxiosResponse } from "axios";

export type ApiService<Model> = ListApiService<Model> &
  ShowApiService<Model> &
  CreateApiService<Model> &
  UpdateApiService<Model> &
  DeleteApiService<Model>;

export type ImmutableApiService<Model> = ListApiService<Model> &
  ShowApiService<Model> &
  CreateApiService<Model>;

export interface ListApiService<Model> {
  list(): Promise<AxiosResponse<Model[]>>;
}

export interface ShowApiService<Model> {
  show(id: number): Promise<AxiosResponse<Model>>;
}

export interface CreateApiService<Model> {
  create(user: Exclude<Model, "id">): Promise<AxiosResponse<Model>>;
}

export interface UpdateApiService<Model> {
  update(
    user: Partial<Model> & { id: number | string }
  ): Promise<AxiosResponse<Model>>;
}

export interface DeleteApiService<Model> {
  delete(id: number): Promise<AxiosResponse<Model>>;
}
