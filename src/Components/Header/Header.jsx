// import React from "react";

// function Header() {
//   useEffect(() => {
//     // ---------Responsive-navbar-active-animation-----------
//     function test() {
//       let tabsNewAnim = document.querySelector("#navbarSupportedContent");
//       let selectorNewAnim = document
//         .querySelector("#navbarSupportedContent")
//         .querySelector("li").length;
//       let activeItemNewAnim = tabsNewAnim.find(".active");
//       let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//       let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//       let itemPosNewAnimTop = activeItemNewAnim.position();
//       let itemPosNewAnimLeft = activeItemNewAnim.position();

//       const horiSelector = doucment.querySelector(".hori-selector");
//       horiSelector.style.top = itemPosNewAnimTop.top + "px";
//       horiSelector.style.left = itemPosNewAnimLeft.left + "px";
//       horiSelector.style.height = activeWidthNewAnimHeight + "px";
//       horiSelector.style.width = activeWidthNewAnimWidth + "px";

//       $("#navbarSupportedContent").on("click", "li", function (e) {
//         $("#navbarSupportedContent ul li").removeClass("active");
//         $(this).addClass("active");
//         let activeWidthNewAnimHeight = $(this).innerHeight();
//         let activeWidthNewAnimWidth = $(this).innerWidth();
//         let itemPosNewAnimTop = $(this).position();
//         let itemPosNewAnimLeft = $(this).position();
//         $(".hori-selector").css({
//           top: itemPosNewAnimTop.top + "px",
//           left: itemPosNewAnimLeft.left + "px",
//           height: activeWidthNewAnimHeight + "px",
//           width: activeWidthNewAnimWidth + "px",
//         });
//       });

//       const navSuppContent = document.querySelector("#navbarSupportedContent");
//       navSuppContent.addEventListener("click", () => {
//         document
//           .querySelector("#navbarSupportedContent ul li")
//           .classList.remove("active");
//         this.classList.addClass("active");
//         let activeWidthNewAnimHeight = $(this).innerHeight();
//         let activeWidthNewAnimWidth = $(this).innerWidth();
//         let itemPosNewAnimTop = $(this).position();
//         let itemPosNewAnimLeft = $(this).position();
//       });
//     }
//     $(document).ready(function () {
//       setTimeout(function () {
//         test();
//       });
//     });
//     $(window).on("resize", function () {
//       setTimeout(function () {
//         test();
//       }, 500);
//     });
//     $(".navbar-toggler").click(function () {
//       setTimeout(function () {
//         test();
//       });
//     });
//   }, []);
//   return (
//     <>
//       <nav className="navbar navbar-expand-custom navbar-mainbg">
//         <a className="navbar-brand navbar-logo" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars text-white" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <div className="hori-selector">
//               <div className="left" />
//               <div className="right" />
//             </div>
//             <li className="nav-item">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="fas fa-tachometer-alt" />
//                 Dashboard
//               </a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="far fa-address-book" />
//                 Address Book
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="far fa-clone" />
//                 Components
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="far fa-calendar-alt" />
//                 Calendar
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="far fa-chart-bar" />
//                 Charts
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="javascript:void(0);">
//                 <i className="far fa-copy" />
//                 Documents
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
