export interface LabelData {
  prefix: string;
  start: string;
  end: string;
  type: "barcode" | "qrcode" | "both";
}

export const formData: LabelData = {
  prefix: "",
  start: "",
  end: "",
  type: "both",
};
