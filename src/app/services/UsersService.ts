import axios from "@/app/services/http-common";
import { NewUserBody } from "@/types";

class UsersService {
  static createUser = async (credentials: NewUserBody) => {
    return axios.post("/users/", credentials);
  };
}

export default UsersService;
