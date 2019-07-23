/*NOT USED YET

const express = require("express");
const router = express.Router();
import butter from "./butter-client";

////Route: GET api/blog - Get all blog posts from ButterCMS - Public Access
router.get("/", async (req, res) => {
  try {
    const { match } = this.props;
    let page = match.params.page || 1;
    const blogPosts = await butter.post.list({ page: page, page_size: 10 });
    res.json(blogPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
*/
