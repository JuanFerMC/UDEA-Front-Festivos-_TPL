import { TipoFestivo } from "./TipoFestivo";

export interface festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diaspascua: number;
    idtipo: TipoFestivo;
}
