import React from 'react';

function Component2(){
  return (
    <div className='bg-white flex flex-col justify-center items-center'>
        <h2 className="text-2xl font-bold mb-6 text-center">
          But why should you invest in an insurance when
          <p>the state of claims is so unsure?</p>
        </h2>
    <div className="container mx-auto py-12 px-[14rem] flex flex-col md:flex-row mt-40">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="mb-4">
          The insurance industry doesn’t have the greatest reputation when it comes to claims.
          Many people fear their insurer will go to any length possible to avoid paying claims. 
          At, we’re different. We’re there when you need us most.
        </p>
        <p className="mb-4">
          We’re committed to changing how you think of insurance. We’ll make sure your claim 
          is handled quickly and fairly.
        </p>
        <p className="mb-8">
          We are trying to empower the community to be aware of insurance knowledge. 
          You can help us by always looking for these items.
        </p>
        <button className="bg-cyan-400 text-white py-3 px-6 rounded-full mx-auto md:mx-0">
          Schedule a Free Consultation
        </button>
      </div>

      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-40 gap-5">
        <div className="flex flex-col p-6 border rounded-lg text-center md:text-start shadow-md w-[20rem]">
          <h3 className="text-lg font-semibold mb-2">Price.</h3>
          <p>Pricing depends on factors sometimes undermined.</p>
          <div className='self-end mt-16'>
            <img src="/HowIt/img5.png" alt="img" />
          </div>
        </div>
        <div className="flex flex-col p-6 border rounded-lg text-center md:text-start shadow-md w-[20rem]">
          <h3 className="text-lg font-semibold mb-2">Coverage.</h3>
          <p>Coverage depends on type of claim factors, risks, conditions, cover.</p>
          <div className='self-end mt-[3.2rem]'>
            <img src="/HowIt/img7.png" alt="img" />
          </div>
        </div>
        <div className="flex flex-col p-6 border rounded-lg text-center md:text-start shadow-md w-[20rem]">
          <h3 className="text-lg font-semibold mb-2">Deductibles.</h3>
          <p>Deductibles hidden and based on your actions, selections and type of usage and policy clauses.</p>
          <div className='self-end mt-[3.2rem]'>
            <img src="/HowIt/img8.png" alt="img" />
          </div>
        </div>
        <div className="flex flex-col p-6 border rounded-lg text-center md:text-start shadow-md w-[20rem]">
          <h3 className="text-lg font-semibold mb-2">The cancellation policy.</h3>
          <p>How difficult the cancellation can be and how to do it correctly is often not transparent.</p>
          <div className='self-end mt-[2.7rem]'>
            <img src="/HowIt/img9.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Component2;
