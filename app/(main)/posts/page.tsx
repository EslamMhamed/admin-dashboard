import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

function PostsPage() {
  return (
    <>
      <BackButton link="/" text="Go Back" />
      <PostsTable />
      <PostsPagination />
    </>
  );
}

export default PostsPage;
