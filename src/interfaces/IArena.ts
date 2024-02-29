export interface IArena {
  NomArena: string;
  Logo: string;
  NomExibicao: string;
}

export interface IApiResponseArena {
  codigo: number;
  result: IArena[];
}