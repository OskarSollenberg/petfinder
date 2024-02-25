
import reviewsForUsers from './data/reviewsForUser.js';
import Star from './Stars.jsx';

export default function Reviews() {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Read trusted reviews from our pet lovers
        </h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {reviewsForUsers.map((review, index) => (
            <article key={index} className='mt-4'>
              <div className='mb-4 sm:break-inside-avoid'>
                <blockquote className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
                  <div className='flex items-center gap-4'>
                    <img
                      alt={`Profile picture of ${review.nameUser}`}
                      src={review.imageUser}
                      className='h-14 w-14 rounded-full object-cover'
                    />
                    <div>
                      <div className='flex justify-center gap-0.5 text-green-500'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                      <p className='mt-0.5 text-lg font-medium text-gray-900'>
                        {review.nameUser}
                      </p>
                    </div>
                  </div>
                  <p className='mt-4 text-gray-700'>{review.testimony}</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

  );
}