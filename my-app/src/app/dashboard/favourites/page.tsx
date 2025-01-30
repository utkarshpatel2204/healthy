import Image from 'next/image';

// Define the type for the favourite data
interface Favourites {
  image: string;
  details: string[];
  title: string;
  calories: number;
  price: number;
  topic: string[];
}

// Fetch data on the server-side (Server Component)
const fetchFavourites = async (): Promise<Favourites[]> => {
  try {
    const response = await fetch(`http://localhost:3000/users.json`, {
      cache: 'no-store', // Ensures fresh data on every request
    });

    if (!response.ok) {
      throw new Error('Failed to fetch favourites');
    }

    const data = await response.json();
    return data.favourites || [];
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export default async function FavouritesPage() {
  const favourites = await fetchFavourites();

  if (!favourites.length) {
    return <p className="text-center text-red-500">No favourites found.</p>;
  }

  return (
    <div className="max-w-[1120px] mx-auto p-4">
      <h1 className="text-[24px] leading-[24px] mb-[30px]">Favourites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favourites.map((favourite, index) => (
          <div key={index} className="flex flex-col sm:flex-row bg-white rounded-[10px] shadow-xl p-4 gap-4">
            <div className="flex">
              {favourite.image ? (
                <Image
                  src={favourite.image}
                  width={191}
                  height={173}
                  alt={favourite.title}
                  className="rounded-md object-cover"
                />
              ) : (
                <div className="w-[191px] h-[273px] bg-gray-200 flex items-center justify-center rounded-md">
                  <p>No Image</p>
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h1 className="text-[18px] font-semibold">{favourite.title || 'No title'}</h1>
                <div className="flex gap-3">
                  <Image src="/svg/share.svg" width={30} height={30} alt="Share" />
                  <Image src="/svg/like.svg" width={30} height={30} alt="Like" />
                </div>
              </div>
              <p className="text-[#00633A] text-[25px] font-semibold">{favourite.calories}<span className='text-[12px] font-normal'>CALORIES</span></p>
              <div className="flex flex-wrap gap-2 mb-4">
                {favourite.topic.map((topic, i) => (
                  <span key={i} className="bg-[#00633A] text-white px-3 py-1 rounded-full text-[12px]">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="text-[14px] text-[#BFBFBF] mb-4">
                {favourite.details.map((detail, i) => (
                  <div key={i} className="mb-2">{detail}</div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[22px] font-semibold text-[#00633A]">${favourite.price}</p>
                <p className="text-[#FEAE0D] text-[16px]">PROTEIN</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
