export interface IArenaResponse {
  codigo: number;
  result: IArenaVideo[];
}

export interface IArenaVideo {
  NomArena: string;
  NomQuadra: string;
  DatUpload: string;
  DatProcessado: string;
  DatHora: string;
  HorarioVideoFrame: string;
  play: string;
  Frame: string;
  NomExibicao: string;
}