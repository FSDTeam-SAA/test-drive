import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PracticalDrivingTest = () => {
    return (
        <div className='pt-[100px] pb-10 container'>
            <h2 className='text-3xl font-medium leading-[32px] text-secondary text-center'>The Practical Driving Test. What happens.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
                <div className='md:col-span-1'>
                    <Image className='w-full h-[320px]' src="/assets/driving_test.jpg" alt='driving test' width={400} height={320}/>
                    <h4 className='text-[27px] font-medium leading-[29px] text-secondary pt-3'>5 Part Driving Test.</h4>
                    <p className='text-lg font-medium text-secondary leading-[20px] pt-12'>There are 5 parts to the practical driving test;</p>
                    <ul className='list-decimal pl-5 pt-6'>
                        <li className='text-[15px] font-light leading-[20px] text-secondary'>Eyesight Check</li>
                        <li className='text-[15px] font-light leading-[20px] text-secondary py-2'>'Show me tell me' vehicle safety questions.</li>
                        <li className='text-[15px] font-light leading-[20px] text-secondary'>General Driving Ability</li>
                        <li className='text-[15px] font-light leading-[20px] text-secondary py-2'>Reversing your Vehicle</li>
                        <li className='text-[15px] font-light leading-[20px] text-secondary'>Independent Driving </li>
                    </ul>
                    <h5 className='text-lg font-medium text-secondary leading-[20px] pt-8'>How long the test lasts?</h5>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5'>The driving test takes approximately 40mins.</p>
                    <h5 className='text-lg font-medium text-secondary leading-[20px] pt-8'>Eyesight check.</h5>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5'>You'll need to be able to read a number plate at 20 meters.</p>
                    <h5 className='text-lg font-medium text-secondary leading-[20px] pt-8'>'Show me, tell me' questions.</h5>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5'>You'll be asked two vehicle safety questions.</p>
                    <h5 className='text-lg font-medium text-secondary leading-[20px] pt-8'>Your general driving ability.</h5>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5'>Your general driving ability will be assessed in various road and traffic conditions (not motorways) The examiner will give you directions around a <Link href="/" className='text-primary underline'>driving test route</Link> to follow. This portion of your test will include reversing your vehicle, parallel parking, parking in a bay, pulling up on the right-hand side of the road. The final part of your test is 20 minutes of independent driving following directions from a sat nav and traffic signs. You might also be asked to perform an emergency stop.</p>
                    <h5 className='text-lg font-medium text-secondary leading-[20px] pt-8'>Making Mistakes on your test.</h5>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5 pb-8'>If it's not a serious mistake you'll be allowed to continue your driving test.</p>
                    <Link href='/' className='text-primary underline text-[17px] leading-[21px] font-light '>Driving Test Routes </Link>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-5'>For more information on UK driving test go to;</p>
                    <div className='mt-4'>
                        <button className='text-[17px] font-medium text-white leading-normal py-3 px-6 bg-primary rounded-md'>www.gov.uk</button>
                    </div>
                </div>
                <div className='md:col-span-1'>
                    <Image className='w-full h-[320px]' src="/assets/pass_plus.jpg" alt='pass plus' width={400} height={320}/>
                    <h4 className='text-[27px] font-medium leading-[29px] text-secondary pt-3'>Pass Plus.</h4>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-12'>Pass Plus is a practical training course that takes around 6 hours for drivers to improve their driving skills.</p>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-2'>It can be taken at any time although it should be most useful to new drivers in the year after passing their test.</p>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-2'>Once you've completed Pass Plus you can apply for car insurance discounts.</p>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-2'>You'll need a Pass Plus registered approved driving instructor (ADI) to teach you.</p>
                    <h6 className='text-[17px] font-bold leading-[21px] text-primary pt-4 underline cursor-pointer border-b border-black pb-8'>Book Pass Plus</h6>
                    <Image className='w-full h-[320px] pt-12' src="/assets/driving_test_route.jpg" alt='driving test route' width={400} height={320}/>
                    <h4 className='text-[21px] font-bold text-secondary leading-[27px] pt-10'>Driving Test Routes </h4>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-4'>Using our app will enable you to practice driving on roads you'll encounter on your test.  In turn, this will help you concentrate on driving well during your practical exam. </p>
                    <p className='text-[15px] font-thin leading-[20px] text-secondary pt-4'>Practicing test routes will also help you become a more <strong  className='font-bold'>confident driver.</strong> Learning road layouts, junctions, speed limits can all help you pass your driving test.</p>
                </div>
            </div>
        </div>
    );
};

export default PracticalDrivingTest;