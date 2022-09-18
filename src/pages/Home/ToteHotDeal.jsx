import useScrollHorizontal from 'hooks/useScrollHorizontal';
import { useRef } from 'react';

const ToteHotDeal = ({ list = [], title, desc }) => {
  const listInstagramRef2 = useRef();

  const {
    handleMouseOut: handleMouseOutInsight,
    handleMouseOver: handleMouseOverInsight,
  } = useScrollHorizontal(listInstagramRef2, 285);
  return (
    <>
      <div className='title md:mb-[92px] mb-8'>
        <h3 className='heading-1-bold mb-1'>{title}</h3>
        <p className='heading-4-Roboto md:max-w-[600px]'>{desc}</p>
      </div>
      <div
        className='list-product flex md:gap-x-[30px] gap-x-[8px] items-start'
        ref={listInstagramRef2}
        onMouseOver={handleMouseOverInsight}
        onMouseOut={handleMouseOutInsight}
      >
        {list?.map((p, idx) => {
          return (
            <div className='bg-white md:rounded-2xl rounded-lg' key={idx}>
              <div
                className={`product md:rounded-2xl rounded-lg md:p-6 p-1 pb-2 ${
                  idx === 1 ? 'active' : ''
                }`}
              >
                <div className='product-image mb-3 min-w-[144px] md:min-w-[237px]'>
                  <img src={p.image} alt='product-1' />
                </div>
                <div className='px-2 md:px-0'>
                  <div className='product-name heading-4-bold text-line-camp-2 mb-1'>
                    Túi Totes Cactus Bag nữ tính xành điệu
                  </div>
                  <div className='product-price heading-4-bold text-secondary mb-2 '>
                    320.000 đ
                  </div>
                  <div className='product-color flex gap-x-2'>
                    <div className='product-color-item bg-pink'></div>
                    <div className='product-color-item bg-blue'></div>
                    <div className='product-color-item bg-orange'></div>
                    <div className='product-color-item bg-white'></div>
                  </div>
                  <button className='mt-4 hidden btn-buy bg-yellow heading-4-bold rounded-xl py-2 px-[15px] w-full '>
                    Mua ngay
                  </button>
                </div>
                <div className='bg-intersect'></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToteHotDeal;
