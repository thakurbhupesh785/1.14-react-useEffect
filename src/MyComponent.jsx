import React, {useState, useEffect} from "react";

function MyComponent () {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener('resize',handleResize);
    console.log('added');

    return () => {
      window.removeEventListener('event',handleResize);
      console.log('removed');
    }
  }, []);

  useEffect(() => {
    document.title = `size: ${width} * ${height}`
  },[width, height])

  function handleResize () {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(<>
  <p>window width - {width}px</p>
  <p>window height - {height}px</p>
  </>);
}

export default MyComponent