import Slider from 'react-infinite-logo-slider'
import "../App.css"
const TopSlideComponent = () => {
    
    return (
        <Slider
            width="200px"
            duration={20}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'var(--black)'}
        >
            <Slider.Slide className="slideItem">
                <p>Developer</p>
            </Slider.Slide>
            <Slider.Slide className="slideItem">
                <p>Logo Designer</p>
            </Slider.Slide>
            <Slider.Slide className="slideItem">
                <p>Sketching</p>
            </Slider.Slide>
            <Slider.Slide className="slideItem">
                <p>Web Designer</p>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default TopSlideComponent