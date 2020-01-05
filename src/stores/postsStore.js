import { decorate, action, observable } from "mobx";
import axios from "utils/axios";

class PostsStore {
  data = [];
  loading = false;
  error = null;

  getPosts = async () => {
    // * to display a loading indicator
    this.loading = true;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // ! Just adding some fake timeout to feel the loading, please remove set time out
      await new Promise(resolve =>
          setTimeout(() => {
            this.data = response.data;
            resolve();
          }, 1000)
      );
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        this.error = `some error key indicating & describing ${status} message`;
      } else {
        this.error = "some error key to return a translated error message";
      }
    }
    // * to hide loading indicator
    this.loading = false;
  };
}
decorate(PostsStore, {
  data: observable,
  loading: observable,
  error: observable,
  getPosts: action
});
export default new PostsStore();
