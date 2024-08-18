// import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

// function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }

//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id });
//   }

//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           {/* <h1>My todos</h1> */}
//           <h1>{user?.signInDetails?.loginId}'s todos</h1>
//           <button onClick={createTodo}>+ new</button>
//           <ul>
//             {todos.map((todo) => (
//               <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
//                 {todo.content}
//               </li>
//             ))}
//           </ul>
//           <div>
//             🥳 App successfully hosted. Try creating a new todo.
//             <br />
//             <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
//               Review next step of this tutorial.
//             </a>
//           </div>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
//   );
// }

// export default App;
import React from "react";

// Types for PostHeader component props
interface PostHeaderProps {
  title: string;
  subreddit: string;
  time: string;
}

// PostHeader Component
const PostHeader: React.FC<PostHeaderProps> = ({ title, subreddit, time }) => {
  return (
    <div className="post-header">
      <h2>{title}</h2>
      <p>
        {subreddit} • {time}
      </p>
    </div>
  );
};

// Types for PostBody component props
interface PostBodyProps {
  content: string;
  media?: string | null; // media is optional
}

// PostBody Component
const PostBody: React.FC<PostBodyProps> = ({ content, media }) => {
  return (
    <div className="post-body">
      <p>{content}</p>
      {media && <img src={media} alt="Post media" />}
    </div>
  );
};

// Types for PostActions component props
interface PostActionsProps {
  upvotes: number;
  comments: number;
}

// PostActions Component
const PostActions: React.FC<PostActionsProps> = ({ upvotes, comments }) => {
  return (
    <div className="post-actions">
      <button>👍 {upvotes}</button>
      <button>💬 {comments}</button>
      <button>🔗 Share</button>
    </div>
  );
};

// Types for PostItem component props
interface PostItemProps {
  post: {
    id: number;
    title: string;
    subreddit: string;
    time: string;
    content: string;
    media?: string | null;
    upvotes: number;
    comments: number;
  };
}

// PostItem Component
const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post-item">
      <PostHeader
        title={post.title}
        subreddit={post.subreddit}
        time={post.time}
      />
      <PostBody content={post.content} media={post.media} />
      <PostActions upvotes={post.upvotes} comments={post.comments} />
    </div>
  );
};

// Types for PostList component props
interface PostListProps {
  posts: Array<{
    id: number;
    title: string;
    subreddit: string;
    time: string;
    content: string;
    media?: string | null;
    upvotes: number;
    comments: number;
  }>;
}

// PostList Component
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

// Sidebar Component
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      {/* 추가적인 Sidebar 내용 */}
    </div>
  );
};

// RightPanel Component
const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
      <h3>Right Panel</h3>
      {/* 추가적인 Right Panel 내용 */}
    </div>
  );
};

// MainContent Component
const MainContent: React.FC = () => {
  // 임의의 post 데이터
  const posts = [
    {
      id: 1,
      title: "Exploring the New Features of React 18",
      subreddit: "r/reactjs",
      time: "2 hours ago",
      content:
        "React 18 introduces concurrent rendering, automatic batching, and much more. In this post, we'll explore these new features in detail and how they impact your development workflow.",
      media: "https://example.com/react18-features.png",
      upvotes: 150,
      comments: 35,
    },
    {
      id: 2,
      title: "JavaScript: The Weird Parts",
      subreddit: "r/javascript",
      time: "5 hours ago",
      content:
        "JavaScript has some quirky behaviors that can catch developers off guard. Let's dive into some of the weird and wonderful aspects of this popular language.",
      media: null,
      upvotes: 320,
      comments: 68,
    },
    {
      id: 3,
      title: "10 Tips for Writing Cleaner CSS",
      subreddit: "r/webdev",
      time: "1 day ago",
      content:
        "CSS can quickly become messy and hard to maintain. In this post, I'll share 10 tips to keep your CSS clean, organized, and scalable.",
      media: "https://example.com/clean-css-tips.jpg",
      upvotes: 200,
      comments: 45,
    },
    {
      id: 4,
      title: "Understanding Asynchronous JavaScript",
      subreddit: "r/learnprogramming",
      time: "3 days ago",
      content:
        "Asynchronous JavaScript can be tricky to master. In this guide, we'll cover promises, async/await, and how to handle errors effectively.",
      media: "https://example.com/async-js.jpg",
      upvotes: 275,
      comments: 78,
    },
    {
      id: 5,
      title: "The Future of Web Development: WebAssembly",
      subreddit: "r/webdev",
      time: "1 week ago",
      content:
        "WebAssembly is changing the landscape of web development. This post explores how it works and what the future holds for this technology.",
      media: "https://example.com/webassembly-future.png",
      upvotes: 410,
      comments: 102,
    },
  ];

  return (
    <div className="main-content">
      <PostList posts={posts} />
    </div>
  );
};

// Header Component
const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Reddit Clone</h1>
      {/* 추가적인 Header 내용 */}
    </div>
  );
};

// AppLayout Component
const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="content-area">
        <Sidebar />
        <MainContent />
        <RightPanel />
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="app">
      <AppLayout />
    </div>
  );
};

export default App;
