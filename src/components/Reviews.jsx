import userImage1 from '../assets/users/user20.jpg';
import userImage2 from '../assets/users/user3.jpg';
import userImage3 from '../assets/users/user1.jpg';
import userImage4 from '../assets/users/user8.jpg';
import userImage5 from '../assets/users/user11.jpg';
import userImage6 from '../assets/users/user18.jpg';
import userImage7 from '../assets/users/user16.jpg';
import userImage8 from '../assets/users/user12.jpg';
import userImage9 from '../assets/users/user17.jpg';

export default function Reviews() {

  const ReviewsForUsers = [
    {
      imageUser: userImage1,
      nameUser: 'Linda',
      testimony: "I can't thank this adoption site enough for bringing my new furry friend into my life! The process was smooth, the staff were caring, and now I have a loyal companion who brightens my days."
    },
    {
      imageUser: userImage2,
      nameUser: 'Michael',
      testimony: "Adopting from this site was the best decision I've ever made. The staff were supportive, the facilities were clean, and now I have a furry friend who brings so much love and joy into my life."
    },
    {
      imageUser: userImage3,
      nameUser: 'Emily',
      testimony: "I highly recommend this adoption website to anyone looking to add a pet to their family. The staff were friendly and knowledgeable, and now I have a new furry family member who brings so much happiness into my home."
    },
    {
      imageUser: userImage4,
      nameUser: 'David',
      testimony: "I'm so grateful to have found this adoption site. They made the process easy and stress-free, and now I have a loving companion who has become an integral part of my family."
    },
    {
      imageUser: userImage5,
      nameUser: 'Sophia',
      testimony: "I can't thank the team behind this adoption website enough. They truly care about the animals and work tirelessly to ensure they find loving forever homes. I'm so grateful for my new furry friend!"
    },
    {
      imageUser: userImage6,
      nameUser: 'Emma',
      testimony: "This adoption site exceeded all my expectations. The staff were helpful, the facilities were clean and well-maintained, and now I have a furry friend who brings so much joy into my life."
    },
    {
      imageUser: userImage7,
      nameUser: 'Ethan',
      testimony: "Adopting from this site was such a positive experience. The staff were caring and supportive, and now I have a furry friend who brings so much happiness and love into my home."
    },
    {
      imageUser: userImage8,
      nameUser: 'Olivia',
      testimony: "I'm so grateful to have found my new furry friend through this adoption website. The staff were helpful and knowledgeable, and now I have a loving companion who brings so much joy into my life."
    },
    {
      imageUser: userImage9,
      nameUser: 'Eva',
      testimony: "Adopting from this site was one of the best decisions I've ever made. The staff were friendly and knowledgeable, the process was easy, and now I have a furry friend who brings so much happiness into my life."
    }
  ];

  const Star = () => {
    return(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-label="Star"
        >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  } 

  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Read trusted reviews from our customers
    </h2>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ReviewsForUsers.map((review, index) => (
        <article key={index} className="mt-4">
          <div className="mb-4 sm:break-inside-avoid">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt={`Profile picture of ${review.nameUser}`}
                  src={review.imageUser}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {review.nameUser}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{review.testimony}</p>
            </blockquote>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

  );
}