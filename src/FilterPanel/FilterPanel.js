import React from 'react';
import './FilterPanel.css'

const FilterPanel = (props) => {
    return (
            <div>
                <div className='close-toggle' onClick={props.togglePanel}>&#10005;</div>
                <div className='filter-card-container'>
                    <span className="filter-title">Price</span> 
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Less Than $100</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Less Than $200</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Less Than $300</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Less Than $400</label>                       
                    </div>
                </div>
                <div className='filter-card-container'>
                    <span className="filter-title">Color</span>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Orange</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">White</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Gray</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Multi</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">Blue</label>                       
                    </div>
                </div>
                <div className='filter-card-container'>
                    <span className="filter-title">Size</span>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">3' x 5'</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">6' 7" X 9'</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">7' 10" X 10'</label>                       
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales" /><label for="scales">8' X 10'</label>                       
                    </div>
                </div>
                <div className="filter-btn">
                    <i class="fa fa-filter"></i>
                    <span>Save Filter</span>
            </div>
        </div>    
    )
}

export default FilterPanel;