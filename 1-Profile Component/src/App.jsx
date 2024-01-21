import './App.css'

function App() {

  return (
    <div className='border-gray-300 border shadow-md rounded-md h-64 w-72 ml-40 mt-20'>
      <CoverPhoto CoverPhoto={'./photos/cover-img.jpg'}/>
      <DisplayPicture dp={'./photos/dp.webp'}/>
      <Desription username={'Bhupendra Jogi'} age={'38'} place={'USA'}/>
      <BottomBar followers={'10K'} likes={'200K'} photos={'1K'}/>
    </div>
  )
}

function CoverPhoto({CoverPhoto}) {
    return <div className='h-8 border-white border rounded-md'>
      <img className='rounded-t-md h-20 w-full' src={CoverPhoto} />
    </div>
}

function DisplayPicture({dp}) {
  return  <div className='flex justify-center'>
    <img className='border-white border-2 rounded-full w-24' src={dp} />
  </div>
}

function Desription({username, age, place}) {
  return <div className='text-center mt-2'>
    <div>
      <b>{username}</b>
      <span className='text-gray-400 font-medium ml-1'> {age} </span>
    </div>
    <div className='text-gray-400 font-normal text-sm'> {place} </div>
  </div>
}

function BottomBar({followers, likes, photos}) {
  return <div className='grid grid-cols-3 text-center text-gray-700 border-t mt-5 font-semibold'>
    <div className='mt-2'>
      <div className='text-sm'>{followers}</div>
      <div className='text-gray-400 text-xs'>Followers</div>
    </div>
    <div className='mt-2'>
      <div className='text-sm'>{likes}</div>
      <div className='text-gray-400 text-xs'>Likes</div>
    </div>
    <div className='mt-2'>
      <div className='text-sm'>{photos}</div>
      <div className='text-gray-400 text-xs'>Photos</div>
    </div>
  </div>
}

export default App