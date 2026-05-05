// Heart  Toggle:::::::

// import { useState } from "react";

// function Heart() {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div>
//       <span
//         style={{ fontSize: "40px", cursor: "pointer" }}
//         onClick={() => setLiked(!liked)}
//       >
//         {liked ? "❤️" : "🤍"}
//       </span>
//     </div>
//   );
// }

// export default Heart;






// fetching data from API::::::::

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h3>{user.username}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;






// COUNTER APP:::::::

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default App;







// FORM HANDLING :::::::::

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h2>{name}</h2>
//     </div>
//   );
// }

// export default App;






// ROUTING IN REACT::::::::::

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home</h2>;
// }
// function About() {
//   return <h2>About</h2>;
// }
// function Contact() {
//   return <h2>Contact</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link> | 
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// FETCH API (name + website)::::::::::


// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.website}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
