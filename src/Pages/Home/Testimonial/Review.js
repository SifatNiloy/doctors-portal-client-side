import React from 'react';

const Review = ({review}) => {
    const {name, review:userReview, img, location}= review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className='flex justify-center mt-4'>
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-6 mt-4'>
                        <h2 className="card-title">{name}</h2>
                        <h2>{location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;