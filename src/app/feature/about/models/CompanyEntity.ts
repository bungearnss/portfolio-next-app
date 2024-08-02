import { ProjectProps } from "./AboutDetailProp";


interface CompanyEntity {
    coId: string,
    coName: string,
    coLogo: string,
    coBgColor: string,
    coDes: string,
    time: string,
    project: ProjectProps[];
}

export type { CompanyEntity };