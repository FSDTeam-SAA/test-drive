import Image from 'next/image';
import React from 'react';

const drivingTestRoutesData = [
    {
        id : 1, 
        image : "/assets/download.jpg",
        title : "Download",
        description : (
            <>
                <span>Download driving test routes direct to your phone via our app.</span> <br/> <br/>
                <span>We provide test routes for both iOS (iPhone) and Android (Pixel, Galaxy etc.).</span> <br/> <br/>
                <span>All our routes provide Turn-by-Turn navigation from within the app.</span>
            </>
        )
    },
    {
        id : 2, 
        image : "/assets/practice.jpg",
        title : "Practice",
        description : (
            <>
                <span>Using our turn-by-turn navigation to practice practical exam routes.</span> <br/> <br/>
                <span>Our routes will navigate you around a set exam route from and back to your driving test centre. Increase your knowledge of roads, junctions, speed limits, and manoeuvres.</span>
            </>
        )
    },
    {
        id : 3, 
        image : "/assets/pass.jpg",
        title : "Download",
        description : (
            <>
                <span>Increase your chance of passing your driving test using our app.</span> <br/> <br/>
                <span>On average 47.5% of learner drivers fail their test and have to re-take. This costs more money in lessons and test fees.</span> <br/> <br/>
                <span>Download, practice and pass!</span>
            </>
        )
    }
]

const DrivingTestRoutes = () => {
    return (
        <div className='py-[50px] 2xl:py-[100px]'>
            <div className='container'>
                <h2 className='text-2xl 2xl:text-3xl font-medium leading-[32px] text-secondary text-center pb-6 2xl:pb-10'>What are Sat Nav Driving Test Routes?</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        drivingTestRoutesData?.map((data)=>{
                            return <div key={data?.id}>
                                <Image src={data?.image} alt={data?.title} width={350} height={160} className='w-full h-[160px]'/>
                                <h4 className='text-2xl font-medium leading-[26px] text-secondary py-4'>{data?.title}</h4>
                                <p className='text-[15px] font-thin leading-[21px] text-secondary'>{data?.description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DrivingTestRoutes;