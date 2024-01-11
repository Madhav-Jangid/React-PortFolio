import React from 'react'
import './css/scrollBar.css';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
export default function scrollBar() {
    return (
        <div className='mainScroller' id='services'>
            <div className='scrollerBar'>
                <div className="scrollerElement"><LogoDevIcon className='logoIcon' />Web-<span>Developer</span></div>
                <div className="scrollerElement removeable"><CodeIcon className='logoIcon' /><span>Logo</span>-Designer</div>
                <div className="scrollerElement"><BrushIcon className='logoIcon' /><span>Sketching</span></div>
                <div className="scrollerElement"><DesignServicesIcon className='logoIcon' />Web-<span>Designer</span></div>
            </div>
            <div className='scrollerBar'>
                <div className="scrollerElement"><LogoDevIcon className='logoIcon' />Web-<span>Developer</span></div>
                <div className="scrollerElement removeable"><CodeIcon className='logoIcon' /><span>Logo</span>-Designer</div>
                <div className="scrollerElement"><BrushIcon className='logoIcon' /><span>Sketching</span></div>
                <div className="scrollerElement"><DesignServicesIcon className='logoIcon' />Web-<span>Designer</span></div>
            </div>
            <div className="overflowedDiv"></div>
        </div>
    )
}
