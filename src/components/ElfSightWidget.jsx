import React, { useEffect } from 'react';

const ElfSightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='bg-gradient-to-r from-blue-300 to-blue-50 mb-3 '>
        <div className="elfsight-app-394c5077-45c7-49d8-a4a4-bcf6b1a54d03 " data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfSightWidget;