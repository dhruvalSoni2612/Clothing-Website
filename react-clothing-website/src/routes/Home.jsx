import { useSelector } from 'react-redux';
import TrendZoneSection from '../components/TrendZoneSection';
import FooterSection from '../components/FooterSection';
import NewArrivalSection from '../components/NewArrivalSection';
import CelebStyleSection from '../components/CelebStyleSection';
import TopStyleSection from '../components/TopStyleSection';

const Home = () =>{

  const TrendZoneItems = useSelector(store => store.TrendZoneItems);
  const TopStyleItems = useSelector(store => store.topStyle);
  const NewArrivalItems = useSelector(store => store.NewArrivalItems);
  const celebStyleItems = useSelector(store => store.celebStyle)


  return<>

  <section className="banner">
  <div className="banner_container">
  <a href="#"><img className="banner_image1" src="./images/banner2.gif" alt="banner" /></a>
  </div>
</section>

  <section id="trendZone">
  <div className="productName_banner">
    <img src="./images/TRENDSZoneBanner.avif"/>
  </div>
  <div className="trend_zone_img">
  {TrendZoneItems.map((items) => (<TrendZoneSection key={items.id} items={items}></TrendZoneSection>) )}
  </div>
  </section>

  <section id="topStyle">
  <div className="productName_banner">
  <img src="./images/styleBanner.avif"/>
  </div>
  <div className="topStyle_img">
  {TopStyleItems.map(items => <TopStyleSection key={items.id} items ={items}/> )}
  </div>	
  </section>


  <section className="banner">
  <div className="banner_container">
    <a href="#"><img className="banner_image2" src="./images/banner1.avif" alt="banner" /></a>
  </div>
</section>



  <section className="NewArrival">
  <div className="productName_banner">
  <img src="./images/newarrivalsBanner.avif"/>
  </div>
  <div className="newArrival_img">
  {NewArrivalItems.map(items => <NewArrivalSection key={items.id} items ={items}/> )}
  </div>
  </section>

  <section className="CelebStyle">
  <div className="productName_banner">
  <img src="./images/celebStyleBanner.avif"/>
  </div>
  <div className="celebStyle_img">
  {celebStyleItems.map(items => <CelebStyleSection key={items.id} items ={items}/> )}
  </div>
  </section>
  
  <FooterSection/>
  </>
}
export default Home;