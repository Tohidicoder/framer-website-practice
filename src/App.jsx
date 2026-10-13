// import { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Work from "./components/Work";
// import ProjectDetails from "./components/ProjectDetails";
// import Blog from "./components/Blog";
// import BlogPage from "./components/Blogpage";
// import Newsletter from "./components/Newsletter";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <BrowserRouter>
//       <div
//         className={`min-h-screen transition-colors duration-300 ${
//           darkMode ? "dark-theme bg-black text-white" : "bg-white text-black"
//         }`}
//       >
//         <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
//           {/* Shared Header */}
//           <Header darkMode={darkMode} setDarkMode={setDarkMode} />

//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <Projects darkMode={darkMode} />
//                   <Blog darkMode={darkMode} />
//                   <Newsletter />
//                 </>
//               }
//             />

//             {/* About Page */}
//             <Route path="/about" element={<About darkMode={darkMode} />} />

//             {/* Work Page */}
//             <Route
//               path="/work"
//               element={
//                 <>
//                   <Work darkMode={darkMode} />
//                   <Newsletter />
//                 </>
//               }
//             />

//             {/* Project Details */}
//             <Route
//               path="/work/:slug"
//               element={<ProjectDetails darkMode={darkMode} />}
//             />

//             {/* Blog Page */}
//             <Route
//               path="/blog"
//               element={
//                 <>
//                   <BlogPage darkMode={darkMode} />
//                   <Newsletter />
//                 </>
//               }
//             />

//             {/* Contact Page */}
//             <Route
//               path="/contact"
//               element={
//                 <>
//                   <Contact darkMode={darkMode} />

//                   <div className="mx-auto w-full max-w-[750px]">
//                     <Newsletter />
//                   </div>
//                 </>
//               }
//             />

//             {/* Redirect unknown URLs to Home */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>

//           {/* Shared Footer */}
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import ProjectDetails from "./components/ProjectDetails";
import Blog from "./components/Blog";
import BlogPage from "./components/Blogpage";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "dark-theme bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
          {/* Shared Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects darkMode={darkMode} />
                  <Blog darkMode={darkMode} />
                  <Newsletter />
                </>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<About darkMode={darkMode} />} />

            {/* Work Page */}
            <Route
              path="/work"
              element={
                <>
                  <Work darkMode={darkMode} />
                  <Newsletter />
                </>
              }
            />

            {/* Project Details */}
            <Route
              path="/work/:slug"
              element={<ProjectDetails darkMode={darkMode} />}
            />

            {/* Blog Listing and Article Pages */}
            <Route path="/blog" element={<BlogPage darkMode={darkMode} />} />

            <Route
              path="/blog/:slug"
              element={<BlogPage darkMode={darkMode} />}
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <>
                  <Contact darkMode={darkMode} />

                  <div className="mx-auto w-full max-w-[750px]">
                    <Newsletter />
                  </div>
                </>
              }
            />

            {/* Redirect Unknown URLs to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Shared Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
