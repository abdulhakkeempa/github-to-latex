import React from 'react';

function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className='text-5xl font-semibold text-white'>Code to Doc</h1>
        {/* <div className='bg-black p-4 rounded'>
          <div>
            <h3 className='text-2xl text-white'>Sign Up / Sign In</h3>  
          </div>
          <div>
            <button className='bg-white w-full py-2 rounded'>Continue with GitHub</button>
          </div>
        </div> */}
        <div className='flex items-center justify-center'>
          <div className='login p-4 w-96 h-56 flex flex-col items-center justify-center'>
            <h3 className='text-2xl text-white mb-4'>Sign Up / Sign In</h3>
            <button className='bg-white w-full py-2 rounded'>Continue with GitHub</button>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Auth;
