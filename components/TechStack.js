import React from 'react'

const TechStack = () => {
  return (
    <div className='p-8 text-center flex flex-col gap-12'>
      <div className='flex flex-col gap-4'>
        <h1 className="text-4xl font-bold">Tech Stack</h1>
        <p className='text-gray-600 text-xl'>Technologies I work with to bring ideas to life</p>
      </div>
      <div className='techstacks grid grid-cols-6 gap-12'>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-react-original colored text-4xl"></i>
          <div>React</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-nodejs-plain-wordmark colored text-4xl"></i>
          <div>Node.js</div>
        </div>
        <div className=' flex flex-col justify-center items-center rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <svg height={40} width={40} viewBox="0 0 128 128">
            <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
          </svg>
          <div>Python</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <div>JavaScript</div>
        </div>
        <div className=' flex flex-col justify-center items-center rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <svg height={40} width={40} viewBox="0 0 128 128">
            <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
          </svg>
          <div>Figma</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-nextjs-plain colored text-4xl"></i>
          <div>Next.js</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-mongodb-plain colored text-4xl"></i>
          <div>MongoDB</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-html5-plain colored text-4xl"></i>
          <div>HTML</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-css3-plain colored text-4xl"></i>
          <div>CSS</div>
        </div>
        <div className=' rounded-2xl transition-all shadow-lg hover:shadow-xl p-4 hover:scale-115 duration-300'>
          <i className="devicon-blender-original colored text-4xl"></i>
          <div>Blender</div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
