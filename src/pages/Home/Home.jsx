import { Link } from 'react-router-dom';
import useScrollHorizontal from 'hooks/useScrollHorizontal';
import { useRef } from 'react';
import products from 'mocks/mockProduct';
import ToteHotDeal from './ToteHotDeal';
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
                    Tote c???a BeeYou cam k???t mang ?????n s??? h??i l??ng t???i ??a cho b???n
                  </h3>
                </div>
                <div className='tote-text-right w-full md:w-[35%] md:m-w-[390px]'>
                  <p>
                    V???i c???ng ?????ng nh?? thi???t k???, ch??ng t??i l?? ng??i nh?? th???i
                    trang,n??i ch???p c??nh cho h??ng v???n m???u thi???t k??? c???a c??c
                    Designer tr??n kh???p Vietnam.
                  </p>
                  <p>
                    V???i kh??ch h??ng, BeeYou l?? n??i b???n d??? d??ng t??m th???y nh???ng
                    nh???ng s???n ph???m th???i trang th??? hi???n CH???T c???a ri??ng m??nh. L??
                    ch??nh m??nh c??ng BeeYou.
                  </p>
                  <p>
                    V???i ?????i ng?? l??u n??m kinh nghi???m, c?? t??m v???i ngh???, nh???ng d??ng
                    s???n ph???m c???a BeeYou ???????c tuy???n ch???n nh???ng nguy??n v???t li???u
                    cao c???p nh???t, gia c??ng tinh x???o, c??ng ngh??? t???i t??n nh???t hi???n
                    nay, ???????c ki???m tra ch???t l?????ng ?????u ra kh???t khe.
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
              <h3 className='heading-1-bold mb-1'>Si??u ph???m Tote m???i ra l??</h3>
              <p className='heading-4-Roboto md:mb-[55px] mb-8'>
                M???i "ch???" ra c??i Tote m???i c??c b??c ???. Th??ng tin m?? t??? s?? b??? c??c
                b??c ?????c ??? d?????i nh??. <br /> Em ??i ????ng h??ng giao cho kh??ch ph??t
              </p>
              <div className='card-info-product rounded-2xl bg-white'>
                <div className='tag'></div>
                <h3 className='heading-4-Roboto heading-4-Roboto-Medium mb-[23px]'>
                  Th??ng tin m?? t??? s?? b???
                </h3>
                <div className='list-info'>
                  <div className='info'>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <TextileIcon />
                      <p className='heading-4-Roboto flex-1'>
                        Ch???t v???i canvas m???m m???n, kh??ng x??, kh??ng nh??o
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <ColorBeeIcon />
                      <p className='heading-4-Roboto md:text-line-camp-1 text-line-camp-3 flex-1'>
                        Bee c?? 5 m??u cho b???n l???a canh: Xanh d????ng, H???ng baby,
                        V??ng chanh,...
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <SizeIcon />
                      <p className='heading-4-Roboto flex-1'>
                        Size t??i: 38*34*7cm
                      </p>
                    </div>
                    <div className='icon flex gap-x-[15px] mb-4'>
                      <ZipperIcon />
                      <p className='heading-4-Roboto flex-1'>
                        T??i c?? kho?? k??o, t??i con ti???n l???i cho n??ng s??? d???ng
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-[22px]'>
                  <button className='bg-yellow heading-4-bold rounded-xl py-2 px-[29px] w-full md:w-fit'>
                    T??m thi???u th??m
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
            title={`Tote gi?? ???n??ng???`}
            desc={`  ?????ng n??y ??ang gi???m gi?? n??n r???t "n??ng???. B???n c??n ch??? g?? n???a m??
              "ph???ng tay??? ngay ??i`}
          />
        </div>
      </div>
      <div className='tote-hot-product mb-[40px]'>
        <div className='container'>
          <ToteHotDeal
            list={products.toteBestSeller}
            title={`Tote b??n ch???y`}
            desc={` Ra bao nhi??u h??ng c??ng b??n kh??ng k???p v???i m???y c?? m??, m?? c??? nh?? v???y
            l?? Bee th??ch ?? nha, hehe`}
          />
        </div>
      </div>
      <div className='tote-hot-product mb-[40px]'>
        <div className='container'>
          <ToteHotDeal
            list={products.toteSignature}
            title={`Tote n???i b???t`}
            desc={`  Ra bao nhi??u h??ng c??ng b??n kh??ng k???p v???i m???y c?? m??, m?? c??? nh?? v???y
            l?? Bee th??ch ?? nha, hehe`}
          />
        </div>
      </div>
      <div className='feed-back flex items-start md:mb-[115px] mb-[64px]'>
        <div className='feed-back-banner mr-[152px]'>
          <img src={Feedback} alt='' />
        </div>
        <div className='reviews max-w-[600px]'>
          <h3 className='heading-1-bold mb-1'>????nh gi?? c???a c??c n??ng</h3>
          <p className='heading-4-Roboto mb-10'>
            M???y ????nh gi?? n??y l?? l???y t??? facebook qua n??, kh??ng c?? t??? b???a ra ????u
            nha. H??ng tin l??n facebook m?? xem.
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
          <h3 className='heading-1-bold mb-1'>BeeYou tr??n Instagram</h3>
          <p className='heading-4-Roboto mb-4 max-w-[600px] mx-auto'>
            Follow BeeYou tr??n instagram ????? c?? c?? h???i tham gia c??c ch????ng tr??nh
            ??u ????i d??nh ri??ng cho ng?????i d??ng Instagram
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
