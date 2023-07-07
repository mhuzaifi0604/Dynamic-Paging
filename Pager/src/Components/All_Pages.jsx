import { useLocation, useParams } from 'react-router-dom';

function Pages() {
  const { pageno } = useParams();
  const location = useLocation();
  const { card } = location.state || {};
  const tableData = [
    { field: 'Name', value: 'John Doe' },
    { field: 'Email', value: 'john.doe@example.com' },
    { field: 'Role', value: 'Admin' },
    { field: 'Address', value: '123 Main Street' },
    { field: 'Phone', value: '555-123-4567' },
  ];

  return (
    <>
      <div className='flex flex-col h-screen w-screen bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2C5364] p-1 overflow-y-auto border border-green-500'>
        <div className='flex justify-center items-center p-1 mt-2 mb-2 ml-8 mr-8 w-9/10 rounded-full h-12 text-white text-serif font-extrabold bg-gradient-to-r from-[#16222A] to-[#3a6073] shadow-black shadow-lg border border-teal-500'>Details of Card # {pageno}</div>
        <div className='flex flex-row h-full w-full'>
          <div className='flex basis-1/2 h-full w-full'>
            <div className="p-2">
              <table className="min-w-full divide-y divide-gray-200 bg-transparent border-2 border-black">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left font-serif font-bold text-white uppercase tracking-wider bg-transparent border-2 border-black">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-serif italic font-bold text-white uppercase tracking-wider bg-transparent border-2 border-black">
                      {card.title}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      ID
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.id}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Description
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.alt_description}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Published At
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.published_at}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Created At
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.created_at}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Updated At
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.updated_at}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Width
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.width}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Height
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.height}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Color
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.color}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Likes
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.likes}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Total Photos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.total_photos}
                    </td>
                  </tr>



                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-serif text-white font-bold border-2 border-black">
                      Liked By User
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-medium italic font-serif border-2 border-black">
                      {card.cover_photo.liked_by_user ? 'Yes' : 'No'}
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div className='flex basis-1/2 h-full w-full bg-cover bg-[url]' style={{ backgroundImage: `url(${card.cover_photo.urls.regular})` }}></div>
        </div>
      </div>
    </>
  );
}

export default Pages;
