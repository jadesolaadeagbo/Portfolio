import React, {useState} from 'react'
import Star from '../assets/star.svg'
import Send from '../assets/send.svg'

export const Experience = () => {
    const [selectedItem, setSelectedItem]= useState<string>('quibble');

    const renderContent = () => {
        switch (selectedItem){
            case 'quibble':
                return <div>Quibble is a conglomerate of subsidiary companies whose aim is to improve the normal conventional systems and make life better, being your go-to company from everything related to security, broadband, safety and e-commerce services. Here I am a frontend developer, and I have built visual and aesthetically pleasing user interfaces consuming APIs to enhance the functionality and data. I also work closely with UI designers to translate visual designs into functional user interfaces, optimizing the performance and usability of websites or applications by reducing file sizes, optimizing images, minifying code, and implementing caching techniques, thereby creating seamless user experience</div>;
            case 'ef-network-limited':
                return <div>EF Network Ltd is a conglomerate of subsidiary companies whose aim is to improve the normal conventional systems and make life better, being your go-to company from everything related to security, broadband, safety and e-commerce services. Here I am a frontend developer, and I have built visual and aesthetically pleasing user interfaces consuming APIs to enhance the functionality and data. I also work closely with UI designers to translate visual designs into functional user interfaces, optimizing the performance and usability of websites or applications by reducing file sizes, optimizing images, minifying code, and implementing caching techniques, thereby creating seamless user experience</div>;
            case 'cyberroot':
                return <div>CyberRoot International Ltd is a cyber security consulting and IT firm that specializes in information and intelligence gathering but also provides training for young people looking forward to creating aesthetically pleasing and responsive web applications. Here I was a frontend development developer and I was active in the design and development of user interfaces using technologies such as HTML, CSS, TypeScript, and ReactJS, amongst other responsibilities</div>;
            case 'hng-internship':
                return <div>HNG Internship is a large scale, fast-paced virtual internship for people learning code aimed at helping people learn and improve their skills by working on real-world projects. Here I interned as a Frontend Developer, I wrote well designed testable, efficient code by using best software development practices.</div>;
            case 'zuri-internship':
                return <div>The Zuri Team is a high-quality training organization that helps train “coders” with hands on practice. They give weekly tasks, ranging from easy to complex, as one progresses from stage to stage till one is finally ready to continue learning and growing independently.</div>;
            default:
                return <div></div>;
                

        }
    }

    const getButtonLink = () => {
        switch (selectedItem) {
          case 'quibble':
            return 'https://quibblerm.com';
          case 'ef-network-limited':
            return 'https://eftechnology.net/about-us';
          case 'cyberroot':
            return 'https://cyberrootltd.com/';
          case 'hng-internship':
            return 'https://training.zuri.team/';
          case 'zuri-internship':
            return 'https://training.zuri.team/';
          default:
            return '#';
        }
      };

    return (
        <div className='bg-experience-gradient h-screen p-20'>
            <div className='flex flex-col justify-center items-start h-[100%]'>
                <span className='bg-opaqueOrange text-white flex gap-2 px-3 py-2 rounded-md '><img src={Star} alt="" />Experience </span>
                
                <ul className='flex justify-between items-center w-full pt-20'> 
                    <li className={`${selectedItem==='quibble'? 'text-customOrange': 'text-gray-400'} text-2xl cursor-pointer`} onClick={() => setSelectedItem('quibble')}>Quibble</li>
                    <li className={`${selectedItem==='ef-network-limited'? 'text-customOrange': 'text-gray-400'} text-2xl cursor-pointer`} onClick={() => setSelectedItem('ef-network-limited')}>EF Network Limited</li>
                    <li className={`${selectedItem==='cyberroot'? 'text-customOrange': 'text-gray-400'} text-2xl cursor-pointer`} onClick={() => setSelectedItem('cyberroot')}>Cyberroot International Limited</li>
                    <li className={`${selectedItem==='hng-internship'? 'text-customOrange': 'text-gray-400'} text-2xl cursor-pointer`} onClick={() => setSelectedItem('hng-internship')}>HNG Internship</li>
                    <li className={`${selectedItem==='zuri-internship'? 'text-customOrange': 'text-gray-400'} text-2xl cursor-pointer`} onClick={() => setSelectedItem('zuri-internship')}>Zuri Internship</li>
                </ul>
                <p className='text-gray-400 font-sans leading-loose pt-10'>{renderContent()}</p>



                <button className='bg-customOrange rounded-[11px] px-[14px] py-[10px] cursor-pointer flex gap-2 text-white mt-20'><a href={getButtonLink()} target='blank'>Visit Website</a> <img src={Send} alt="" /></button>
                
            </div>
        </div>
    )
}
