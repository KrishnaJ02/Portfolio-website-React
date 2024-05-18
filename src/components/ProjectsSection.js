import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "Calculator App", 
   description: 
     "App that can perform the four basic mathematical operations: addition, subtraction, multiplication, and division.", 
   getImageSrc: () => require("../images/photo1.jpg"), 
 }, 
 { 
   title: "Portfolio", 
   description: 
     "A portfolio website is a digital showcase of your skills, achievements, and projects. ", 
   getImageSrc: () => require("../images/photo2.jpg"), 
 }, 
 { 
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Little Lemon ", 
   description: 
     "A mobile application for Little Lemon restaurant to book tables developed using react", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;