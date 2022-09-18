import { Link } from 'react-router-dom';
import useScrollHorizontal from 'hooks/useScrollHorizontal';
import { useRef } from 'react';

//assets
import Banner from 'assets/home/banner.png';
import BannerTote from 'assets/home/tote-banner.png';
import BannerToteMobile from 'assets/home/tote-banner-mobile.png';
import Person from 'assets/home/person.png';
import Feedback from 'assets/home/feedback.png';
import ScreenShot3 from 'assets/home/screen-shot3.png';
import ScreenShot1 from 'assets/home/screen-shot1.png';
import ScreenShot2 from 'assets/home/screen-shot2.png';
import Instagram1 from 'assets/home/instagram/instagram1.png';
import Instagram2 from 'assets/home/instagram/instagram2.png';
import Instagram3 from 'assets/home/instagram/instagram3.png';
import Instagram4 from 'assets/home/instagram/instagram4.png';
import { ReactComponent as ColorBeeIcon } from 'assets/home/svg/color-bee.svg';
import { ReactComponent as SizeIcon } from 'assets/home/svg/size.svg';
import { ReactComponent as TextileIcon } from 'assets/home/svg/textile.svg';
import { ReactComponent as ZipperIcon } from 'assets/home/svg/zipper.svg';
import { ReactComponent as DownArrow } from 'assets/svg/down-arrow.svg';
import { ReactComponent as UpArrow } from 'assets/svg/up-arrow.svg';
import { ReactComponent as LogoInstagram } from 'assets/svg/logo-instagram.svg';
import products from 'mocks/mockProduct';
import ToteHotDeal from './ToteHotDeal';
const Home = () => {
  const listInstagramRef = useRef();

  const {
    handleMouseOut: handleMouseOutInsight,
    handleMouseOver: handleMouseOverInsight,
  } = useScrollHorizontal(listInstagramRef, 285);
  return (
    <section className='home-page mt-4'>
      <div className='container'>
        <div className='banner'>
          <img src={Banner} alt='' />
          <div className='dots flex gap-x-2 mt-[35px] justify-center'>
            <div className='dot'></div>
            <div className='dot active'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
      </div>
      <div id='tote-collection' className='tote-collection'>
        <div className='relative'>
          <img src={BannerTote} alt='' className='tote-banner-desktop' />
          <img
            src={BannerToteMobile}
            alt=''
            className='hidden tote-banner-mobile'
          />
          <div className='container tote-text absolute -top-9'>
            <div className=''>
              <div className='flex justify-between flex-col md:flex-row'>
                <div className='tote-text-left w-full md:w-[40%]'>
                  <h3 className='heading-1-bold md:max-w-[530px] slogan mb-1 md:mb-0'>
                    Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
                  </h3>
                </div>
                <div className='tote-text-right w-full md:w-[35%] md:m-w-[390px]'>
                  <p>
                    Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời
                    trang,nơi chắp cánh cho hàng vạn mẫu thiết kế của các
                    Designer trên khắp Vietnam.
                  </p>
                  <p>
                    Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những
                    những sản phẩm thời trang thể hiện CHẤT của riêng mình. Là
                    chính mình cùng BeeYou.
                  </p>
                  <p>
                    Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng
                    sản phẩm của BeeYou được tuyển chọn những nguyên vật liệu
                    cao cấp nhất, gia công tinh xảo, công nghệ tối tân nhất hiện
                    nay, được kiểm tra chất lượng đầu ra khắt khe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='new-tote mt-[15px] md:mb-[56px] mb-[64px]'>
        <div className='container'>
          <div className='flex md:justify-between md:items-start md:flex-row flex-col-reverse items-center'>
            <div className='left-tote mt-8'>
              <h3 className='heading-1-bold mb-1'>Siêu phẩm Tote mới ra lò</h3>
              <p className='heading-4-Roboto md:mb-[55px] mb-8'>
                Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các
                bác đọc ở dưới nhé. <br /> Em đi đóng hàng giao cho khách phát
              </p>
              <div className='card-info-product rounded-2xl bg-white'>
                <div className='tag'></div>
                <h3 className='heading-4-Roboto heading-4-Roboto-Medium mb-[23px]'>
                  Thông tin mô tả sơ bộ
                </h3>
                <div className='list-info'>
                  <div className='info'>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <TextileIcon />
                      <p className='heading-4-Roboto flex-1'>
                        Chất vải canvas mềm mịn, không xù, không nhão
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <ColorBeeIcon />
                      <p className='heading-4-Roboto md:text-line-camp-1 text-line-camp-3 flex-1'>
                        Bee có 5 màu cho bạn lựa canh: Xanh dương, Hồng baby,
                        Vàng chanh,...
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <SizeIcon />
                      <p className='heading-4-Roboto flex-1'>
                        Size túi: 38*34*7cm
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <ZipperIcon />
                      <p className='heading-4-Roboto flex-1'>
                        Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-[22px]'>
                  <button className='bg-yellow heading-4-bold rounded-xl py-2 px-[29px] w-full md:w-fit'>
                    Tìm thiểu thêm
                  </button>
                </div>
              </div>
            </div>
            <div className='right-tote'>
              <img src={Person} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='tote-hot-product mb-[40px]'>
        <div className='container'>
          <ToteHotDeal
            list={products.toteHotDeal}
            title={`Tote giá “nóng”`}
            desc={`  Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà
              "phỏng tay” ngay đi`}
          />
        </div>
      </div>
      <div className='tote-hot-product mb-[40px]'>
        <div className='container'>
          <ToteHotDeal
            list={products.toteBestSeller}
            title={`Tote bán chạy`}
            desc={` Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy
            là Bee thích à nha, hehe`}
          />
        </div>
      </div>
      <div className='tote-hot-product mb-[40px]'>
        <div className='container'>
          <ToteHotDeal
            list={products.toteSignature}
            title={`Tote nổi bật`}
            desc={`  Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy
            là Bee thích à nha, hehe`}
          />
        </div>
      </div>
      <div className='feed-back flex items-start md:mb-[115px] mb-[64px]'>
        <div className='feed-back-banner mr-[152px]'>
          <img src={Feedback} alt='' />
        </div>
        <div className='reviews max-w-[600px]'>
          <h3 className='heading-1-bold mb-1'>Đánh giá của các nàng</h3>
          <p className='heading-4-Roboto mb-10'>
            Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu
            nha. Hông tin lên facebook mà xem.
          </p>
          <div className='list-review flex items-center'>
            <div className='review-images mr-[63px]'>
              <div className='rivew-img mb-6'>
                <img src={ScreenShot1} alt='' />
              </div>
              <div className='rivew-img mb-6'>
                <img src={ScreenShot3} alt='' />
              </div>
              <div className='rivew-img mb-6'>
                <img src={ScreenShot2} alt='' />
              </div>
            </div>
            <div className='review-control'>
              <button className='rounded-full bg-yellow w-[40px] h-[40px] flex items-center justify-center mb-4'>
                <UpArrow />
              </button>
              <button className='rounded-full bg-yellow w-[40px] h-[40px] flex items-center justify-center'>
                <DownArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='instagram mb-[61px]'>
        <div className='container text-center'>
          <h3 className='heading-1-bold mb-1'>BeeYou trên Instagram</h3>
          <p className='heading-4-Roboto mb-4 max-w-[600px] mx-auto'>
            Follow BeeYou trên instagram để có cơ hội tham gia các chương trình
            ưu đãi dành riêng cho người dùng Instagram
          </p>
          <div className='network flex items-center gap-x-2 justify-center'>
            <LogoInstagram />
            <Link to='#' className='text-secondary heading-6-bold underline'>
              instagr.am/beeyoufashion
            </Link>
          </div>
        </div>
        <div
          className='list-image-instagram snaps-inline mt-10'
          ref={listInstagramRef}
          onMouseOver={handleMouseOverInsight}
          onMouseOut={handleMouseOutInsight}
        >
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram4} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram1} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram2} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram3} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram4} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram1} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram2} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram3} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram4} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram1} alt='' />
          </div>
          <div className='instagram-item bg-white rounded-2xl p-2'>
            <img src={Instagram2} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
