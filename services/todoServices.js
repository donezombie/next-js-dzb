import { TODOS_URL } from "constants/api";
import services from "services";

class TodoServices {
  getTodo({ id }) {
    return services.get(`${TODOS_URL}/${id}`);
  }
}

export default new TodoServices();