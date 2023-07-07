import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';

function Home() {
    const accessKey = 'wIpEwo1rLd156HoUn8ncoZsbk1IFSCvcjfLPZEvmEoU';
    const [cards, setCards] = useState([]);
    const [check, setCheck] = useState(true);
    const [temp, setTemp] = useState('');
    const [perpage, setPerPage] = useState(() => {
        const storedPerPage = localStorage.getItem('perpage');
        return storedPerPage ? parseInt(storedPerPage) : 10;
    });
    const [newDivData, setNewDivData] = useState({ title: '', imageUrl: '' });
    const navigate = useNavigate();

    const getApiData = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/collections', {
                params: {
                    per_page: perpage, // Number of collections to retrieve
                    client_id: accessKey,
                },
            });
            setCards(response.data);
            localStorage.setItem('cards', JSON.stringify(response.data));
        } catch (error) {
            console.log(error); // Log the error object to the console
            setCheck(false);
            setTemp(error.message);
        }
    };

    useEffect(() => {
        getApiData();
    }, [perpage]);

    const navigateToDynamicPage = (pageno, card) => {
        navigate(`/render-pages/${pageno}`, { state: { card } });
    };

    const handleDelete = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
        const updatedPerPage = perpage - 1;
        localStorage.setItem('perpage', updatedPerPage.toString());
        setPerPage(updatedPerPage);
    };

    const handleAddDiv = () => {
        const { title, imageUrl } = newDivData;
        if (title && imageUrl) {
          const newCard = {
            id: Date.now().toString(),
            title,
            cover_photo: {
              urls: {
                regular: imageUrl,
              },
            },
          };
          setCards((prevCards) => [...prevCards, newCard]);
          localStorage.setItem('cards', JSON.stringify([...cards, newCard]));
          setNewDivData({ title: '', imageUrl: '' });
        }
      };

    return (
        <>
            <div className='flex flex-col h-screen w-screen bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2C5364] p-1 overflow-y-auto'>
                <div className='flex justify-center items-center p-1 mt-2 mb-8 ml-6 mr-6 w-9/10 rounded-full h-16 text-white text-serif font-extrabold bg-gradient-to-r from-[#16222A] to-[#3a6073] shadow-black shadow-lg border'>
                    Welcome To Pager Dashboard
                </div>
                <div className='max-w-7xl mx-auto grid grid-cols-3 gap-4'>
                    {check ? (
                        cards.map((card, index) => {
                            const pageno = index + 1;
                            return (
                                <div
                                    className='flex flex-col justify-center items-center p-2 border border-gray-400 bg-gradient-to-br from-[#16222A] to-[#3A6073] bg-opacity-10 rounded-lg shadow-black shadow-lg'
                                    key={card.id}
                                >
                                    <img
                                        src={card.cover_photo.urls.regular}
                                        alt='Loading Image'
                                        className='w-28 h-28 p-1 border border-black rounded-full'
                                    />
                                    <h2 className='text-center text-white font-serif font-extrabold'>{card.title}</h2>
                                    <div>
                                        <button
                                            className='text-white rounded h-8 w-24 p-1 m-1 bg-gradient-to-t from-[#000000] to-[#434343] hover:bg-gradient-to-br hover:from-[#434343] hover:to-[#000000]'
                                            onClick={() => navigateToDynamicPage(pageno, card)}
                                        >
                                            View Details
                                        </button>
                                        <button
                                            className='text-white rounded h-8 w-24 p-1 m-1 bg-red-500 hover:bg-red-600'
                                            onClick={() => handleDelete(card.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className='text-black'>Something Went Wrong - {temp}</p>
                    )}
                </div>
                <div className='max-w-7xl mx-auto mt-6 mb-10'>
                    <input
                        type='text'
                        placeholder='Title'
                        value={newDivData.title}
                        onChange={(e) => setNewDivData({ ...newDivData, title: e.target.value })}
                        className='w-64 p-2 mr-2 rounded-full bg-black bg-opacity-60 border border-gray-500'
                    />
                    <input
                        type='text'
                        placeholder='Image URL'
                        value={newDivData.imageUrl}
                        onChange={(e) => setNewDivData({ ...newDivData, imageUrl: e.target.value })}
                        className='w-64 p-2 mr-2 rounded-full bg-black bg-opacity-60 border border-gray-500'
                    />
                    <button
                        className='text-white rounded h-8 w-24 p-1 m-1 bg-gradient-to-t from-[#000000] to-[#434343] hover:bg-gradient-to-br hover:from-[#434343] hover:to-[#000000]'
                        onClick={handleAddDiv}
                    >
                        Add Div
                    </button>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default Home;
