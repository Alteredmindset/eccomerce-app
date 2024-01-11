// import React, { useState } from 'react'
// import { useStateContext } from '../context/StateContext'
// import { VscError } from 'react-icons/vsc'
// import Link from 'next/link'

// const Sidebarmenu = () => {
//   const { setShowMenu } = useStateContext()
//   const [showSubMenu, setShowSubMenu] = useState(null)
//   const [showSubSubMenu, setShowSubSubMenu] = useState(null)

//   const handleSubMenu = index => {
//     setShowSubMenu(showSubMenu === index ? null : index)
//   }

//   const handleSubSubMenu = index => {
//     setShowSubSubMenu(showSubSubMenu === index ? null : index)
//   }

//   return (
//     <div className="cart-wrapper1">
//       <div className="cart-container1">
//         <button
//           type="button"
//           className="cart-heading"
//           onClick={() => setShowMenu(false)}
//         >
//           <VscError />
//           <span className="cart-num-items">close</span>
//         </button>
//         <div>
//           <ul className="menu">
//             <li>
//               <button onClick={() => handleSubMenu(1)}>
//                 1. Computers & Accessories
//               </button>
//               {showSubMenu === 1 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(1)}>Laptops</button>
//                     {showSubSubMenu === 1 && (
//                       <ul className="subsubmenu">
//                         <li>
//                           <Link href="/subsubcategory/Dell">Dell</Link>
//                         </li>
//                         <li>
//                           <Link href="/subsubcategory/Apple">Apple</Link>
//                         </li>
//                         <li>
//                           <Link href="/subsubcategory/Asus">Asus</Link>
//                         </li>
//                         <Link href="/subsubcategory/HP">
//                           <li>HP</li>
//                         </Link>
//                         <li>Lenovo</li>
//                         <li>Chromebooks</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(2)}>
//                       Desktops
//                     </button>
//                     {showSubSubMenu === 2 && (
//                       <ul className="subsubmenu">
//                         <li>Gaming</li>
//                         <li>All-in-One</li>
//                         <li>Traditional Towers</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(3)}>
//                       Computer Accessories
//                     </button>
//                     {showSubSubMenu === 3 && (
//                       <ul className="subsubmenu">
//                         <li>Monitors</li>
//                         <li>Keyboards & Mice</li>
//                         <li>Printers & Scanners</li>
//                         <li>External Hard Drives</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button onClick={() => handleSubMenu(2)}>
//                 2. Smartphones & Accessories
//               </button>
//               {showSubMenu === 2 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(4)}>
//                       Smartphones
//                     </button>
//                     {showSubSubMenu === 4 && (
//                       <ul className="subsubmenu">
//                         <li>Samsung</li>
//                         <li>Apple</li>
//                         <li>OnePlus</li>
//                         <li>Google Pixel</li>
//                         <li>
//                           {' '}
//                           <Link href="/subsubcategory/Ulefone">Ulefone</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(5)}>
//                       Accessories
//                     </button>
//                     {showSubSubMenu === 5 && (
//                       <ul className="subsubmenu">
//                         <li>Phone Cases</li>
//                         <li>Screen Protectors</li>
//                         <li>Chargers</li>
//                         <li>Headphones</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button onClick={() => handleSubMenu(3)}>
//                 3. Television & Audio
//               </button>
//               {showSubMenu === 3 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(6)}>
//                       Televisions
//                     </button>
//                     {showSubSubMenu === 6 && (
//                       <ul className="subsubmenu">
//                         <li>4K UHD TVs</li>
//                         <li>LED TVs</li>
//                         <li>Smart TVs</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(7)}>Audio</button>
//                     {showSubSubMenu === 7 && (
//                       <ul className="subsubmenu">
//                         <li>Soundbars</li>
//                         <li>Home Theater Systems</li>
//                         <li>Bluetooth Speakers</li>
//                         <li>Headphones</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button onClick={() => handleSubMenu(4)}>4. Gaming</button>
//               {showSubMenu === 4 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(8)}>
//                       Gaming Consoles
//                     </button>
//                     {showSubSubMenu === 8 && (
//                       <ul className="subsubmenu">
//                         <li>PlayStation</li>
//                         <li>Xbox</li>
//                         <li>Nintendo Switch</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(9)}>
//                       Video Games
//                     </button>
//                     {showSubSubMenu === 9 && (
//                       <ul className="subsubmenu">
//                         <li>Action</li>
//                         <li>Adventure</li>
//                         <li>RPG</li>
//                         <li>Strategy</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(10)}>
//                       Gaming Accessories
//                     </button>
//                     {showSubSubMenu === 10 && (
//                       <ul className="subsubmenu">
//                         <li>Gaming Headsets</li>
//                         <li>Gaming Keyboards</li>
//                         <li>Gaming Mice</li>
//                         <li>Controllers</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
//             {/* Category 5 */}
//             <li>
//               <button onClick={() => handleSubMenu(5)}>
//                 5. Cameras & Photography
//               </button>
//               {showSubMenu === 5 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(15)}>
//                       Digital Cameras
//                     </button>
//                     {showSubSubMenu === 15 && (
//                       <ul className="subsubmenu">
//                         <li>DSLR</li>
//                         <li>Mirrorless</li>
//                         <li>Point & Shoot</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(16)}>
//                       Camera Accessories
//                     </button>
//                     {showSubSubMenu === 16 && (
//                       <ul className="subsubmenu">
//                         <li>Lenses</li>
//                         <li>Tripods</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(17)}>Drones</button>
//                     {showSubSubMenu === 17 && (
//                       <ul className="subsubmenu">
//                         <li>Recreational</li>
//                         <li>Professional</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(18)}>
//                       Camcorders
//                     </button>
//                     {showSubSubMenu === 18 && (
//                       <ul className="subsubmenu">
//                         <li>HD</li>
//                         <li>4K</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             {/* Category 6 */}
//             <li>
//               <button onClick={() => handleSubMenu(6)}>
//                 6. Home Appliances
//               </button>
//               {showSubMenu === 6 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(19)}>
//                       Refrigerators
//                     </button>
//                     {showSubSubMenu === 19 && (
//                       <ul className="subsubmenu">
//                         <li>Single Door</li>
//                         <li>Double Door</li>
//                       </ul>
//                     )}
//                   </li>
//                   {/* ... Other sub-categories similarly */}
//                 </ul>
//               )}
//             </li>
//             {/* Category 6 */}
//             <li>
//               <button onClick={() => handleSubMenu(6)}>
//                 6. Home Appliances
//               </button>
//               {showSubMenu === 6 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(19)}>
//                       Refrigerators
//                     </button>
//                     {showSubSubMenu === 19 && (
//                       <ul className="subsubmenu">
//                         <li>Single Door</li>
//                         <li>Double Door</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(20)}>
//                       Washing Machines
//                     </button>
//                     {showSubSubMenu === 20 && (
//                       <ul className="subsubmenu">
//                         <li>Front Load</li>
//                         <li>Top Load</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(21)}>
//                       Microwaves
//                     </button>
//                     {showSubSubMenu === 21 && (
//                       <ul className="subsubmenu">
//                         <li>Countertop</li>
//                         <li>Over-the-Range</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(22)}>
//                       Air Conditioners
//                     </button>
//                     {showSubSubMenu === 22 && (
//                       <ul className="subsubmenu">
//                         <li>Portable</li>
//                         <li>Window Unit</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(23)}>
//                       Vacuum Cleaners
//                     </button>
//                     {showSubSubMenu === 23 && (
//                       <ul className="subsubmenu">
//                         <li>Robotic</li>
//                         <li>Upright</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             {/* Category 7 */}
//             <li>
//               <button onClick={() => handleSubMenu(7)}>
//                 7. Health & Personal Care
//               </button>
//               {showSubMenu === 7 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(24)}>
//                       Hair Care Electronics
//                     </button>
//                     {showSubSubMenu === 24 && (
//                       <ul className="subsubmenu">
//                         <li>Hair Dryers</li>
//                         <li>Straighteners</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(25)}>
//                       Health Monitors
//                     </button>
//                     {showSubSubMenu === 25 && (
//                       <ul className="subsubmenu">
//                         <li>Blood Pressure Monitors</li>
//                         <li>Glucose Monitors</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(26)}>
//                       Personal Care Electronics
//                     </button>
//                     {showSubSubMenu === 26 && (
//                       <ul className="subsubmenu">
//                         <li>Electric Shavers</li>
//                         <li>Electric Toothbrushes</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             {/* Category 8 */}
//             <li>
//               <button onClick={() => handleSubMenu(8)}>
//                 8. Wearable Technology
//               </button>
//               {showSubMenu === 8 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(27)}>
//                       Smart Watches
//                     </button>
//                     {showSubSubMenu === 27 && (
//                       <ul className="subsubmenu">
//                         <li>Apple Watch</li>
//                         <li>Samsung Galaxy Watch</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(28)}>
//                       Fitness Trackers
//                     </button>
//                     {showSubSubMenu === 28 && (
//                       <ul className="subsubmenu">
//                         <li>Fitbit</li>
//                         <li>Garmin</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(29)}>
//                       Wearable Cameras
//                     </button>
//                     {showSubSubMenu === 29 && (
//                       <ul className="subsubmenu">
//                         <li>GoPro</li>
//                         <li>DJI Osmo</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             {/* Category 9 */}
//             <li>
//               <button onClick={() => handleSubMenu(9)}>
//                 9. Electronic Components & Parts
//               </button>
//               {showSubMenu === 9 && (
//                 <ul className="submenu">
//                   <li>
//                     <button onClick={() => handleSubSubMenu(30)}>
//                       Batteries
//                     </button>
//                     {showSubSubMenu === 30 && (
//                       <ul className="subsubmenu">
//                         <li>Alkaline Batteries</li>
//                         <li>Lithium Batteries</li>
//                         <li>Rechargeable Batteries</li>
//                         <li>Coin Cell Batteries</li>
//                         <li>Battery Packs</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(31)}>
//                       Connectors
//                     </button>
//                     {showSubSubMenu === 31 && (
//                       <ul className="subsubmenu">
//                         <li>USB Connectors</li>
//                         <li>HDMI Connectors</li>
//                         <li>VGA Connectors</li>
//                         <li>DVI Connectors</li>
//                         <li>Audio/Video Connectors</li>
//                         <li>Power Connectors</li>
//                         <li>PCB Connectors</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(32)}>Cables</button>
//                     {showSubSubMenu === 32 && (
//                       <ul className="subsubmenu">
//                         <li>USB Cables</li>
//                         <li>Ethernet Cables</li>
//                         <li>HDMI Cables</li>
//                         <li>VGA Cables</li>
//                         <li>Audio Cables (3.5mm, RCA)</li>
//                         <li>Power Cables</li>
//                         <li>Fiber Optic Cables</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(33)}>
//                       Switches
//                     </button>
//                     {showSubSubMenu === 33 && (
//                       <ul className="subsubmenu">
//                         <li>Toggle Switches</li>
//                         <li>Push Button Switches</li>
//                         <li>Rotary Switches</li>
//                         <li>DIP Switches</li>
//                         <li>Rocker Switches</li>
//                         <li>Reed Switches</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(34)}>
//                       Resistors
//                     </button>
//                     {showSubSubMenu === 34 && (
//                       <ul className="subsubmenu">
//                         <li>Fixed Resistors</li>
//                         <li>Variable Resistors (Rheostats, Potentiometers)</li>
//                         <li>Resistor Arrays</li>
//                         <li>Surface Mount Resistors</li>
//                         <li>Wirewound Resistors</li>
//                         <li>Film Resistors</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(35)}>
//                       Capacitors
//                     </button>
//                     {showSubSubMenu === 35 && (
//                       <ul className="subsubmenu">
//                         <li>Electrolytic Capacitors</li>
//                         <li>Ceramic Capacitors</li>
//                         <li>Tantalum Capacitors</li>
//                         <li>Film Capacitors</li>
//                         <li>Variable Capacitors</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button onClick={() => handleSubSubMenu(36)}>
//                       Transistors
//                     </button>
//                     {showSubSubMenu === 36 && (
//                       <ul className="subsubmenu">
//                         <li>Bipolar Junction Transistors (BJT)</li>
//                         <li>Field-Effect Transistors (FET)</li>
//                         <li>Metal-Oxide-Semiconductor FET (MOSFET)</li>
//                         <li>Junction FET (JFET)</li>
//                         <li>Insulated-Gate Bipolar Transistors (IGBT)</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebarmenu
