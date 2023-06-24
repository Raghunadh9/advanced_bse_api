export interface allDataInterFace {
  scrip_cd: number;
  scripname: string;
  LONG_NAME: string;
  scrip_grp: string;
  openrate: number;
  highrate: number;
  lowrate: number;
  ltradert: number;
  prevdayclose: number;
  change_val: number;
  change_percent: number;
  index_code: string;
  trd_val: number;
  trd_vol: number;
  nooftrd: number;
  trend: string;
  dt_tm: string;
  Ishighflag: number;
  IsLowflag: number;
  URL: string;
  NSUrl: string;
}
export interface allDataArrayInterFace {
  Table: allDataInterFace[];
}
export interface ButtonComponentProps {
  valueProp?: number | string;
  clickHandler?: () => {};
  classStyles: string;
}
