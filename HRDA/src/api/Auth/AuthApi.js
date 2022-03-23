import Services from "../../services";

class AuthApi {
  login(value) {
    return Services.post("/hrdu/auth/login", value);
  }

  // LOCAL BAYU
  // login(value) {
  //   return Services.post("/auth/login", value);
  // }
}

export default new AuthApi();
