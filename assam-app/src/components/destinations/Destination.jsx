import Navbar from '../Navbar';
import ImageListCollection from './ImageListCollection';
import Sample from './Sample';
import "../Main.css"




function Destination() {
    return (
        <section>
           <div className='w-full'>
               <ImageListCollection/>
           </div>
        </section>
    )
}

export default Destination