import "./food-ad-card.css"
import AdContent from "../AdContent/ad-content";
function FoodAdCard()
{
  return(
    
    <div className="ad-card">
    <div className="dots">
          <span class="dot1"></span>
           <div class="space"></div>
          <span class="dot"></span>
            <div class="space"></div>
          <span class="dot"></span>
      </div>
      <AdContent />
      <div className="bend">
      </div>
      <div className="circle">
     </div>
     <div className="arr">
       <i className="arrow right"></i>
       </div>
   </div>
   );
}
export default FoodAdCard;