import React from "react";
import './ItemsLoading.css';

function ItemsLoading() {
    return(
        <div id="loading-bar-spinner" className="spinner">
            <div className="spinner-icon">
            </div>
        </div>
    );
}

export { ItemsLoading };