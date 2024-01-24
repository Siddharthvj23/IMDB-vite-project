

function Pagination({nextPageFn,pageNumber,previosuPageFn}) {
  return (
    <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex  text-black justify-center'>
        <div onClick={previosuPageFn} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={nextPageFn} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination