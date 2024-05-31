"use client";
import React from "react";

import { motion } from "framer-motion";

function Ring() {
  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.svg // large ring
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 fill-darkdusty"
      viewBox="0 0 866.04 730.02"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
    >
      <path d="M443.21,20.82c-44.01-.07-88.04,8.49-128.75,25.31-40.73,16.76-78.08,41.67-109.31,72.77-31.23,31.11-56.31,68.39-73.26,109.11-17.01,40.7-25.77,84.8-25.87,128.95-.07,44.14,8.51,88.32,25.39,129.15,16.82,40.86,41.8,78.33,73,109.65,31.21,31.32,68.6,56.48,109.45,73.49,40.83,17.06,85.07,25.85,129.35,25.95,44.28-.08,88.53-8.89,129.36-25.94,40.85-17.01,78.25-42.17,109.45-73.49,31.2-31.33,56.19-68.8,73-109.65,16.87-40.84,25.46-85.01,25.39-129.16-.1-44.14-8.86-88.24-25.87-128.95-16.95-40.73-42.04-78-73.27-109.11-31.23-31.1-68.58-56.01-109.31-72.77-40.71-16.82-84.75-25.38-128.76-25.31M443.21,20.82c44.01.11,87.98,8.84,128.55,25.8,40.59,16.9,77.76,41.9,108.76,73.03,31,31.13,55.83,68.37,72.54,108.97,16.77,40.58,25.3,84.48,25.23,128.34-.1,43.87-8.81,87.7-25.72,128.15-16.84,40.46-41.77,77.51-72.8,108.42-31.04,30.91-68.16,55.66-108.63,72.32-40.45,16.72-84.21,25.2-127.94,25.16-43.74.07-87.49-8.43-127.94-25.14-40.47-16.66-77.59-41.41-108.63-72.32-31.03-30.91-55.96-67.96-72.8-108.43-16.9-40.45-25.61-84.28-25.71-128.15-.07-43.87,8.45-87.76,25.23-128.35,16.71-40.6,41.54-77.84,72.54-108.97,31.01-31.13,68.17-56.14,108.77-73.03,40.58-16.96,84.54-25.69,128.55-25.8" />
      <path d="M403.67,707.7c186.13,0,337.55-151.43,337.55-337.55S589.8,32.6,403.67,32.6,66.12,184.02,66.12,370.15s151.42,337.55,337.55,337.55M403.67,35.41c184.57,0,334.74,150.16,334.74,334.74s-150.16,334.73-334.74,334.73S68.94,554.73,68.94,370.15,219.09,35.41,403.67,35.41Z" />
      <path d="M763.52,470.73c-1.78.44-2.74-1.58-2.02-2.77-.27-.29-.47-.67-.47-1.19-.07-24.71,6.37-50.87,14.69-74.03,10.54-29.35,34.4-50.97,47.21-79.15-.23-1.9,2.85-2.61,3.59-.56,10.87,30.08,17.22,70.91,5.13,101.59-11.06,28.06-39.46,49.12-68.12,56.12M764.7,466.61c.25-.07.49-.13.74-.2-.28.1-.52.05-.73-.06,0,.08-.01.17,0,.26ZM764.75,464.88c12.57-5.66,20.4-19.04,27.75-30.58-1.92-9.99-6.95-20.05-11.93-28.73-1.54-2.7-2.41-5.09-2.83-7.5-7.35,21.08-12.76,44.64-12.99,66.82ZM792.61,370.58c3.73,6.29,7.46,12.6,11.19,18.89,2.51,4.24,5.72,8.54,6.99,13.37.2-.42.43-.83.62-1.25,12.02-25.69,13.75-52.8,13.86-80.63-.25-.8-.52-1.6-.78-2.39-5.49,11.16-12.53,21.4-19.72,31.54,6.22,7.05,8.99,16.34,15.26,23.35.72.81-.47,2.01-1.19,1.2-6.21-6.94-9-16.12-15.07-23.12-9.38,13.24-18.69,26.49-24.39,41.87-.38,6.96,3.39,11.45,6.63,18.24,3.05,6.38,6.12,13.59,7.73,20.68.19-.3.38-.61.57-.91,5.61-8.59,10.92-17.38,15.47-26.57-.12-.1-.24-.2-.27-.39-1.09-5.85-5.5-11.31-8.49-16.36-3.29-5.56-6.58-11.12-9.88-16.67-.55-.93.91-1.79,1.46-.85ZM826.94,326.31c-.34,26.29-2.63,51.74-14.07,76.13-5.26,11.23-11.78,21.81-18.64,32.13.08.43.21.86.28,1.29.14.99-1.22,1.41-1.54.59-.9,1.34-1.78,2.69-2.69,4.02-6.9,10.14-13.2,20.73-24.75,25.89,25.08-7.02,49.92-25.17,61-49.34-7.2,2.97-14.59,5.18-22.24,6.64-1.06.21-1.52-1.42-.45-1.63,7.73-1.47,15.19-3.71,22.46-6.72.4-.16.66.02.83.3,1.24-2.87,2.34-5.79,3.17-8.81,6.95-25.25,4.04-54.82-3.36-80.51Z" />
      <path d="M756.14,490.62c7.85-3.7,17.08-5.68,25.42-8.02,1.33-.38,2.64.91,2.25,2.25-4.84,16.69-21.47,22.76-37.41,23.35-.85.03-1.38-.43-1.61-1.02-.63-.52-1.03-1.38-.62-2.33,1.07-2.44,2.33-4.74,3.79-6.88-.51.39-1.2.54-1.92.14-16.98-9.28-13.12-36.55-6.72-51.06.65-1.48,2.98-.98,3.35.44,2.14,8.31,6.35,16,8.02,24.43,1.43,7.19.91,14.58.85,21.88,1.36-1.23,2.84-2.34,4.61-3.18" />
      <path d="M686.39,588.32c-.53-.65-.69-1.61.04-2.4.16-.18.34-.33.5-.5.02-.24.11-.46.36-.62.2-.13.42-.23.62-.36,19.66-20.76,45.61-32.6,72.53-41.24,33.77-10.84,68.59-18.06,103.75-22.51,1.11-.15,2.17,1.29,1.77,2.31-12.28,30.82-36.56,54.02-68.14,64.45-19.71,6.51-40.9,9.55-61.6,10.54-16.26.76-35.32,2.24-49.08-8.01-.59-.44-.78-1.06-.75-1.66M698.13,579.65c8.91-3.01,18.44-3.83,27.99-5.28,8.25-1.25,16.49-2.71,24.67-4.39.05-.1.04-.2.14-.29,7.14-6.18,11.56-14.4,12.78-23.66-23.77,7.5-46.87,17.24-65.57,33.61ZM787.67,586.56c-7.26-4.1-14.91-8.12-22.88-10.43-7.18-2.09-14.58-.74-21.73-2.87-.03-.01-.03-.04-.05-.05-1.61.3-3.21.62-4.83.9-7.84,1.38-16.21,2.07-24.4,3.41,6.17,2.66,12.33,5.34,18.48,8.07,4.88,2.17,10.08,3.96,13.65,8.04,14.09-1.16,28.13-3.42,41.77-7.07ZM765.46,545.47c-1.04,9.19-5.08,17.46-11.73,23.88,6.21-1.32,12.39-2.75,18.52-4.38,2.26-.6,4.49-1.28,6.72-1.93.01-.1-.03-.2.03-.31,4.18-7.53,7.06-15.46,8.81-23.84-9.8,2.73-17.46,5.05-20.1,5.86-.76.23-1.51.48-2.26.72ZM799.03,556.47c6.74-6.65,11.21-14.75,13.29-23.95-7.89,1.89-15.74,3.96-22.66,5.88-1.67,8.45-4.54,16.46-8.62,24.06,6.07-1.8,12.07-3.8,17.99-5.98ZM814.2,532.07c-1.81,8.73-5.87,16.51-11.73,23.09,18.84-7.24,36.76-16.56,53.25-28.43-7.26-1.72-24.26,1.28-41.52,5.34ZM846.24,550.18c1.82-2.24,14.04-16.94,13.1-20.87-.19-.8-.79-1.41-1.67-1.89-17.76,12.96-37.21,22.96-57.73,30.56-.05.05-.08.1-.14.15-.24.23-.51.24-.76.17-5.69,2.08-11.44,4.03-17.28,5.76-3.8,1.13-7.62,2.17-11.45,3.16,13.97.25,27.67,6.39,40.72,10.8,7.85-3.83,15.25-8.52,22.07-14.32,4.78-4.07,9.18-8.65,13.14-13.52ZM808.85,579.05c-13.31-4.64-27.38-10.83-41.56-10.18-.5.02-.75-.33-.78-.72-6.44,1.59-12.92,3.03-19.43,4.3,7.01,1.25,14.09.51,21.07,3.05,7.61,2.76,14.87,6.45,21.9,10.45,6.52-1.84,12.79-4.12,18.81-6.9ZM736.22,594.32c2.46-.12,4.92-.35,7.38-.53-3.97-3.73-9.67-5.63-14.54-7.8-5.86-2.59-11.73-5.15-17.61-7.68-.19-.09-.25-.22-.32-.35-5.63,1.03-11.11,2.47-16.23,4.71-1.64,1.56-3.28,3.12-4.84,4.79,13.08,8.98,30.96,7.57,46.16,6.85Z" />
      <path d="M708.23,547.24c-6.09,12.72-17.7,21.65-31.56,24.26-1.48.28-2.47-.97-2.15-2.22-.88-.57-1.39-1.86-.51-2.9,8.62-10.17,19.54-17.53,32.15-21.84,1.64-.56,2.7,1.36,2.07,2.69" />
      <path d="M657.91,554.36c2.67,13.8,4.75,27.68-1.22,40.9-.79,1.73-2.97.83-3.27-.7-.5.29-1.04.54-1.68.73-.26.08-.52.07-.77.03.06.29.08.59.14.88.47,2.3-3.06,3.28-3.53.97-3.1-15.06-.73-29.93,6.99-43.25.75-1.29,3.04-1.15,3.34.44" />
      <path d="M703.54,523.05c.11,1.57-1.54,2.46-2.63,2.04-.62.06-1.26-.15-1.69-.82-.48-.75-1-1.42-1.52-2.08-.41-.11-.78-.34-1-.78-.16-.31-.26-.63-.41-.95-1.43-1.7-2.84-3.37-3.9-5.63-1.74-3.69-3.07-7.72-4.19-11.64-1.81-6.28-3.74-16.01.45-21.8.36-.5.91-.97,1.58-.91,5.31.55,9.25,10.41,11.42,14.48,4.56,8.58,5.02,16.78,4.08,26.34-.12,1.24-1.23,1.81-2.2,1.72" />
      <path d="M708.01,391.85c5,9.27,6.66,18.9,7.33,29.31.48,7.44.63,14.97,2.99,22.12,2.43,7.38,6.95,14.02,9.58,21.38.79,2.22-2.74,3.18-3.53.97-1.22-3.41-2.67-6.6-4.15-9.74-.32.13-.69.19-1.13.06-25.71-7.61-45.6-17.76-57.83-42.76-11.1-22.69-13.83-47.89-9.44-72.62.19-1.09,1.79-1.76,2.69-1.09,19.48,14.5,41.73,30.53,53.5,52.36M712.76,435.4c-1.45-9.07-.53-18.44-2.52-27.45-1.66-7.51-4.93-14.33-9.19-20.63,1.21,13.86-.57,27.53-2.64,41.34,0,.03-.04.03-.04.06,5.43,7.52,11.56,14.53,19.09,21.18-2.05-4.57-3.85-9.24-4.7-14.51ZM716.26,451.25c-7.91-6.57-15.48-13.43-21.22-22.08-2.5-3.77-4.75-7.71-6.94-11.69-8,0-15.64-1.71-22.89-4.92,11.03,20.97,28.25,31.44,51.05,38.7ZM653.55,355.09c-.76,4.5-.36,9.63-.08,14.13.77,12.37,3.52,24.42,8.22,35.89.72,1.75,1.48,3.44,2.27,5.07,7.31,3.59,15.03,5.42,23.16,5.56-1.35-2.48-2.68-4.96-4.01-7.45-.45-.08-.84-.44-.68-1,.02-.06.03-.12.04-.19-1.42-2.66-2.86-5.29-4.36-7.89-9.59-16.67-18.73-33.05-21.24-52.28-1.53.26-2.4,2.64-3.34,8.16ZM658.65,347.31c2.78,20.27,13.21,37.48,23.25,55.03.42.73.82,1.41,1.23,2.13,2.95-11.19,4.05-22.53,3.26-34.09-6.47-6.2-13.47-11.86-20.04-17.16-3.55-2.87-5.95-5.02-7.7-5.9ZM688.15,372.1c.61,11.71-.61,23.15-3.8,34.48,4.14,7.16,8.22,13.85,12.64,20.17,2.09-14.12,3.77-28.08,2.04-42.29-3.24-4.38-6.95-8.48-10.88-12.37Z" />
      <path d="M782.85,279.83c.23-.39.58-.63.97-.76,1.04-1.63,2.29-3.26,3.79-4.89,1.15-1.25,3.01-.18,3.13,1.3.61,8.02,1.27,16.29-.43,24.24-1.96,9.15-9.69,16.21-10.7,25.43-.25,2.31-3.91,2.34-3.66,0,.32-2.9,1.25-5.31,2.37-7.62-.21-.21-.44-.41-.53-.79-2.65-11.49-.92-26.61,5.07-36.9" />
      <path d="M777.95,358.27c.17.39.37.75.54,1.14.33.79-.06,1.45-.66,1.85.19.07.33.19.52.26,2.19.81,1.24,4.35-.97,3.53-2.73-1.01-5-2.45-7.07-4.07-.49-.07-.95-.31-1.26-.81-.06-.1-.1-.2-.16-.29-7.81-7.01-11-18.05-13.39-28.51-.33-1.43,1.3-3.04,2.69-2.07,9.73,6.82,16.9,15.8,21.44,26.78.54,1.32-.55,2.17-1.69,2.17M772.31,357.7c-.08.04-.14.1-.23.13.41.33.8.69,1.24,1-.33-.38-.69-.75-1.01-1.13Z" />
      <path d="M775.47,264.66c.13,1.91.25,3.84.38,5.75.1,1.51-1.36,2.03-2.47,1.61-.47,2.16-.83,4.36-.99,6.63-.16,2.34-3.82,2.36-3.66,0,.34-4.84,1.51-9.38,3.1-13.75-2.59-40.06-4.06-80.37,7.94-119.19.53-1.71,3.03-1.77,3.53,0,6.62,23.36,10.65,48.26,9.2,72.62-1.02,17.28-11.61,30.92-17.04,46.32M781.48,153.06c-9.23,34.07-8.57,69.21-6.47,104.24,5.28-11.24,12.12-21.9,13.54-34.68,2.55-22.96-1.21-47.18-7.07-69.56Z" />
      <path d="M579.5,665c-.97-.76-1.04-2.74.53-3.34,43.3-16.79,88.95-24.53,135.36-22.99,1.57.05,2.44,1.97,1.3,3.13-14.44,14.57-40.1,16.17-59.23,19.39-25.45,4.28-51.13,6.54-76.92,7.11-1.93.04-2.25-2.37-1.03-3.29M710.53,642.29c-43.78-.83-86.8,6.65-127.74,22.27,22.94-.6,45.78-2.48,68.47-6.06,17.9-2.82,43.99-4.46,59.28-16.21Z" />
      <path d="M671.2,615.45c3.69-.48,7.43-.5,11.25-.08.94.1,1.49.77,1.68,1.49.08,0,.16-.02.24-.03,1.41-.16,2.14,1.64,1.55,2.74.4.81.25,1.88-.61,2.43-13.31,8.62-28.91,8.67-44.25,8.19-2.35-.07-2.36-3.73,0-3.66.9.03,1.81.04,2.71.07-.31-.8-.06-1.81.73-2.29,4.52-2.74,9.27-4.71,14.16-5.96,3.97-1.75,8.19-2.56,12.56-2.89" />
      <path d="M609.71,610.98c-6.55,9.01-14.5,17.11-20.12,26.47-.97,2.82-2.19,5.57-3.71,8.27.04.55.09,1.1.14,1.65.1,1.19-.79,1.77-1.72,1.75-.66,2.19-1.18,4.46-1.49,6.84-.3,2.3-3.97,2.33-3.67,0,.53-4,1.6-7.73,2.97-11.3-2.17-24.97-4.1-50.52,1.41-75.19,5.89-26.37,24.29-47.1,31.05-73.03.38-1.46,2.62-1.86,3.35-.43,12.26,24.18,15.57,51.71,8.97,78.08-3.33,13.28-9.12,25.83-17.18,36.9M616.37,592.68c4.36-9.31,7.29-19.08,8.84-29.02-7.92,8.43-16.13,16.57-24.71,24.33-.39.35-1.04.24-1.28-.24-2.43,10.59-4.25,21.2-5.78,32.04-.34,2.4-.7,4.74-1.13,7.03,8.2-11.2,18.17-21.57,24.06-34.14ZM585.21,637.92c1.38-2.57,2.91-5.06,4.56-7.49,1.41-6.2,2.1-12.6,3.08-19.24.43-2.92,1.05-5.79,1.58-8.69-.09-.06-.19-.08-.26-.19-3.65-6.53-6.6-13.34-9.06-20.38-2.47,18.48-1.46,37.39.1,55.99ZM585.59,578.57s.07.05.08.1c2.4,7.4,5.52,14.47,9.22,21.3,1.03-5.31,2.19-10.58,3.5-15.83-2.03-10.07-4.05-20.15-6.08-30.22-1.58,3.86-3.03,7.77-4.11,11.85-1.12,4.23-1.93,8.5-2.61,12.8ZM593,552.29c.36-.03.73.1.82.57,1.24,6.15,2.48,12.31,3.72,18.47.53,2.63,1.06,5.28,1.59,7.92.07.37.13.73.17,1.09.18-.69.32-1.39.5-2.08,6.63-24.98,14.75-49.39,17.43-75.19-.18-.4-.38-.79-.56-1.18-5.69,17.78-16.41,33.31-23.68,50.39ZM618.55,506.26c-3.01,24.76-10.72,48.38-17.11,72.45-.47,1.77-.87,3.53-1.3,5.3.37.43.95.58,1.97.24,2.08-.69,4.85-4.51,6.44-6.03,1.82-1.75,3.62-3.5,5.41-5.28,3.97-3.94,7.82-7.99,11.63-12.09,2.38-18.38,0-37.2-7.03-54.59Z" />
      <path d="M737.57,372.04c-8.61-16.11-21.03-28.93-30.68-44.18-8.94-14.12-11.13-32.26-15.11-48.2-.41-1.64,1.85-3.3,3.06-1.78,19.91,24.95,51.41,55.88,45.82,90.59-.06.39-.23.65-.44.86.16.29.35.56.5.86,1.11,2.08-2.05,3.93-3.16,1.85M697.15,286.46c3.6,15.72,6.93,31.83,16.71,44.85,8.29,11.04,16.53,21.47,23.54,33.23,2.69-28.72-22.18-56.31-40.26-78.09Z" />
      <path d="M738.91,391.19c0,1.3-1.5,2.18-2.68,1.55-5.1-2.67-10.35-5.51-13.76-10.3-3.69-5.18-5.3-12.05-7.09-18.05-.38-1.29.93-2.69,2.25-2.25,12.05,4.06,20.93,14.21,23.03,26.8.21,1.27-.77,2.11-1.75,2.25M730.75,385.04c0,.08-.01.16-.03.24.17.12.36.21.52.33-.17-.19-.33-.38-.49-.56Z" />
      <path d="M720.15,251.07c.56,1.06.02,2.06-.8,2.51.49.34,1.04.59,1.5.97,1.82,1.5-.78,4.07-2.59,2.58-4.17-3.44-10.38-4.56-15.3-6.58-4.29-1.77-8.57-3.69-12.57-6.07-6.36-3.77-11.29-8.52-14.03-15.46-.65-1.64,1.41-2.68,2.69-2.07,8.22,3.94,17.48,2.05,25.31,7.23,6.45,4.26,12.14,10.07,15.78,16.89M709.65,247.4s-.02.04-.03.07c.05.03.1.06.15.08-.04-.05-.08-.1-.13-.15Z" />
      <path d="M737.55,287.08c-.14.75-.8,1.17-1.52,1.27-.17.27-.28.56-.46.84-.23.36-.52.56-.83.69-.01.03-.02.06-.03.09-.48,1.36-2.6,1.96-3.34.44-.52-1.05-.88-2.07-1.2-3.1-.93.02-1.96-.55-2.1-1.74-1.42-12.44,4.68-24.25,15.5-30.49,1.12-.64,2.88.16,2.75,1.58-.86,9.99-3.72,19.38-8.37,28.12-.14.77-.27,1.53-.41,2.29" />
      <path d="M743.98,209.31c.81,1.32-.02,3.4-1.89,2.81-15.16-4.78-30.58-12.19-35.42-28.57-.04-.13.02-.24,0-.36-.27-.24-.55-.46-.82-.7-1.35-1.21.07-3.64,1.78-3.06,7.53,2.53,14.43,6.12,20.62,10.67,7.46,3.24,13.33,8.74,16.72,16.4.16.36.18.76.12,1.16.09.74-.42,1.37-1.11,1.66M732.33,204.57s-.05.01-.07.02c.08.04.15.08.24.11-.06-.04-.11-.09-.17-.14Z" />
      <path d="M471.63,697.73c.2-.39.53-.72,1.05-.89,44.85-14.6,95.78-18.27,136.22,9.88,1.11.78,1.24,2.42,0,3.16-12.72,7.65-26.44,13.33-40.42,16.7-.23.43-.78.7-1.28.32-34.08,7.85-69.59,1.51-95.97-26.37-.93-.98-.46-2.22.39-2.81M511.78,708.28c-10.49,1.1-20.34,1.17-29.98-2.87,14.34,12.19,31.55,19.74,50.8,21.33-6.96-5.77-13.92-11.54-20.88-17.3-.45-.38-.29-.87.06-1.16ZM475.67,699.74c.45.45.91.88,1.37,1.33,17.33,10.29,35.56,4.57,54.65,3.06.01-.25.09-.49.37-.66,6.64-4.15,12.93-8.76,18.98-13.71-2.15-.2-4.29-.39-6.45-.5-23.49-1.1-46.62,3.4-68.91,10.48ZM596.01,702.87c-5.55-3.04-11.38-5.52-17.39-7.52-8.17-2.7-16.59-4.44-25.13-5.39-6.08,5.06-12.47,9.73-19.14,13.99.96-.06,1.91-.11,2.87-.14,21.25-.56,42.95,3.38,64.07,5.94,2.91-3.88-.17-4.08-5.29-6.89ZM599.86,711.27c-17.89-2.21-36.2-5.23-54.35-5.59,6.96,6.09,13.92,12.19,20.88,18.28,5.45-1.29,10.81-2.93,16.04-4.92,3.56-1.36,13.44-4.42,17.44-7.77ZM564.35,724.42c-7.12-6.23-14.25-12.47-21.38-18.71-.02-.02,0-.04-.03-.06-6.29-.03-12.57.25-18.79,1.07-3.92.52-7.73,1.04-11.46,1.45.07.03.14.01.21.06,7.49,6.21,14.98,12.41,22.47,18.62,9.71.52,19.47-.35,28.97-2.44Z" />
      <path d="M591.47,682.48c-14.7,3.53-29.44,4.5-43.31-1.8-.1-.01-.2-.02-.29-.02-.61-.04-1.05-.32-1.35-.7-.23-.12-.47-.19-.7-.31-.13-.07-.21-.16-.32-.25-.16.03-.33.06-.5.09-2.3.47-3.28-3.05-.97-3.53,16.07-3.34,31.93-2.37,47.44,3,1.62.56,1.86,3.08,0,3.53" />
      <path d="M533.31,680.45c-.68.61-1.47.59-2.1.25-.19.08-.34.19-.54.2-.39.43-.74.88-1.14,1.31-.67.7-1.49.66-2.13.26-.86-.07-1.72-.63-1.79-1.73-.43-6.18-.75-12.48.79-18.46.03-.17.02-.35.05-.51.25-1.12.68-2.18,1.19-3.21.08-.22.15-.43.24-.65,3.15-7.03,9.06-12.21,14.77-17.14.95-.82,2.79-.65,3.06.81,1.35,7.25,2.74,14.86.46,22.07-2.2,6.99-7.59,12.03-12.86,16.8" />
      <path d="M83.65,255.94c1.79-.41,2.75,1.63,2.02,2.8.27.29.45.66.44,1.17-.3,24.71-7.12,50.76-15.79,73.8-10.99,29.2-35.17,50.47-48.39,78.47.16,1.89-2.88,2.57-3.59.52-10.43-30.3-16.18-71.12-3.62-101.66,11.47-27.88,40.18-48.54,68.94-55.11M82.44,260.04c-.25.06-.51.14-.77.2.29-.11.53-.05.76.08,0-.1,0-.19,0-.28ZM82.37,261.77c-12.8,5.53-20.67,18.68-28.21,30.17,1.82,10.48,7.07,20.59,12.03,29.79,1.24,2.32,1.88,4.46,2.21,6.61,7.65-20.95,13.41-44.43,13.97-66.57ZM53.1,355.64c-3.43-5.98-6.85-11.96-10.27-17.93-2.69-4.69-6.03-9.38-7.42-14.64-.21.42-.44.83-.65,1.26-12.41,25.55-14.55,52.56-15.08,80.42.24.81.5,1.6.75,2.4,5.66-11.07,12.85-21.21,20.19-31.24-6.09-7.14-8.75-16.45-14.9-23.56-.71-.82.48-2.02,1.2-1.19,6.1,7.04,8.77,16.24,14.73,23.35,9.56-13.07,19.04-26.16,24.97-41.41.44-6.97-3.34-11.74-6.35-18.53-2.92-6.59-5.85-13.6-7.37-20.73-.2.3-.39.61-.59.9-5.74,8.5-11.19,17.23-15.88,26.36.11.1.23.19.26.38,1.27,6.26,5.73,12.1,8.89,17.6,2.99,5.23,5.99,10.46,8.98,15.7.54.94-.92,1.8-1.45.85ZM18.1,399.37c.73-26.26,3.42-51.71,15.2-75.9,5.44-11.16,12.12-21.65,19.15-31.87-.08-.5-.23-.99-.3-1.49-.12-.95,1.11-1,1.53-.28.93-1.35,1.85-2.7,2.79-4.04,7.04-10,13.53-20.55,25.15-25.52-25.18,6.65-50.29,24.41-61.74,48.41,7.24-2.86,14.65-4.96,22.33-6.3,1.06-.18,1.52,1.44.45,1.63-7.75,1.36-15.25,3.48-22.56,6.39-.4.16-.67-.04-.84-.31-1.28,2.84-2.42,5.74-3.3,8.74-7.32,25.1-4.85,54.78,2.15,80.57Z" />
      <path d="M63.6,241.53c5.09-16.61,21.78-22.46,37.74-22.81.83-.02,1.35.43,1.59,1.01.65.51,1.07,1.39.63,2.35-1.1,2.42-2.4,4.71-3.89,6.82.51-.37,1.18-.5,1.89-.1,16.83,9.54,12.61,36.71,5.99,51.15-.67,1.45-2.99,1.01-3.35-.44-2.02-8.34-6.09-16.09-7.65-24.55-1.33-7.22-.69-14.61-.52-21.91-1.37,1.21-2.87,2.29-4.64,3.09-7.9,3.59-17.16,5.43-25.54,7.64-1.32.35-2.67-.89-2.25-2.25" />
      <path d="M64.19,139.93c19.08-8.31,39.67-13.66,60.21-16.8,15.05-2.3,31.22-5.06,45.03,2.79.65.37.88.94.86,1.51.6.5.87,1.3.28,2.13-.16.24-.36.45-.53.68.04.23,0,.47-.24.67-.23.19-.47.34-.69.52-16.97,22.93-41.02,37.83-66.64,49.71-32.17,14.91-65.82,26.42-100.16,35.16-1.36.34-2.61-.89-2.25-2.25,8.88-33.92,32.07-60.18,64.13-74.14M27.47,170.01c-5.05,5.6-9.51,11.72-13.25,18.27-1.82,3.19-11.71,19.58-9.56,22.7.08.13.3.19.46.27,16.67-16.15,35.65-29.2,56.12-39.79.07-.08.11-.17.18-.25.22-.28.49-.29.73-.21,5.34-2.74,10.75-5.35,16.27-7.77,3.82-1.67,7.72-3.13,11.6-4.66-14.05,1.61-28.48-2.8-42.15-5.63-7.44,4.8-14.34,10.36-20.4,17.07ZM62.26,172.89c-5.67,7.18-9.04,15.49-10.08,24.54,7.28-2.55,14.51-5.22,21.68-8.06.65-8.52,2.48-16.73,5.58-24.71-5.84,2.55-11.55,5.32-17.19,8.24ZM49.95,151.66c13.7,2.95,28.33,7.36,42.22,4.98.51-.09.88.26,1,.65,6.23-2.38,12.51-4.61,18.85-6.68-7.21-.37-14.22,1.18-21.49-.49-7.82-1.79-15.4-4.55-22.79-7.62-.63.26-1.26.48-1.88.74-5.57,2.42-10.83,5.28-15.91,8.41ZM69.99,141.61c6.81,2.78,13.8,5.31,20.99,6.89,8.44,1.85,16.47-.45,24.86.81.1-.03.2-.07.3-.1,8.88-2.81,18.88-4.79,28.42-7.67-7.19-2.1-14.37-4.23-21.53-6.41-4.57-1.4-8.98-2.54-12.55-5.7-13.8,2.9-27.44,6.86-40.49,12.18ZM115.15,128.42c-.81.16-1.62.36-2.44.53,4.56,3.36,10.94,4.62,16.17,6.19,5.84,1.76,11.7,3.49,17.56,5.2.26.08.43.24.52.43,5.46-1.76,10.71-3.87,15.44-6.69,1.46-1.77,2.91-3.53,4.27-5.4-15.19-8-35.58-3.32-51.52-.25ZM159.7,137.36c-7.11,3.43-14.81,5.34-22.8,7.52-9.55,2.61-19.03,5.48-28.42,8.64-.03.11-.02.24-.12.34-6.33,7.05-9.61,15.65-9.7,24.98,22.64-10.36,44.5-22.89,61.03-41.49ZM96.99,179.63c-.1-9.29,2.93-17.95,8.73-25.17-4.56,1.57-9.1,3.2-13.59,4.95-3.59,1.4-7.15,2.87-10.69,4.39,0,.08.06.15.01.25-3.2,7.94-5.09,16.11-5.82,24.59,6.36-2.55,12.72-5.12,18.98-7.91.79-.36,1.58-.74,2.38-1.1ZM50.39,198.09c.87-8.62,3.84-16.52,8.71-23.57-18.79,10.02-36.3,22.18-51.85,37.07,8.65-.33,35.18-10.69,39.17-12.05,1.33-.45,2.64-.99,3.97-1.45Z" />
      <path d="M175.06,149.39c1.48-.26,2.5,1,2.15,2.25.87.56,1.37,1.85.48,2.87-8.77,10.03-19.8,17.25-32.47,21.36-1.62.53-2.73-1.34-2.06-2.69,6.28-12.63,18.01-21.4,31.9-23.8" />
      <path d="M201.98,122.76c.37-.25.77-.49,1.24-.69.35-.15.68-.21,1-.21-.11-.36-.19-.73-.31-1.09-.74-2.25,2.8-3.2,3.53-.97,4.83,14.67,4.03,29.59-2.08,43.75-.66,1.55-2.92.92-3.34-.44-4.2-13.22-7.89-26.66-3.55-40.31.59-1.86,3.1-1.5,3.53-.04" />
      <path d="M146.15,198.28c.72-.22,1.54-.06,2.05.75.47.76.99,1.45,1.5,2.11.4.12.75.36.96.79.13.25.2.52.32.77,1.31,1.55,2.61,3.09,3.56,5.07,1.89,3.91,3.22,8.32,4.35,12.49,1.71,6.3,3.51,16.07-.76,21.79-.36.48-.91.99-1.58.91-5.34-.64-9.08-10.49-11.22-14.63-4.46-8.62-4.77-16.88-3.69-26.4.14-1.24,1.24-1.8,2.21-1.72-.02-.11-.05-.22-.05-.33-.18-1.48,1.22-2.01,2.34-1.61" />
      <path d="M138.01,335.66c-4.86-9.35-6.39-19-6.9-29.42-.37-7.44-.41-14.98-2.65-22.16-2.32-7.42-6.74-14.13-9.26-21.52-.75-2.24,2.78-3.19,3.53-.97,1.17,3.43,2.58,6.65,4.01,9.81.32-.12.68-.17,1.1-.03,25.56,7.98,45.33,18.44,57.2,43.6,10.78,22.85,13.13,48.1,8.37,72.76-.21,1.06-1.78,1.79-2.69,1.09-19.24-14.78-41.29-31.16-52.72-53.14M161.88,321.25c-4.04-7.22-8.01-13.97-12.33-20.36-2.31,14.08-4.19,28.03-2.68,42.26,3.18,4.42,6.81,8.57,10.69,12.52-.43-11.72.96-23.13,4.32-34.42ZM133.9,291.99c1.32,9.08.26,18.44,2.11,27.48,1.54,7.54,4.72,14.43,8.89,20.8-1-13.88.99-27.5,3.26-41.29,0-.04.04-.05.05-.07-5.32-7.61-11.33-14.7-18.77-21.46,1.98,4.58,3.7,9.28,4.47,14.55ZM130.65,276.12c7.81,6.69,15.27,13.65,20.88,22.39,2.45,3.81,4.64,7.79,6.77,11.8,8.04.12,15.69,1.96,22.91,5.31-10.68-21.04-27.61-31.82-50.56-39.51ZM191.91,373.24c.39-4.69.51-9.43.29-14.13-.55-11.63-2.81-23.13-6.85-34.05-.92-2.49-1.94-4.82-3-7.07-7.26-3.7-14.95-5.66-23.1-5.92,1.31,2.5,2.61,5,3.9,7.51.44.08.84.44.66,1-.02.06-.03.13-.05.2,1.38,2.67,2.78,5.33,4.23,7.95,9.41,16.95,18.4,33.6,20.53,53.08,3.6,1.4,4.76-1.41,3.4-8.56ZM184.94,379.69c.63.47,1.19.83,1.73,1.17-2.49-20.28-12.64-37.63-22.4-55.32-.41-.74-.8-1.43-1.21-2.16-3.12,11.15-4.38,22.47-3.77,34.04,6.38,6.29,13.28,12.05,19.76,17.45,1.94,1.63,3.9,3.24,5.89,4.81Z" />
      <path d="M63.08,441.05c-.23.39-.59.63-.97.75-1.07,1.61-2.34,3.22-3.87,4.83-1.15,1.21-3.03.22-3.13-1.3-.48-8.03-1.02-16.31.79-24.23,2.08-9.12,9.94-16.07,11.08-25.26.29-2.31,3.95-2.33,3.66,0-.36,2.91-1.33,5.31-2.47,7.61.2.21.42.39.51.79,2.47,11.52.53,26.61-5.61,36.81" />
      <path d="M67.56,368.15c-.16-.38-.35-.73-.5-1.11-.32-.79.08-1.46.69-1.87-.18-.08-.31-.19-.49-.26-2.18-.85-1.23-4.38.97-3.53,2.71,1.05,4.95,2.52,7,4.16.49.07.96.31,1.26.83.06.1.11.21.17.32,7.7,7.11,10.72,18.17,12.95,28.67.3,1.4-1.3,3.08-2.69,2.07-9.63-6.99-16.66-16.04-21.05-27.09-.53-1.33.56-2.18,1.7-2.19M73.19,368.82c.08-.04.15-.11.23-.13-.42-.35-.81-.73-1.26-1.05.34.39.7.78,1.03,1.18Z" />
      <path d="M72.04,459.74c-.1-1.92-.18-3.83-.29-5.75-.08-1.52,1.4-2.04,2.51-1.6.49-2.15.89-4.33,1.08-6.58.2-2.33,3.86-2.35,3.66,0-.41,4.83-1.64,9.3-3.31,13.59,1.99,40.12,2.88,80.51-9.72,119.17-.55,1.67-3.04,1.81-3.53,0-6.28-23.47-9.92-48.4-8.13-72.76,1.28-17.28,12.07-30.74,17.73-46.06M64.36,571.24c9.77-34.05,9.61-69.32,8.01-104.49-5.02,10.09-11.34,19.65-13.5,31.04-4.46,23.53-.33,50.1,5.49,73.45Z" />
      <path d="M266.67,66.04c-43.55,16.14-89.3,23.2-135.69,20.97-1.54-.07-2.47-1.97-1.29-3.12,14.68-14.37,40.28-15.57,59.51-18.51,25.51-3.9,51.22-5.78,77.02-5.97,1.94-.02,2.26,2.43,1.01,3.32.96.78,1.01,2.73-.55,3.31M135.85,83.46c43.76,1.49,86.91-5.34,128.08-20.34-22.14.25-44.19,1.69-66.14,4.7-18.45,2.53-45.97,3.7-61.94,15.64Z" />
      <path d="M206.91,96.18c.3.8.07,1.8-.73,2.27-4.57,2.67-9.37,4.59-14.29,5.77-3.98,1.68-8.2,2.43-12.54,2.69-3.7.43-7.45.39-11.25-.08-.94-.12-1.49-.79-1.67-1.52-.08,0-.14.02-.22.03-1.65.17-2.06-1.48-1.48-2.64-.48-.81-.35-1.95.56-2.53,13.44-8.42,29.03-8.25,44.36-7.54,2.35.11,2.36,3.77,0,3.66-.91-.05-1.84-.07-2.75-.11" />
      <path d="M236.89,115.41c6.82-9.05,14.88-17.15,20.58-26.6.95-2.52,2.09-4.98,3.5-7.4-.05-.55-.08-1.1-.12-1.65-.09-1.15.75-1.73,1.64-1.75.76-2.33,1.38-4.73,1.75-7.28.34-2.32,3.87-1.33,3.53.97-.57,3.89-1.66,7.52-3.06,11.02,1.8,24.92,3.32,50.42-2.54,74.92-6.29,26.28-25,46.73-32.14,72.55-.4,1.43-2.64,1.9-3.35.44-12.21-25-14.93-53.43-7.26-80.26,3.61-12.64,9.56-24.47,17.46-34.96M228.75,135.84c-4.08,8.67-6.85,17.79-8.42,27.08,8.07-8.34,16.41-16.37,25.13-24.03.41-.35,1.12-.25,1.33.29,2.31-9.18,4.24-18.43,5.63-27.84.55-3.68,1.11-7.28,1.8-10.8-8.71,11.61-19.37,22.32-25.48,35.3ZM261.54,89.48c-1.45,2.64-3.09,5.19-4.84,7.69-1.45,6.09-2.22,12.39-3.24,18.84-.46,2.86-.97,5.72-1.54,8.56.03.04.08.04.11.09,3.55,6.58,6.41,13.44,8.77,20.51,2.72-18.34,2.02-37.16.76-55.69ZM260.25,148.53s-.06-.04-.08-.09c-2.28-7.38-5.26-14.44-8.83-21.29-1.12,5.3-2.38,10.57-3.78,15.8,1.86,10.04,3.73,20.08,5.59,30.12,1.63-3.83,3.14-7.71,4.29-11.77,1.19-4.22,2.06-8.49,2.8-12.78ZM252.46,174.69c-.36.04-.73-.09-.81-.56-1.15-6.18-2.3-12.35-3.44-18.53-.5-2.65-.99-5.29-1.48-7.94-.07-.35-.11-.7-.15-1.05-.27.99-.53,1.98-.8,2.97-6.95,24.53-15.29,48.55-18.3,73.97.17.4.37.79.54,1.19,5.96-17.7,16.91-33.06,24.44-50.04ZM226.21,220.33c3.32-24.38,11.23-47.57,17.93-71.21.59-2.07,1.13-4.16,1.68-6.23-.37-.46-.95-.63-1.98-.31-2.09.65-4.92,4.43-6.53,5.93-1.84,1.72-3.67,3.45-5.49,5.2-4.07,3.93-8.03,7.96-11.93,12.04-2.59,18.32-.41,37.19,6.32,54.58Z" />
      <path d="M108.14,354.98c8.38,16.25,20.58,29.22,30.02,44.63,8.73,14.25,10.65,32.42,14.39,48.42.38,1.61-1.86,3.34-3.06,1.79-19.43-25.11-50.59-56.71-44.49-91.27.07-.39.25-.66.46-.87-.15-.29-.34-.55-.49-.84-1.07-2.1,2.08-3.95,3.16-1.85M147.32,441.22c-3.14-15.06-6-31-14.82-43.52-8.37-11.87-17.07-22.79-24.29-35.26-3.16,28.79,21.27,56.62,39.11,78.78Z" />
      <path d="M107.1,335.83c.04-1.29,1.49-2.17,2.68-1.52,5.05,2.74,10.27,5.66,13.61,10.49,3.62,5.23,5.12,12.12,6.82,18.15.36,1.27-.91,2.72-2.25,2.25-11.99-4.23-20.73-14.49-22.64-27.12-.19-1.27.8-2.12,1.78-2.25M115.18,342.11c.01-.08.01-.17.03-.24-.17-.12-.36-.23-.53-.34.16.19.33.39.49.59Z" />
      <path d="M125.99,476.23c-.55-1.06,0-2.06.82-2.51-.48-.35-1.02-.59-1.47-.97-1.8-1.53.81-4.11,2.59-2.58,4.2,3.57,10.44,4.78,15.4,6.92,4.41,1.9,8.79,3.97,12.84,6.53,6.03,3.8,10.74,8.53,13.23,15.28.6,1.62-1.39,2.71-2.69,2.07-8.14-4.06-17.46-2.33-25.2-7.6-6.38-4.35-12-10.25-15.53-17.12M136.42,480.06s.02-.06.04-.09c-.07-.04-.14-.07-.2-.11.05.06.11.13.16.2Z" />
      <path d="M109.86,437.43c.3-.84,1.05-1.25,1.8-1.26.25-.3.45-.62.71-.91.27-.31.58-.45.87-.52.03-.05.05-.1.07-.15.8-1.4,2.9-1.04,3.34.44.33,1.07.52,2.07.66,3.08.92-.01,1.83.57,1.78,1.76-.58,12.72-8.51,23.5-20.42,27.93-1.36.51-2.57-1-2.25-2.25,2.44-9.65,6.8-18.37,12.76-26.2.23-.64.46-1.29.68-1.93" />
      <path d="M98.78,513.3c-.91-1.29-.1-3.36,1.77-2.83,15.37,4.34,30.82,11.26,36.24,27.52.04.12-.02.21,0,.33.29.24.59.46.87.7,1.43,1.19-.1,3.57-1.78,3.06-7.32-2.21-14.06-5.45-20.19-9.58-7.95-2.94-14.18-8.55-17.94-16.37-.17-.36-.2-.76-.15-1.14-.12-.76.43-1.4,1.17-1.68M110.44,517.68s.02-.01.03-.02c-.05-.02-.11-.04-.16-.07.04.03.08.06.12.09Z" />
      <path d="M241.85,19.14c12.83-7.46,26.65-12.94,40.69-16.11.23-.43.8-.71,1.29-.3,34.19-7.34,69.63-.48,95.53,27.79.9.98.45,2.22-.39,2.81-.2.39-.53.72-1.06.88-45.07,13.92-96.05,16.84-136.06-11.91-1.09-.78-1.27-2.42,0-3.16M251.51,17.95c17.67,2.47,35.74,5.7,53.68,6.32-7.02-6.34-14.05-12.68-21.07-19.01-11.87,2.29-23.4,6.32-32.32,12.49-.11.08-.18.13-.29.2ZM286.26,4.9c7.15,6.45,14.31,12.91,21.46,19.37.02.02.01.05.03.07,6.3.13,12.57-.07,18.8-.79,3.93-.46,7.74-.92,11.48-1.28-.06-.03-.12,0-.19-.06-7.42-6.34-14.84-12.67-22.26-19.01-9.01-.6-19.22-.06-29.32,1.7ZM338.97,22.18c10.5-.95,20.36-.86,29.93,3.32-14.15-12.39-31.3-20.13-50.38-22,6.84,5.84,13.68,11.68,20.52,17.52.44.38.29.88-.07,1.16ZM374.93,31.26c-.45-.47-.91-.91-1.36-1.36-17.17-10.53-35.47-5.09-54.57-3.87-.01.25-.1.49-.37.65-6.71,4.04-13.07,8.56-19.19,13.43,1.39.15,2.78.35,4.18.45,24.18,1.89,48.23-2.35,71.32-9.3ZM252.77,25.2c5.45,3.25,11.14,5.98,17.1,8.19,8.75,3.24,17.89,5.3,27.14,6.46,6.15-4.97,12.59-9.53,19.32-13.68-.95.04-1.9.08-2.86.09-21.23.24-42.86-4.03-63.92-6.9-3.24,2.46-1.93,2.76,3.23,5.83Z" />
      <path d="M249.9,46.13c14.76-3.31,29.55-4.06,43.32,2.44.08,0,.17.01.25.02.6.04,1.04.33,1.33.71.23.12.47.2.7.32.14.08.23.18.33.28.16-.03.32-.05.47-.07,2.3-.44,3.29,3.09.98,3.53-16.13,3.09-31.94,1.91-47.4-3.7-1.57-.57-1.89-3.11,0-3.53" />
      <path d="M305.73,47.63c.68-.6,1.49-.57,2.12-.23.19-.08.34-.19.55-.2.39-.42.74-.86,1.14-1.27.67-.69,1.49-.64,2.13-.26.87.05,1.73.63,1.79,1.74.34,6.18.57,12.5-1.07,18.47-.03.16-.02.33-.06.49-.26,1.11-.7,2.16-1.22,3.18-.09.22-.16.44-.26.65-3.25,6.99-9.23,12.07-15.02,16.92-.95.79-2.81.68-3.06-.81-1.24-7.27-2.52-14.9-.15-22.08,2.3-6.96,7.75-11.91,13.11-16.61" />
    </motion.svg>
  );
}

export default Ring;
