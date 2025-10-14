import api from "../api";

export interface LabelData {
  prefix: string;
  start: number;
  end: number;
  type: "barcode" | "qrcode" | "both";
}

export const createLabel = async (data: LabelData) => {
  try {
    const response = await api.post("/labels", data); // envia diretamente o JSON
    return response.data;
  } catch (error) {
    console.error("Erro ao criar etiqueta:", error);
    throw error;
  }
};
