import React from "react";

import Image from "./Image";
import NoPics from "./NoPics";


const Gallery = ({ pictures, query }) => {

        let pics;

        if(pictures.length > 0) {
                pics = pictures.map( pic => (
                        <Image 
                                farm={pic.farm}
                                server={pic.server}
                                id={pic.id}
                                secret={pic.secret}
                                key={pic.id}
                                title={pic.title}
                        />
                ));
        } else {
               // If array is empty, display NoPics component
               pics = <NoPics />
        };
    
        let searchWord;
        // If query string is not empty, display it
        if(query.length > 0) {
                searchWord = `Image results for: "${query}"`
        } else {
              // If query string is empty, do not show it
              searchWord = '';
        };
    
  return (
    <div className="photo-container">
    
                        {/* Render image results header */}
      <h2>{searchWord}</h2>
    
                        {/* Render images */}
      <ul>{pics}</ul>
                
    </div>
  );
};
    
export default Gallery;