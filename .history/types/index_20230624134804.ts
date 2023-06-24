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
  clickHandler?: any;
  classStyles: string;
}
export interface getDetailsProps {
  UpperD?: string;
  UpperW?: string;
  UpperM?: string;
  UpperQ?: string;
  UpperY?: string;
  UpperT?: string;
  LowerD?: string;
  LowerW?: string;
  LowerM?: string;
  LowerQ?: string;
  LowerY?: string;
  LowerT?: string;
  PBpcUC?: string;
  PBpcLC?: string;
  PBdate?: string;
  DateW?: null;
  DateM?: null;
  DateQ?: null;
  DateY?: null;
  DWMQY?: boolean;
}
// export interface numerologyProps {
//   name_g1_block: string;
//   name_g2_block: string;
//   name_g3_block: string;
//   tot_letters: number;
//   g1tot: number;
//   g2tot: number;
//   g3tot: number;
//   g1vtot: number;
//   g2vtot: number;
//   g3vtot: number;
//   g1nettot: number;
//   g2nettot: number;
//   g3nettot: number;
//   dob_tot: number;
// }
