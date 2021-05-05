import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import './FilterPanel.css'

const FilterPanel = (props) => {
    return (
        <div>
            <div className='close-toggle' onClick={props.togglePanel}>&#10005;</div>
            <div className='filter-card-container'>
                <span className="filter-title">Price</span>
                <div className="filter-card-content">
                    <FormControlLabel
                        value="100"
                        control={<Checkbox 
                                    color="primary" 
                                    value="100" size="small" 
                                    checked={props.checked.indexOf(0) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(0, 'price', e.target.value)} 
                                />}
                        label="Less Than $100"
                        labelPlacement="End"                  
                    />
                    <FormControlLabel
                        value="200"
                        control={<Checkbox 
                                    color="primary" 
                                    value="200" size="small" 
                                    checked={props.checked.indexOf(1) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(1, 'price', e.target.value)}
                                />}
                        label="Less Than $200"
                        labelPlacement="End"
                    />
                    <FormControlLabel
                        value="300"
                        control={<Checkbox 
                                    color="primary" 
                                    value="300" size="small" 
                                    checked={props.checked.indexOf(2) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(2, 'price', e.target.value)} 
                                />}
                        label="Less Than $300"
                        labelPlacement="End"
                    />
                    <FormControlLabel
                        value="400"
                        control={<Checkbox 
                                    color="primary" 
                                    value="400" size="small" 
                                    checked={props.checked.indexOf(3) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(3, 'price', e.target.value)} 
                                />}
                        label="Less Than $400"
                        labelPlacement="End"
                    />
                </div> 
            </div>
            <div className='filter-card-container'>
                <span className="filter-title">Color</span>
                <div className="filter-card-content">
                    <FormControlLabel
                        value="Orange"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Orange" 
                                    size="small" 
                                    checked={props.checked.indexOf(4) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(4,'color', e.target.value)} 
                                />}
                        label="Orange"
                        labelPlacement="end"                  
                    />
                    <FormControlLabel
                        value="White"
                        control={<Checkbox 
                                    color="primary" 
                                    value="White" 
                                    size="small" 
                                    checked={props.checked.indexOf(5) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(5, 'color', e.target.value)} 
                                />}
                        label="White"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Gray"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Gray" size="small" 
                                    checked={props.checked.indexOf(6) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(6, 'color', e.target.value)} 
                                />}
                        label="Gray"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Multi"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Multi" size="small" 
                                    checked={props.checked.indexOf(7) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(7, 'color', e.target.value)} 
                                />}
                        label="Multi"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Blue"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Blue" 
                                    size="small" 
                                    checked={props.checked.indexOf(8) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(8, 'color', e.target.value)}
                                />}
                        label="Blue"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Peach"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Peach" 
                                    size="small" 
                                    checked={props.checked.indexOf(9) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(9, 'color', e.target.value)} 
                                />}
                        label="Peach"
                        labelPlacement="end"
                    />
                </div>
            </div>
            <div className='filter-card-container'>
                <span className="filter-title">Size</span>
                <div className="filter-card-content">
                    <FormControlLabel
                        value={`3' x 5'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`3' x 5'`} 
                                    size="small" 
                                    checked={props.checked.indexOf(10) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(10,'size', e.target.value)} 
                                />}
                        label={`3' x 5'`}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value={`4' x 6'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`4' x 6'`} 
                                    size="small" 
                                    checked={props.checked.indexOf(11) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(11,'size', e.target.value)} 
                                />}
                        label={`4' x 6'`}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value={`5' x 8'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`5' x 8'`} 
                                    size="small" 
                                    checked={props.checked.indexOf(12) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(12,'size', e.target.value)} 
                                />}
                        label={`5' x 8'`}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value={`6'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`6'`} 
                                    size="small"  
                                    checked={props.checked.indexOf(13) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(13,'size', e.target.value)} 
                                />}
                        label={`6'`}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value={`6' 7" x 9'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`6' 7" x 9'`} 
                                    size="small" checked={props.checked.indexOf(14) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(14,'size', e.target.value)} 
                                />}
                        label={`6' 7" x 9'`}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value={`7' 10" x 10'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`7' 10" x 10'`} 
                                    size="small" checked={props.checked.indexOf(15) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(15,'size', e.target.value)} 
                                />}
                        label={`7' 10" x 10'`}
                        labelPlacement="end"                  
                    />
                    <FormControlLabel
                        value={`8' x 10'`}
                        control={<Checkbox 
                                    color="primary" 
                                    value={`8' x 10'`} 
                                    size="small" 
                                    checked={props.checked.indexOf(16) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(16,'size', e.target.value)} 
                                />}
                        label={`8' x 10'`}
                        labelPlacement="end"
                    />
                </div>
            </div>
            <div className='filter-card-container'>
                <span className="filter-title">Category</span>
                <div className="filter-card-content">
                    <FormControlLabel
                        value="Rug"
                        control={<Checkbox 
                                    color="primary" 
                                    value="Rug" size="small" 
                                    checked={props.checked.indexOf(17) === -1 ? false : true} 
                                    onChange={(e) => props.handleToggle(17, 'category', e.target.value)} 
                                />}
                        label="Rug"
                        labelPlacement="end"
                    />
                </div>
            </div>
        </div>    
    )
}

export default FilterPanel;