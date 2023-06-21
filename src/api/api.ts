import { axiosInstance } from "./axiosInstance";

const addListCard = async (data: any) => {
  return await axiosInstance.post("/sharing/add", data);
};

const getListCard = async (id: string) => {
  return await axiosInstance.get(`/sharing/cards/${id}`);
};

const admin = {
  getUsers: async () => {
    return await axiosInstance.post("/admin/users", { count: 100 });
  },
  getCardOfUser: async (userId: string) => {
    return await axiosInstance.post("/card/categories", { uid: userId });
  },
  getBackup: async (email: string) => {
    return await axiosInstance.post("/admin/getUserBackups", { email });
  },
};
export default { addListCard, getListCard, admin };
