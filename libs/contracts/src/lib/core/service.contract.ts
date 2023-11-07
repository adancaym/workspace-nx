export interface IServiceContract<C, U, R> {
  create(client: C): Promise<R>;
  update(id: number, client: U): Promise<R>;
  findOne(id: number): Promise<R>;
  findAll(): Promise<R[]>;
  remove(id: number): void;
}
